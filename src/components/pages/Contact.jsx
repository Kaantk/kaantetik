import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ContactValidation } from "~/validations/ContactValidation";
import { IoIosSend } from "react-icons/io";
import { addDoc } from "firebase/firestore";
import { ref } from "~/firebase/firebase";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    const mail = {
      userName: values.fullName,
      mail: values.email,
      message: values.message,
    };
    addDoc(ref, mail)
      .then(() => {
        toast.success("Veri eklendi", {
          position: toast.POSITION.TOP_RIGHT,
        });
        resetForm(); // Formu sıfırlama
      })
      .catch((error) => {
        console.error("Hata:", error);
        toast.error("Veri eklenirken bir hata oluştu", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <section className="max-w-7xl mx-auto md:w-11/12 py-5">
      <ToastContainer />
      <div>
        <p className="text-3xl font-extrabold text-black lg:text-5xl my-5">
          İletişim<span className="text-purple-800">.</span>
        </p>
      </div>
      <Formik
        validationSchema={ContactValidation}
        initialValues={{
          fullName: "",
          email: "",
          message: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form className="flex flex-col gap-4 lg:w-5/12 lg:mx-auto">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName">Ad Soyad</label>
              <Field
                name="fullName"
                type="text"
                className="border-b-2 bg-transparent outline-none py-1 text-sm text-black-lightest"
              />
              <ErrorMessage
                name="fullName"
                component="small"
                className="text-purple-dark"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">E-mail</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="border-b-2 bg-transparent outline-none py-1 text-sm text-black-lightest"
              />
              <ErrorMessage
                name="email"
                component="small"
                className="text-purple-dark"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Mesajınız</label>
              <Field
                as="textarea"
                name="message"
                rows={4}
                className="border-b-2 bg-transparent outline-none py-1 text-sm text-black-lightest"
              />
              <ErrorMessage
                name="message"
                component="small"
                className="text-purple-dark"
              />
            </div>
            <button
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              className={`border drop-shadow-sm rounded-sm flex items-center gap-2 justify-center py-2 text-sm w-1/2 mx-auto transition-all ease-in-out duration-300 transform ${
                isValid && dirty && !isSubmitting
                  ? "hover:cursor-pointer hover:bg-opacity-80 hover:-translate-y-1"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Gönder
              <IoIosSend className="text-2xl" />
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
