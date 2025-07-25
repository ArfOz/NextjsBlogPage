import { getDictionary } from 'get-dictionary'
import { AboutComponent } from './components/about'
import { Technologies } from './components/technologies'
import { Locale } from 'i18n-config'
import {
    DictionaryType,
    Experience,
    ReportIncr,
    ParticleSystem,
} from '@components/index'

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    const dictionary: DictionaryType = await getDictionary(lang)
    return (
        <div className="min-h-screen relative">
            {/* Custom Futuristic Cursor */}

            {/* Particle System Background */}
            <ParticleSystem />

            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

                {/* Matrix grid overlay */}
                <div className="matrix-bg"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col gap-16 p-6 lg:p-12 w-full max-w-7xl mx-auto pt-20 pb-20">
                <ReportIncr lang={lang} />

                {/* Hero Section with Futuristic Title */}
                <section className="text-center py-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>
                    <h1 className="text-6xl lg:text-8xl font-bold neon-text gradient-text mb-6 font-['Orbitron'] relative z-10">
                        {dictionary['title'] || 'FUTURE DEV'}
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full relative z-10"></div>

                    {/* Scanning line effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
                </section>

                {/* About Section */}
                <section className="futuristic-card p-8 lg:p-12 floating-element">
                    <AboutComponent dictionary={dictionary} />
                </section>

                {/* Technologies Section */}
                <section className="futuristic-card p-8 lg:p-12 glow-box">
                    <Technologies
                        lang={lang}
                        technologies={dictionary['technologies']}
                    />
                </section>

                {/* Experience Section */}
                <section
                    className="futuristic-card p-4 md:p-8 lg:p-12 floating-element"
                    style={{ animationDelay: '1s' }}
                >
                    <Experience experience={dictionary['experience']} />
                </section>

                {/* Decorative glowing elements */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-0 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>

                {/* Corner accent lines */}
                <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-purple-400 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-to-t from-purple-400 to-transparent"></div>
            </div>
        </div>
    )
}
