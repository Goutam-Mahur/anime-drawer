const Footer = () => {
  return (
    <footer className="w-full bg-[#161921] py-4 px-8 sm:px-16">
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base font-bold text-white">
          © 2025 GM AnimeDrawer
        </p>

        <img
          src="./mylogo.svg"
          alt="logo"
          className="object-contain w-8 h-8 md:w-10 md:h-10"
        />
      </div>
    </footer>
  );
};

export default Footer;
