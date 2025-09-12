import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://lh3.googleusercontent.com/ogw/AF2bZyhAvgNxU_eGA63KFq40aAu0_zKa5pzDGoamzhPWvzGhGg=s32-c-mo"
          className="logo-img"
          alt="chowmate logo"
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
