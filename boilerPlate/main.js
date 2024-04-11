import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh,addLamberPlateMesh,addGlassPlateMesh,addStandardPlateMesh} from './addMeshes';
import { addDirectionalLight } from './addLIght';
import Model from './Model'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

let tick=0;
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
  // meshes.default=addBoilerPlateMesh();
  // meshes.standard=addStandardPlateMesh();
  // meshes.lamber=addLamberPlateMesh();
  // meshes.glass=addGlassPlateMesh();
  // meshes.direction=addDirectionalLight();
  // scene.add(meshes.default);
  // scene.add(meshes.standard);
  // scene.add(meshes.lamber);
  // scene.add(meshes.glass);
  // scene.add(meshes.direction);

  renderer.setClearColor( 0x5555cc, 1 );
  models();
  resize();
  animate();
}



function models() {
  const Flower = new Model({
   name: 'flower',
   url: 'flowers.glb',
   scene: scene,
   meshes: meshes,
   scale: new THREE.Vector3(2, 2, 2),
   position: new THREE.Vector3(0, -0.8, 3),
   replace: true,
   animationState: true,
   mixers: mixers,
  })
  Flower.init()
 }
 
 
function resize(){
  window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  })
}

const controls=new OrbitControls(camera,renderer.domElement);

init();

function animate(){
  requestAnimationFrame(animate);
  tick+=0.005;
  
  // meshes.default.rotation.x+=0.01;
  // meshes.standard.rotation.y+=0.01;
  // meshes
  // meshes.lamber.rotation.z+=0.01;


  // meshes.default.position.x=Math.sin(tick)*90;
  // meshes.default.position.y=Math.cos(tick)*90;
  // meshes.default.position.z=-Math.cos(tick)*10-100;
  // meshes.default.rotation.x=Math.sin(tick);

  // meshes.standard.position.x=Math.sin(tick)*5+5;
  // meshes.standard.position.y=Math.cos(tick)*5;
  // meshes.standard.position.z=-Math.sin(tick)*100-100;
  // meshes.standard.rotation.x=Math.sin(tick);

  // meshes.glass.rotation.x=Math.sin(tick)*0.5;
  // meshes.glass.rotation.y=Math.cos(tick)*0.5;
  // meshes.glass.rotation.z=Math.tan(tick)*0.2;

  renderer.render(scene,camera);
}





