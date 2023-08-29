'use client'
import Image from 'next/image'
import { ImageProps } from '@/libs/types'
import Carousel from '../components/photo/Carousel'

const Home = ({ images }: { images: ImageProps[] }) => {
    return (
        <Carousel loop>
            {images.map(({ id, public_id, format, blurDataUrl, location }) => {
                return (
                    // 👇 style each individual slide.
                    // relative - needed since we use the fill prop from next/image component
                    // h-64 - arbitrary height
                    // flex[0_0_100%]
                    //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                    //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                    <div
                        className="relative min-h-[70vh] flex-[0_0_100%] justify-center items-center "
                        key={id}
                    >
                        {/* use object-cover + fill since we don't know the height and width of the parent */}
                        <Image
                            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                            fill
                            className="object-contain"
                            alt="alt"
                        />
                        <div className="bg-slate-400 rounded-md text-slate-950 absolute 2xl:-top-8 xl:-top-7 lg:-top-5 md:-top-5 max-sm:-top-4 -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold">
                            {location}
                        </div>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default Home
