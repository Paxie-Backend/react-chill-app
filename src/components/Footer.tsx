export default function Footer() {
  return (
    <footer>
      <div className="footer-content-wrapper">
        <div className="copyright-information">
          <img src="assets/images/chill-app-logo.svg" alt="Chill App Logo" />
          <p>@2026 Chill All Rights Reserved.</p>
        </div>
        <div className="footer-dropdown-wrapper">
          <div className="footer-genre">
            <p>Genre</p>
            <div className="genre-contents">
              <div className="genre-content">
                <p>Aksi</p>
                <p>Anak-anak</p>
                <p>Anime</p>
                <p>Britania</p>
              </div>
              <div className="genre-content">
                <p>Drama</p>
                <p>Fantasi Ilmiah &amp; Fantasi</p>
                <p>Kejahatan</p>
                <p>Kdrama</p>
              </div>
              <div className="genre-content">
                <p>Komedi</p>
                <p>Petualangan</p>
                <p>Perang</p>
                <p>Romantis</p>
              </div>
              <div className="genre-content">
                <p>Sains &amp; Alam</p>
                <p>Thriller</p>
              </div>
            </div>
          </div>
          <div className="footer-genre">
            <p>Bantuan</p>
            <div className="genre-contents">
              <div className="genre-content">
                <p>FAQ</p>
                <p>Kontak Kami</p>
                <p>Privasi</p>
                <p>Syarat &amp; Ketentuan</p>
              </div>
            </div>
          </div>
          <div className="footer-dropdown">
            <button className="footer-dropdown-button" type="button">
              <span>Genre</span>
              <img src="assets/images/chevron-right.svg" alt="arrow" />
            </button>
            <div className="footer-dropdown-list">
              <p>Aksi</p>
              <p>Anak-anak</p>
              <p>Anime</p>
              <p>Britania</p>
              <p>Drama</p>
              <p>Fantasi Ilmiah &amp; Fantasi</p>
              <p>Kejahatan</p>
              <p>Kdrama</p>
              <p>Komedi</p>
              <p>Petualangan</p>
              <p>Perang</p>
              <p>Romantis</p>
              <p>Sains &amp; Alam</p>
              <p>Thriller</p>
            </div>
          </div>
          <div className="footer-dropdown">
            <button className="footer-dropdown-button" type="button">
              <span>Bantuan</span>
              <img src="assets/images/chevron-right.svg" alt="arrow" />
            </button>
            <div className="footer-dropdown-list">
              <p>FAQ</p>
              <p>Kontak Kami</p>
              <p>Privasi</p>
              <p>Syarat &amp; Ketentuan</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
