'use client'
import React from 'react'
import { ImageProps } from '@/libs/types'

import { Carousel } from 'react-responsive-carousel'
import { Locale } from 'i18n-config'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
export default function Images({
    images,
    lang,
}: {
    images: ImageProps[]
    lang: Locale
}) {
    return (
        <Carousel
            showArrows={true}
            showIndicators
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
            useKeyboardArrows={true}
            // autoPlay
            // axis="vertical"
            // infiniteLoop
            // centerMode={true}
            // centerSlidePercentage={80}
            // dynamicHeight={true}
            className="flex flex-col bg-center text-center origin-center object-center content-center self-center items-center justify-center snap-center center place-self-center place-items-center justify-self-center mt-4"
        >
            {images.map(({ id, public_id, format, blurDataUrl }) => (
                <img
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                    key={id}
                    alt="selam"
                    loading="lazy"
                    className="flex flex-col max-w-lg bg-center text-center origin-center object-center content-center self-center items-center justify-center snap-center center place-self-center place-items-center justify-self-center"
                />
            ))}
        </Carousel>
    )
}

// 'use client';
// import React from 'react';
// import { ImageProps } from '@/libs/types';
// import Image from 'next/image';
// import { Locale } from 'i18n-config';
// import b from '../../../../public/images/b.jpg';
// // import b from './b.jpg';

// import { Carousel } from 'react-responsive-carousel';

// export default function Images() {
//     return (
//         <div className="flex">
//             <Image src={b} alt="error" className="w-56" />
//             <Image src={b} alt="error" className="w-56" />
//         </div>
//     );
// }
