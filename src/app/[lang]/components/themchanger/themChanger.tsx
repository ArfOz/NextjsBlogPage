'use client'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export function ThemeChanger() {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null

        const currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {
            return (
                <SunIcon
                    className="w-10 h-10 text-yellow-500 "
                    role="button"
                    onClick={() => setTheme('light')}
                />
            )
        } else {
            return (
                <MoonIcon
                    className="w-10 h-10 text-gray-900 "
                    role="button"
                    onClick={() => setTheme('dark')}
                />
            )
        }
    }

    return <div className="container  py-4 flex">{renderThemeChanger()}</div>
}
