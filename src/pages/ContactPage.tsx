import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Instagram,
    Linkedin,
    Facebook,
} from "lucide-react";

function ContactPage() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-black text-white overflow-hidden">

                {/* Hero Section */}
                <section className="relative border-b border-white/[0.08]">

                    {/* Glow Effects */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">

                        <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4">
                            Contact Us
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            Let’s Build Something <br />
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                Extraordinary
                            </span>
                        </h1>

                        <p className="mt-8 max-w-3xl mx-auto text-lg text-zinc-400 leading-relaxed">
                            Have a project idea, business inquiry, or just want to say hello?
                            We'd love to hear from you.
                        </p>

                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left Side */}
                        <div>

                            <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">
                                Get In Touch
                            </p>

                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                                We’d Love To Hear From You
                            </h2>

                            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                                Whether you're looking for a modern website, scalable web
                                application, or complete digital solution — our team is ready
                                to help bring your vision to life.
                            </p>

                            <div className="space-y-6">

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-indigo-400" />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            Email
                                        </h3>

                                        <p className="text-zinc-400">
                                            qodextech@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-purple-400" />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            Phone
                                        </h3>

                                        <p className="text-zinc-400">
                                            +91 98765 43210
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-emerald-400" />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            Location
                                        </h3>

                                        <p className="text-zinc-400">
                                            Kerala, India
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Socials */}
                            <div className="mt-12">

                                <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-5">
                                    Follow Us
                                </p>

                                <div className="flex items-center gap-4">

                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>

                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>

                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>

                                    {/* X (Twitter) */}
                                    <a
                                        href="https://x.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300"
                                    >
                                        <span className="text-[18px] font-semibold leading-none">𝕏</span>
                                    </a>

                                </div>

                            </div>

                        </div>

                        {/* Contact Form */}
                        <div className="rounded-3xl border border-white/[0.08] bg-zinc-950/50 p-8 md:p-10 backdrop-blur-sm">

                            <h3 className="text-2xl font-semibold mb-8">
                                Send a Message
                            </h3>

                            <form className="space-y-6">

                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full rounded-2xl border border-white/[0.08] bg-zinc-900 px-5 py-4 text-white outline-none focus:border-indigo-500/40 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-2xl border border-white/[0.08] bg-zinc-900 px-5 py-4 text-white outline-none focus:border-indigo-500/40 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Project discussion"
                                        className="w-full rounded-2xl border border-white/[0.08] bg-zinc-900 px-5 py-4 text-white outline-none focus:border-indigo-500/40 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        Message
                                    </label>

                                    <textarea
                                        rows={6}
                                        placeholder="Tell us about your project..."
                                        className="w-full rounded-2xl border border-white/[0.08] bg-zinc-900 px-5 py-4 text-white outline-none resize-none focus:border-indigo-500/40 transition-colors"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-4 text-sm font-medium text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] transition-all duration-300"
                                >
                                    Send Message
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>

                            </form>

                        </div>

                    </div>
                </section>

            </div>

            <Footer />
        </>
    );
}

export default ContactPage;