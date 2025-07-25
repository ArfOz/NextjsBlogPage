'use client'

import Link from 'next/link'
import { Fragment, use } from 'react'
import { usePathname } from 'next/navigation'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub, FaMedium, FaEye, FaHome } from 'react-icons/fa'
import {
    LanguageSwitcher,
    ThemeChanger,
    ViewCounter,
    Navigate,
    DictionaryType,
    Weathernavbar,
} from '@components/index'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

const navigation: Array<Navigate> = [
    // { name: 'todos', href: '/todos' },
    // { name: 'weather', href: '/weather' },
    // { name: 'photos', href: '/photos' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function NavbarComp({
    lang,
    dictionary,
}: {
    lang: Locale
    dictionary: any
}) {
    const pathname = usePathname()

    return (
        <Disclosure
            as="nav"
            className="futuristic-card fixed top-0 inset-x-0 z-40 border-b border-cyan-500/30 backdrop-blur-md bg-black/20"
        >
            {({ open }) => (
                <div>
                    <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={`/${lang}`}>
                                        <p className="font-splash text-2xl neon-text-pink font-semibold">
                                            {dictionary.name}
                                        </p>
                                    </Link>
                                </div>
                                <div className="hidden min-[720px]:-my-px sm:ml-6 sm:flex sm:space-x-8 grow">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={`/${lang}${item.href}`}
                                            className={classNames(
                                                pathname === item.href
                                                    ? 'border-cyan-500 text-cyan-300 neon-text'
                                                    : 'border-transparent text-cyan-200 hover:text-cyan-100 hover:border-cyan-400 transition-all duration-300',
                                                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                            )}
                                            aria-current={
                                                pathname === item.href
                                                    ? 'page'
                                                    : undefined
                                            }
                                        >
                                            {dictionary.navbar[item.name]}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex grow-0">
                                <div className="hidden min-[720px]:flex sm:space-x-4 items-center">
                                    <Link
                                        href="https://github.com/ArfOz/"
                                        className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 hover:scale-110 transform"
                                    >
                                        <FaGithub size={20} />
                                    </Link>
                                    <Link
                                        href="https://medium.com/@arfoz1245"
                                        className="text-purple-400 hover:text-purple-200 transition-colors duration-300 hover:scale-110 transform"
                                    >
                                        <FaMedium size={20} />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/arifozkanozturk/"
                                        className="text-blue-400 hover:text-blue-200 transition-colors duration-300 hover:scale-110 transform"
                                    >
                                        <FaLinkedin size={20} />
                                    </Link>
                                    <div className="border-l border-cyan-500/30 pl-4">
                                        <ThemeChanger />
                                    </div>

                                    <div className="mx-auto flex flex-row justify-around items-center space-x-2 text-cyan-300">
                                        <FaEye className="neon-text" />
                                        <ViewCounter lang={lang} />
                                    </div>

                                    <div className="border-l border-cyan-500/30 pl-4">
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

                    <Disclosure.Panel className="min-[720px]:hidden bg-black/40 backdrop-blur-md border-t border-cyan-500/30">
                        <div className="flex space-y-1 pt-2 max-[380px]:flex-col grow min-[380px]:flex:row">
                            {navigation.map((item: Navigate) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={`/${lang}${item.href}`}
                                    className={classNames(
                                        pathname === item.href
                                            ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 neon-text'
                                            : 'border-transparent text-cyan-200 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-100 transition-all duration-300',
                                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                    )}
                                    aria-current={
                                        pathname === item.href
                                            ? 'page'
                                            : undefined
                                    }
                                >
                                    {dictionary.navbar[item.name]}
                                </Disclosure.Button>
                            ))}
                            <div className="flex flex:col py-2 min-[400px]:px-4 max-[400px]:px-2 space-x-4 justify-center items-center border-t border-cyan-500/30">
                                <Link
                                    href="https://github.com/ArfOz/"
                                    className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 hover:scale-110 transform"
                                >
                                    <FaGithub size={20} />
                                </Link>
                                <Link
                                    href="https://medium.com/@arfoz1245"
                                    className="text-purple-400 hover:text-purple-200 transition-colors duration-300 hover:scale-110 transform"
                                >
                                    <FaMedium size={20} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/arifozkanozturk/"
                                    className="text-blue-400 hover:text-blue-200 transition-colors duration-300 hover:scale-110 transform"
                                >
                                    <FaLinkedin size={20} />
                                </Link>
                            </div>
                            <div className="flex flex:col py-2 min-[400px]:px-4 max-[400px]:px-2 space-x-4 justify-center items-center border-t border-cyan-500/30">
                                <ThemeChanger />
                                <div className="prose prose-xl mx-auto flex flex-row justify-around items-center space-x-2 text-cyan-300">
                                    <FaEye className="neon-text" />
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
