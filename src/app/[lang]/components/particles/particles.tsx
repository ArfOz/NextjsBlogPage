'use client'
import React, { useEffect, useRef, useState } from 'react'

interface Particle {
    x: number // horizontal position
    y: number // vertical position
    size: number // radius of the particle
    speedX: number // horizontal movement speed
    speedY: number // vertical movement speed
    color: string // color of the particle
    opacity: number // transparency of the particle
}

const ParticleSystem: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const animationIdRef = useRef<number>()
    const [showParticles, setShowParticles] = useState(false)

    useEffect(() => {
        // Delay showing particles until after first paint
        const id = requestAnimationFrame(() => setShowParticles(true))
        return () => cancelAnimationFrame(id)
    }, [])

    useEffect(() => {
        if (!showParticles) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight

        const updateCanvasSize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
            initParticles()
        }

        window.addEventListener('resize', updateCanvasSize)
        canvas.width = width
        canvas.height = height

        // Initialize particles
        const initParticles = () => {
            const particles: Particle[] = []
            const particleCount = Math.floor(
                (width * height) / 35000 // Increased divisor for fewer particles
            )
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    color: ['#00ffff', '#8a2be2', '#ff00ff'][
                        Math.floor(Math.random() * 3)
                    ],
                    opacity: Math.random() * 0.5 + 0.2,
                })
            }
            particlesRef.current = particles
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            particlesRef.current.forEach((particle, index) => {
                // Update position
                particle.x += particle.speedX
                particle.y += particle.speedY

                // Wrap around edges
                if (particle.x < 0) particle.x = width
                if (particle.x > width) particle.x = 0
                if (particle.y < 0) particle.y = height
                if (particle.y > height) particle.y = 0

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                ctx.globalAlpha = particle.opacity
                ctx.shadowBlur = 20
                ctx.shadowColor = particle.color
                ctx.fill()
                ctx.shadowBlur = 0

                // Draw connections to nearby particles (limit to next 10 particles)
                for (
                    let j = index + 1;
                    j < Math.min(index + 11, particlesRef.current.length);
                    j++
                ) {
                    const otherParticle = particlesRef.current[j]
                    const dx = particle.x - otherParticle.x
                    const dy = particle.y - otherParticle.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 100) {
                        ctx.beginPath()
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(otherParticle.x, otherParticle.y)
                        ctx.strokeStyle = particle.color
                        ctx.globalAlpha = ((100 - distance) / 100) * 0.2
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            })

            ctx.globalAlpha = 1
            animationIdRef.current = requestAnimationFrame(animate)
        }

        initParticles()
        animate()

        return () => {
            window.removeEventListener('resize', updateCanvasSize)
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current)
            }
        }
    }, [showParticles])

    return (
        <>
            {showParticles && (
                <canvas
                    ref={canvasRef}
                    className="fixed inset-0 pointer-events-none z-0"
                    style={{
                        background: 'transparent',
                        mixBlendMode: 'screen',
                    }}
                />
            )}
        </>
    )
}

export default ParticleSystem
