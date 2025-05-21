import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

const menuItems = [
    {
        label: 'Categories',
        href: '/categories',
        submenu: [
            {
                label: 'Gold',
                href: '/categories/gold',
                submenu: [
                    { label: 'Rings', href: '/categories/gold/rings' },
                    { label: 'Necklaces', href: '/categories/gold/necklaces' },
                ],
            },
            { label: 'Silver', href: '/categories/silver' },
            { label: 'Sets', href: '/categories/sets' },
        ],
    },
    {
        label: 'Offers',
        href: '/offers',
        submenu: [
            { label: 'Discount 10%', href: '/offers/10-percent' },
            { label: 'Clearance', href: '/offers/clearance' },
        ],
    },
    { label: 'Best Sellers', href: '/best-sellers' },
    { label: 'New Arrivals', href: '/new' },
    { label: 'Home', href: '/' },
];

const BottomMenu = () => {
    return (
        <div className="w-full bg-gradient-to-r from-white via-yellow-50 to-white border-b border-gray-100 relative z-30">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-8 text-sm font-medium text-gray-700">
                {menuItems.map((item) => (
                    <div key={item.href} className="relative group">
                        <div className="flex items-center gap-1 hover:text-yellow-500 transition relative cursor-pointer">
                            <Link href={item.href} className="flex items-center gap-1">
                                {item.label}
                                {item.submenu && (
                                    <FiChevronDown className="text-gray-500 text-xs group-hover:text-yellow-500 transition" />
                                )}
                            </Link>
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </div>

                        {item.submenu && (
                            <div className="absolute top-full right-0 mt-2 w-44 bg-white shadow-lg border border-gray-100 rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                                <ul className="py-2 text-sm text-gray-700 text-left" dir="ltr">
                                    {item.submenu.map((sub, i) => (
                                        <li key={i} className="relative group/sub">
                                            <Link
                                                href={sub.href}
                                                className="block px-4 py-2 hover:bg-yellow-50 hover:text-yellow-600 transition flex justify-between items-center"
                                            >
                                                {sub.label}
                                                {sub.submenu && (
                                                    <FiChevronDown className="text-xs ml-1 rotate-[-90deg]" />
                                                )}
                                            </Link>

                                            {sub.submenu && (
                                                <ul
                                                    className="absolute top-0 left-full mt-0 ml-1 w-40 bg-white shadow-lg border border-gray-100 rounded-lg z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition duration-200 text-left"
                                                    dir="ltr"
                                                >
                                                    {sub.submenu.map((subItem, j) => (
                                                        <li key={j}>
                                                            <Link
                                                                href={subItem.href}
                                                                className="block px-4 py-2 hover:bg-yellow-50 hover:text-yellow-600 transition"
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BottomMenu;
