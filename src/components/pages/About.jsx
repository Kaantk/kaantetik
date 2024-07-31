import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto md:w-11/12 py-5 lg:py-10">
        <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          <img
            src="src/assets/images/KaanTetikPhoto.jpeg"
            alt="Kaan Tetik Photo"
            className="h-48 rounded-sm md:h-56 lg:h-72"
            style={{ boxShadow: "8px 8px teal" }}
          />
          <div className="flex flex-col gap-3 lg:w-3/5">
            <p className="font-light text-xl lg:text-2xl">
              Merhaba! Ben Kaan 👋🏻
            </p>
            <div className="flex flex-col text-4xl font-extrabold lg:text-6xl text-black-light">
              <p>
                <span>
                  <b className="text-purple-dark">Front</b>
                </span>
                end
              </p>
              <p>Developer</p>
            </div>
            <p className="text-black-lightest text-justify lg:text-xl">
              Yeni teknolojileri keşfederek ve güncel trendlerle birlikte kendi
              yeteneklerimi geliştirmeye her zaman hevesliyim. Bu yeni
              teknolojilerle, kullanıcıların seveceği, etkileyici ve kullanıcı
              dostu web siteleri oluşturmanıza yardımcı olabilirim.
            </p>
            <div className="flex items-center gap-6">
              <Link
                className="border flex items-center p-2 drop-shadow-sm text-xs lg:text-base gap-2 transition-all ease-in-out duration-300 transform hover:-translate-y-1"
                style={{ boxShadow: "5px 5px teal" }}
              >
                Projeleri Göster <IoDocumentTextOutline className="text-base" />
              </Link>
              <Link
                className="border flex items-center p-2 drop-shadow-sm text-xs lg:text-base gap-2 transition-all ease-in-out duration-300 transform hover:-translate-y-1"
                style={{ boxShadow: "5px 5px teal" }}
              >
                İletişime Geç <FaPhone className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
