"use client";
import { motion } from "framer-motion";

export default function SpinningImg({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.img
      className="ml-10 h-[500px]"
      src={src}
      alt={alt}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  );
}
