import React from 'react'
interface ICardProps {
    title: string
}

export const Card: React.FC<ICardProps> = (props) => {
    return (
    <div className="w-full relative bg-gradient-to-tr from-blue-600 via-purple-800 to-purple-900 text-white overflow-hidden flex shadow-lg text-left transform transition-all duration-500 ease-in-out hover:bg-gray-50 hover:scale-105 hover:shadow-none">
        <div className="w-full flex md:flex-col">
            <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h2 className="text-xl font-semibold mb-2 text-shadow">{props.title}</h2>
                <p className="font-medium text-violet-100 text-shadow mb-4">Learn how to get Tailwind set up in your project.</p>
            </div>
        </div>
    </div>
    )
}