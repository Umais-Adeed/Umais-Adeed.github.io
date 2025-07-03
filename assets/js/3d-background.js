import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusKnotGeometry(10, 1.5, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x007aff, wireframe: true });
const torusKnot = new THREE.Mesh(geometry, material);

scene.add(torusKnot);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(pointLight, ambientLight);

function animate() {
    requestAnimationFrame(animate);

    torusKnot.rotation.x += 0.001;
    torusKnot.rotation.y += 0.0005;
    torusKnot.rotation.z += 0.001;

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});