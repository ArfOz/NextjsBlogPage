'use client';

import { Fragment, use } from 'react';
import { usePathname } from 'next/navigation';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaMedium, FaEye, FaHome } from 'react-icons/fa';
import ThemeChanger from '../themChanger';
import LanguageSwitcher from '../languageChanger/languageChanger';
import ViewCounter from '../viewCounter/viewCounter';
import { getDictionary } from '../../../../../get-dictionary';
import Link from 'next/link';
import { Navigate } from './navigate.type';
import { DictionaryType } from '../../contact/dictionary.type';

const navigation: [Navigate] = [{ name: 'todos', href: '/todos' }];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
</svg>;

export default function Navbar({ lang }: { lang: any }) {
    const pathname = usePathname();
    const dictionary: DictionaryType = use(getDictionary(lang));

    return (
        <Disclosure as="nav" className="bg-slate-400 shadow-sm">
            {({ open }) => (
                <div>
                    <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={`/${lang}`}>
                                        <FaHome className="hover:text-gray-800 " />
                                    </Link>
                                </div>
                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={`/${lang}${item.href}`}
                                            className={classNames(
                                                pathname === item.href
                                                    ? 'border-slate-500 text-gray-900'
                                                    : 'border-transparent dark:text-gray-800 hover:text-gray-500 hover:border-gray-300',
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

                            <div className="flex">
                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 items-center">
                                    <Link href="https://github.com/ArfOz/">
                                        <FaGithub />
                                    </Link>
                                    <Link href="https://medium.com/@arfoz1245">
                                        <FaMedium />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/arifozkanozturk/">
                                        <FaLinkedin />
                                    </Link>
                                    <LanguageSwitcher lang={lang} />
                                </div>
                                <div className="flex flex-row">
                                    <ThemeChanger />
                                    <div className="prose prose-xl mx-auto flex flex-row justify-center items-center space-x-2 p-4">
                                        <FaEye />
                                        <ViewCounter lang={lang} />
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
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
                                <div className="-mr-2 flex items-center sm:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
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

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pt-2 pb-3 flex-col">
                            {navigation.map((item: Navigate) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={`/${lang}${item.href}`}
                                    className={classNames(
                                        pathname === item.href
                                            ? 'bg-slate-50 border-slate-500 text-slate-700'
                                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
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
                            <div className="flex flex-row py-2 px-4 space-x-4">
                                <Link href="https://github.com/ArfOz/">
                                    <FaGithub />
                                </Link>
                                <Link href="https://medium.com/@arfoz1245">
                                    <FaMedium />
                                </Link>
                                <Link href="https://www.linkedin.com/in/arifozkanozturk/">
                                    <FaLinkedin />
                                </Link>
                            </div>

                            <LanguageSwitcher lang={lang} />
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
}

// export default async function Navbar({
//     lang,
// }: {
//     lang: Locale;
// }): Promise<JSX.Element> {
//     const dictionary = await getDictionary(lang);
//     return (
//         <nav className="bg-slate-400 sticky top-0 drop-shadow-xl z-10 ">
//             <div className="prose prose-xl mx-auto flex flex-col sm:flex-row items-center">
//                 <div className="prose prose-xl mx-auto justify-center grow basis-1">
//                     <Link href={`/${lang}`}>Arif Özkan</Link>
//                 </div>
//                 <div className="prose prose-xl mx-auto justify-center grow basis-1">
//                     <Link href={`/${lang}/todos`}>
//                         {dictionary['navbar'].todos}
//                     </Link>
//                 </div>
//                 <div className="prose prose-xl mx-auto flex flex-row justify-center items-center space-x-3 p-4 grow-0 basis-9">
// <Link href="https://github.com/ArfOz/">
//     <FaGithub />
// </Link>
// <Link href="https://medium.com/@arfoz1245">
//     <FaMedium />
// </Link>
// <Link href="https://www.linkedin.com/in/arifozkanozturk/">
//     <FaLinkedin />
// </Link>
// <ThemeChanger />

// <LanguageSwitcher lang={lang} />
// <div className="prose prose-xl mx-auto flex flex-row justify-center items-center space-x-2 p-4">
//     <FaEye />
//     <ViewCounter lang={lang} />
// </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }
