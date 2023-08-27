'use client'
import Image from 'next/image'
import Carousel from '../components/photo/Carousel'
import { ImageProps } from '@/libs/types'
import { Locale } from 'i18n-config'

const Home = ({ images, lang }: { images: ImageProps[]; lang: Locale }) => {
    return (
        <Carousel loop>
            {images.map(({ id, public_id, format, blurDataUrl }) => {
                return (
                    // 👇 style each individual slide.
                    // relative - needed since we use the fill prop from next/image component
                    // h-64 - arbitrary height
                    // flex[0_0_100%]
                    //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                    //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                    <div
                        className="relative min-h-screen flex-[0_0_100%] justify-center items-center"
                        key={id}
                    >
                        {/* use object-cover + fill since we don't know the height and width of the parent */}
                        <Image
                            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                            fill
                            className="object-contain pb-4"
                            alt="alt"
                        />
                    </div>
                )
            })}
        </Carousel>
    )
}

export default Home
