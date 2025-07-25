'use client'
import React from 'react'

interface FuturisticLoaderProps {
    text?: string
    size?: 'small' | 'medium' | 'large'
    variant?: 'dots' | 'spinner' | 'matrix'
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({
    text = 'Loading',
    size = 'medium',
    variant = 'dots',
}) => {
    const sizeClasses = {
        small: 'text-sm',
        medium: 'text-lg',
        large: 'text-2xl',
    }

    const renderDots = () => (
        <div className="loading-dots flex space-x-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-fast"></span>
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-fast delay-100"></span>
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse-fast delay-200"></span>
        </div>
    )

    const renderSpinner = () => (
        <div className="relative">
            <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin-fast"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-purple-500/30 border-b-purple-400 rounded-full animate-spin-fast-reverse"></div>
        </div>
    )

    const renderMatrix = () => (
        <div className="flex space-x-1 items-end h-8">
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className={`w-1 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full animate-matrix-bar`}
                    style={{ animationDelay: `${i * 0.12}s` }}
                ></div>
            ))}
        </div>
    )

    const renderLoader = () => {
        switch (variant) {
            case 'spinner':
                return renderSpinner()
            case 'matrix':
                return renderMatrix()
            default:
                return renderDots()
        }
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-4 p-8">
            <div className="relative">
                {renderLoader()}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
            <p
                className={`${sizeClasses[size]} text-gray-300 font-['Orbitron'] tracking-wider animate-pulse-fast`}
            >
                {text}
            </p>
        </div>
    )
}

export default FuturisticLoader

// Add fast pulse and spin animations
// Add matrix bar animation
// Place in globals.css:
/*
.animate-pulse-fast {
  animation: pulse-fast 0.6s cubic-bezier(0.4,0,0.6,1) infinite;
}
.animate-spin-fast {
  animation: spin 0.8s linear infinite;
}
.animate-spin-fast-reverse {
  animation: spin-reverse 0.8s linear infinite;
}
.animate-matrix-bar {
  animation: matrix-bar 0.8s cubic-bezier(0.4,0,0.6,1) infinite;
}
@keyframes pulse-fast {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}
@keyframes spin-reverse {
  100% { transform: rotate(-360deg); }
  0% { transform: rotate(0deg); }
}
@keyframes matrix-bar {
  0% { height: 8px; }
  50% { height: 32px; }
  100% { height: 8px; }
}
*/
