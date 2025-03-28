'use client'
import { DictionaryType } from '../types'

import React, { useRef, Component } from 'react'

import { SvgIcon, iconSelector } from '../icons'

// import { motion, useInView } from 'framer-motion'

// let iconStyles = { color: 'red', background: 'black', fontSize: '1.5em' }

export function Experience({
    experience,
}: {
    experience: DictionaryType['experience']
}) {
    // const ref = useRef(null)
    // const isInView = useInView(ref, { once: true })
    return (
        <div className="container mx-auto p-4">
            <h2 className="self-center text-center">
                {/* {dictionary['home']['working_history_title']} */}
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent m-5">
                {experience?.map((t: any, i: any) => {
                    return (
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-red-700 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                {iconSelector(t.icon)}
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-200 dark:bg-zinc-900 p-4 rounded border border-slate-200 shadow">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900 dark:text-slate-200">
                                        {t.title} - {t.company}
                                    </div>
                                    <time className="font-caveat font-medium text-indigo-700 dark:text-lime-200">
                                        {t.years}
                                    </time>
                                </div>

                                <div className="flex flex-row flex-wrap place-items-center flex-1 mt-2 gap-y-6">
                                    {t.technologies.map((tech: string) => {
                                        const IconComponent = SvgIcon(
                                            tech,
                                            false
                                        )
                                        return IconComponent
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
