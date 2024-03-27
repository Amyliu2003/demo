import * as THREE from 'three';

export const addDirectionalLight=()=>{
    const light=new THREE.DirectionalLight(0xeeff55,1);
    light.position.set(1,1,1);
    return light;
}