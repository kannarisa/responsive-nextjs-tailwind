import Image from "next/image";
import React from "react";

const FooterSection = () => {
  return (
    <div className="">
      <div className="flex pt-[51px] pb-[49px] px-[131px] justify-between items-center max-md:px-[40px] max-md:flex-col max-md:py-[40px] max-md:gap-[20px] h-[125px] bg-[#74C69D] max-sm:px-[20px]">
        <div className="flex gap-5">
          <Image
            src="/assets/icon/FacebookIcon.svg"
            width={9.4}
            height={18}
            alt="facebook"
          />
          <Image
            src="/assets/icon/InstagramIcon.svg"
            width={18}
            height={18}
            alt="facebook"
          />
          <Image
            src="/assets/icon/TwitterIcon.svg"
            width={21.87}
            height={18}
            alt="twitter"
          />
          <Image
            src="/assets/icon/PinterestIcon.svg"
            width={13.94}
            height={18}
            alt="pinterest"
          />
          <Image
            src="/assets/icon/WechatIcon.svg"
            width={17.96}
            height={18}
            alt="wechat"
          />
          <Image
            src="/assets/icon/YoutubeIcon.svg"
            width={25.71}
            height={18}
            alt="youtube"
          />
        </div>
        <div>
            <p className="text-white text-[20px] leading-[25px] font-normal">
                © Start, 2022. All Rights Reserved.
            </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
