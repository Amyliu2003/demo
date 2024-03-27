import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh } from './addMeshes';
import { addStandardPlateMesh } from './addMeshes';
import { addDirectionalLight } from './addLIght';

const scene = new THREE.Scene();
const renderer =new THREE.WebGLRenderer({antialias:true});
const camera =new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000);
camera.position.set(0,0,5);
const meshes={};

function init(){
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //meshes

  // const geometry = new THREE.BoxGeometry(1,1,1);
  // const material = new THREE.MeshBasicMaterial({color: "0xff0000"});
  // mesh = new THREE.Mesh(geometry,material);
  // meshes.default=mesh;
  // scene.add(meshes.default);
  // mesh.position.set(0,0,-5);
  
  //import
  meshes.default=addBoilerPlateMesh();
  meshes.standard=addStandardPlateMesh();
  meshes.direction=addDirectionalLight();
  scene.add(meshes.default);
  scene.add(meshes.standard);
  scene.add(meshes.direction);
  resize();
  animate();
}

function resize(){
  window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  })
}

init();

function animate(){
  requestAnimationFrame(animate);
  meshes.default.rotation.x+=0.01;
  meshes.standard.rotation.y+=0.01;
  renderer.render(scene,camera);
}





