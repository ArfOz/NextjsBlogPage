'use client'
import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
    const [isDark, setIsDark] = React.useState(
        typeof window !== 'undefined'
            ? document.documentElement.classList.contains('dark')
            : false,
    )

    React.useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'))
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'))
        })
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        })
        return () => observer.disconnect()
    }, [])

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            setIsDark(false)
        } else {
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Gündüz moduna geç' : 'Gece moduna geç'}
        >
            {isDark ? (
                <FaSun size={22} color="#FFD700" />
            ) : (
                <FaMoon size={22} color="#333" />
            )}
        </button>
    )
}
