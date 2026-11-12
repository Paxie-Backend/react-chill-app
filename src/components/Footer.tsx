import { useState } from "react";

interface FooterSectionData {
  title: string;
  columns: string[][];
}

const footerSections: FooterSectionData[] = [
  {
    title: "Genre",
    columns: [
      ["Aksi", "Anak-anak", "Anime", "Britania"],
      ["Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "Kdrama"],
      ["Komedi", "Petualangan", "Perang", "Romantis"],
      ["Sains & Alam", "Thriller"],
    ],
  },
  {
    title: "Bantuan",
    columns: [["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"]],
  },
];

export default function Footer() {
  return (
    <footer className="min-h-[193.75px] border-t border-[hsla(250,81%,94%,0.23)] p-5 sm:mt-[50px] sm:px-20 sm:py-[60px]">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-[215px]">
        <div className="flex flex-col">
          <img
            className="mb-4 sm:mt-[37px] sm:mb-[26px] sm:h-11 sm:w-[163px]"
            src="assets/images/chill-app-logo.svg"
            alt="Chill App Logo"
          />
          <p className="flex flex-col font-['Poppins',sans-serif] text-xs leading-[140%] tracking-[0.2px] text-[hsla(220,2%,76%,1)] sm:text-base sm:leading-[20.4px] sm:tracking-normal">
            @2026 Chill All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-40">
          {footerSections.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, columns }: Readonly<FooterSectionData>) {
  const [isOpen, setIsOpen] = useState(false);
  const items = columns.flat();

  return (
    <>
      <section className="hidden sm:block">
        <h2 className="mb-[15px] text-base leading-[140%] font-bold text-white">
          {title}
        </h2>
        <div className="flex gap-7">
          {columns.map((column, index) => (
            <div
              key={`${title}-${index}`}
              className="flex flex-col gap-[13px] text-base leading-[140%] tracking-[0.2px] text-[hsla(220,2%,76%,1)]"
            >
              {column.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col sm:hidden">
        <button
          className="flex flex-1 cursor-pointer items-center justify-between border-0 bg-transparent hover:rounded-sm hover:bg-[rgba(40,45,48,0.592)]"
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="text-base leading-[140%] font-medium tracking-[0.2px] text-white">
            {title}
          </span>
          <img
            className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            src="assets/images/chevron-right.svg"
            alt=""
          />
        </button>
        <div
          className={`text-base leading-[140%] font-medium tracking-[0.2px] text-[hsla(220,2%,76%,1)] ${isOpen ? "block" : "hidden"}`}
        >
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
    </>
  );
}
