import React from "react";

const Inform = () => {
  return (
    <div className="pb-[93px] px-32 max-sm:px-5">
      <div className="flex gap-8 justify-center max-md:flex-col-reverse">
        <form action="" className="max-w-full w-[575px] ">
          <div className="flex flex-col gap-4 pb-5">
            <h1 className="font-normal text-[20px] leading-[25px]">Name</h1>
            <input
              type="text"
              className="bg-[#EEEEEE] h-[38px] border border-black rounded-[5px] max-w-full"
            />
          </div>
          <div className="flex flex-col gap-4 pb-5">
            <h1 className="font-normal text-[20px] leading-[25px]">Email</h1>
            <input
              type="text"
              className="bg-[#EEEEEE]  h-[38px] border border-black rounded-[5px] max-w-full"
            />
          </div>
          <div className="flex flex-col gap-4 pb-5">
            <h1 className="font-normal text-[20px] leading-[25px]">Message</h1>
            <input
              type="text"
              className="bg-[#EEEEEE]  h-[38px] border border-black rounded-[5px] max-w-full max-sm:h-[141px]"
            />
          </div>
          <div className="pt-5">
            <button className="bg-[#212529] text-white text-center w-full h-[48px] rounded-md font-normal text-[20px] leading-[25px]  max-lg:h-[40px] max-lg:text-[16px] max-lg:leading-[20px] hover:bg-sky-800 transition-all duration-300">
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
