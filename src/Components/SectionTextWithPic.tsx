import changeLanguage from "../redux/languageContent";

export default function SectionTextWithPic() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Let us do the work
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {changeLanguage().ProfessionalAdvice.title}
            </h3>
            <div className="mt-5 text-left prose prose-indigo text-gray-500">
              <p>{changeLanguage().ProfessionalAdvice.para1}</p>
              <p>{changeLanguage().ProfessionalAdvice.para2}</p>
              <p>{changeLanguage().ProfessionalAdvice.para3}</p>
              <p>{changeLanguage().ProfessionalAdvice.para4}</p>
              <p>{changeLanguage().ProfessionalAdvice.para5}</p>
              <p>{changeLanguage().ProfessionalAdvice.para6}</p>
              <p>{changeLanguage().ProfessionalAdvice.para7}</p>
              <p>{changeLanguage().ProfessionalAdvice.para8}</p>
              <p>{changeLanguage().ProfessionalAdvice.para9}</p>
              <p>{changeLanguage().ProfessionalAdvice.para10}</p>

              <p>{changeLanguage().ProfessionalAdvice.conclusion1}</p>
              <p>{changeLanguage().ProfessionalAdvice.conclusion2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
