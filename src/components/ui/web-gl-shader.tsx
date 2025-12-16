"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: Record<string, { value: unknown }> | null
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      // Yellow color palette
      const vec3 yellow1 = vec3(1.0, 0.9, 0.4);
      const vec3 yellow2 = vec3(1.0, 0.8, 0.2);
      const vec3 yellow3 = vec3(1.0, 0.7, 0.1);

      // Noise function for organic movement
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      // Smooth noise
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);

        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));

        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        // Create multiple layers of yellow particles
        float alpha = 0.0;

        // Layer 1: Large slow-moving particles
        for (int i = 0; i < 8; i++) {
          float fi = float(i);
          vec2 offset = vec2(sin(time * 0.3 + fi), cos(time * 0.2 + fi)) * 0.8;
          vec2 particlePos = p + offset;
          float dist = length(particlePos);
          float particle = 1.0 / (dist * dist * 15.0 + 0.1);
          alpha += particle * 0.3;
        }

        // Layer 2: Medium particles with different movement
        for (int i = 0; i < 12; i++) {
          float fi = float(i);
          vec2 offset = vec2(sin(time * 0.5 + fi * 1.3), cos(time * 0.4 + fi * 0.8)) * 1.2;
          vec2 particlePos = p + offset;
          float dist = length(particlePos);
          float particle = 1.0 / (dist * dist * 25.0 + 0.05);
          alpha += particle * 0.2;
        }

        // Layer 3: Small fast particles
        for (int i = 0; i < 20; i++) {
          float fi = float(i);
          vec2 offset = vec2(sin(time * 0.8 + fi * 2.1), cos(time * 0.6 + fi * 1.7)) * 1.5;
          vec2 particlePos = p + offset;
          float dist = length(particlePos);
          float particle = 1.0 / (dist * dist * 40.0 + 0.02);
          alpha += particle * 0.15;
        }

        // Add some organic noise variation
        float noiseVal = smoothNoise(uv * 3.0 + time * 0.1);
        alpha *= (0.8 + noiseVal * 0.4);

        // Create yellow color gradient based on alpha
        vec3 color = mix(yellow3, mix(yellow2, yellow1, alpha * 2.0), alpha);

        // Add subtle vignette
        float vignette = 1.0 - dot(p, p) * 0.1;
        color *= vignette;

        // Low alpha for background effect
        gl_FragColor = vec4(color, alpha * 0.15);
      }
    `

    const initScene = () => {
      refs.scene = new THREE.Scene()
      refs.renderer = new THREE.WebGLRenderer({ canvas })
      refs.renderer.setPixelRatio(window.devicePixelRatio)
      refs.renderer.setClearColor(new THREE.Color(0x000000))

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      refs.uniforms = {
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        time: { value: 0.0 },
      }

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ]

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", positions)

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)

      handleResize()
    }

    const animate = () => {
      if (refs.uniforms?.time?.value !== undefined) {
        ;(refs.uniforms.time.value as number) += 0.005
      }
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return
      const width = window.innerWidth
      const height = window.innerHeight
      refs.renderer.setSize(width, height, false)
      if (refs.uniforms?.resolution?.value && refs.uniforms.resolution.value instanceof THREE.Vector2) {
        refs.uniforms.resolution.value.set(width, height)
      }
    }

    initScene()
    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      window.removeEventListener("resize", handleResize)
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose()
        }
      }
      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full block"
    />
  )
}