import React from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import { HashLink } from "react-router-hash-link";
import KaanTetikCV from "~/assets/static/Kaan Tetik CV.pdf";

export const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = KaanTetikCV;
    link.download = "KaanTetikCV.pdf";
    link.click();
  };

  const menuItems = [
    { id: 1, title: "Hakkında", href: "hakkinda" },
    { id: 2, title: "Projelerim", href: "projelerim" },
    { id: 3, title: "Tecrübelerim", href: "tecrubelerim" },
    { id: 4, title: "İletişim", href: "iletisim" },
  ];

  return (
    <>
      <header className="border-b-[1px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between pl-3 md:pl-0 md:w-11/12 lg:py-3">
          <div className="flex items-center">
            <Link hrefLang="#">
              <img
                src="src/assets/svg/KaanTetikLogo.svg"
                alt="Kaan Tetik Photo"
                className="w-16 lg:w-20"
              />
            </Link>
            <span className="text-xs font-light ml-2 lg:text-sm">
              | Jr. Frontend Developer
            </span>
          </div>
          <div className="lg:hidden">
            <Hamburger size={20} />
          </div>
          <nav className="hidden lg:flex items-center justify-between w-2/5">
            {menuItems.map((item) => (
              <ol key={item.id}>
                <li>
                  <HashLink
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="border-transparent hover:border-purple-dark hover:border-b-2 duration-100 ease-in-out hover:text-purple-dark border-purple-dark"
                  >
                    {item.title}
                  </HashLink>
                </li>
              </ol>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button
              className="border py-2 px-6 text-sm drop-shadow-sm transition-all ease-in-out duration-300 transform hover:-translate-y-1"
              style={{ boxShadow: "5px 5px teal" }}
              onClick={handleDownload}
            >
              CV İndir
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
