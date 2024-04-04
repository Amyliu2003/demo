import * as THREE from 'three';
import { ConeGeometry, TextureLoader } from 'three';

const textureLoader=new THREE.TextureLoader();

export const addBoilerPlateMesh=()=>{

    const color=textureLoader.load("/window/color.jpg")
    const mat=textureLoader.load("/class/green.png")
    const displace=textureLoader.load("window/height.png")
    const normal=textureLoader.load("/window/normal.jpg")
    const opac=textureLoader.load("/window/opacity.jpg")
    const ao=textureLoader.load("/window/ao.jpg")
    const roughness=textureLoader.load("/window/roughness.jpg")
    const metalness=textureLoader.load("/window/metalic.jpg")
    const box=new THREE.SphereGeometry(16,32,32);
    const material = new THREE.MeshPhysicalMaterial({
        map:color,
        color:0xffff55,
        displacementMap:displace,
        transmission:0.5,
        ior:1.3,
        displacementScale:0.3,
        normalMap:normal,
        roughnessMap:roughness,
        opacity:opac,
        metalnessMap:metalness,
        aoMap:ao
    });
    const boxMesh = new THREE.Mesh(box,material);
    boxMesh.position.set(0,0,-80);
    return boxMesh;
}

export const addStandardPlateMesh=()=>{

    const color=textureLoader.load("/waffle/color.jpg")
    const displace=textureLoader.load("waffle/height.png")
    const normal=textureLoader.load("/waffle/nrm.jpg")
    const roughness=textureLoader.load("/waffle/roughness.jpg")
    const ao=textureLoader.load("/waffle/ao.jpg")
    const mat=textureLoader.load("/class/matcap.png")

    const box=new THREE.BoxGeometry(3,3,3);
    // const material = new THREE.MeshPhysicalMaterial({
    //     map:color,
    //     displacementMap:displace,
    //     displacementScale:0.3,
    //     normalMap:normal,
    //     roughnessMap:roughness,
    //     aoMap:ao
    // });
    const material=new THREE.MeshMatcapMaterial({
        matcap:mat
    })
    const boxMesh = new THREE.Mesh(box,material);
    boxMesh.position.set(0,0,-10);
    return boxMesh;
}

export const addLamberPlateMesh=()=>{
    const color=textureLoader.load("/leather/color.jpg")
    const mat=textureLoader.load("/class/green.png")
    const displace=textureLoader.load("/leather/height.png")
    const normal=textureLoader.load("/leather/nrm.jpg")
    const roughness=textureLoader.load("/leather/roughness.jpg")
    const ao=textureLoader.load("/leather/occ.jpg")

    const box=new THREE.CylinderGeometry(1,1,4,32);
    const material = new THREE.MeshPhysicalMaterial({
        map:mat,
        displacementMap:displace,
        displacementScale:0.3,
        normalMap:normal,
        roughnessMap:roughness,
        aoMap:ao
    });
    const boxMesh = new THREE.Mesh(box,material);
    boxMesh.position.set(0,5,-10);
    return boxMesh;
}

export const addGlassPlateMesh=()=>{

    const color=textureLoader.load("/class/color.jpg")
    const displace=textureLoader.load("class/displace.png")
    const normal=textureLoader.load("/class/normal.jpg")
    const roughness=textureLoader.load("/class/roughness.jpg")
    const ao=textureLoader.load("/class/ambient.jpg")
    const mat=textureLoader.load("/class/matcap.png")

    const material = new THREE.MeshPhysicalMaterial({
        map:mat,
        color:0xff33ee,
        displacementMap:displace,
        displacementScale:0.3,
        transmission:1.0,
        thickness:1.0,
        metalness:0.1,
        roughness:1.0,
        ior:2.33,
        normalMap:normal,
        aoMap:ao,
        roughnessMap:roughness
    });
    const box=new THREE.TorusKnotGeometry(4.5,0.75,100,100,2,3);
    const boxMesh = new THREE.Mesh(box,material);
    boxMesh.position.set(0,0,-10);
    return boxMesh;
}