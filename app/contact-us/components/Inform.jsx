"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const formSchema = yup.object({
  name: yup.string().required("Name must be at least 2 characters"),
  email: yup.string().email("Invalid email").required("Please Enter email"),
  message: yup.string().required("Message must be at least 10 characters"),
});

const Inform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="pb-[93px] px-32 max-sm:px-5">
      <div className="flex gap-8 justify-center max-md:flex-col-reverse">
        <form
          action=""
          className="max-w-full w-[575px] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col pb-5">
            <h1
              className={`font-normal text-[20px] leading-[25px] ${
                errors.name ? "" : "pb-4"
              }`}
            >
              Name
            </h1>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <input
              type="text"
              className="bg-[#EEEEEE] h-[38px] border border-black rounded-[5px] max-w-full text-lg pl-2"
              placeholder="Enter your name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col  pb-5">
            <h1
              className={`font-normal text-[20px] leading-[25px] ${
                errors.email ? "" : "pb-4"
              }`}
            >
              Email
            </h1>
            {errors.email && (
              <p className="text-red-500 ">{errors.email.message}</p>
            )}
            <input
              type="text"
              className="bg-[#EEEEEE]  h-[38px] border border-black rounded-[5px] max-w-full text-lg pl-2"
              {...register("email")}
              placeholder="email@example.com"
            />
          </div>
          <div className="flex flex-col pb-5">
            <h1
              className={`font-normal text-[20px] leading-[25px] ${
                errors.message ? "" : "pb-4"
              }`}
            >
              Message
            </h1>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}

            <input
              type="text"
              className="bg-[#EEEEEE]  h-[38px] border border-black rounded-[5px] max-w-full max-sm:h-[141px] text-lg pl-2"
              {...register("message")}
              placeholder="Enter your message"
            />
          </div>
          <div className="pt-5">
            <button
              className="bg-[#212529] text-white text-center w-full h-[48px] rounded-md font-normal text-[20px] leading-[25px]  max-lg:h-[40px] max-lg:text-[16px] max-lg:leading-[20px] hover:bg-sky-800 transition-all duration-300"
              type="Submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="">
          <iframe
            className="w-[575px] h-[384px] border-0 rounded-lg max-w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.150262417772!2d100.492773!3d13.746424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299057145cc81%3A0x7df49a08f511c22e!2z4Lin4Lix4LiU4Lie4Lij4Liw4LmA4LiK4LiV4Li44Lie4LiZ4Lin4Li04Lih4Lil4Lih4Lix4LiH4LiE4Lil4Liy4Lij4Liy4LihICjguKfguLHguJTguYLguJ7guJjguLTguYwp!5e0!3m2!1sth!2sth!4v1738697005600!5m2!1sth!2sth"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Inform;
