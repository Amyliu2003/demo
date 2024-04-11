import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'
import Model from './Model'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
camera.position.set(0, 0, 5)

//Globals
const meshes = {}
const lights = {}
const mixers = []
const clock = new THREE.Clock()
const controls = new OrbitControls(camera, renderer.domElement)
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

init()
function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	//meshes
	meshes.default = addBoilerPlateMesh()
	meshes.standard = addStandardMesh()

	//lights
	lights.defaultLight = addLight()

	//changes
	meshes.default.scale.set(2, 2, 2)

	//scene operations
	scene.add(meshes.default)
	scene.add(meshes.standard)
	scene.add(lights.defaultLight)

	models();
	raycast();
	resize()
	animate()
}

function models() {
	const flower = new Model({
	 name: 'flower',
	 url: 'flowers.glb',
	 scene: scene,
	 meshes: meshes,
	 scale: new THREE.Vector3(2, 2, 2),
	 position: new THREE.Vector3(0, -0.8, 3),
	//  replace: true,
	//  replaceURL:"/public/blackhole.png",
	 animationState: true,
	 mixers: mixers,
	 
	})
	// flower.userData.groupName="red";
	flower.init()

   }
   

function raycast(){
	window.addEventListener('click',function(event){
		pointer.x=(event.clientX/window.innerWidth)*2-1;
		pointer.y=-(event.clientY/window.innerHeight)*2+1;
		raycaster.setFromCamera( pointer, camera );
		const intersects =raycaster.intersectObjects(scene.children,true);

		intersects.forEach((intersection) => {
            let object = intersection.object;
            while (object) {
                // Log and check for groupName
                if (object.userData.groupName === "flower" ) {
					gsap.to(object.scale,{
						x:0.1,
						y:0.1,
						z:0.1,
						duration:3,
						ease:'steps(3)'
					});
                    break; // Exit the while loop
                }
                object = object.parent; // Move up the hierarchy
            }
        });


    });
}


function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)
	const delta = clock.getDelta()

	meshes.default.rotation.x += 0.01
	meshes.default.rotation.z += 0.01

	meshes.standard.rotation.x += 0.01
	meshes.standard.rotation.z += 0.01

	// meshes.default.scale.x += 0.01

	renderer.render(scene, camera)
}
