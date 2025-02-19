"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MapContact from "./MapContact";
import { useState } from "react";

const Inform = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Schema Validation
  const formSchema = yup.object({
    name: yup.string().required("Name must be at least 2 characters"),
    email: yup.string().email("Invalid email").required("Please Enter email"),
    message: yup.string().required("Message must be at least 10 characters"),
  });

  // ใช้ React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setSuccessMessage("Email sent successfully!");
      reset(); // เคลียร์ฟอร์มหลังจากส่งสำเร็จ
    } catch (error) {
      setSuccessMessage("Failed to send email");
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
          {successMessage && (
            <p
              className={`text-center mt-2 ${
                successMessage.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {successMessage}
            </p>
          )}
        </form>
        <MapContact />
      </div>
    </div>
  );
};

export default Inform;
