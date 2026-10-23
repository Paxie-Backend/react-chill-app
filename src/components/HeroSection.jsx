export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Duty After School</h1>
        <p className="hero-paragraph">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>
        <div className="hero-content-button">
          <button className="btnMulai">Mulai</button>
          <button className="btnSelengkapnya">
            <img src="assets/images/text-selengkapnya.svg" alt="selengkapnya" />
          </button>
          <img src="assets/images/18-icon.svg" alt="18-icon" />
          <button className="btnVolume">
            <img
              className=""
              src="assets/images/volume-off.svg"
              alt="volume button"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
