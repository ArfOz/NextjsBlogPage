// import { LightningBoltIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" legacyBehavior>
            <a className="my-2 flex items-center space-x-1 text-indigo-500">
                {/* <LightningBoltIcon className="h-8 w-8 flex-shrink-0 mr-3" /> */}
                <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
                    Logo Gelecek
                </span>
            </a>
        </Link>
    );
}
