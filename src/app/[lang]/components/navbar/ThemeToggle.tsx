'use client'
import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
    const [isDark, setIsDark] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
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

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <button aria-label="Toggle theme">
                <div style={{ width: 22, height: 22 }} />
            </button>
        )
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
