import Link from 'next/link';
import { FaInstagram, FaTelegram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-100 border-t border-gray-200 text-gray-700 text-sm relative">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

                {/* Company Info */}
                <div>
                    <h3 className="text-yellow-600 font-semibold mb-3">About Us</h3>
                    <p className="leading-6 text-justify">
                        We provide the finest quality gold and jewelry. Trusted by thousands of customers.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-yellow-600 font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link href="/about" className="hover:text-yellow-500">About</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
                        <li><Link href="/offers" className="hover:text-yellow-500">Offers</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-yellow-600 font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4 text-lg">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-yellow-500" /></a>
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer"><FaTelegram className="hover:text-yellow-500" /></a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="hover:text-yellow-500" /></a>
                    </div>
                </div>

                {/* Location Map */}
                <div className="w-full">
                    <h3 className="text-yellow-600 font-semibold mb-3">Main Branch</h3>
                    <div className="overflow-hidden rounded-md border border-gray-300 shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.278938225698!2d50.9197558!3d35.8612319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dbf2bbf31fd25%3A0x75826d63f9fe480a!2sGohardasht%2C%20Karaj%2C%20Alborz%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1716920000000!5m2!1sen!2s"
                            width="100%"
                            height="140"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-opacity duration-300"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp/>
                </button>
            )}
        </footer>
    );
};

export default Footer;
