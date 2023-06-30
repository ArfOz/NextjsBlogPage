import Link from 'next/link';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import Logo from './themChanger';
import ThemeChanger from './themChanger';

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <div className="prose prose-xl mx-auto justify-center p-2">
                    <Link href="/">Arif Özkan</Link>
                </div>
                <div className="prose prose-xl mx-auto flex flex-row justify-between space-x-3 p-4">
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
                <div className="prose prose-xl mx-auto flex flex-row justify-between space-x-3">
                    <ThemeChanger />
                </div>
            </div>
        </nav>
    );
}
