import { getDictionary } from 'get-dictionary'
import { AboutComponent } from './components/about'
import { Technologies } from './components/technologies'
import { Locale } from 'i18n-config'
import { DictionaryType, Experience, ReportIncr } from '@components/index'

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    const dictionary: DictionaryType = await getDictionary(lang)
    return (
        <div className="flex flex-col p-4 mb-24 w-full ">
            <ReportIncr lang={lang} />
            <AboutComponent dictionary={dictionary} />
            <Technologies technologies={dictionary['technologies']} />
            <Experience experience={dictionary['experience']} />
        </div>
    )
}
