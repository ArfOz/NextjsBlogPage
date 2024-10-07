import React from 'react'
import { DictionaryType } from '../types'
import { SvgIcon } from '../icons'

const Technologies = ({ techs }: { techs: DictionaryType['technologies'] }) => {
    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row">
            <div className="text-center font-bold flex-1">
                Technologies Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Sequi illum excepturi ratione aspernatur, eligendi,
                tenetur magni dolore quod nobis reprehenderit ad perferendis
                voluptatem aperiam quam blanditiis. Neque eveniet aperiam a!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam praesentium, fugit quam laborum sapiente magni accusamus
                delectus? Nobis officia dolorem nulla vero doloribus. Sed
                necessitatibus quibusdam aspernatur nostrum incidunt eveniet.
            </div>
            <div className="flex flex-row flex-wrap place-content-center place-items-center flex-1 justify-evenly gap-y-6">
                {techs.map((tech: string) => {
                    const IconComponent = SvgIcon(tech, true)
                    return IconComponent
                })}
            </div>
        </div>
    )
}
export { Technologies }
