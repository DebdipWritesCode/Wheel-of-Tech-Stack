import { TextRevealCard } from "@/components/ui/text-reveal-card";
import SpinningImg from "@/components/ui/spinning-img";
import GettingStartedBtn from "@/components/ui/getting-started-btn";

export default function Home() {
  return (
    <div className="">
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <div className="mx-8 flex items-center justify-between">
      <div className="flex flex-col items-center">
        <TextRevealCard
          text="Looking for a new coding challenge?"
          revealText="Spin your way to a new tech stack!"
          className=" h-[350px] w-[800px] bg-transparent border-none"
        />
        <GettingStartedBtn content="Get Started" />
      </div>
      <div className="">
        <SpinningImg src="/HeroBG1.png" alt="Hero Wheel" />
      </div>
    </div>
  );
}
