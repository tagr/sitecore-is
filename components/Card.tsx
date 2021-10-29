import React from 'react'
import Image from 'next/image'
interface ICardProps {
    title: string
}

const Card: React.FC<ICardProps> = (props) => {
    return (
    <div className="w-full relative bg-gradient-to-tr from-blue-600 via-purple-800 to-purple-900 rounded-lg text-white overflow-hidden flex shadow-lg text-left transform transition-all duration-500 ease-in-out hover:bg-gray-50 hover:scale-105 hover:shadow-none">
        <Image src="/images/diag.svg" width="100" height="100" className="transform rotate-180" />
        <div className="w-full flex md:flex-col">
            <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h2 className="text-xl font-semibold mb-2 text-shadow">{props.title}</h2>
                <p className="font-medium text-violet-100 text-shadow mb-4">Learn how to get Tailwind set up in your project.</p>
            </div>
        </div>
        <Image src="/images/diag.svg" width="100" height="100" />
    </div>
    )
}

export default Card;