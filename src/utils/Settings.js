import * as THREE from 'three';

export class Settings{
    constructor(scene){
        this.scene = scene;
    }

    createAllHelpers(){
        //this._createGridHelper();
        this._createAxesHelper();
    }

    createAllMeshes(){
        this._createCubeMesh();
        this._createCustomMesh();
    }

    //====================
    // ПОМОШНИКИ
    //====================

    _createGridHelper(){
        const gridHelper = new THREE.GridHelper(20, 20, 0x00ffc3, 0x00ffc3);
        gridHelper.position.y = 0;
        gridHelper.material.transperent = true;
        gridHelper.material.opacity = 0.5;
        this.scene.add(gridHelper);
    }

    _createAxesHelper(){
        const axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( axesHelper );
    }

    //====================
    // КОМПОНЕНТЫ СЦЕНЫ
    //====================
    _createCubeMesh(){
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        console.log(geometry);
        const material = new THREE.MeshStandardMaterial( { color: 0xffff00 } );
        console.log(material);
        material.transparent = true;
        material.opacity = 1;
        const mesh = new THREE.Mesh( geometry, material );
        mesh.rotation.x = 45;
        mesh.position.y = 3;
        console.log(mesh);
        this.scene.add( mesh );
        material.side = THREE.DoubleSide
    }

    _createCustomMesh(){
        const geometry = new THREE.BufferGeometry();
        // create a simple square shape. We duplicate the top left and bottom right
        // vertices because each vertex needs to appear once per triangle.
        const vertices = new Float32Array( [
            -1.0, -1.0,  1.0, // v0
            1.0, -1.0,  1.0, // v1
            1.0,  1.0,  1.0, // v2
            1.0,  1.0,  1.0, // v3
            -1.0,  1.0,  1.0, // v4
            -1.0, -1.0,  1.0  // v5
        ] );
        // itemSize = 3 because there are 3 values (components) per vertex
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        const mesh = new THREE.Mesh( geometry, material );
        material.side = THREE.DoubleSide
        console.log(mesh);
        this.scene.add(mesh);
    }

    

    
}