import Image from "next/image";
import Card from "@/components/Card.tsx";
import WordCycle from "@/components/word-cycle";
import Layout from "@/components/Layout.tsx";

export default function Home() {
  return (
    <Layout
      title="Sitecore is... blog by Andy Merhaut"
      className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 dark:from-gray-700 dark:via-black dark:to-gray-900 text-center"
      metaDescription="Andy Merhaut is a technical consultant specializing in application development"
    >
      <main className="px-8 py-8">
        <div>
          <Image
            src="/images/andy-merhaut.png"
            alt="Andy Merhaut"
            width={240}
            height={234}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-4xl sm:text-8xl py-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-blue-50 dark:from-pink-400 dark:to-pink-600">
            <em>
              Sitecore is...
              <br />
              <WordCycle
                words={["efficient", "hard", "composable", "headless"]}
              />
            </em>
          </h1>
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
