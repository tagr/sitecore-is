import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
    <footer className="grid justify-items-center py-8 text-gray-600">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
    </footer>
    )
}
