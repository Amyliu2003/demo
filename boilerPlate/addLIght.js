import * as THREE from 'three';

export const addDirectionalLight=()=>{
    const light=new THREE.DirectionalLight(0xffffff,1);
    const light2=new THREE.AmbientLight(0xffffcc,1);
    light.position.set(1,1,1);
    light2.position.set(0,0,-1);
    return light;
}