import React from 'react';

export default function Footer() {
    return (
        <footer
            // className="bg-gray-50 flex md:flex-row flex-col justify-around items-start p-2"
            className="bg-slate-600
             text-3xl text-white text-center
             fixed
             inset-x-0
             bottom-0
             p-4
             flex
             flex-row
             justify-between
             "
        >
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
        </footer>
    );
}
