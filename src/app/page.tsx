import { TextRevealCard } from "@/components/ui/text-reveal-card";
import SpinningImg from "@/components/ui/spinning-img";

export default function Home() {
  return (
    <div className="">
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <div className="mx-8 flex items-center bg-black justify-between">
      <div className="flex flex-col items-center">
        <TextRevealCard
          text="Looking for a new coding challenge?"
          revealText="Spin your way to a new tech stack!"
          className=" h-[350px] w-[800px] bg-black border-none"
        />
        <button className="px-8 py-2 rounded-3xl bg-primary text-white font-bold transition duration-200 hover:bg-white hover:text-black w-[250px] h-[50px] border-2 border-transparent hover:border-primary">
          Get Started
        </button>
      </div>
      <div className="">
        <SpinningImg src="/HeroBG1.png" alt="Hero Wheel" />
      </div>
    </div>
  );
}
