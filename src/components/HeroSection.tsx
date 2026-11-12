export default function HeroSection() {
  return (
    <section className="aspect-[16/10] w-full bg-[linear-gradient(to_top,hsla(210,8%,10%,1),transparent),url('/assets/images/bg-hero.png')] bg-cover bg-center px-[22px] pt-[67px] pb-10 sm:aspect-auto sm:h-[587px] sm:px-20 sm:pt-[274px] sm:pb-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl leading-[120%] font-bold text-white sm:text-5xl sm:leading-[110%]">
          Duty After School
        </h1>
        <p className="line-clamp-2 text-xs leading-[120%] font-medium tracking-[0.2px] text-white sm:w-[668px] sm:line-clamp-4 sm:text-lg sm:leading-[140%]">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>
        <div className="mt-0 flex items-center gap-2 sm:mt-5">
          <button className="cursor-pointer rounded-[48px] border-0 bg-[hsla(233,81%,32%,1)] px-3 py-1 text-xs leading-[140%] font-bold tracking-[0.2px] text-white sm:px-[26px] sm:py-[10px] sm:text-base">
            Mulai
          </button>
          <button className="flex cursor-pointer items-center justify-center rounded-[48px] border-0 bg-[hsla(195,11%,15%,1)] px-3 py-1 text-xs sm:px-[26px] sm:py-[10px] sm:text-base">
            <img
              className="sm:h-6 sm:w-[133px]"
              src="assets/images/text-selengkapnya.svg"
              alt="selengkapnya"
            />
          </button>
          <img
            className="sm:h-[45px] sm:w-[52px]"
            src="assets/images/18-icon.svg"
            alt="18-icon"
          />
          <button className="ml-auto flex cursor-pointer border-0 bg-transparent">
            <img
              className="sm:h-11 sm:w-11"
              src="assets/images/volume-off.svg"
              alt="volume button"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
