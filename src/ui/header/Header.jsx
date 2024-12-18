import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import ToggleSidebar from "./ToggleSidebar";
import TranslationButton from "./TranslationButton";

function Header({ toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <header className="flex h-[70px] items-center justify-between bg-colorGrey2 px-[10px] shadow-lg md:px-[20px]">
      <div className="flex items-center gap-[10px] md:gap-[20px]">
        <ToggleSidebar toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex items-center justify-center gap-[10px] md:gap-[20px]">
        <TranslationButton />
        <DarkModeToggle />
        <div
          className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-colorGrey hover:text-colorBrand"
          onClick={() => navigate("/account")}
        >
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
