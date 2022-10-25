//link--https://xd.adobe.com/view/b85702f7-c9c2-4775-8bf6-e309b6e9a207-ed04/screen/19424749-18dc-4750-8182-c02ee2d76868/?fullscreen
//link--https://qnswesleyan.wescreates.wesleyan.edu/

import klembox from "../assets/klembox.png";
import questbridge from "../assets/questbridge.png";
import ourcampus from "../assets/ourcampus.png";
import textsimilarity from "../assets/text_similarity.png";
import musicrating from "../assets/musicrating.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import r from "../assets/r.png";
import node from "../assets/node.png";
import django from "../assets/django.png";
import detect from "../assets/detect0.png";
import detect1 from "../assets/detect1.png";
import qb1 from "../assets/qb0.png";
import qb2 from "../assets/qb1.png";
import React, { useState } from "react";
import klem1 from "../assets/klem0.png";
import klem2 from "../assets/klem1.png";
import music1 from "../assets/music0.png";
import music2 from "../assets/music1.png";
import ui1 from "../assets/ui1.png";
import ui2 from "../assets/ui2.png";
import { AiOutlineCode } from "react-icons/ai";

export default function Body() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = useState(true);

  const project = [
    {
      name: "Wesleyan's QuestBridge Website",
      desc: [
        "I volunteered as a front-end developer for Wesleyan University’s QuestBridge program, where I managed a team of developers to design and create a responsive website using React framework and Tailwind CSS. These tools allowed us to prioritize resource-sharing functionalities within the website, which created efficiencies to access materials to support low-income, first-generation students in their journey at Wesleyan and their future careers. As the team lead, I balanced my deliverables while simultaneously coaching team members in utilizing version control on Github. This experience challenged me to grow as a leader as I had to learn new concepts and subsequently taught them to my team, which is a skill I hope to transfer to this position.  ",
      ],
      date: "03/2022 - Present",
      image: questbridge,
      carousel1: qb1,
      carousel2: qb2,
      link: "https://qnswesleyan.wescreates.wesleyan.edu/",
    },
    {
      name: "Text Similarity Detection Tool",
      desc: [
        "Over the summer of 2022, I applied to participate in the Quantitative Data Analysis Apprenticeship program at Wesleyan University. This two-month opportunity aided my efforts to improve fundamental analytical skills using SPSS, STATA, and RStudio. Concurrently, I received support and guidance from a professor to pursue my interest in developing a text similarity detection tool that would utilize both CPUs and GPUs in detection. Utilizing TensorFlow to construct a Keras model, I was able to convert vectors of text data to matrices of matching pixels, where I applied convolutional neural networks to improve the detections. The implementation of convolutional neural networks in my model successfully combined the CPUs and GPUs to extract similar texts 30% faster than CPU-only tools. Not only did I learn to use a multitude of data analysis software, but I also applied my knowledge to develop a text similarity detection tool for a large collection of texts. ",
      ],
      date: "05/2022-07/2022",
      image: textsimilarity,
      carousel1: detect,
      carousel2: detect1,
      link: "https://colab.research.google.com/drive/13O8TeRBeuii_q1Xo5zbtkKv-7QT9ztHI?usp=sharing",
    },
    {
      name: "UI/Front-end Internship at Klembox",
      desc: "I interned remotely at Klembox where I had the opportunity to design and construct a website for the startup. Utilizing Adobe XD, my team and I employed crucial design elements to aid accessibility for Khmer speakers in selecting and purchasing hands-on learning kits. Through the support and coaching from my peers, I learned to implement e-commerce API to expedite bulk orders of products and adopted Amazon Web Services to evaluate the website. This collaborative experience empowered me to grow my understanding of features in web development, and I hope to continue my passion for designing and actualizing new features for different platforms.",
      date: "05/2021-09/2021",
      image: klembox,
      carousel1: klem1,
      carousel2: klem2,
      link: "https://xd.adobe.com/view/b85702f7-c9c2-4775-8bf6-e309b6e9a207-ed04/screen/19424749-18dc-4750-8182-c02ee2d76868/?fullscreen",
    },
    {
      name: "Music Rating Web Application",
      desc: "Through my Software Engineering course, I expanded my understanding of the software development process and utilized a tech stack to develop a web application for a community of music lovers. I coded with React and Bootstrap frameworks to manage the front end of the application and implemented REST API for user interactions. The web application was deployed on Google Firebase with a Django backend hosted on Heroku for user data management. Through a collaboration with two other students, we focused on converting the web application to a mobile application with React Native. While employing version control via GitHub, we overcame various hurdles and implemented various rating and ranking features on the application.",
      date: "01/2022-04/2022",
      image: musicrating,
      carousel1: music2,
      carousel2: music1,
      link: "https://rendatunes-27f5b.firebaseapp.com/",
    },
    {
      name: "UI Designer for OurCampus",
      desc: "As a UI designer for OurCampus, a consolidated mobile application for Wesleyan students’ resources, I applied fundamental design elements to improve the features of a course scheduling and registration feature. I kept consistent communication with the mobile developers to discuss the feasibility of the design. This opportunity expanded my knowledge in research and implementation of key design elements in UI designs. ",
      date: "08/2021-Present",
      image: ourcampus,
      carousel1: ui2,
      carousel2: ui1,
      link: "https://www.figma.com/file/tZARBb3guAJpWv4Xx6S7vL/Quick-Components?node-id=116%3A2",
    },
  ];

  const techStacks = [
    {
      name: "Python",
      image: python,
    },
    {
      name: "Javascript",
      image: javascript,
    },
    {
      name: "R",
      image: r,
    },
    {
      name: "Node.js",
      image: node,
    },
    {
      name: "Django",
      image: django,
    },
  ];

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess() {
  //   setNumPages(numPages);
  // };

  return (
    <>
      <div className="w-full pt-16 flex flex-col container mx-auto bg-[#050A30]">
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
              If you would like to connect or have a conversation, feel free to{" "}
              <a href="mailto:rduong@wesleyan.edu" className="underline">
                reach out!
              </a>
            </p>
          </section>
          <section className="pt-16">
            <h1 className="border-b-[#2E8BC0] border-4 border-t-0 border-x-0 w-[180px] text-white">
              Tech Stacks
            </h1>
            <div className="grid grid-cols-5 gap-4 text-white pt-16">
              {techStacks.map((techStacks) => {
                return (
                  <div className="flex flex-col items-center">
                    <h3>{techStacks.name}</h3>
                    <img
                      src={techStacks.image}
                      alt="logo"
                      className="h-[70px] w-[70px] pt-2"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div className="pt-16" id="projects">
          <h1 className="border-b-[#2E8BC0] border-4 border-t-0 border-x-0 w-[120px] text-white">
            Projects
          </h1>
          <section className="grid md:grid-cols-3 gap-12 px-5 pt-16 text-white mx-auto">
            {project.map((project) => {
              return (
                <div className="border-2 rounded-lg border-[#2E8BC0] flex flex-col content-center overflow-hidden justify-between">
                  <div>
                    <img
                      src={project.image}
                      alt="Screenshot of the project"
                      className="object-cover w-full h-48"
                    />
                    <h2 className="text-xl pt-4 px-2">{project.name}</h2>
                    <h2 className="text-sm text-gray-400 px-2">
                      {project.date}
                    </h2>
                  </div>
                  <div className="mx-auto size-4 p-4">
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setModalData(project);
                      }}
                      className="text-white"
                    >
                      <h3 className="bg-opacity-0">Read More</h3>
                    </button>
                  </div>
                </div>
              );
            })}
            <div>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-opacity-[70%]">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-2 border-[#2E8BC0] rounded-lg shadow-lg flex flex-col w-full">
                        <div className="flex items-start justify-between p-4 ">
                          <h3 className="text-2xl font-semibold">
                            {modalData.name}
                          </h3>
                        </div>
                        <div className="carousel w-full">
                          <div id="item1" className="carousel-item w-full">
                            <img
                              src={modalData.carousel1}
                              className="w-full sm:h-[13rem] md:h-[20rem] object-cover"
                              alt="carousel item 1"
                            />
                          </div>
                          <div id="item2" className="carousel-item w-full">
                            <img
                              src={modalData.carousel2}
                              className="w-full sm:h-[13rem] md:h-[20rem] object-cover"
                              alt="carousel item 2"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                          <a href="#item1" className="btn btn-xs">
                            1
                          </a>
                          <a href="#item2" className="btn btn-xs">
                            2
                          </a>
                        </div>
                        <div>
                          <p className="text-[.7rem] px-4 pb-3 leading-5">
                            {modalData.desc}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-between pt-2 pb-2 px-4 border-t border-solid border-slate-200 rounded-b">
                          <div className="flex flex-row">
                            <a href={modalData.link}>
                              <AiOutlineCode className="h-8 w-8" />
                            </a>
                          </div>
                          <div className="flex items-center justify-end">
                            <button onClick={() => setShowModal(false)}>
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
