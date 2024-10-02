import React from 'react'
import { DictionaryType } from '../types'
import { SvgIcon } from '../icons'

const Technologies = ({ techs }: { techs: DictionaryType['technologies'] }) => {
    return (
        <div className="container mx-auto p-4 ">
            <div className="flex flex-row space-x-8 flex-wrap justify-center items-center space-y-8">
                {techs.map((tech: string) => {
                    const IconComponent = SvgIcon(tech, true)
                    return IconComponent
                })}
            </div>
        </div>
    )
}
export { Technologies }
