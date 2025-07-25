import React from 'react'
import { DictionaryType } from '../types'
import { SvgIcon } from '../icons'
import parse from 'html-react-parser'
import { IoMdFlash } from 'react-icons/io'
import DownloadButton from '../downloadcv/cv'

const Technologies = ({
    lang,
    technologies,
}: {
    lang: string
    technologies: DictionaryType['technologies']
}) => {
    return (
        <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text neon-text font-['Orbitron']">
                    {technologies['title']}
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    {technologies['answer']}
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Qualities Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-cyan-400 neon-text mb-6 font-['Orbitron']">
                        CORE QUALITIES
                    </h3>
                    <div className="space-y-4">
                        {technologies.qualities.map(
                            (tech: string, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center space-x-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:bg-cyan-500/10"
                                    >
                                        <div className="relative">
                                            <IoMdFlash className="text-yellow-400 h-8 w-8 drop-shadow-lg" />
                                            <div className="absolute inset-0 text-yellow-400 h-8 w-8 blur-sm opacity-50">
                                                <IoMdFlash className="h-8 w-8" />
                                            </div>
                                        </div>
                                        <p className="text-gray-200 group-hover:text-white transition-colors duration-300 flex-1">
                                            {tech}
                                        </p>
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                )
                            }
                        )}
                    </div>

                    {/* Download Button */}
                    <div className="pt-6">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative">
                                <DownloadButton
                                    lang={lang}
                                    download={technologies.download_CV}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-purple-400 neon-text mb-6 font-['Orbitron']">
                        TECH STACK
                    </h3>
                    <div className="tech-grid">
                        {technologies.techs.map(
                            (tech: string, index: number) => {
                                const IconComponent = SvgIcon(tech, true)
                                return (
                                    <div
                                        key={index}
                                        className="tech-icon group relative overflow-visible"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                        title={tech}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative z-10 flex items-center justify-center">
                                            {IconComponent}
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                                        {/* Custom Tooltip */}
                                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-cyan-300 px-3 py-1 rounded-lg text-sm font-medium border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                                            {tech}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                    style={{ animationDelay: '0s' }}
                ></div>
                <div
                    className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"
                    style={{ animationDelay: '1s' }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping"
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                    style={{ animationDelay: '3s' }}
                ></div>
            </div>
        </div>
    )
}
export { Technologies }
