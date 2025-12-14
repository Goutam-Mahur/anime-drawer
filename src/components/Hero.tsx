const Hero = () => {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <img
          src="./mylogo.svg"
          alt="logo"
          className="
            object-contain
            w-16 h-16
            sm:w-20 sm:h-20
            md:w-24 md:h-24
          "
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <img src="/anime.png" alt="anime" className="object-contain" />
      </div>
    </header>
  );
};

export default Hero;
