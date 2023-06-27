'use client';
import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// These styles apply to every route in the application
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import MyProfilePic from './components/profilePic';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
    const router = useRouter();
    return (
        <>
            <h1 className={inter.className}>Hello, Welcome my Page</h1>
            <p>
                My name is <span>Arif Özkan</span>
            </p>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quia totam maiores sint? Facilis quasi odit, tempora quia in quo
                ducimus dolorum nam laudantium quos eum sapiente similique
                asperiores. Cumque.
            </div>

            <MyProfilePic />
        </>
    );
}
