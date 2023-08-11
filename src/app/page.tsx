import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiEdit3,
} from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { MdLocationOn, MdLanguage } from "react-icons/md";

const digitalInfo = {};

export default function Home() {
  return (
    <main className="w-[75%] m-auto bg-gray-200 min-h-screen rounded-lg grid grid-cols-11 grid-rows-8 gap-2 p-2">
      <div className="col-span-11 row-span-1 bg-gradient-to-br from-gray-700 via-gray-900 to-black rounded-md p-4 text-gray-200">
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center justify-center basis-[50%]">
            <h1 className="text-5xl font-medium">{data.resume_name}</h1>
            <h2 className="text-4xl font-medium mt-4">{data.profession}</h2>
          </div>
          <div className="flex items-center basis-[50%] justify-around mt-10">
            <div className="flex items-center gap-3 bg-blue-500 bg-opacity-20 p-2 rounded-lg">
              <div className="text-blue-500">
                <FiMail size={25} />
              </div>
              <p className="text-lg">{data.email}</p>
            </div>
            <div className="flex items-center gap-3 bg-blue-500 bg-opacity-20 p-2 rounded-lg">
              <div className="text-blue-500">
                <FiPhone size={25} />
              </div>
              <p className="text-lg">{data.phone_number}</p>
            </div>
            <div className="flex items-center gap-3 bg-blue-500 bg-opacity-20 p-2 rounded-lg">
              <div className="text-blue-500">
                <FiGithub size={25} />
              </div>
              <p className="text-lg">{data.github}</p>
            </div>
            <div className="flex items-center gap-3 bg-blue-500 bg-opacity-20 p-2 rounded-lg">
              <div className="text-blue-500">
                <FiTwitter size={25} />
              </div>

              <p className="text-lg">{data.twitter}</p>
            </div>
            <div className="flex items-center gap-2 bg-blue-500 bg-opacity-20 p-2 rounded-lg">
              <div className="text-blue-500">
                <FiLinkedin size={25} />
              </div>
              <p className="text-lg">{data.twitter}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 row-span-5 bg-gray-100 rounded-md p-4 flex flex-col gap-9">
        <div>
          <div className=" flex gap-2 items-center text-blue-500 bg-blue-400 bg-opacity-20 rounded-lg py-1">
            <div className="font-medium text-blue-500 ml-2">
              <MdLocationOn size={25} />
            </div>
            <h1 className="text-[1.3rem] font-semibold">Address</h1>
          </div>
          <div className="ml-2 mt-2">
            <p className="font-bold">
              <span className="text-[1rem] mr-2 text-green-500">Country: </span>
              {data.country}
            </p>
            <p className="font-bold">
              <span className="text-[1rem] mr-2 text-green-500">City: </span>
              {data.city}
            </p>
            <p className="font-bold">
              <span className="text-[1rem] mr-2 text-green-500">Pincode: </span>
              {data.pincode}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-2 items-center text-blue-500 bg-blue-400 bg-opacity-20 rounded-lg py-1">
            <div className="font-medium text-blue-500 ml-2">
              <FiEdit3 size={25} />
            </div>
            <h1 className="text-[1.3rem] font-semibold">Skills</h1>
          </div>
          <div className="mt-2 ml-2">
            {data.skills.map((skill, i) => (
              <div key={i} className="flex flex-col gap-2">
                {Object.entries(skill).map(
                  ([key, value]) =>
                    key !== "skills_id" && (
                      <div key={key}>
                        <div className="text-lg font-semibold">{key}</div>
                        <div className="flex gap-2 px-2">
                          {value
                            .toString()
                            .split(",")
                            .map((str, i) => (
                              <p
                                key={i}
                                className="bg-green-500 bg-opacity-25 px-2 py-[0.1rem] mt-2 rounded-md"
                              >
                                {str}
                              </p>
                            ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-2 items-center text-blue-500 bg-blue-400 bg-opacity-20 rounded-lg py-1">
            <div className="font-medium text-blue-500 ml-2">
              <MdLanguage size={25} />
            </div>
            <h1 className="text-[1.3rem] font-semibold">Languages</h1>
          </div>
          <div className="flex gap-2 mt-3 ml-3">
            {data.languages
              .toString()
              .split(",")
              .map((str, i) => (
                <p
                  key={i}
                  className="bg-green-500 bg-opacity-25 px-2 py-[0.1rem] mt-2 rounded-md"
                >
                  {str}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="col-span-8 row-span-5 col-start-4 bg-gray-100 rounded-md p-4">
        <div>
          <h1 className="text-3xl font-medium text-blue-500">About</h1>
          <p className="text-lg mt-3">{data.summary}</p>
        </div>

        <div className="mt-7">
          <h1 className="text-3xl font-medium text-blue-500">Education</h1>
          <div className="text-lg mt-3 flex flex-col gap-4">
            {data.education.map((edu: any) => (
              <div key={edu.education_id} className="flex flex-col gap-1">
                <div className="flex items-center text-center gap-4">
                  <h1 className="text-[1.5rem] font-semibold">
                    {edu.school_name}
                  </h1>
                  <div className="flex items-center gap-1 bg-blue-500 bg-opacity-20 px-2 py-1 rounded-2xl">
                    <div className="font-medium text-blue-500">
                      <MdLocationOn />
                    </div>
                    <p className="text-base font-semibold">
                      {edu.school_location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="text-lg font-semibold">{edu.degree}</p>
                  <div className="flex gap-2 text-[15px] font-bold text-green-500">
                    <p>{edu.degree_start_date}</p>
                    <span>--</span>
                    <p>{edu.degree_end_date}</p>
                  </div>
                </div>
                <div>
                  <p>{edu.field_of_study}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text-3xl font-medium text-blue-500">Accomplishment</h1>
          <div className="text-lg mt-3 flex flex-col gap-4">
            {data.accomplishments.map((item: any, i) => (
              <li key={i} className="list-none">
                {item.Acc}
              </li>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text-3xl font-medium text-blue-500">Projects</h1>
          <div className="text-lg mt-3 flex flex-col gap-4">
            {data.projects.map((item: any) => (
              <div key={item.project_id} className="flex flex-col gap-2">
                <div className="flex gap-3 text-center">
                  <h1 className="text-[1.5rem] font-semibold">
                    {item.project_name}
                  </h1>
                  <a
                    href={item.project_link}
                    target="_blank"
                    className="text-[15px] font-bold bg-blue-500 bg-opacity-20 px-2 rounded-2xl text-blue-600 "
                  >
                    Project Link
                  </a>
                </div>
                <p>
                  <span className="text-[20px] font-semibold text-green-500 mr-2">
                    Description:
                  </span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text-3xl font-medium text-blue-500">Experience</h1>
          <div className="text-lg mt-3 flex flex-col gap-4">
            {data.work_experience.map((item: any) => (
              <div key={item.work_id} className="flex flex-col gap-2">
                <div className="flex items-center text-center gap-4">
                  <h1 className="text-[1.5rem] font-semibold">
                    {item.job_title}
                  </h1>
                  <div className="flex items-center gap-1 bg-blue-500 bg-opacity-20 px-2 py-1 rounded-2xl">
                    <div className="font-medium text-blue-500">
                      <MdLocationOn />
                    </div>
                    <p className="text-base font-semibold">
                      {item.company_location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <p className="text-lg font-semibold">{item.company_name}</p>
                  <div className="flex gap-2 text-[15px] font-bold text-green-500">
                    <p>{item.start_date}</p>
                    <span>--</span>
                    <p>{item.end_date}</p>
                  </div>
                </div>
                <p>
                  <span className="text-[20px] font-semibold text-green-500 mr-2">
                    Description:
                  </span>
                  {item.Description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 mb-6">
          <h1 className="text-3xl font-medium text-blue-500">Certification</h1>
          <div className="text-lg mt-3 flex flex-col gap-4">
            {data.certificates.map((certificate) => (
              <div key={certificate.certi_id}>
                <div className="flex gap-3 text-center">
                  <h1 className="text-[1.5rem] font-semibold">
                    {certificate.certi_name}
                  </h1>
                  <a
                    href={certificate.certi_link}
                    target="_blank"
                    className="text-[15px] font-bold bg-blue-500 bg-opacity-20 px-2 rounded-2xl text-blue-600 "
                  >
                    Certificate Link
                  </a>
                </div>
                <div className="flex gap-7">
                  <div className="flex items-center">
                    <span className="text-blue-500 font-bold mr-2">From: </span>
                    <p className="text-green-500 text-sm font-bold">
                      {certificate.certi_start_date}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 font-bold mr-2">To: </span>
                    <p className="text-green-500 text-sm font-bold">
                      {certificate.certi_end_date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const data = {
  first_name: "Nainu",
  last_name: "Wadhwa",
  resume_name: "Nainu Wadhwa",
  level: "internship",
  profession: "Fullstack Web Developer",
  email: "nainu@gmail.com",
  phone_number: "8617285245",
  city: "Mumbai",
  country: "India",
  pincode: "124001",
  github: "Mr.Nainu@github",
  twitter: "Mr.Nainu@twitter",
  linkedin: "Mr.Nainu@linkedIn",
  portfolio_link: "portfolio_link",
  languages: "english,hindi",
  summary:
    "Hyy I am Nainu Wadhwa. A Dedicated web developer with a passion for creating engaging and dynamic user experiences. Proficient in front-end and back-end technologies, with a strong foundation in HTML, CSS, JavaScript, and a variety of web development frameworks. Skilled at translating design concepts into fully functional websites and web applications. Committed to staying up-to-date with industry trends and continuously enhancing skills to deliver innovative and user-centric solutions.",
  accomplishments: [
    {
      Acc: "Successfully resolved intricate technical challenges, such as optimizing algorithmic performance, leading to enhanced application efficiency and user satisfaction",
    },
    {
      Acc: "Actively contributed to open-source projects, showcasing a commitment to the developer community and gaining recognition for valuable code contributions",
    },
    {
      Acc: "Led a major codebase refactoring project that resulted in cleaner, modular, and more maintainable code, reducing future development and debugging time.",
    },
  ],
  education: [
    {
      education_id: 1,
      school_name: "Horizon Education Institute",
      school_location: "Mumbai Maharastra",
      degree: "Higher Secondary",
      field_of_study: "Science With Physics, Mathematics and Chemistry",
      degree_start_date: "2022-12-09",
      degree_end_date: "2022-12-09",
      current_attend_here: 0,
    },
    {
      education_id: 2,
      school_name: "Indian Institute of Technology (Madras)",
      school_location: "Banglore Karnatak",
      degree: "BTech",
      field_of_study: "Engineering In Computer Science",
      degree_start_date: "2022-12-09",
      degree_end_date: "2022-12-09",
      current_attend_here: 0,
    },
    {
      education_id: 3,
      school_name: "SriRam Institute Of Commerce",
      school_location: "Delhi Delhi",
      degree: "BCom.",
      field_of_study: "Bachelor of Business Administrator",
      degree_start_date: "2022-12-09",
      degree_end_date: "2022-12-09",
      current_attend_here: 1,
    },
  ],
  work_experience: [
    {
      work_id: 1,
      job_title: "Software Development Engineer Intern",
      company_name: "Microsoft Corporation",
      company_location: "Hydrabad",
      start_date: "022-12-09",
      end_date: "2022-12-09",
      Description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
      currently_work_here: 0,
    },
    {
      work_id: 2,
      job_title: "Software Development Engineer Intern",
      company_name: "Amazon",
      company_location: "Noida, Delhi",
      start_date: "022-12-09",
      end_date: "2022-12-09",
      Description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
      currently_work_here: 0,
    },
  ],
  projects: [
    {
      project_id: 1,
      project_name: "Sandesh",
      project_link: "https://sandeshd-production.up.railway.app",
      description:
        "This is a complete full stack messaging app based on MERN stack.",
    },
    {
      project_id: 2,
      project_name: "HouseKart",
      project_link: "https://housekart-mern-ecom-prasad.cyclic.app",
      description:
        "This is a complete and fully authenticated MERN Stack Ecommerce app",
    },
  ],
  skills: [
    {
      skills_id: 1,
      Top_technical_skills: "Web development,Ai/Ml",
      Technical_skills: "java,python",
      Non_technical_skills: "Communication",
      Softwares: "java,python",
    },
  ],
  certificates: [
    {
      certi_id: 1,
      certi_name: "Fullstack Web Development Certification",
      certi_link: "link here",
      certi_start_date: "2022-12-09",
      certi_end_date: "2022-12-09",
      currently_pursuing: 0,
    },
    {
      certi_id: 2,
      certi_name: "Artificial Intelligence and Machine Learning Certification",
      certi_link: "certi_link",
      certi_start_date: "2022-12-09",
      certi_end_date: "2022-12-09",
      currently_pursuing: 0,
    },
  ],
};
