import { motion } from "framer-motion";

export default function FleetImage() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl overflow-hidden shadow-2xl relative group"
                >
                    <img
                        src="/images/fleet-magazin.jpg"
                        alt="Ackert Garten Fuhrpark und Magazin"
                        className="w-full h-[500px] md:h-[600px] object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[3s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E]/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                            Unser Fuhrpark & Magazin
                        </h3>
                        <p className="text-gray-200 font-light max-w-2xl">
                            Immer einsatzbereit für Ihr Projekt. Von unserem Magazin in Trimbach aus koordinieren wir unsere Einsätze in der gesamten Region.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
