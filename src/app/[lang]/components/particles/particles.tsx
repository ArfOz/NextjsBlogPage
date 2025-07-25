'use client'
import React, { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
    opacity: number
}

const ParticleSystem: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const animationIdRef = useRef<number>()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        updateCanvasSize()
        window.addEventListener('resize', updateCanvasSize)

        // Initialize particles
        const initParticles = () => {
            const particles: Particle[] = []
            const particleCount = Math.floor(
                (canvas.width * canvas.height) / 15000
            )

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
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
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particlesRef.current.forEach((particle, index) => {
                // Update position
                particle.x += particle.speedX
                particle.y += particle.speedY

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width
                if (particle.x > canvas.width) particle.x = 0
                if (particle.y < 0) particle.y = canvas.height
                if (particle.y > canvas.height) particle.y = 0

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                ctx.globalAlpha = particle.opacity
                ctx.fill()
                ctx.shadowBlur = 20
                ctx.shadowColor = particle.color

                // Draw connections to nearby particles
                particlesRef.current.forEach((otherParticle, otherIndex) => {
                    if (index !== otherIndex) {
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
            })

            ctx.shadowBlur = 0
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
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                background: 'transparent',
                mixBlendMode: 'screen',
            }}
        />
    )
}

export default ParticleSystem
