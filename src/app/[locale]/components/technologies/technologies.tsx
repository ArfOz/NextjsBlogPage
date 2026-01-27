import React from 'react'
import { DictionaryType } from '../types'
import { SvgIcon } from '../icons'
import { IoMdFlash } from 'react-icons/io'
import { DownloadButton } from '../downloadcv'
import { Locale } from 'next-intl'

export const Technologies = ({
    lang,
    technologies,
}: {
    lang: Locale
    technologies: DictionaryType['technologies']
}) => {
    return (
        <div className="space-y-12 text-gray-900 dark:text-gray-100">
            {/* Section Header */}
            <div className="text-center space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold font-['Inter'] text-gray-900 dark:text-gray-100">
                    {technologies['title']}
                </h2>
                <div className="w-32 h-1 bg-sky-400 dark:bg-purple-500 mx-auto rounded-full"></div>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    {technologies['answer']}
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Qualities Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-6 font-['Inter']">
                        CORE QUALITIES
                    </h3>
                    <div className="space-y-4">
                        {technologies.qualities.map(
                            (tech: string, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center space-x-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-sky-200 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900 transition-all duration-300"
                                    >
                                        <div className="relative">
                                            <IoMdFlash className="text-yellow-500 dark:text-yellow-400 h-8 w-8" />
                                        </div>
                                        <p className="text-gray-800 dark:text-gray-100 flex-1">
                                            {tech}
                                        </p>
                                    </div>
                                )
                            },
                        )}
                    </div>

                    {/* Download Button */}
                    <div className="pt-6">
                        <DownloadButton
                            lang={lang}
                            download={technologies.download_CV}
                        />
                    </div>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6 font-['Inter']">
                        TECH STACK
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 place-items-center">
                        {technologies.techs.map(
                            (tech: string, index: number) => {
                                const IconComponent = SvgIcon(tech, true)
                                return (
                                    <div
                                        key={index}
                                        className="group relative flex items-center justify-center overflow-visible rounded-full aspect-square w-24 h-24 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-200"
                                        title={tech}
                                    >
                                        <span
                                            className="flex items-center justify-center w-full h-full text-6xl text-gray-700 dark:text-gray-100"
                                            style={{ height: '100%' }}
                                        >
                                            {IconComponent}
                                        </span>
                                        {/* Custom Tooltip */}
                                        <div
                                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-gray-900 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-lg text-sm font-medium border border-sky-200 dark:border-sky-700 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50"
                                            style={{
                                                zIndex: 50,
                                                minWidth: 'max-content',
                                            }}
                                        >
                                            {tech}
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white dark:border-b-gray-900"></div>
                                        </div>
                                    </div>
                                )
                            },
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
