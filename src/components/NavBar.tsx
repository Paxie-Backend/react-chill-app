import { useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../context/auth-context";

const navigationItems = [
  { label: "Series", to: "#" },
  { label: "Film", to: "#" },
  { label: "Daftar Saya", to: "#" },
];

const accountMenuItems = [
  { label: "Profil Saya", icon: "account.svg", to: "#" },
  { label: "Ubah Premium", icon: "star.svg", to: "#" },
  { label: "Keluar", icon: "exit-icon.svg", to: "/login" },
];

const navigationLinkClass =
  "text-[10px] leading-none font-medium tracking-[0.2px] text-white hover:text-[rgba(253,254,255,0.593)] sm:text-lg sm:leading-[140%]";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { signOut } = useAuth();

  return (
    <nav className="flex items-center gap-3 px-5 py-1.5 sm:px-20 sm:py-[25px]">
      <img
        src="assets/images/chill-video-logo.svg"
        alt="app-logo"
        className="block sm:hidden"
      />
      <img
        src="assets/images/chill-app-logo.svg"
        alt="app-logo"
        className="hidden sm:mr-20 sm:block sm:h-11 sm:w-[104px]"
      />
      <ul className="m-0 flex flex-1 list-none items-center gap-3 p-0 sm:gap-20">
        {navigationItems.map(({ label, to }) => (
          <li key={label}>
            <NavLink className={navigationLinkClass} to={to}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="relative">
        <button
          className="cursor-pointer border-0 bg-transparent"
          type="button"
          aria-haspopup="true"
          aria-expanded={showDropdown}
          onClick={() => setShowDropdown((visible) => !visible)}
        >
          <img
            src="assets/images/avatar.svg"
            alt="User menu"
            className="sm:h-10 sm:w-[76px]"
          />
        </button>
        <div
          className={`absolute right-0 z-10 rounded bg-[hsla(210,8%,10%,1)] py-1 shadow-[0_0_1px_hsla(215,9%,27%,0.31)] ${showDropdown ? "block" : "hidden"}`}
        >
          <ul className="m-0 list-none p-0">
            {accountMenuItems.map(({ label, icon, to }) => (
              <li
                key={label}
                className="flex h-8 w-[113px] items-center gap-[5px] px-3 py-2 text-[10px] leading-[140%] font-medium tracking-[0.2px] text-white hover:text-[rgba(253,254,255,0.593)]"
              >
                <img src={`assets/images/${icon}`} alt="" />
                <NavLink
                  className="cursor-pointer text-white no-underline active:text-[hsla(230,100%,60%,1)]"
                  to={to}
                  onClick={label === "Keluar" ? signOut : undefined}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
