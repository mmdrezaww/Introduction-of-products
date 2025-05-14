import Head from 'next/head'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layout/Navbar'
import Features from "@/components/sections/Features";
import FeaturedProducts from "@/components/sections/FeaturedProducts";

export default function Home() {
    return (
        <>
            <Head>
                <title>گالری طلا | زیباترین طراحی‌ها</title>
                <link rel="icon" type="image/png" href="/images/2.webp"/>
            </Head>
            <Navbar/>
            <main className="min-h-screen bg-white pt-16">
                <Hero/>
                <Features/>
                <FeaturedProducts/>
            </main>
        </>
    )
}

