import React from 'react'
import { DeveleoperGif } from '@components/index'
import parse from 'html-react-parser'

const AboutComponent = ({ dictionary }: { dictionary: any }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row ">
                <div className="flex-1 ">
                    <h1 className="text-center">{dictionary['title']}</h1>
                    <p className="text-justify">
                        {parse(dictionary['home']['context'])}
                    </p>
                    <h2 className="self-center">
                        {dictionary['home']['course_title']}
                    </h2>
                    <ul>{parse(dictionary['home']['course_times'])}</ul>
                </div>
                <div className="flex-1 ">
                    <DeveleoperGif />
                </div>
            </div>
        </div>
    )
}
export { AboutComponent }
