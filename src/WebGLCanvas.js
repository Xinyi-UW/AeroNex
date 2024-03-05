// File: src/WebGLCanvas.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './WebGLCanvas.css';



const WebGLCanvas = () => {
    const canvasRef = useRef(null); // Use the useRef hook for the div reference

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement); // Append renderer to the DOM

    // Cube setup
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 2;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // return <div ref={canvasRef}></div>;
  return <div className="webgl-container" ref={canvasRef}></div>;
};

export default WebGLCanvas;
