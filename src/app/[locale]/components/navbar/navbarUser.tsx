'use client'

import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Fragment, use } from 'react'
import { usePathname } from 'next/navigation'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    FaLinkedin,
    FaGithub,
    FaMedium,
    FaEye,
    FaHome,
    FaSun,
    FaMoon,
} from 'react-icons/fa'
import { LanguageSwitcher } from '../languageChanger/languageChanger'
import { ViewCounter } from '../viewCounter/viewCounter'
import { Navigate } from '../types'
import { useTranslations } from 'next-intl'

const navigation: Array<Navigate> = [
    // { name: 'todos', href: '/todos' },
    // { name: 'weather', href: '/weather' },
    // { name: 'photos', href: '/photos' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function NavbarComp({ lang }: { lang: string }) {
    const pathname = usePathname()
    const t = useTranslations()

    return (
        <Disclosure
            as="nav"
            className="w-full max-w-none top-0 inset-x-0 z-40 border-b border-[#e5e7eb] dark:border-[#334155] bg-[#f8fafc] dark:bg-[#1e2233] backdrop-blur-md shadow-sm"
        >
            {({ open }) => (
                <div className="w-full">
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={`/${lang}`}>
                                        <span className="font-exo2 text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-tight px-2 py-1 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow-sm dark:shadow-gray-900/50">
                                            {t('name')}
                                        </span>
                                    </Link>
                                </div>
                                <div className="hidden min-[720px]:-my-px sm:ml-6 sm:flex sm:space-x-8 grow">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={`/${lang}${item.href}`}
                                            className={classNames(
                                                pathname === item.href
                                                    ? 'border-gray-800 text-gray-900'
                                                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-200',
                                                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                                            )}
                                            aria-current={
                                                pathname === item.href
                                                    ? 'page'
                                                    : undefined
                                            }
                                        >
                                            {t(`navbar.${item.name}`)}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex grow-0">
                                <div className="hidden min-[720px]:flex sm:space-x-4 items-center">
                                    <Link
                                        href="https://github.com/ArfOz/"
                                        className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                                    >
                                        <FaGithub size={20} />
                                    </Link>
                                    <Link
                                        href="https://medium.com/@arfoz1245"
                                        className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                                    >
                                        <FaMedium size={20} />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/arifozkanozturk/"
                                        className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                                    >
                                        <FaLinkedin size={20} />
                                    </Link>
                                    <div className="border-l border-gray-200 pl-4 flex gap-2">
                                        <ThemeToggle />
                                    </div>

                                    <div className="mx-auto flex flex-row justify-around items-center space-x-2 text-zinc-700 dark:text-zinc-200">
                                        <FaEye />
                                        <ViewCounter lang={lang} />
                                    </div>

                                    <div className="border-l border-gray-200 pl-4">
                                        <LanguageSwitcher lang={lang} />
                                    </div>
                                </div>

                                <div className="hidden min-[720px]:ml-6 sm:flex sm:items-center">
                                    <Menu as="div" className="relative ml-3">
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        ></Transition>
                                    </Menu>
                                </div>

                                <div className="-mr-2 flex items-center min-[720px]:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-black/40 p-2 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black border border-cyan-500/30 transition-all duration-300">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="min-[720px]:hidden bg-white/90 backdrop-blur-md border-t border-gray-200">
                        <div className="flex space-y-1 pt-2 max-[380px]:flex-col grow min-[380px]:flex:row">
                            {navigation.map((item: Navigate) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={`/${lang}${item.href}`}
                                    className={classNames(
                                        pathname === item.href
                                            ? 'bg-gray-200 border-gray-800 text-gray-900'
                                            : 'border-transparent text-gray-600 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 transition-all duration-200',
                                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                                    )}
                                    aria-current={
                                        pathname === item.href
                                            ? 'page'
                                            : undefined
                                    }
                                >
                                    {t(`navbar.${item.name}`)}
                                </Disclosure.Button>
                            ))}
                            <div className="flex flex:col py-2 min-[400px]:px-4 max-[400px]:px-2 space-x-4 justify-center items-center border-t border-gray-200">
                                <ThemeToggle />
                                <div className="prose prose-xl mx-auto flex flex-row justify-around items-center space-x-2 text-gray-600">
                                    <FaEye />
                                    <ViewCounter lang={lang} />
                                </div>
                                <LanguageSwitcher lang={lang} />
                            </div>
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    )
}
