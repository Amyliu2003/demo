import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'
import Model from './Model'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
const mixers = []
const clock = new THREE.Clock()
const controls = new OrbitControls(camera, renderer.domElement)
init()
function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	//meshes
	meshes.default = addBoilerPlateMesh()
	meshes.standard = addStandardMesh()

	//lights
	meshes.defaultLight = addLight()

	//changes
	meshes.default.scale.set(2, 2, 2)

	//scene operations
	scene.add(meshes.default)
	scene.add(meshes.standard)
	scene.add(meshes.defaultLight)

	gsapAnimation();
	resize()
	animate()
}

function gsapAnimation(){
	let button1=document.querySelector(".button1");
	let button2=document.querySelector(".button2");

		button1.addEventListener('click',(event)=>{
			gsap.to(meshes.default.scale,{
				x:5,
				y:5,
				z:5,
				duration:3,
				ease:'steps(3)',
				onComplete:()=>{
					gsap.to(meshes.standard.scale,{
						x:0.5,
						y:0.5,
						z:0.5,
						duration:3,
						ease:'power3.inOut',
					});
				}

			});

			// gsap.to(button1,{
			// 	rotateX:360,
			// 	duration:2,
			// 	ease:'steps(3)',

			// });



		});

};

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
