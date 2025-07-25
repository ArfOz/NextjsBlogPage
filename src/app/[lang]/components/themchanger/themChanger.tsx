'use client'
import { useState, useEffect } from 'react'
import { SwatchIcon, BeakerIcon, CpuChipIcon } from '@heroicons/react/24/solid'

type VisualMode = 'cyber' | 'matrix' | 'neon'

export function ThemeChanger() {
    const [visualMode, setVisualMode] = useState<VisualMode>('cyber')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Load saved visual mode from localStorage
        const savedMode = localStorage.getItem('visualMode') as VisualMode
        if (savedMode && ['cyber', 'matrix', 'neon'].includes(savedMode)) {
            setVisualMode(savedMode)
            applyVisualMode(savedMode)
        }
    }, [])

    const applyVisualMode = (mode: VisualMode) => {
        const root = document.documentElement

        // Remove all existing mode classes
        root.classList.remove('mode-cyber', 'mode-matrix', 'mode-neon')

        // Apply new mode class
        root.classList.add(`mode-${mode}`)

        // Save to localStorage
        localStorage.setItem('visualMode', mode)
    }

    const handleModeChange = (mode: VisualMode) => {
        setVisualMode(mode)
        applyVisualMode(mode)
    }

    const renderModeIcon = () => {
        if (!mounted) return <CpuChipIcon className="w-6 h-6 text-cyan-400" />

        switch (visualMode) {
            case 'cyber':
                return (
                    <CpuChipIcon
                        className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer neon-text"
                        onClick={() => handleModeChange('matrix')}
                        title="Switch to Matrix Mode"
                    />
                )
            case 'matrix':
                return (
                    <BeakerIcon
                        className="w-6 h-6 text-green-400 hover:text-green-300 transition-colors duration-300 cursor-pointer"
                        onClick={() => handleModeChange('neon')}
                        title="Switch to Neon Mode"
                    />
                )
            case 'neon':
                return (
                    <SwatchIcon
                        className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer"
                        onClick={() => handleModeChange('cyber')}
                        title="Switch to Cyber Mode"
                    />
                )
            default:
                return (
                    <CpuChipIcon
                        className="w-6 h-6 text-cyan-400"
                        onClick={() => handleModeChange('matrix')}
                    />
                )
        }
    }

    return (
        <div className="flex items-center justify-center p-2 rounded-lg bg-black/30 border border-cyan-500/30 backdrop-blur-sm">
            {renderModeIcon()}
        </div>
    )
}
