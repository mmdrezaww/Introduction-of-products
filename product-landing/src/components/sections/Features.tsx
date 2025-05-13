import React from "react";

const features = [
    {
        title: "طلاهای اصیل و باکیفیت",
        description: "ما بهترین و باکیفیت‌ترین طلاها را از معتبرترین سازندگان ارائه می‌دهیم.",
        icon: "💎",
    },
    {
        title: "ضمانت اصالت کالا",
        description: "تمامی محصولات دارای ضمانت اصالت و تاییدیه‌های معتبر هستند.",
        icon: "✅",
    },
    {
        title: "خرید آنلاین و امن",
        description: "با سیستم پرداخت امن و مطمئن، طلای مورد نظر خود را به راحتی خریداری کنید.",
        icon: "🔒",
    },
];

const Features: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">
                ویژگی‌های فروشگاه ما
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="p-6 border border-yellow-500 rounded-lg shadow-lg">
                        <span className="text-4xl">{feature.icon}</span>
                        <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                        <p className="text-gray-700 mt-2">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
