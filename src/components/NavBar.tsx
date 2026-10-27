import { useState } from "react";
import { NavLink } from "react-router";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    showDropdown ? setShowDropdown(false) : setShowDropdown(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <nav className="nav-bar">
      <img src="assets/images/chill-video-logo.svg" alt="app-logo" className="logo-app-mobile" />
      <img src="assets/images/chill-app-logo.svg" alt="app-logo" className="logo-app-desktop" />
      <ul className="nav-links">
        <li>
          <NavLink to="#">Series</NavLink>
        </li>
        <li>
          <NavLink to="#">Film</NavLink>
        </li>
        <li>
          <NavLink to="#">Daftar Saya</NavLink>
        </li>
      </ul>
      <div className="dropdown">
        <button className="user-dropdown-button" type="button" onClick={handleShowDropdown}>
          <img src="assets/images/avatar.svg" className="user-avatar" />
        </button>
        <div className="dropdown-list" style={{ display: showDropdown ? "block" : "none" }}>
          <ul>
            <li>
              <img src="assets/images/account.svg" alt="Account Icon" />
              <NavLink to="#">Profil Saya</NavLink>
            </li>
            <li>
              <img src="assets/images/star.svg" alt="Star" />
              <NavLink to="#">Ubah Premium</NavLink>
            </li>
            <li>
              <img src="assets/images/exit-icon.svg" alt="Logout Icon" />
              <NavLink to="#" onClick={handleLogout}>
                Keluar
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
