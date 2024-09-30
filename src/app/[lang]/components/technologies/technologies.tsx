import React from 'react'
import { DictionaryType } from '../types'
import { Icons } from '../icons'

const Technologies = ({ techs }: { techs: DictionaryType['technologies'] }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row ">
                {techs.map((tech: string) => {
                    const IconComponent = Icons[`${tech}`] || (
                        <div> No Icon</div>
                    )
                    return IconComponent
                })}{' '}
                || <div>error occured</div>
            </div>
        </div>
    )
}
export { Technologies }
