export default function NavBar() {
  return (
    <nav className="nav-bar">
      <img
        src="assets/images/chill-video-logo.svg"
        alt="app-logo"
        className="logo-app-mobile"
      />
      <img
        src="assets/images/chill-app-logo.svg"
        alt="app-logo"
        className="logo-app-desktop"
      />
      <ul className="nav-links">
        <li>
          <a>Series</a>
        </li>
        <li>
          <a>Film</a>
        </li>
        <li>
          <a>Daftar Saya</a>
        </li>
      </ul>
      <div className="dropdown">
        <button className="user-dropdown-button" type="button">
          <img src="assets/images/avatar.svg" className="user-avatar" />
        </button>
        <div className="dropdown-list">
          <ul>
            <li>
              <img src="assets/images/account.svg" alt="Account Icon" />
              <a style={{ color: "hsla(230, 100%, 60%, 1)" }}>Profil Saya</a>
            </li>
            <li>
              <img src="assets/images/star.svg" alt="Star" />
              <a>Ubah Premium</a>
            </li>
            <li>
              <img src="assets/images/exit-icon.svg" alt="Logout Icon" />
              <a>Keluar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
