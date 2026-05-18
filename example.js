import * as THREE from 'three'
import { CameraManager } from './src/core/CameraManager.js';
// сцена
const scene = new THREE.Scene();

// отрисовка
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// камера - угол наклона, расположение, отсечения
const cameraManager = new CameraManager(renderer.domElement);
const camera = cameraManager.create();
cameraManager.createControls();


//Скайбокс
const loader = new THREE.CubeTextureLoader();
const skyboxTexture = loader.load([
    './src/skybox_images/i.png',
    './src/skybox_images/i.png',
    './src/skybox_images/i.png',
    './src/skybox_images/i.png',
    './src/skybox_images/i.png',
    './src/skybox_images/i.png',
]);
scene.background = skyboxTexture;

//освещение
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(15, 15, 15);
const light2 = new THREE.AmbientLight(0x404040, 1);
scene.add(light);
scene.add(light2);
// фигура и материал
const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshStandardMaterial({
    color : 0xF54927,
    roughness : 0.5,
    metalness : 0.5
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
window.addEventListener('resize', () => {
    cameraManager.onWindowResize();
    renderer.setSize(window.innerWidth, window.innerHeight);
});



function render() {
    requestAnimationFrame(render);
    cameraManager.update();
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

render();


