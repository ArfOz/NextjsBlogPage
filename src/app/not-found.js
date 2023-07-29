'use client';

import Link from 'next/link';
import errorIcon from '../../public/images/icons8-error-96.png';
import Image from 'next/image';
import './[lang]/styles//globals.css';

export default function LangNotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-8 bg-slate-200">
            <Image src={errorIcon} alt="error" className="w-56" />
            <div className="bg-white px-10 py-6 shadow rounded">
                <h3 className="text-xl font-bold">
                    Ooops! We couldn't find address.
                </h3>
                <Link
                    className="underline text-blue-600 hover:text-red-500 duration-300"
                    href="/"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}
