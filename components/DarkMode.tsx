import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

type UIMode = "dark" | "light"

interface IDarkModeProps {
    mode: UIMode
}

const DarkMode: React.FC<IDarkModeProps> = (props) => {

    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (dark) {
        return root.classList.add("dark");
        }
        root.classList.remove("dark");
    }, [dark]);

    return (
        <button onClick={() => setDark(!dark)} title="toggle light and dark mode">
        {
            typeof window !== "undefined" && !(window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? <SunIcon className="h-6 w-6 text-white"/>
            : <MoonIcon className="h-6 w-6 text-white"/>
        }
        </button>
    );
}

export default DarkMode;