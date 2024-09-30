import React from 'react'
import { DictionaryType } from '../types'
import { SvgIcon } from '../icons'

const Technologies = ({ techs }: { techs: DictionaryType['technologies'] }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row ">
                {techs.map((tech: string) => {
                    const IconComponent = SvgIcon(tech) || <div> No Icon</div>
                    return IconComponent
                })}
            </div>
        </div>
    )
}
export { Technologies }
