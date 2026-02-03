import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "wouter";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
                >
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-primary/10 overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Cookie className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-display font-bold text-xl text-[#2D241E]">
                                            Cookie-Hinweis
                                        </h3>
                                        <button
                                            onClick={() => setIsVisible(false)}
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-[#5D4E37] text-sm font-light leading-relaxed">
                                        Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Weitere Informationen finden Sie in unserer{" "}
                                        <Link href="/privacy" className="text-primary hover:underline font-medium">
                                            Datenschutzerklärung
                                        </Link>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    onClick={declineCookies}
                                    className="flex-1 rounded-full border-primary/20 text-[#5D4E37] hover:bg-primary/5"
                                >
                                    Ablehnen
                                </Button>
                                <Button
                                    onClick={acceptCookies}
                                    className="flex-1 rounded-full bg-primary text-white hover:bg-primary/90"
                                >
                                    Akzeptieren
                                </Button>
                            </div>
                        </div>
                        <div className="h-1.5 bg-gradient-to-r from-primary to-secondary" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
