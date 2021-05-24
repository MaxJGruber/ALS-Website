import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { submitForm } from "../ApiHandlers/wufooApi";
import { countryList } from "../Content/countryList";

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
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let's work together
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              We’d love to hear from you!
            </p>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              If you are interested in any of our services, please don’t
              hesitate to get in touch and a member of our team will be happy to
              assist you.
            </p>
            <p className="mt-4 text-md text-gray-500 sm:mt-3">
              You can send us a message using the short form below. Mandatory
              fields are marked with a <span className="text-red-400">*</span>.
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
                  First name<span className="text-red-400">*</span>
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
                  Last name<span className="text-red-400">*</span>
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
                  Email<span className="text-red-400">*</span>
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
                  Address
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
                  City
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
                  Country
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
                      Select a Country
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
                    Phone
                  </label>
                  <span
                    id="phone_description"
                    className="text-sm text-gray-500"
                  >
                    Optional
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
                    How can we help you? (Message
                    <span className="text-red-400">*</span>)
                  </label>
                  <span
                    id="how_can_we_help_description"
                    className="text-sm text-gray-500"
                  >
                    Max. 500 characters
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
                  How did you hear about us?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="how_did_you_hear_about_us"
                    id="how_did_you_hear_about_us"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
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
