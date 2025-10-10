'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { X, Star, Users, Trophy, Rocket, ArrowRight } from 'lucide-react'
import Image from 'next/image'
// import { triggerSideCannonConfetti } from './confetti'



export const WelcomePopup = ({ isOpen, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [selectedCode, setSelectedCode] = useState("+91");

    const countryCodes = [
        { code: "+1", name: "United States", flag: "🇺🇸" },
        { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
        { code: "+61", name: "Australia", flag: "🇦🇺" },
        { code: "+91", name: "India", flag: "🇮🇳" },
        { code: "+971", name: "UAE", flag: "🇦🇪" },
        { code: "+49", name: "Germany", flag: "🇩🇪" },
        { code: "+33", name: "France", flag: "🇫🇷" },
        { code: "+81", name: "Japan", flag: "🇯🇵" },
        { code: "+1-CA", name: "Canada", flag: "🇨🇦" },
    ];

    const slides = [
        {
            title: "Welcome to Parwanix 🚀",
            subtitle: "Transform Your Ideas Into Reality",
            description:
                "We're a premium software development company specializing in cutting-edge digital solutions.",
            image: "/image/hero.png",
            stats: [
                { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Happy Clients", value: "100+" },
                { icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Projects", value: "500+" },
                { icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Rating", value: "5.0" },
            ],
        },
        {
            title: "Our Expertise 💡",
            subtitle: "Full-Stack Development Solutions",
            description:
                "From mobile apps to enterprise software, we deliver exceptional digital experiences.",
            image: "/image/computer.jpg",
            features: [
                "🔥 Mobile App Development",
                "⚡ Web Development",
                "🛒 E-commerce Solutions",
                "🔐 Blockchain Development",
                "🤖 AI Solutions",
                "☁️ Cloud Services",
            ],
        },
        {
            title: "Ready to Start? 🎯",
            subtitle: "Let's Build Something Amazing Together",
            description:
                "Join hundreds of satisfied clients who trusted us with their digital transformation.",
            image: "/image/team_1.jpg",
            cta: true,
        },
        {
            title: "Book a Meeting 📅",
            subtitle: "Let's Talk About Your Project",
            description:
                "Fill out the form below to schedule your free consultation with our experts.",
            image: "/image/team_3.jpg",
            contactForm: true,
        },
    ];


    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const phone = formData.get("phone")?.toString().trim();
        const meetingDate = formData.get("meetingDate")?.toString();
        const meetingTime = formData.get("meetingTime")?.toString();

        const payload = {
            name: formData.get("name")?.toString().trim(),
            email: formData.get("email")?.toString().trim(),
            phone: `${selectedCode} ${phone}`,
            message: formData.get("message")?.toString().trim(),
            budget: formData.get("budget")?.toString(),
            meetingDate,
            meetingTime,
        };

        if (!payload.name || !payload.email || !selectedCode || !phone || !payload.message) {
            setLoading(false);
            setError("Please fill in all required fields.");
            return;
        }

        const phoneRegex = /^\d{7,15}$/;
        if (!phoneRegex.test(phone)) {
            setLoading(false);
            setError("Please enter a valid phone number (7–15 digits).");
            return;
        }

        if (!meetingDate || !meetingTime) {
            setLoading(false);
            setError("Please select your preferred meeting date and time.");
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error("Failed to submit form");

            setSuccess("Thanks! Your meeting has been scheduled. We'll confirm via email soon.");
            form.reset();
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (!isOpen) return;

        // Only run auto-slide if we haven't reached the contact form (last slide)
        if (currentSlide >= slides.length - 1) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => {
                // Stop auto-sliding when we reach the 4th slide (index 3)
                if (prev < slides.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(timer);
                    return prev;
                }
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [isOpen, currentSlide, slides.length]);




    const handleGetStarted = () => {
        router.push('/contactUs')
        onClose()
    }

    const handleExploreServices = () => {
        router.push('/#service')
        onClose()
    }

    if (!isOpen) return null

    const currentSlideData = slides[currentSlide]

    return (
        <AnimatePresence>
            <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center py-2 px-2 sm:p-4"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[96vh] sm:h-auto relative shadow-2xl overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white transition-colors shadow-lg"
                    >
                        <X size={16} className="sm:w-5 sm:h-5 text-slate-600" />
                    </button>

                    <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 flex space-x-1.5 sm:space-x-2">
                        {slides.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`h-1.5 sm:h-2 rounded-full ${index === currentSlide ? 'bg-cyan-500' : 'bg-gray-300'
                                    }`}
                                animate={{ width: index === currentSlide ? 20 : 6 }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col lg:grid lg:grid-cols-2 h-full min-h-[400px] sm:min-h-[500px]">
                        <div className="order-2 lg:order-1 py-2 pb-8 px-3 sm:p-6 lg:p-12 flex flex-col justify-center flex-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-full flex flex-col justify-center"
                                >
                                    <motion.h2
                                        className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1 sm:mb-4 leading-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {currentSlideData.title}
                                    </motion.h2>

                                    <motion.h3
                                        className="text-base sm:text-lg lg:text-xl text-cyan-600 font-semibold mb-1 sm:mb-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {currentSlideData.subtitle}
                                    </motion.h3>
                                    <motion.p
                                        className="text-sm sm:text-base text-slate-600 mb-2 sm:mb-6 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {currentSlideData.description}
                                    </motion.p>

                                    {currentSlideData.stats && (
                                        <motion.div
                                            className="grid grid-cols-3 gap-2 sm:gap-4 mb-2 sm:mb-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {currentSlideData.stats.map((stat, index) => (
                                                <div key={index} className="text-center">
                                                    <div className="flex justify-center mb-1 sm:mb-2 text-cyan-500">
                                                        {stat.icon}
                                                    </div>
                                                    <div className="font-bold text-sm sm:text-lg text-slate-800">{stat.value}</div>
                                                    <div className="text-xs sm:text-xs text-slate-600 leading-tight">{stat.label}</div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {currentSlideData.features && (
                                        <motion.div
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 mb-2 sm:mb-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {currentSlideData.features.map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="text-xs sm:text-sm text-slate-700 flex items-center py-0.5"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.6 + index * 0.1 }}
                                                >
                                                    {feature}
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {currentSlideData.cta && (
                                        <motion.div
                                            className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <motion.button
                                                onClick={handleGetStarted}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-4 py-2.5 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all text-sm sm:text-base"
                                            >
                                                Get Started <ArrowRight size={16} className="sm:w-4 sm:h-4" />
                                            </motion.button>

                                            <motion.button
                                                onClick={handleExploreServices}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="border-2 border-yellow-400 hover:border-yellow-500 text-slate-800 px-4 py-2.5 rounded-lg sm:rounded-xl font-semibold hover:bg-yellow-50 transition-all text-sm sm:text-base bg-white"
                                            >
                                                Explore Services
                                            </motion.button>
                                        </motion.div>
                                    )}
                                    {currentSlideData.contactForm && (
                                        <form onSubmit={onSubmit} className="grid gap-3 mt-4">
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <input
                                                    name="name"
                                                    required
                                                    placeholder="Full Name *"
                                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                                                />
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder="Email *"
                                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                                                />
                                            </div>

                                            <div className="flex gap-2">
                                                <select
                                                    value={selectedCode}
                                                    onChange={(e) => setSelectedCode(e.target.value)}
                                                    className="w-1/3 rounded-lg border border-gray-300 px-2 py-2 focus:ring-2 focus:ring-indigo-400 text-sm"
                                                >
                                                    {countryCodes.map((c) => (
                                                        <option key={c.code} value={c.code}>
                                                            {c.flag} {c.code}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input
                                                    name="phone"
                                                    required
                                                    placeholder="Phone Number"
                                                    className="w-2/3 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <input
                                                    name="meetingDate"
                                                    type="date"
                                                    required
                                                    min={new Date().toISOString().split("T")[0]}
                                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                                                />
                                                <input
                                                    name="meetingTime"
                                                    type="time"
                                                    required
                                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                                                />
                                            </div>

                                            <textarea
                                                name="message"
                                                required
                                                rows={3}
                                                placeholder="Tell us about your project..."
                                                className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                                            ></textarea>

                                            <select
                                                name="budget"
                                                className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                                            >
                                                 <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-15k">$10,000 - $15,000</option>
                  <option value="15k+">$15,000+ </option>
                                            </select>

                                            {error && (
                                                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                                                    {error}
                                                </p>
                                            )}
                                            {success && (
                                                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                                                    {success}
                                                </p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-600 to-white-60 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95 disabled:opacity-60"
                                            >
                                                {loading ? "Submitting..." : "Schedule Meeting"}
                                            </button>
                                        </form>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="order-1 lg:order-2 relative bg-gradient-to-br from-cyan-50 to-yellow-50 overflow-hidden h-48 sm:h-64 lg:h-auto min-h-[200px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentSlideData.image}
                                        alt={currentSlideData.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 2, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg"
                                    >
                                        <Rocket className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-500" />
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            y: [0, 10, 0],
                                            x: [0, 5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                        className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg"
                                    >
                                        <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" />
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="absolute flex bottom-2 sm:bottom-6 left-1/2 transform -translate-x-1/2 space-x-1.5 sm:space-x-2 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentSlide
                                    ? 'bg-cyan-500 scale-125'
                                    : 'bg-slate-300 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}