import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import Form from './form'
import { DictionaryType } from '../components'

export default async function ContactUs({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dictionary: DictionaryType = await getDictionary(lang)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a]">
            <Form dictionary={dictionary} />
        </div>
    )
}
