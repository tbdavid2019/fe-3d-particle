import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

export class HandTracker {
  constructor(videoElement, onResults) {
    this.videoElement = videoElement;
    this.onResultsCallback = onResults;
    this.hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      }
    });

    this.hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    this.hands.onResults(this.onResults.bind(this));

    this.camera = new Camera(this.videoElement, {
      onFrame: async () => {
        await this.hands.send({ image: this.videoElement });
      },
      width: 640,
      height: 480
    });
  }

  start() {
    return this.camera.start();
  }

  onResults(results) {
    let expansionFactor = 0;
    let handCount = 0;

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      for (const landmarks of results.multiHandLandmarks) {
        // Calculate "openness"
        // Wrist is 0. Fingertips are 4, 8, 12, 16, 20.
        // We can measure distance from wrist to fingertips.
        const wrist = landmarks[0];
        const fingertips = [4, 8, 12, 16, 20];
        let totalDist = 0;

        for (const tipIdx of fingertips) {
          const tip = landmarks[tipIdx];
          // Simple 2D distance is often enough for "openness" if z is unreliable, 
          // but let's use 3D if available. MediaPipe z is relative to wrist.
          const dist = Math.sqrt(
            Math.pow(tip.x - wrist.x, 2) +
            Math.pow(tip.y - wrist.y, 2) +
            Math.pow(tip.z - wrist.z, 2)
          );
          totalDist += dist;
        }
        
        // Average distance for this hand
        const avgDist = totalDist / 5;
        
        expansionFactor += avgDist;
        handCount++;
      }
      
      if (handCount > 0) {
        expansionFactor /= handCount;
      }
    }

    // Pass data back
    if (this.onResultsCallback) {
      this.onResultsCallback({
        expansion: expansionFactor,
        handsDetected: handCount
      });
    }
  }
}
