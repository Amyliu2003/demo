import * as THREE from 'three';

export const addBoilerPlateMesh=()=>{
    const box=new THREE.BoxGeometry(3,3,3 );
    const material = new THREE.MeshBasicMaterial({color: 0xffff00});
    const boxMesh = new THREE.Mesh(box,material);
    boxMesh.position.set(5,0,-5);
    return boxMesh;
}

export const addStandardPlateMesh=()=>{
    const box=new THREE.BoxGeometry(3,3,3 );
    const material = new THREE.MeshStandardMaterial({color: 0x66ccff});
    const boxMesh = new THREE.Mesh(box,material);
    boxMesh.position.set(-5,0,-5);
    return boxMesh;
}