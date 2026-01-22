import React from 'react'
import { DeveloperGif, DictionaryType } from '@components/index'
import parse from 'html-react-parser'

const AboutComponent = ({ dictionary }: { dictionary: DictionaryType }) => {
    return (
        <div className="space-y-8 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <div className="relative">
                        <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <p className="text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-sky-500 dark:first-letter:text-sky-400">
                                {parse(dictionary['home']['context'])}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Developer GIF Section */}
                <div className="relative">
                    <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group">
                        <div className="transform group-hover:scale-105 transition-transform duration-300">
                            <DeveloperGif />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { AboutComponent }
