import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ParticleSystem } from './particleSystem';
import { HandTracker } from './handTracking';

// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Particles
const particleSystem = new ParticleSystem(scene);

// Hand Tracking
const videoElement = document.getElementById('input-video');
const statusElement = document.getElementById('status');

const onHandResults = (data) => {
  if (data.handsDetected > 0) {
    statusElement.innerText = `Hands detected: ${data.handsDetected} | Expansion: ${data.expansion.toFixed(2)}`;
    particleSystem.setHandScale(data.expansion);
  } else {
    statusElement.innerText = 'No hands detected';
    // Optional: Reset scale or keep last known
    // particleSystem.setHandScale(0.2); // Default resting state
  }
};

const handTracker = new HandTracker(videoElement, onHandResults);
handTracker.start().then(() => {
  statusElement.innerText = 'Camera started. Show hands!';
}).catch(err => {
  console.error(err);
  statusElement.innerText = 'Error starting camera: ' + err.message;
});

// UI Events
document.getElementById('color-picker').addEventListener('input', (e) => {
  particleSystem.setColor(e.target.value);
});

const shapeButtons = document.querySelectorAll('#shape-buttons button');
shapeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active class
    shapeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Set shape
    const shape = btn.getAttribute('data-shape');
    particleSystem.setShape(shape);
  });
});

// Resize Handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  
  controls.update();
  particleSystem.update();
  
  renderer.render(scene, camera);
}

animate();
