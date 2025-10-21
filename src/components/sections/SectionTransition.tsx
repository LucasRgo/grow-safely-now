import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface SectionTransitionProps {
    text: string;
}

export const SectionTransition = ({ text }: SectionTransitionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-8 md:py-10">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-4">

                    {/* Transition text */}
                    <p className="text-base md:text-lg lg:text-xl text-foreground font-medium leading-relaxed">
                        {text}
                    </p>
                    {/* Animated arrow */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex justify-center">
                        <ArrowDown className="h-6 w-6 text-success/60" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
