import React from 'react'
import { DeveloperGif, DictionaryType } from '@components/index'
import parse from 'html-react-parser'
import DownloadButton from '../downloadcv/cv'

const AboutComponent = ({ dictionary }: { dictionary: DictionaryType }) => {
    return (
        <div className="space-y-8">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text neon-text font-['Orbitron'] mb-4">
                    ABOUT
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25"></div>
                        <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/30">
                            <p className="text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-cyan-400 first-letter:neon-text">
                                {parse(dictionary['home']['context'])}
                            </p>
                        </div>
                    </div>

                    {/* Course Information */}
                    {/* <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-purple-400 neon-text mb-4 font-['Orbitron']">
                            {dictionary['home']['course_title']}
                        </h3>
                        <div className="text-gray-300 space-y-2">
                            {parse(dictionary['home']['course_times'])}
                        </div>
                    </div> */}
                </div>

                {/* Developer GIF Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group">
                        <div className="transform group-hover:scale-105 transition-transform duration-300">
                            <DeveloperGif />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                        <div className="absolute top-1/2 left-0 w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
                        <div className="absolute top-1/2 right-0 w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Tech Pattern Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300ffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
            </div>
        </div>
    )
}
export { AboutComponent }
