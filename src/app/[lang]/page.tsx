import { getDictionary } from 'get-dictionary'
import { AboutComponent } from './components/about'
import { Locale } from 'i18n-config'

export default async function Page({ params }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(params.lang)
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
            <section className="w-full max-w-2xl mx-auto text-center py-16 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
                    {dictionary['title'] || 'Elegant Developer'}
                </h1>
                <div className="w-16 h-1 mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                <div className="bg-gray-50 dark:bg-gray-800/80 rounded-xl shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-700">
                    <AboutComponent dictionary={dictionary} />
                </div>
            </section>
        </main>
    )
}
