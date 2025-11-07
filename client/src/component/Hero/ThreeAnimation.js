import * as THREE from "three";

export class HeroAnimation {
  constructor(container) {
    // Setup scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 2 / window.innerHeight,
      0.1,
      1000
    );
    this.renderer.setSize(770, 790);
    this.camera.aspect = 770 / 790;
    this.camera.updateProjectionMatrix();
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    this.scene.add(ambientLight, directionalLight);

    // Set camera position
    this.camera.position.z = 5;

    // Create animation elements
    this.createParticles();
    this.createGeometricShape();
    this.createWave();

    // Start animation loop
    this.animate();

    // Handle window resize
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  createParticles() {
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: "#60A5FA",
      size: 0.02,
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);
  }

  createGeometricShape() {
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshPhysicalMaterial({
      color: "#60A5FA",
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
    });

    this.shape = new THREE.Mesh(geometry, material);
    this.scene.add(this.shape);
  }

  createWave() {
    const geometry = new THREE.PlaneGeometry(4, 4, 20, 20);
    const material = new THREE.MeshPhongMaterial({
      color: "#60A5FA",
      wireframe: true,
    });

    this.wave = new THREE.Mesh(geometry, material);
    this.wave.rotation.x = -Math.PI / 4;
    this.scene.add(this.wave);
  }

  handleResize() {
    this.camera.aspect = 770 / 790;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(770, 790);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    // Animate particles
    this.particles.rotation.y += 0.001;

    // Animate geometric shape
    this.shape.rotation.x += 0.01;
    this.shape.rotation.y += 0.01;

    // Animate wave
    const positions = this.wave.geometry.attributes.position;
    const time = Date.now() * 0.001;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = Math.sin(x * 2 + time) * 0.3 + Math.cos(y * 2 + time) * 0.3;
      positions.setZ(i, z);
    }
    positions.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }
}
