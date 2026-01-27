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
                            entry.target.getAttribute('data-index') || '0',
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
            },
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] text-gray-900 dark:text-gray-100">
                    EXPERIENCE
                </h2>
                <div className="w-32 h-1 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full"></div>
            </div>

            {/* Timeline */}
            <div className="relative max-w-6xl mx-auto">
                {/* Central timeline line */}
                <div className="absolute left-8 md:left-1/2 transform translate-x-0 md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>

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
                                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 flex items-center justify-center transition-all duration-500">
                                        <div className="text-gray-700 dark:text-gray-100 text-xl">
                                            {iconSelector(exp.icon)}
                                        </div>
                                    </div>
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
                                        {/* Removed glow/gradient background */}

                                        {/* Card content with better styling */}
                                        <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-500 mt-0 md:mt-0">
                                            {/* Card direction indicator */}
                                            {/* Removed decorative glowing dot */}

                                            {/* Header with better spacing */}
                                            <div className="flex flex-col space-y-3 mb-6">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-2xl font-bold font-['Inter'] text-gray-900 dark:text-gray-100">
                                                        {exp.title}
                                                    </h3>
                                                    <div className="flex items-center space-x-2">
                                                        <time className="text-gray-500 dark:text-gray-400 font-bold text-sm font-['Inter']">
                                                            {exp.years}
                                                        </time>
                                                    </div>
                                                </div>
                                                <p className="text-sky-700 dark:text-sky-300 font-semibold text-lg">
                                                    {exp.company}
                                                </p>
                                            </div>

                                            {/* Technologies with enhanced styling */}
                                            <div className="space-y-4">
                                                <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-['Inter']">
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {exp.technologies.map(
                                                        (
                                                            tech: string,
                                                            techIndex: number,
                                                        ) => (
                                                            <div
                                                                key={techIndex}
                                                                className="relative group/tech"
                                                                style={{
                                                                    animationDelay: `${
                                                                        techIndex *
                                                                        0.1
                                                                    }s`,
                                                                }}
                                                            >
                                                                {/* Gray background for better icon visibility */}
                                                                <div className="flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 w-10 h-10 p-0 transition-transform duration-200 group-hover/tech:scale-150 overflow-hidden">
                                                                    {/* Make SVG fill the entire area */}
                                                                    <div className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                                                        {/* Ensure the icon is rendered if present */}
                                                                        {SvgIcon(
                                                                            tech,
                                                                            false,
                                                                        ) || (
                                                                            <span className="text-xs text-gray-400">
                                                                                {
                                                                                    tech
                                                                                }
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                {/* If Azure, add a fallback label for debugging */}
                                                                {tech ===
                                                                    'MicrosoftAzure' && (
                                                                    <span className="sr-only">
                                                                        Azure
                                                                    </span>
                                                                )}
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>

                                            {/* Scan line effect */}
                                            {/* Removed scan line effect */}
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced connection line to timeline */}
                                {/* Removed connection line and glow */}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Bottom decorative elements */}
            {/* Removed bottom decorative elements */}
        </div>
    )
}
