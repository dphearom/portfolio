import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import heropic from "../assets/heropic.jpg";
import videoHero from "../assets/herovid.mp4";

export default function Hero() {
  return (
    <>
      <div className="w-full h-[90vh] ">
        <video
          className="object-cover h-screen w-full absolute -z-10"
          src={videoHero}
          autoPlay
          loop
          muted
        />
        <div className="w-full h-[80%] px-4 flex justify-center items-center flex-col text-white text-center pt-[12rem]">
          <h2 className="text-6xl py-2 text-[#79A7D3] font-bold">
            Phearom Duong
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
              className="w-86 h-96 rounded object-cover mx-auto pt-4"
              alt="Rome in front of Time Square, his favorite spot in NYC"
            />
          </div>
        </div>
      </div>
    </>
  );
}
