import * as THREE from 'three';
import { Tween, Easing, update } from 'three/examples/jsm/libs/tween.module.js';



import init from './init';

import './style.css';

const { sizes, camera, scene, canvas, controls, renderer } = init();

camera.position.z = 30;

const group = new THREE.Group();

const initialPositions = [];

const geometries = [
 new THREE.ConeGeometry( 1, 2, 16),
 new THREE.CylinderGeometry( 1, 1, 1.5, 16),
 new THREE.BoxGeometry( 1, 1, 1),
 new THREE.SphereGeometry( 1, 16, 1),
 new THREE.IcosahedronGeometry( 1.2, 2),
 new THREE.TorusGeometry( 1, 0.5, 16),
 new THREE.TorusKnotGeometry(1 , 0.25, 100, 10, 1, 5),
 new THREE.RingGeometry( 1, 1.3, 16),
 new THREE.OctahedronGeometry( 1, 0),
];

let index = 0;
let activeIndex = -1;
for (let i = -5; i <= 5; i += 5) {
  for (let j = -5; j <= 5; j += 5) {
    const material = new THREE.MeshBasicMaterial({
      color: 'gray',
      wireframe: true,
    });

    const mesh = new THREE.Mesh(geometries[index], material);
    mesh.position.set(i, j, 10);
    mesh.index = index;

    group.add(mesh);

    initialPositions[index] = { x: i, y: j, z: 10 };

    index++;
  }
}

scene.add(group);

const clock = new THREE.Clock();

const tick = () => {
  const delta = clock.getDelta();

  if (activeIndex !== -1) {
    group.children[activeIndex].rotation.y += delta * 0.5;
  }

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);

  update();
};
tick();

const raycaster = new THREE.Raycaster();

const resetActive = () => {
  if (activeIndex !== -1) {
    const object = group.children[activeIndex];

    new Tween(object.position)
      .to(initialPositions[activeIndex], 1000)
      .easing(Easing.Exponential.InOut)
      .start();

    object.material.color.set('gray');
    activeIndex = -1;
  }
};

const handleClick = (event) => {
  const pointer = new THREE.Vector2();
  pointer.x = (event.clientX / sizes.width) * 2 - 1;
  pointer.y = -(event.clientY / sizes.height) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(group.children);

  if (activeIndex !== -1) {
    resetActive()
  }

  for (let i = 0; i < intersects.length; i++) {
    intersects[i].object.material.color.set('purple')
    activeIndex = intersects[i].object.index;

    new Tween(intersects[i].object.position)
      .to({ x: 0, y: 0, z: 25 }, 1000)
      .easing(Easing.Exponential.InOut)
      .start();
  }
}

window.addEventListener('click', handleClick);
