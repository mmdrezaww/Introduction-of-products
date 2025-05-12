import Head from 'next/head'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layout/Navbar'

export default function Home() {
    return (
        <>
            <Head>
                <title>Product-landing</title>
            </Head>
            <Navbar />
            <main className="min-h-screen bg-white pt-16">
                <Hero />
            </main>
        </>
    )
}

