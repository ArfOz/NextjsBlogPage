"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
// These styles apply to every route in the application
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Arif Özkan NextJS",
};
export default function Page() {
  const router = useRouter();
  return (
    <>
      <h1 className={inter.className}>Hello, Welcome my Page</h1>
      <p>
        My name is <span>Arif Özkan</span>
      </p>
    </>
  );
}
