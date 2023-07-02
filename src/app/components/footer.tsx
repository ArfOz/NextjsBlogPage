import React from 'react';

export default function Footer() {
    return (
        // container mx-auto flex justify-center flex-col items-center h-60 gap-10
        // footer self-end dark:bg-white bg-zinc-900 px-4 py-2 border-t-2
        // className="container mx-auto flex justify-center flex-col items-center h-60"
        <footer className="bg-slate-600 absolute bottom-0 w-screen drop-shadow-xl z-10 flex justify-center flex-col items-center">
            <p className="text-rose-200">
                &copy; 2023 Arif Özkan ÖZTÜRK. All rights reserved.
            </p>
        </footer>
    );
}
