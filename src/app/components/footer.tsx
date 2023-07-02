import React from 'react';

export default function Footer() {
    return (
        // container mx-auto flex justify-center flex-col items-center h-60 gap-10
        // footer self-end dark:bg-white bg-zinc-900 px-4 py-2 border-t-2
        // className="container mx-auto flex justify-center flex-col items-center h-60"
        <footer className="footer bg-slate-600 fixed bottom-0 w-screen drop-shadow-xl z-10 flex justify-center flex-col items-center">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-rose-200">
                <p className="text-sm sm:text-center dark:text-gray-400">
                    &copy; 2023 Arif Özkan ÖZTÜRK. All rights reserved.
                </p>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
