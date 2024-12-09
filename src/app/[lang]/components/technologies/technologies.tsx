import React from 'react'
import { DictionaryType } from '../types'
import { SvgIcon } from '../icons'
import parse from 'html-react-parser'
import { IoMdFlash } from 'react-icons/io'
import DownloadButton from '../downloadcv/cv'
// import { DownloadCVButton } from '../downloadcv'

const Technologies = ({
    lang,
    technologies,
}: {
    lang: string
    technologies: DictionaryType['technologies']
}) => {
    return (
        <div>
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-center font-bold text-2xl">
                    {technologies['title']}
                </h1>
                <p>{technologies['answer']}</p>
            </div>
            <div className="container mx-auto p-4 flex flex-col md:flex-row bf">
                <div className="flex-1">
                    {technologies.qualities.map((tech: string) => {
                        return (
                            <div className="flex ">
                                <IoMdFlash className="fill-yellow-400 h-8 w-8 flex-none" />
                                <p className="grow">{tech}</p>
                            </div>
                        )
                    })}
                    <DownloadButton
                        lang={lang}
                        download={technologies.download_CV}
                    />
                </div>
                <div className="flex flex-row flex-wrap place-content-center place-items-center flex-1 gap-y-6 ">
                    {technologies.techs.map((tech: string) => {
                        const IconComponent = SvgIcon(tech, true)
                        return IconComponent
                    })}
                </div>
            </div>
        </div>
    )
}
export { Technologies }
