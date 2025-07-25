'use client'
import { DictionaryType } from '../types'
import React, { useRef, useEffect, useState } from 'react'
import { SvgIcon, iconSelector } from '../icons'

export function Experience({
    experience,
}: {
    experience: DictionaryType['experience']
}) {
    const [visibleItems, setVisibleItems] = useState<number[]>([])
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(
                            entry.target.getAttribute('data-index') || '0'
                        )
                        setVisibleItems((prev) => {
                            const newSet = new Set([...prev, index])
                            return Array.from(newSet)
                        })
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px 50px 0px',
            }
        )

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [])

    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        if (observerRef.current) {
            itemRefs.current.forEach((ref) => {
                if (ref) {
                    observerRef.current?.observe(ref)
                }
            })
        }

        return () => {
            if (observerRef.current) {
                itemRefs.current.forEach((ref) => {
                    if (ref) {
                        observerRef.current?.unobserve(ref)
                    }
                })
            }
        }
    }, [experience])

    return (
        <div className="space-y-4 md:space-y-8">
            {/* Section Header */}
            <div className="text-center space-y-2 md:space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text neon-text font-['Orbitron']">
                    EXPERIENCE
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Timeline */}
            <div className="relative max-w-6xl mx-auto">
                {/* Central timeline line */}
                <div className="absolute left-8 md:left-1/2 transform translate-x-0 md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full shadow-lg shadow-cyan-400/50"></div>

                <div className="space-y-4 md:space-y-8">
                    {experience?.map((exp: any, index: number) => {
                        const isEven = index % 2 === 0
                        const isVisible = visibleItems.includes(index)

                        return (
                            <div
                                key={index}
                                ref={(el) => {
                                    itemRefs.current[index] = el
                                }}
                                data-index={index}
                                className={`relative flex items-center ${
                                    isEven
                                        ? 'md:justify-start'
                                        : 'md:justify-end'
                                } group transition-all duration-800 ease-out ${
                                    isVisible
                                        ? 'opacity-100 translate-x-0'
                                        : `opacity-0 ${
                                              isEven
                                                  ? '-translate-x-full'
                                                  : 'translate-x-full'
                                          }`
                                }`}
                                style={{
                                    transitionDelay: isVisible
                                        ? `${index * 0.15}s`
                                        : '0s',
                                }}
                            >
                                {/* Timeline node */}
                                <div
                                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-20 transition-all duration-800 ${
                                        isVisible
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-0'
                                    }`}
                                    style={{
                                        transitionDelay: isVisible
                                            ? `${index * 0.15 + 0.2}s`
                                            : '0s',
                                    }}
                                >
                                    <div className="w-16 h-16 rounded-full bg-black border-4 border-cyan-400 flex items-center justify-center shadow-xl shadow-cyan-400/50 group-hover:border-purple-400 group-hover:shadow-purple-400/50 transition-all duration-500 group-hover:scale-110">
                                        <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 text-xl">
                                            {iconSelector(exp.icon)}
                                        </div>
                                    </div>
                                    {/* Animated glowing rings */}
                                    <div
                                        className={`absolute inset-0 w-16 h-16 rounded-full border-2 border-cyan-400/30 ${
                                            isVisible ? 'animate-ping' : ''
                                        }`}
                                    ></div>
                                    <div
                                        className={`absolute inset-2 w-12 h-12 rounded-full border border-purple-400/20 ${
                                            isVisible ? 'animate-pulse' : ''
                                        }`}
                                    ></div>
                                </div>

                                {/* Experience card */}
                                <div
                                    className={`
                                    ml-0 pl-20 md:pl-0 w-full md:w-[calc(50%-4rem)]
                                    ${isEven ? 'md:mr-auto' : 'md:ml-auto'}
                                    transform transition-all duration-800 hover:scale-105
                                    ${
                                        isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                    }
                                `}
                                    style={{
                                        transitionDelay: isVisible
                                            ? `${index * 0.15 + 0.3}s`
                                            : '0s',
                                    }}
                                >
                                    <div className="relative group/card">
                                        {/* Enhanced glow effect */}
                                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition duration-500"></div>

                                        {/* Card content with better styling */}
                                        <div className="relative futuristic-card p-8 hover:border-cyan-500/70 transition-all duration-500 mt-0 md:mt-0">
                                            {/* Card direction indicator */}
                                            <div
                                                className={`absolute top-6 ${
                                                    isEven
                                                        ? 'right-6'
                                                        : 'left-6'
                                                } w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse`}
                                            ></div>

                                            {/* Header with better spacing */}
                                            <div className="flex flex-col space-y-3 mb-6">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-2xl font-bold gradient-text neon-text font-['Orbitron']">
                                                        {exp.title}
                                                    </h3>
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                                        <time className="text-purple-400 font-bold text-sm font-['Orbitron'] neon-text-purple">
                                                            {exp.years}
                                                        </time>
                                                    </div>
                                                </div>
                                                <p className="text-cyan-400 font-semibold text-lg neon-text">
                                                    {exp.company}
                                                </p>
                                            </div>

                                            {/* Technologies with enhanced styling */}
                                            <div className="space-y-4">
                                                <h4 className="text-sm text-gray-400 uppercase tracking-wider font-['Orbitron'] flex items-center">
                                                    <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mr-2"></div>
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {exp.technologies.map(
                                                        (
                                                            tech: string,
                                                            techIndex: number
                                                        ) => {
                                                            const IconComponent =
                                                                SvgIcon(
                                                                    tech,
                                                                    false
                                                                )
                                                            return (
                                                                <div
                                                                    key={
                                                                        techIndex
                                                                    }
                                                                    className="relative group/tech"
                                                                    style={{
                                                                        animationDelay: `${
                                                                            techIndex *
                                                                            0.1
                                                                        }s`,
                                                                    }}
                                                                >
                                                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-lg blur opacity-0 group-hover/tech:opacity-100 transition duration-300"></div>
                                                                    <div className="relative bg-black/60 p-3 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                                                                        {
                                                                            IconComponent
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>

                                            {/* Scan line effect */}
                                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced connection line to timeline */}
                                <div
                                    className={`
                                    hidden md:block absolute top-1/2 w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg
                                    ${
                                        isEven
                                            ? 'right-1/2 mr-8'
                                            : 'left-1/2 ml-8'
                                    }
                                    group-hover:shadow-cyan-400/50 transition-all duration-600
                                    ${
                                        isVisible
                                            ? 'opacity-100 scale-x-100'
                                            : 'opacity-0 scale-x-0'
                                    }
                                `}
                                    style={{
                                        transitionDelay: isVisible
                                            ? `${index * 0.15 + 0.4}s`
                                            : '0s',
                                        transformOrigin: isEven
                                            ? 'right'
                                            : 'left',
                                    }}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-50 ${
                                            isVisible ? 'animate-pulse' : ''
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Bottom decorative elements */}
            <div className="flex justify-center space-x-4 pt-8">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                <div
                    className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                    className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                ></div>
            </div>
        </div>
    )
}
