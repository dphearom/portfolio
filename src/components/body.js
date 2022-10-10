//link--https://xd.adobe.com/view/b85702f7-c9c2-4775-8bf6-e309b6e9a207-ed04/screen/19424749-18dc-4750-8182-c02ee2d76868/?fullscreen
//link--https://qnswesleyan.wescreates.wesleyan.edu/
import klembox from "../assets/klembox.png";

export default function Body() {
  const project = [
    {
      name: "UI/Front-end Internship at Klembox",
      desc: "asdsafsadas",
      date: "",
      image: klembox,
    },
    {
      name: "Wesleyan's QuestBridge Website",
      desc: "asdsafsadas",
      date: "",
      image: klembox,
    },
    {
      name: "Text Similarity Detection Tool",
      desc: "asdsafsadas",
      date: "",
      image: klembox,
    },
    {
      name: "Wesleyan's QuestBridge Website",
      desc: "asdsafsadas",
      date: "",
      image: klembox,
    },
  ];

  return (
    <>
      <div className="w-full mt-[6rem] px-4 flex flex-col">
        <h1 className="border-b-black border-4 border-t-0 border-x-0 w-[120px]">
          Projects
        </h1>
        <section className="grid grid-row-4 md:grid-cols-2 gap-5 px-5 pt-4 ">
          {project.map((project) => {
            return (
              <div className="border-2 rounded-lg border-grey p-2">
                <div>
                  <img src={project.image} alt="Screenshot of the UI design" className="object-cover w-full"/>
                  <h2 className="text-3xl">{project.name}</h2>
                  <h2>{project.desc}</h2>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
