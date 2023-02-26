/*

 Author: Yannis STEFANELLI

 Creation Date: 26-02-2023 23:50:35

 Description :

*/

import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect (1920/1080, basically)
    0.1, // Near clipping
    1000 // Far clipping
);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// camera.position.x = 1;
// camera.position.y = 1;
// camera.position.z = 5;

camera.position.set(1, 1, 5); // Compacted equivalent of the 3 above lines

renderer.render(scene, camera);