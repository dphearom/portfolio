import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto pt-20 pb-[4rem]">
        <div className="flex flex-col items-center">
          <div className="flex flex-row space-x-4">
            <a href="https://www.linkedin.com/in/phearom-d-503862195">
              <AiFillLinkedin className="h-[35px] w-[35px]"/>
            </a>
            <a href="https://github.com/dphearom">
              <AiFillGithub className="h-[35px] w-[35px]"/>
            </a>
          </div>
          <div className="text-center pt-4">
            <h2 className="text-xl">Reach Me at:</h2>
            <a href="mailto:rduong@wesleyan.edu" className="underline">
              rduong@wesleyan.edu
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
