import React from "react";

interface VideoBackgroundProps {
  src: string;
  ariaLabel?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  ariaLabel,
}) => (
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src={src}
    autoPlay
    loop
    muted
    playsInline
    aria-label={ariaLabel || "Background video showcasing fleet management"}
  ></video>
);

const HeroContent: React.FC = () => (
  <div className="container relative z-10 px-6 py-16 mt-48 mx-auto text-center">
    <div className="max-w-lg mx-auto">
      <h1 className="text-4xl font-semibold text-white lg:text-5xl drop-shadow-md">
        Car Rental Fleets Telematic Solutions By Redtail
      </h1>
      <p className="mt-10 text-white drop-shadow-md">
      Maximize Fleet Efficiency, Reduce Costs, and Enhance Customer Experience
      </p>
      <button
        className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-white bg-rb-100 rounded-lg hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black capitalize drop-shadow-md transition duration-300 ease-in-out"
        aria-label="Start Your Free Trial"
      >
        <a href="#contact">Start Your Free Trial</a>
      </button>
      <p className="mt-3 text-sm text-rb-300 drop-shadow-md">
        No credit card required
      </p>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[50rem] overflow-hidden">
      <VideoBackground src="rental_cars.mp4" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <HeroContent />
    </div>
  );
};

export default Hero;
