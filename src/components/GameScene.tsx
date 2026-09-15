import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GameSceneProps {
  areaId: string;
  areaColor: string;
  groundColor: string;
  ambientColor: string;
}

export default function GameScene({ areaId, areaColor, groundColor, ambientColor }: GameSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    animationId: number;
    objects: THREE.Mesh[];
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Cleanup previous scene
    if (sceneRef.current) {
      cancelAnimationFrame(sceneRef.current.animationId);
      sceneRef.current.renderer.dispose();
      if (mountRef.current.contains(sceneRef.current.renderer.domElement)) {
        mountRef.current.removeChild(sceneRef.current.renderer.domElement);
      }
    }

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const bgColor = new THREE.Color(ambientColor).multiplyScalar(0.3);
    scene.background = bgColor;
    scene.fog = new THREE.Fog(bgColor, 20, 60);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 8, 18);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(ambientColor, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(5, 10, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(areaColor, 1, 30);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    // Ground
    const groundGeo = new THREE.PlaneGeometry(100, 100);
    const groundMat = new THREE.MeshStandardMaterial({ 
      color: groundColor, 
      roughness: 0.8,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Area-specific structures
    const objects: THREE.Mesh[] = [];
    const structureColor = new THREE.Color(areaColor);

    // Generate structures based on area theme
    const structureConfigs: Record<string, () => void> = {
      genesis: () => {
        // Trees and stones
        for (let i = 0; i < 20; i++) {
          const treeGeo = new THREE.ConeGeometry(0.8 + Math.random(), 3 + Math.random() * 3, 6);
          const treeMat = new THREE.MeshStandardMaterial({ color: 0x228B22 });
          const tree = new THREE.Mesh(treeGeo, treeMat);
          tree.position.set((Math.random() - 0.5) * 40, 1.5 + Math.random() * 1.5, (Math.random() - 0.5) * 40 - 5);
          tree.castShadow = true;
          scene.add(tree);
          objects.push(tree);

          const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
          const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
          const trunk = new THREE.Mesh(trunkGeo, trunkMat);
          trunk.position.set(tree.position.x, 1, tree.position.z);
          scene.add(trunk);
        }
      },
      cathedral: () => {
        // Gothic pillars
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2;
          const pillarGeo = new THREE.CylinderGeometry(0.4, 0.5, 8 + Math.random() * 4, 8);
          const pillarMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.5 });
          const pillar = new THREE.Mesh(pillarGeo, pillarMat);
          pillar.position.set(Math.cos(angle) * 12, 4, Math.sin(angle) * 12);
          pillar.castShadow = true;
          scene.add(pillar);
          objects.push(pillar);

          // Arch tops
          const archGeo = new THREE.SphereGeometry(0.6, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2);
          const archMat = new THREE.MeshStandardMaterial({ color: structureColor, emissive: structureColor, emissiveIntensity: 0.3 });
          const arch = new THREE.Mesh(archGeo, archMat);
          arch.position.set(pillar.position.x, 8 + Math.random() * 2, pillar.position.z);
          scene.add(arch);
        }
        // Central altar
        const altarGeo = new THREE.BoxGeometry(3, 1, 2);
        const altarMat = new THREE.MeshStandardMaterial({ color: 0xDAA520, metalness: 0.8, roughness: 0.2 });
        const altar = new THREE.Mesh(altarGeo, altarMat);
        altar.position.set(0, 0.5, 0);
        scene.add(altar);
        objects.push(altar);
      },
      temple: () => {
        // Zen garden rocks and sand patterns
        for (let i = 0; i < 15; i++) {
          const rockGeo = new THREE.DodecahedronGeometry(0.5 + Math.random() * 1.5, 1);
          const rockMat = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.9 });
          const rock = new THREE.Mesh(rockGeo, rockMat);
          rock.position.set((Math.random() - 0.5) * 30, 0.5, (Math.random() - 0.5) * 30);
          rock.rotation.set(Math.random(), Math.random(), Math.random());
          rock.castShadow = true;
          scene.add(rock);
          objects.push(rock);
        }
        // Torii gate
        const toriiMat = new THREE.MeshStandardMaterial({ color: 0xCC0000 });
        const pillar1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 6, 8), toriiMat);
        pillar1.position.set(-2, 3, -5);
        scene.add(pillar1);
        const pillar2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 6, 8), toriiMat);
        pillar2.position.set(2, 3, -5);
        scene.add(pillar2);
        const beam = new THREE.Mesh(new THREE.BoxGeometry(5.5, 0.3, 0.3), toriiMat);
        beam.position.set(0, 6, -5);
        scene.add(beam);
      },
      mosque: () => {
        // Dome and minarets
        const domeGeo = new THREE.SphereGeometry(4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const domeMat = new THREE.MeshStandardMaterial({ color: 0x1E90FF, metalness: 0.5, roughness: 0.3 });
        const dome = new THREE.Mesh(domeGeo, domeMat);
        dome.position.set(0, 4, -5);
        scene.add(dome);
        objects.push(dome);

        for (let i = 0; i < 4; i++) {
          const minaretGeo = new THREE.CylinderGeometry(0.3, 0.4, 10, 8);
          const minaretMat = new THREE.MeshStandardMaterial({ color: 0xF0E68C });
          const minaret = new THREE.Mesh(minaretGeo, minaretMat);
          const angle = (i / 4) * Math.PI * 2;
          minaret.position.set(Math.cos(angle) * 8, 5, Math.sin(angle) * 8 - 5);
          scene.add(minaret);
          objects.push(minaret);
        }
        // Crescent
        const crescentGeo = new THREE.TorusGeometry(0.5, 0.1, 8, 16, Math.PI);
        const crescentMat = new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 0.9 });
        const crescent = new THREE.Mesh(crescentGeo, crescentMat);
        crescent.position.set(0, 8.5, -5);
        crescent.rotation.z = Math.PI / 4;
        scene.add(crescent);
      },
      garden: () => {
        // Bamboo and water
        for (let i = 0; i < 25; i++) {
          const bambooGeo = new THREE.CylinderGeometry(0.1, 0.1, 4 + Math.random() * 4, 6);
          const bambooMat = new THREE.MeshStandardMaterial({ color: 0x228B22 });
          const bamboo = new THREE.Mesh(bambooGeo, bambooMat);
          bamboo.position.set((Math.random() - 0.5) * 30, 2 + Math.random() * 2, (Math.random() - 0.5) * 30);
          scene.add(bamboo);
          objects.push(bamboo);
        }
        // Water pond
        const waterGeo = new THREE.CircleGeometry(5, 32);
        const waterMat = new THREE.MeshStandardMaterial({ color: 0x006994, metalness: 0.8, roughness: 0.1, transparent: true, opacity: 0.7 });
        const water = new THREE.Mesh(waterGeo, waterMat);
        water.rotation.x = -Math.PI / 2;
        water.position.set(5, 0.05, 3);
        scene.add(water);
      },
      desert: () => {
        // Pyramids and obelisks
        const pyramidGeo = new THREE.ConeGeometry(5, 8, 4);
        const pyramidMat = new THREE.MeshStandardMaterial({ color: 0xDAA520, roughness: 0.8 });
        const pyramid = new THREE.Mesh(pyramidGeo, pyramidMat);
        pyramid.position.set(-8, 4, -10);
        pyramid.rotation.y = Math.PI / 4;
        scene.add(pyramid);
        objects.push(pyramid);

        for (let i = 0; i < 8; i++) {
          const obeliskGeo = new THREE.BoxGeometry(0.5, 3 + Math.random() * 3, 0.5);
          const obeliskMat = new THREE.MeshStandardMaterial({ color: 0xC0C0C0 });
          const obelisk = new THREE.Mesh(obeliskGeo, obeliskMat);
          obelisk.position.set((Math.random() - 0.5) * 25, 1.5 + Math.random(), (Math.random() - 0.5) * 25);
          scene.add(obelisk);
          objects.push(obelisk);
        }
      },
      mountain: () => {
        // Mountain peaks
        for (let i = 0; i < 8; i++) {
          const peakGeo = new THREE.ConeGeometry(3 + Math.random() * 4, 8 + Math.random() * 8, 6);
          const peakMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.9 });
          const peak = new THREE.Mesh(peakGeo, peakMat);
          const angle = (i / 8) * Math.PI * 2;
          peak.position.set(Math.cos(angle) * 15, 4 + Math.random() * 4, Math.sin(angle) * 15 - 10);
          scene.add(peak);
          objects.push(peak);
        }
        // Snow caps
        for (let i = 0; i < 5; i++) {
          const snowGeo = new THREE.ConeGeometry(1.5, 2, 6);
          const snowMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
          const snow = new THREE.Mesh(snowGeo, snowMat);
          snow.position.set((Math.random() - 0.5) * 20, 10 + Math.random() * 3, (Math.random() - 0.5) * 20 - 10);
          scene.add(snow);
        }
      },
      abyss: () => {
        // Dark floating crystals
        for (let i = 0; i < 20; i++) {
          const crystalGeo = new THREE.OctahedronGeometry(0.5 + Math.random());
          const crystalMat = new THREE.MeshStandardMaterial({ 
            color: 0x4B0082, 
            emissive: 0x2B0052, 
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.8,
          });
          const crystal = new THREE.Mesh(crystalGeo, crystalMat);
          crystal.position.set((Math.random() - 0.5) * 30, 2 + Math.random() * 6, (Math.random() - 0.5) * 30);
          crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
          scene.add(crystal);
          objects.push(crystal);
        }
      },
      final: () => {
        // Grand temple with all elements
        const centerGeo = new THREE.CylinderGeometry(2, 3, 6, 8);
        const centerMat = new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 0.7, roughness: 0.2 });
        const center = new THREE.Mesh(centerGeo, centerMat);
        center.position.set(0, 3, -5);
        scene.add(center);
        objects.push(center);

        // Floating rings
        for (let i = 0; i < 6; i++) {
          const ringGeo = new THREE.TorusGeometry(1.5 + i * 0.5, 0.1, 8, 32);
          const ringMat = new THREE.MeshStandardMaterial({ 
            color: new THREE.Color().setHSL(i / 6, 0.8, 0.5),
            emissive: new THREE.Color().setHSL(i / 6, 0.8, 0.3),
            emissiveIntensity: 0.5,
          });
          const ring = new THREE.Mesh(ringGeo, ringMat);
          ring.position.set(0, 7 + i * 0.8, -5);
          ring.rotation.x = Math.PI / 2;
          scene.add(ring);
          objects.push(ring);
        }
      },
    };

    const configFn = structureConfigs[areaId] || structureConfigs.genesis;
    configFn();

    // Floating kana particles
    const particleCount = 30;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = 1 + Math.random() * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({ color: areaColor, size: 0.3, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      // Rotate objects slightly
      objects.forEach((obj, i) => {
        obj.rotation.y += 0.002;
        obj.position.y += Math.sin(time + i * 0.5) * 0.002;
      });

      // Animate particles
      const pos = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += Math.sin(time * 2 + i) * 0.01;
        if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = 1;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Camera gentle movement
      camera.position.x = Math.sin(time * 0.3) * 2;
      camera.lookAt(0, 2, 0);

      // Point light pulse
      pointLight.intensity = 1 + Math.sin(time * 2) * 0.3;

      renderer.render(scene, camera);
      const animationId = requestAnimationFrame(animate);
      if (sceneRef.current) sceneRef.current.animationId = animationId;
    };

    const animationId = requestAnimationFrame(animate);
    sceneRef.current = { scene, camera, renderer, animationId, objects };

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [areaId, areaColor, groundColor, ambientColor]);

  return <div ref={mountRef} className="w-full h-64 md:h-80 rounded-lg overflow-hidden" />;
}
