const Button = ({ text, className }) => {
  return (
    <div>
      <button
        className={`w-[170px] h-[48px] text-[20px] leading-[25px] bg-[#212529] text-white hover:bg-sky-800 text-center transition-all duration-300 font-normal rounded-md ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
