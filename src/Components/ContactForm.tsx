import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { submitForm } from "../ApiHandlers/wufooApi";
import { countryList } from "../Content/countryList";
import changeLanguage from "../redux/languageContent";

const mapDispatchToProps = (dispatch: Function) => ({
  setStatus: (status: boolean) => dispatch({ type: "SET_STATUS", status }),
});
const mapStateToProps = (state: Record<string, any>) => {
  return { sendstatus: state.sendstatus };
};

function Form(props: Record<string, any>) {
  const [form, setForm] = useState<Record<string, any>>({});
  const [sentStatus, setSentStatus] = useState<Boolean | null>(null);

  function handleChange(e: Record<string, any>) {
    const newForm: Record<string, any> = { ...form };
    const value = e.target.value;
    const key = e.target.name;
    newForm[key] = value;
    console.log(newForm);
    setForm((form) => (form = newForm));
  }

  async function handleSubmit(
    e: Record<string, any>
  ): Promise<number | undefined> {
    e.preventDefault();
    const response = await submitForm(form);
    console.log(response);
    response === 201 ? setSentStatus(true) : setSentStatus(false);
    return response;
  }

  useEffect(() => {
    if (sentStatus !== null) {
      props.setStatus(sentStatus);
    }
  }, [sentStatus, props]);

  // console.log(sentStatus);
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1507831228884-93d43e81a99d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3032&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {changeLanguage().contactForm.title}
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              {changeLanguage().contactForm.subTitle}
            </p>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              {changeLanguage().contactForm.intro}
            </p>
            <p className="mt-4 text-md text-gray-500 sm:mt-3">
              {changeLanguage().contactForm.how}
              <br /> {changeLanguage().contactForm.mandatoryFields}{" "}
              <span className="text-red-400">*</span>.
            </p>
            <form
              action="#"
              method="POST"
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {changeLanguage().contactForm.formLabels.firstName}
                  <span className="text-red-400">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {changeLanguage().contactForm.formLabels.lastName}
                  <span className="text-red-400">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {changeLanguage().contactForm.formLabels.email}
                  <span className="text-red-400">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="Field4"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  {changeLanguage().contactForm.formLabels.address}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="organization"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  {changeLanguage().contactForm.formLabels.city}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  {changeLanguage().contactForm.formLabels.country}
                </label>
                <div className="mt-1">
                  <select
                    name="country"
                    id="country"
                    autoComplete="country"
                    defaultValue="-1"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  >
                    <option disabled value="-1">
                      {changeLanguage().contactForm.formLabels.selectCountry}
                    </option>
                    {countryList.map((country, i) => (
                      <option value={country} key={i}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {changeLanguage().contactForm.formLabels.phoneNumber}
                  </label>
                  <span
                    id="phone_description"
                    className="text-sm text-gray-500"
                  >
                    {changeLanguage().contactForm.formLabels.optional}
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone_description"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how_can_we_help"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {changeLanguage().contactForm.formLabels.message} ({" "}
                    {changeLanguage().contactForm.formLabels.messageSub}
                    <span className="text-red-400">*</span>)
                  </label>
                  <span
                    id="how_can_we_help_description"
                    className="text-sm text-gray-500"
                  >
                    {changeLanguage().contactForm.formLabels.maxChar}
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how_can_we_help"
                    name="how_can_we_help"
                    aria-describedby="how_can_we_help_description"
                    rows={4}
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="how_did_you_hear_about_us"
                  className="block text-sm font-medium text-gray-700"
                >
                  {changeLanguage().contactForm.formLabels.hearAbout}
                </label>
                <div className="mt-1">
                  <select
                    name="how_did_you_hear_about_us"
                    id="how_did_you_hear_about_us"
                    defaultValue="-1"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="-1">
                      {" "}
                      {changeLanguage().contactForm.formLabels.selectHearAbout}
                    </option>
                    <option value="website">The website</option>
                    <option value="recommendation">
                      A friend/aquaintance recommended it
                    </option>
                    <option value="facebook">On FaceBook</option>
                    <option value="google">On Google</option>
                    <option value="newspapers">Newspapers</option>
                    <option value="blogs">Blogs</option>
                  </select>
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {changeLanguage().contactForm.submitButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
