import Head from 'next/head'
import Navbar from '@/components/layout/Navbar'
import HeaderSection from '@/components/sections/HeaderSection/HeaderSection'
import Hero from '@/components/sections/Hero'
import Features from "@/components/sections/Features"
import FeaturedProducts from "@/components/sections/FeaturedProducts"
import DiscountBanner from "@/components/DiscountBanner/DiscountBanner";
import Footer from "@/components/layout/Footer"
export default function Home() {
    return (
        <>
            <Head>
                <title>گالری طلا | زیباترین طراحی‌ها</title>
                <link rel="icon" type="image/png" href="/images/2.webp"/>
            </Head>
            <Navbar/>
            <main className="min-h-screen bg-white pt-16">
                <HeaderSection/>
                <Hero/>
                <Features/>
                <FeaturedProducts/>
                <DiscountBanner/>
                <Footer />
            </main>
        </>
    )
}
