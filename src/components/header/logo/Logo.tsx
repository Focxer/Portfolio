import icon from "../../../assets/header-icon.webp";

const Logo = () => {
  return (
    <>
      <a href="/Portfolio" className="flex items-center">
        <img src={icon} alt="Header icon" className="w-10 h-10 mb-2" />
        <p className="text-xl text-violet-600 font-pacifico font-bold">
          Bruno Dev
        </p>
      </a>
    </>
  );
};

export default Logo;
