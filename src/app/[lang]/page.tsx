import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import {
    DeveleoperGif,
    Experience,
    MyProfilePic,
    ReportIncr,
} from '@components/index'
import parse from 'html-react-parser'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import { AboutComponent } from './components/about'

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang)
    return (
        <div className="flex flex-col p-4 mb-24 w-full ">
            <ReportIncr lang={lang} />
            <AboutComponent dictionary={dictionary} />

            {/* <MyProfilePic /> */}
            <Experience dictionary={dictionary} />
        </div>
    )
}
