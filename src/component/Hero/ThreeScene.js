import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";

export class BugSquashScene {
  constructor(container) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      (window.innerWidth * 0.66) / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    this.renderer.setSize(window.innerWidth * 0.66, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    this.camera.position.set(0, 0, 5);

    const textureLoader = new THREE.TextureLoader();

    // Bug sprite (🪲)
    const bugSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: textureLoader.load(
          'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg"><text y="32" font-size="32">🪲</text></svg>'
        ),
        sizeAttenuation: false,
      })
    );
    bugSprite.scale.set(0.25, 0.25, 1);
    this.bug = bugSprite;
    this.scene.add(this.bug);

    // Hand sprite (👋)
    const handSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: textureLoader.load(
          'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg"><text y="32" font-size="32">👋</text></svg>'
        ),
        sizeAttenuation: false,
      })
    );
    handSprite.scale.set(0.7, 0.7, 1);
    handSprite.position.set(3, 3, 0);
    this.hand = handSprite;
    this.scene.add(this.hand);

    this.isSquashed = false;
    this.clock = new THREE.Clock();
    this.animate();

    // Create smash button
    const button = document.createElement("button");
    button.textContent = "Smash!";
    button.style.position = "absolute";
    button.style.right = "20px";
    button.style.bottom = "20px";
    button.style.padding = "10px 20px";
    button.style.background = "#60A5FA";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
    button.style.fontWeight = "bold";
    button.onclick = () => this.squashBug();
    container.appendChild(button);

    // Add resize handler
    window.addEventListener("resize", this.handleResize.bind(this));

    // Add cleanup method
    this.cleanup = () => {
      window.removeEventListener("resize", this.handleResize.bind(this));
      this.scene.clear();
      this.renderer.dispose();
    };
  }

  handleResize() {
    const width = window.innerWidth * 0.66;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  squashBug() {
    if (this.isSquashed) return;
    this.isSquashed = true;
    const finalPosition = this.bug.position.clone();

    new TWEEN.Tween(this.hand.position)
      .to({ x: finalPosition.x, y: finalPosition.y }, 200)
      .easing(TWEEN.Easing.Back.In)
      .start()
      .onComplete(() => {
        this.bug.visible = false;

        new TWEEN.Tween(this.hand.position)
          .to({ x: 3, y: 3 }, 300)
          .delay(200)
          .start()
          .onComplete(() => {
            setTimeout(() => this.resetScene(), 1000);
          });
      });
  }

  resetScene() {
    this.isSquashed = false;
    this.bug.visible = true;
    this.bug.position.set(1, 0, 0);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (!this.isSquashed) {
      const time = this.clock.getElapsedTime() * 0.5;

      // Figure-8 path calculation
      const scale = 0.8;
      this.bug.position.x = scale * Math.sin(time);
      this.bug.position.y = scale * Math.sin(time) * Math.cos(time);

      // Rotate bug to face movement direction
      const angle = Math.atan2(
        Math.cos(time) * Math.cos(time) + Math.sin(time),
        Math.cos(time)
      );
      this.bug.rotation.z = angle;
    }

    TWEEN.update();
    this.renderer.render(this.scene, this.camera);
  }
}
