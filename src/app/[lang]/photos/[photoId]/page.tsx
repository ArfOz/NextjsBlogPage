import Carousel from '../../components/photo/Carousel'
import { currentPhoto } from '@/libs/images'
// import ImagePage from './imagePage';
import { ImageProps } from '@/libs/types'
import { Locale } from 'i18n-config'
import Modal from '../../components/photo/Modal'
// import Carousel from '../../components/Carousel'
// import getResults from '../../utils/cachedImages'
// import cloudinary from '../../utils/cloudinary'
// import getBase64ImageUrl from '../../utils/generateBlurPlaceholder'

async function Home({ params }: { params: { photoId: number; lang: Locale } }) {
    let photoId = params.photoId
    console.log(typeof photoId)
    const image = await currentPhoto(photoId)

    const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${image.public_id}.${image.format}`

    return (
        <>
            <div className="mx-auto max-w-[1960px] p-4">
                <Carousel
                    currentPhoto={image}
                    index={photoId}
                    lang={params.lang}
                />
            </div>
        </>
    )
}

export default Home
