import { Locale } from 'i18n-config'

export default async function Todos({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    return (
        <div className="p-4 mb-16">
            <ul className="list-disc mx-4">
                -------------------Only in English-------------------
                <li>Master Thesis to be uploaded</li>
            </ul>
        </div>
    )
}
