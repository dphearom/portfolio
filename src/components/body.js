//link--https://xd.adobe.com/view/b85702f7-c9c2-4775-8bf6-e309b6e9a207-ed04/screen/19424749-18dc-4750-8182-c02ee2d76868/?fullscreen
//link--https://qnswesleyan.wescreates.wesleyan.edu/
import klembox from "../assets/klembox.png";
import questbridge from "../assets/questbridge.png";
import ourcampus from "../assets/ourcampus.png";
import textsimilarity from "../assets/text_similarity.png";
import musicrating from "../assets/musicrating.png";

export default function Body() {
  const project = [
    {
      name: "Wesleyan's QuestBridge Website",
      desc: "asdsafsadas",
      date: "03/2022 - Present",
      image: questbridge,
    },
    {
      name: "Text Similarity Detection Tool",
      desc: "asdsafsadas",
      date: "05/2022-07/2022",
      image: textsimilarity,
    },
    {
      name: "UI/Front-end Internship at Klembox",
      desc: "asdsafsadas",
      date: "05/2021-09/2021",
      image: klembox,
    },
    {
      name: "Music Rating Web Application",
      desc: "asdsafsadas",
      date: "",
      image: musicrating,
    },
    {
      name: "UI Designer for OurCampus",
      desc: "asdsafsadas",
      date: "",
      image: ourcampus,
    },
  ];

  return (
    <>
      <div className="w-full pt-16 flex flex-col container mx-auto">
        <div>
          <section>
            <h1 className="border-b-[#2E8BC0] border-4 border-t-0 border-x-0 w-[140px] text-white">
              About Me
            </h1>
            <p className="text-white pt-16">
              I am a senior at Wesleyan University majoring in Computer Science
              with a passion for{" "}
              <span className="text-[#2E88C0]">Web Development</span>,{" "}
              <span>Software Development</span>, and <span>Data Science</span>.
              Throughout my academic years, I pursue the opportunities to grow
              and challenge my development skills through being a UI designer
              for Wesleyan's first consolidated application OurCampus, a
              researcher in data and text mining, and a front-end team leader
              for Wesleyan University's QuestBridge Chapter.
            </p>
            <br></br>
            <p>
              In addition to my passion for coding, I love road cycling and
              assembling model car kits. Living in Middletown, Connecticut for 3
              years, I enjoy the balance between steep climbs and fast roads for
              cycling as well as looking for rare model car kits to add to my
              collections!
            </p>
            <br></br>
            <p>
              If you would like to connect or have a conversation, feel free to <a href="mailto:rduong@wesleyan.edu" className="underline">reach out!</a> 
            </p>
          </section>
        </div>
        <div className="pt-16" id="projects">
          <h1 className="border-b-[#2E8BC0] border-4 border-t-0 border-x-0 w-[120px] text-white">
            Projects
          </h1>
          <section className="grid grid-row-4 md:grid-cols-3 gap-7 px-5 pt-16 text-white mx-auto text-">
            {project.map((project) => {
              return (
                <div className="border-2 rounded-lg border-[#2E8BC0] p-2 transition duration-[850ms] hover:scale-110 hover:border-[3px]">
                  <div>
                    <img
                      src={project.image}
                      alt="Screenshot of the UI design"
                      className="object-cover w-full h-48"
                    />
                    <h2 className="text-2xl pt-4">{project.name}</h2>
                    <h2 className="text-sm text-gray-300">{project.date}</h2>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}
