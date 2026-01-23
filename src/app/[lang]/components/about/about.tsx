'use client'

import React from 'react'
import { DictionaryType } from '@components/index'
import parse from 'html-react-parser'

const AboutComponent = ({ dictionary }: { dictionary: DictionaryType }) => {
    return (
        <div className="space-y-8 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Text Content */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] dark:from-[#1e2233] dark:to-[#171b2e] p-10 rounded-xl border border-[#e5e7eb] dark:border-[#334155] shadow-md hover:shadow-lg transition-all duration-300">
                        <p className="text-xl leading-loose text-[#1e293b] dark:text-[#f1f5f9] tracking-wide text-justify font-light first-letter:text-[4rem] first-letter:font-extrabold first-letter:mr-3 first-letter:float-left first-letter:text-transparent first-letter:bg-clip-text first-letter:bg-gradient-to-r first-letter:from-blue-600 first-letter:to-purple-600 dark:first-letter:from-blue-400 dark:first-letter:to-purple-400 first-letter:leading-[4rem] first-letter:drop-shadow-lg">
                            {parse(dictionary['home']['context'])}
                        </p>
                    </div>
                </div>
                {/* Profile Photo Section */}
                <div className="lg:col-span-2 relative">
                    <div className="sticky top-24 bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="bg-[#f8fafc] dark:bg-[#1e2233] p-4 rounded-xl h-full">
                            <div className="transform group-hover:scale-105 transition-transform duration-300">
                                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <img
                                        src="/images/PhotoCV.jpg"
                                        alt="Arif Ozkan"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { AboutComponent }
