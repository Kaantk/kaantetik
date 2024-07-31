import React, { useState } from "react";
import { projects } from "~/data/Projects";
import ReactModal from "react-modal";

export const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto md:w-11/12 py-5">
        <div>
          <p className="text-3xl font-extrabold text-black lg:text-5xl my-5">
            Projelerim<span className="text-purple-800">.</span>
          </p>
        </div>
        <div className="flex md:flex-row flex-wrap gap-4 lg:gap-8 justify-around">
          {projects.map((item) => (
            <div
              className="flex items-center w-full md:w-5/12"
              key={item.id}
              onClick={() => openModal(item)}
            >
              <div className="group h-52 w-full lg:h-80 [perspective:1000px]">
                <div className="relative h-full w-full rounded-md shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full rounded-md object-cover shadow-xl shadow-black/40"
                      src={item.img}
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-md text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div
                      className="flex min-h-full flex-col gap-4 items-center justify-center px-4"
                      style={{ backgroundColor: "#00000063" }}
                    >
                      <h1 className="text-xl font-bold">{item.name}</h1>
                      <button
                        key={item.id}
                        onClick={() => openModal(item)}
                        className="border py-2 px-3 rounded-sm transition-all ease-in-out duration-300 transform hover:-translate-y-1 hover:bg-black-lightest/60"
                      >
                        Detayları Gör
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            padding: "0px",
            borderRadius: "2px",
            border: "none",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            backgroundColor: "#00000063",
          },
        }}
      >
        {selectedProject && (
          <div
            style={{
              backgroundImage: `url(${selectedProject.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
          >
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        )}
      </ReactModal>
    </>
  );
};
