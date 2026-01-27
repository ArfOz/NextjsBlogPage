import { AboutComponent } from './components/about'
import { DictionaryType, Experience, Technologies } from './components'
import { setRequestLocale } from 'next-intl/server'
import { Locale, useTranslations } from 'next-intl'
import { use } from 'react'

export default function Page({ params }: PageProps<'/[locale]'>) {
    const { locale } = use(params)
    setRequestLocale(locale as Locale)
    const t = useTranslations()

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <section className="w-full max-w-6xl mx-auto text-center py-24 px-8 text-gray-900 dark:text-gray-100">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
                    {t('title')}
                </h1>
                <div className="w-16 h-1 mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                <div className="bg-gray-50 dark:bg-gray-800/80 rounded-xl shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    <AboutComponent
                        data={t.raw('home') as DictionaryType['home']}
                    />
                </div>
                <section className="p-8 lg:p-12 text-gray-900 dark:text-gray-100">
                    <Technologies
                        lang={locale as Locale}
                        technologies={
                            t.raw(
                                'technologies',
                            ) as unknown as DictionaryType['technologies']
                        }
                    />
                </section>
                Experience Section
                <section className="p-4 md:p-8 lg:p-12 text-gray-900 dark:text-gray-100">
                    <Experience
                        experience={
                            t.raw('experience') as DictionaryType['experience']
                        }
                    />
                </section>
            </section>
        </main>
    )
}
