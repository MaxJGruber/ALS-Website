import madelineAboutPic from "../Assets/madeline-about-pic.jpeg";
import yvonnePic from "../Assets/yvonne-pic.jpeg";
import teamwork from "../Assets/undraw_Work_time_re_hdyv.png";
import avatar from "../Assets/undraw_profile_pic_ic5t.png";

const people = [
  {
    name: "Yvonne Drolshagen",
    role: "Co-Founder / CEO",
    imageUrl: yvonnePic,
    bio: "Of German nationality, Yvonne Drolshagen has lived and worked in France for over 30 years. The last two decades has been spent as an independent financial advisor, insurance broker and relocation specialist. She is totally trilingual in French, English and German.",
    linkedinUrl: "https://www.linkedin.com/in/yvonne-drolshagen-118a5037/",
  },
  {
    name: "Madeline Aveson",
    role: "Co-Founder / General Director",
    imageUrl: madelineAboutPic,
    bio: "Having spent 24 years working at Disneyland Paris, Madeline Aveson is used to putting excellence at the heart of business. Completely bilingual she can help with questions concerning your day to day life in France and co-ordinate any project management needs.",
    linkedinUrl: "https://www.linkedin.com/in/madeline-aveson-gruber-66a6b06/",
  },
  {
    name: "Thomas Hettlage",
    role: "Shareholder",
    imageUrl: avatar,
    bio: "From a background in banking and Law through to a career in central buying and brand management, Thomas Hettlage has been an art dealer, gallery owner, photographer and published Author. Originally from Germany, Switzerland and now south west France, he brings his vast business knowledge and passion for photography to our company.",
    linkedinUrl: "https://www.linkedin.com/in/madeline-aveson-gruber-66a6b06/",
  },
  // More people...
];

export default function TeamSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About Us
            </h2>
            <img
              src={teamwork}
              alt="two women working on computers in an office"
            />
            <p className="text-xl text-gray-500">
              At Aquitaine Lifestyle Solutions, our team of experts can provide
              you with all the services you need under one roof to help open the
              door to your new lifestyle in SW France.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
                        alt={person.name}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg text-left">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                        <ul className="flex space-x-5">
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
