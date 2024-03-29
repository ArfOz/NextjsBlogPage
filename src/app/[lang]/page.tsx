import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import { Experience, MyProfilePic, ReportIncr } from '@components/index'
import parse from 'html-react-parser'

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang)
    return (
        <div className="flex flex-col p-4 mb-24 w-full ">
            <ReportIncr lang={lang} />
            <h1 className="text-center">{dictionary['title']}</h1>
            <p className="text-justify">
                {parse(dictionary['home']['context'])}
            </p>
            <h2 className="self-center">
                {dictionary['home']['course_title']}
            </h2>
            <ul>{parse(dictionary['home']['course_times'])}</ul>

            <MyProfilePic />

            <Experience dictionary={dictionary} />
        </div>
    )
}
