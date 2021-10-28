import Head from "next/head";
import Image from "next/image";
import { Card } from "@/components/Card.tsx";
import WordCycle from "@/components/word-cycle";
import Layout from "@/components/Layout.tsx";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Layout
      title="Sitecore is... blog by Andy Merhaut"
      className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 text-center"
      metaDescription="Andy Merhaut is a technical consultant specializing in application development"
    >
      <main className="px-8 py-8">
        <div className="">
          <Image
            src="/images/andy-merhaut.png"
            alt="Andy Merhaut"
            width={240}
            height={234}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-8xl py-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-blue-50">
            <em>
              Sitecore is...
              <br />
              <WordCycle
                words={["efficient", "hard", "composable", "headless"]}
              />
            </em>
          </h1>

          {/* <p>
            by{" "}
            <a
              href="https://www.linkedin.com/in/andymerhaut/"
              title="LinkedIn profile"
            >
              Andy Merhaut
            </a>
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 py-8">
          <Card title="Next.js &amp; REST APIs" />
          <Card title="Bar" />
          <Card title="Baz" />
        </div>
      </main>
    </Layout>
  );
}
