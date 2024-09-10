import Image from "next/image";
import { TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import Rectangle from "../public/icons/sp.png";

const Contact = () => {
  return (
    <div className="h-max xl:px-12 lg:h-[22rem] p-6 sm:p-8 md:px-10 pt-32 md:pt-40 lg:pt-10 bg-gradient-to-tr dark:from-[#df51ad3e] dark:to-[#eb587d2a] from-[#f6ebeb90] to-[#fff8ec60] flex flex-col lg:flex-row mx-auto rounded-3xl shadow-md drop-shadow-2xl backdrop-blur-xl items-center justify-center lg:justify-between ">
      <div className="order-2 sm:w-[75%] lg:w-[80%] lg:basis-[60%] flex flex-col space-y-6 cirGradient bg-clip-text">
        <h2 className=" tracking-normal bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-semibold selection:text-gray-700 dark:selection:text-white/90 ">
          Say hi!
        </h2>
        <p className="text-sm md:text-md font-normal lg:text-lg xl:text-lg ">
          If you want to contact me, feel free to reach out to me on Twitter or
          Discord. I&apos m always open to new opportunities and collaborations.
        </p>
        <div className="grid grid-cols-2 text-[0.7rem] md:text-[0.85rem] lg:text-base gap-2 md:gap-3 lg:gap-4">
          <a
            href="https://discord.com/users/850470027026759690"
            target="_blank"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
          
            <h5 className="text-transparent ml-10 dark:text-[#2498fe]">
              xyzjesper
            </h5>
          </a>
          <a
            href="https://x.com/xyzjesper"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
           
            <h5 className="text-transparent dark:text-[#ff339c]">
              xyzjesper
            </h5>
          </a>
        </div>
      </div>
      <div className=" order-1 lg:order-2 absolute -rotate-[15deg] lg:rotate-0 lg:flex top-6 right-4 md:top-10 md:right-12 lg:basis-[40%]">
        <Image
          src={Rectangle}
          alt="contact"
          width={750}
          height={650}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,33vw"
          loading="lazy"
          className="rounded-full select-none backdrop-shadow-xl h-24 w-24 md:h-40 md:w-44 lg:w-[15rem] lg:h-[16rem] xl:w-[16rem] xl:h-[18rem]"
        />
      </div>
    </div>
  );
};

export default Contact;
