// import './style.css'

// import * as THREE from 'three';
// // scene
// const scene = new THREE.Scene();
// const axesHelper = new THREE.AxesHelper(1)
//
// //object
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
// const cube = new THREE.Mesh( geometry, material );
//
// // const group = new THREE.Group();
// //
// // const cube1 = new THREE.Mesh( geometry, material );
// // cube1.position.x = -1.5;
// //
// // const cube2 = new THREE.Mesh( geometry, material );
// // cube2.position.x = 0;
// //
// // const cube3 = new THREE.Mesh( geometry, material );
// // cube3.position.x = 1.5;
// //
// // group.add( cube1 );
// // group.add( cube2 );
// // group.add( cube3 );
//
// // group.scale.y = 4
// // group.rotation.z = 4
//
// // cube.rotation.x = Math.PI * 0.25;
// // cube.rotation.y = Math.PI * 0.25;
//
//
// scene.add( cube, axesHelper );
//
// // camera
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight );
// camera.position.z = 5;
// camera.position.y = 1;
//
// // camera.lookAt( cube.position );
//
//
// scene.add( camera )
//
// const canvas = document.querySelector('.canvas');
//
// const renderer = new THREE.WebGLRenderer({canvas});
//
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.render(scene, camera);
//
// // let time = Date.now();
//
// const clock = new THREE.Clock();
//
// const tick = () => {
//
//   const ellapsedTime = clock.getElapsedTime();
//
//   camera.position.x = Math.cos(ellapsedTime);
//   camera.position.y = Math.sin(ellapsedTime);
//   camera.lookAt(cube.position)
//
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// }
//
// tick()




/* Вращающиеся кубы 9 штук */
//
// import * as THREE from 'three';
// // scene
// const scene = new THREE.Scene();
// const axesHelper = new THREE.AxesHelper(1)
//
// //objects
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
// const group = new THREE.Group();
// const meshes = [];
// const colors = ['#ff0000', '#00ff00', '#0000ff']
//
// for (let x = -1.2; x <= 1.2; x += 1.2) {
//   for (let y = -1.2; y <= 1.2; y += 1.2) {
//     const material = new THREE.MeshBasicMaterial( { color: colors[Math.floor(Math.random() * colors.length)], wireframe: true } );
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.scale.set(0.5, 0.5, 0.5);
//     mesh.position.set(x, y, 0);
//     meshes.push(mesh);
//   }
// }
//
// group.add(...meshes);
//
// scene.add( group, axesHelper );
//
// // camera
// const camera = new THREE.PerspectiveCamera( 75, 600 / 600 );
// camera.position.z = 3;
//
// scene.add( camera )
//
// const canvas = document.querySelector('.canvas');
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( 600, 600 );
// renderer.render(scene, camera);
//
// const clock = new THREE.Clock();
// const MAX_SCALE = 1;
// const MIN_SCALE = 0.5;
// let grow = false
//
// const animate = () => {
//   const delta = clock.getDelta();
//
//   meshes.forEach((mesh, idx) => {
//     const mult= idx % 2 === 0 ? 1 : -1;
//     mesh.rotation.x += delta * 0.4 * mult;
//     mesh.rotation.y += delta * 0.1 * mult;
//   })
//
//   const ellapsedTime = clock.getElapsedTime();
//   camera.position.x = Math.sin(ellapsedTime);
//   camera.position.y = Math.cos(ellapsedTime);
//   camera.lookAt(new THREE.Vector3(0, 0, 0));
//
//   const mult = grow ? 1 : -1;
//   group.scale.set(group.scale.x + delta * 0.2 * mult, group.scale.y + delta * 0.2 * mult, group.scale.z + delta * 0.2 * mult);
//   if (group.scale.x > MAX_SCALE || group.scale.x < MIN_SCALE) {
//     grow = !grow;
//   }
//
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(animate);
// }
//
// animate()




// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//
// // scene
// const scene = new THREE.Scene();
// const canvas = document.querySelector('.canvas');
// const axesHelper = new THREE.AxesHelper(1)
//
// const sizes = {
//   width: window.innerHeight,
//   height: window.innerWidth,
// }
//
// const cursor = {
//   x: 0,
//   y: 0
// }
//
// // camera
// const camera = new THREE.PerspectiveCamera( 75, sizes.height / sizes.width );
// camera.position.z = 3;
//
// // позволяет вращать куб с помощью мышки
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true;
//
// scene.add( camera );
//
//
//
// //objects
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
// const cube  = new THREE.Mesh(geometry, material);
//
// scene.add( cube, axesHelper );
//
//
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize( sizes.width, sizes.height );
// renderer.render(scene, camera);
//
//
//
// window.addEventListener('mousemove', (event) => {
//   cursor.x = -(event.clientX / sizes.width - 0.5);
//   cursor.y = event.clientY / sizes.height - 0.5;
// });
//
// const tick = () => {
//   // кубик следит за камерой
//   // camera.position.x = cursor.x;
//   // camera.position.y = cursor.y;
//   // camera.lookAt( cube.position );
//
//   // Вращаем кубик вдоль вертикальной оси мышкой
//   // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
//   // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
//   // camera.position.y = cursor.y;
//   // camera.lookAt( cube.position );
//
//
//   controls.update()
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// }
//
// window.addEventListener('resize', () => {
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();
//   renderer.setSize( sizes.width, sizes.height );
//   renderer.render(scene, camera);
// });
//
// tick();


import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// scene
const scene = new THREE.Scene();
const canvas = document.querySelector('.canvas');
const axesHelper = new THREE.AxesHelper(1)

const sizes = {
  width: window.innerHeight,
  height: window.innerWidth,
}

const cursor = {
  x: 0,
  y: 0
}

// camera
const camera = new THREE.PerspectiveCamera( 75, sizes.height / sizes.width );
camera.position.z = 3;

// позволяет вращать куб с помощью мышки
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;

scene.add( camera );


//objects
// const geometry = new THREE.CircleGeometry( 1, 20, 0, Math.PI);
// const geometry = new THREE.PlaneGeometry( 1, 2);
// const geometry = new THREE.ConeGeometry( 1, 2, 32);
// const geometry = new THREE.CylinderGeometry( 0.1, 0.5, 2, 32, 1, true, 0, Math.PI /2 );
// const geometry = new THREE.RingGeometry( 0.5, 1, 16 );
// const geometry = new THREE.TorusGeometry(1 , 0.5, 16)
// const geometry = new THREE.TorusKnotGeometry(1 , 0.25, 100, 10, 1, 5)
// const geometry = new THREE.DodecahedronGeometry(1,0)
// const geometry = new THREE.SphereGeometry(1, 32, 16)

const geometry = new THREE.BufferGeometry()

const amount = 50;
const points = new Float32Array(amount * 3 * 3)
for (let i = 0; i < amount * 3 * 3; i++) {
  points[i] = (Math.random() - 0.5) * 4;
}

const pointsBuffer = new THREE.BufferAttribute(points, 3)
geometry.setAttribute('position', pointsBuffer )

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube  = new THREE.Mesh(geometry, material);

scene.add( cube, axesHelper );


const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize( sizes.width, sizes.height );
renderer.render(scene, camera);



window.addEventListener('mousemove', (event) => {
  cursor.x = -(event.clientX / sizes.width - 0.5);
  cursor.y = event.clientY / sizes.height - 0.5;
});

const tick = () => {
  // кубик следит за камерой
  // camera.position.x = cursor.x;
  // camera.position.y = cursor.y;
  // camera.lookAt( cube.position );

  // Вращаем кубик вдоль вертикальной оси мышкой
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  // camera.position.y = cursor.y;
  // camera.lookAt( cube.position );


  controls.update()
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
}

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize( sizes.width, sizes.height );
  renderer.render(scene, camera);
});

tick();
