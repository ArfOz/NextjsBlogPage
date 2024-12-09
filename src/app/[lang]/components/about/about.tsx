import React from 'react'
import { DeveloperGif, DictionaryType } from '@components/index'
import parse from 'html-react-parser'
import DownloadButton from '../downloadcv/cv'

const AboutComponent = ({ dictionary }: { dictionary: DictionaryType }) => {
    return (
        <div className="container mx-auto p-4 ">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    {/* <h1 className="text-center">{dictionary['title']}</h1> */}
                    <p className="text-justify  first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                        {parse(dictionary['home']['context'])}
                    </p>
                    <h2 className="self-center">
                        {dictionary['home']['course_title']}
                    </h2>
                    <ul>{parse(dictionary['home']['course_times'])}</ul>
                </div>
                <div className="flex-1 ">
                    <DeveloperGif />
                </div>
            </div>
        </div>
    )
}
export { AboutComponent }
