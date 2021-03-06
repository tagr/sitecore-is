import React from 'react'
import Image from "next/image";
import DarkMode from "@/components/DarkMode.tsx"

export default function Navigation() {
    return (
    <nav className="bg-gradient-to-r from-blue-700 via-purple-600 to-purple-900 dark:from-black dark:via-purple-900 dark:to-black flex items-left font-bold px-4 py-4 text-white">
        <ul className="inline-grid grid-cols-4 gap-x-4">
            <li>about</li>
            <li>links</li>
            <li>@foobarjs</li>
        </ul>
    </nav>
    )
}