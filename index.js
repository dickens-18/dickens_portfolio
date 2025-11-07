import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>John Doe - Full Stack Developer</title>
        <meta name="description" content="Creative developer building amazing web experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}