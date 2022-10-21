import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import heropic from "../assets/heropic.jpg";
import AutoTyping, { BlinkCursor } from "react-auto-typing";

export default function Hero() {
  return (
    <>
      <div className="w-full container mx-auto pt-10">
        <div className="w-full px-4 flex justify-center items-center flex-col text-white text-center">
          <h2 className="sm:text-4xl md:text-6xl py-2 text-[#2E8BC0] font-bold">
            <span className="text-white">Hi, I am</span>
            <AutoTyping
              active
              textRef=" Phearom Duong"
              writeSpeed={150}
              deleteSpeed={150}
              delayToWrite={1000}
              delayToDelete={2000}
            />
           
            <BlinkCursor active blinkSpeed={500} />
          </h2>
          <h3 className="text-2xl py-2">Developer</h3>
          <p className="text-md py-5 leading-8 text-white w-96">
            I enjoy learning about Web Development and is currently pursing a
            career in Front-End engineer or Software Engineer
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-white">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="justify-center">
            <img
              src={heropic}
              className="sm:w-86 sm:h-96 lg:w-[25rem] lg:h-[30rem] rounded-xl object-cover mx-auto sm:pt-4 lg:pt-10"
              alt="Rome in front of Time Square, his favorite spot in NYC"
            />
          </div>
        </div>
      </div>
    </>
  );
}
