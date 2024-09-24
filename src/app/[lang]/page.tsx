import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import { Experience, ReportIncr } from '@components/index'

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

            <Experience dictionary={dictionary} />
        </div>
    )
}
