import { ImageProps } from '@/libs/types'
import { getImages } from '@/libs/images'
import Images from './images'
import { Locale } from 'i18n-config'
export default async function Photos({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    const data = await getImages()
    const images = data.props.images

    return (
        <div className="text-center">
            <Images images={images} lang={lang} />
        </div>
    )
}
