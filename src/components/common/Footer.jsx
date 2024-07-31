import React from "react";
import MediaIcons from "./MediaIcons";

export const Footer = () => {
  return (
    <>
      <footer className="border-t-[1px]">
        <div className="max-w-7xl mx-auto md:w-11/12 flex flex-col md:flex-row items-center justify-between p-2 lg:p-4 gap-3">
          <div className="flex flex-col items-center gap-2">
            <div>
              <p className="font-light">Kaan Tetik</p>
            </div>
            <div>
              <MediaIcons />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div>
              <p className="font-light">© kaan.tk3@gmail.com</p>
            </div>
            <div>
              <p className="text-xs text-center">
                Design -{" "}
                <span className="font-medium">
                  Bu site Kaan Tetik tarafından React ile hazırlanmıştır.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
