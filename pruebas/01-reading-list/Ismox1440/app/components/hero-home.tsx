"use client";
import { motion as m } from "framer-motion";
import { container } from "@/utils/variants-animations";
import { AnimatedCharacter } from "./animated-character";
import { AnimatedTextWord } from "./animated-words";
import Link from "next/link";
import { Sparkle } from "lucide-react";
import { righteous } from "../fonts";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section className="h-screen  flex-col w-full rounded-b-[4rem] lg:rounded-b-[7.5rem] bg-white border-4 border-dark flex justify-center sm:justify-end gap-20 items-center relative overflow-hidden">
      <div className="flex flex-col gap-8 text-center px-4">
        <div className="flex flex-col gap-2">
          <m.div
            className="flex justify-center flex-col"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <p className={`leading-7 text-orange font-semibold text-center`}>
              Ismael Saragusti 🧡
            </p>
            <AnimatedCharacter text="Reading List" />
          </m.div>
          <div className="flex justify-between">
            <Sparkle />
            <AnimatedTextWord text="Una app de lista de libros para el desafio tecnico de midudev" />
            <Sparkle />
          </div>
        </div>
        <div>
          <Link
            href="/home"
            className={`hover:scale-105 transition-all text-dark bg-greeny rounded-md font-body cursor-pointer border-2 border-b-4 active:border-b-2 leading-none inline-block font-extrabold border-dark px-6 py-3`}
          >
            Empezar
          </Link>
        </div>
      </div>
      <Image
        className="max-w-[1000px] w-full"
        src="https://res.cloudinary.com/dlekwh1wn/image/upload/v1689366315/prueba1_v09qme.svg"
        alt="hero image"
        width={1000}
        height={1000}
      />
    </section>
  );
};
