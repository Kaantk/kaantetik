import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaCheck } from "react-icons/fa6";
export const Experiences = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto md:w-11/12 py-5">
        <div>
          <p className="text-3xl font-extrabold text-black lg:text-5xl my-5">
            Tecrübelerim<span className="text-purple-800">.</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <nav className="flex flex-col gap-4">
            <div className="group flex flex-col gap-2 border-l-0 hover:border-purple-dark active:border-l-2 active:border-purple-dark ps-2">
              <Link
                smooth
                to="#bfb"
                className="duration-100 ease-in-out group-active:text-purple-dark"
              >
                Birleşik Fon Bankası
              </Link>
              <span className="text-black-lightest text-sm">
                Halen devam ediyor
              </span>
            </div>
            <div className="group flex flex-col gap-2 border-l-0 hover:border-purple-dark active:border-l-2 active:border-purple-dark ps-2">
              <Link
                smooth
                to="#ahlpay"
                className="duration-100 ease-in-out group-active:text-purple-dark"
              >
                Ahlatçı Ödeme ve Elektronik Para Hizmetleri
              </Link>
              <span className="text-black-lightest text-sm">
                Halen devam ediyor
              </span>
            </div>
          </nav>
          <div className="flex flex-col max-h-72 md:max-h-36 pe-4 text-justify overflow-scroll overflow-x-hidden gap-5 md:w-3/4">
            <div id="bfb" className="section">
              <h2 className="flex items-center gap-2 font-semibold mb-2">
                <FaCheck className="text-xl text-purple-dark" />
                Birleşik Fon Bankası
              </h2>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, at. Minima cum rem officiis sapiente dolorem? Quam
                culpa hic asperiores beatae exercitationem delectus neque
                molestiae assumenda, ducimus ut facilis dolorem iusto non, quae
                officia earum ratione, atque similique dicta temporibus
                inventore nihil quas quod incidunt? Obcaecati aut aliquid
                architecto provident.
              </p>
            </div>
            <div id="ahlpay" className="section">
              <h2 className="flex items-center gap-2 font-semibold mb-2">
                <FaCheck className="text-xl text-purple-dark" />
                Ahlatçı Ödeme ve Elektronik Para Hizmetleri
              </h2>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, at. Minima cum rem officiis sapiente dolorem? Quam
                culpa hic asperiores beatae exercitationem delectus neque
                molestiae assumenda, ducimus ut facilis dolorem iusto non, quae
                officia earum ratione, atque similique dicta temporibus
                inventore nihil quas quod incidunt? Obcaecati aut aliquid
                architecto provident.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
