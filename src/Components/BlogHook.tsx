import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function BlogHook() {
  return (
    <div className="bg-african-violet">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">We're also on social media.</span>
          <span className="block text-logo-blue">
            Start following ALS today.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <div className="flex justify-evenly">
          <a
            href="https://g.page/aquitaine-lifestyle-solutions?we"
            target="_blank"
            rel="noreferrer"
            title="Google"
            className="mt-8 w-full inline-flex items-center justify-center px-3 py-3 border border-transparent text-4xl font-medium rounded-xl text-indigo-600 bg-white hover:bg-african-violet hover:text-logo-blue sm:w-auto"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a
            href="https://www.facebook.com/aquitainelifestylesolutions"
            target="_blank"
            rel="noreferrer"
            title="FaceBook"
            className="mt-8 w-full inline-flex items-center justify-center px-3 py-3 border border-transparent text-4xl font-medium rounded-xl text-indigo-600 bg-white hover:bg-african-violet hover:text-logo-blue sm:w-auto"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://medium.com/aquitaine-lifestyle-solutions"
            target="_blank"
            rel="noreferrer"
            title="Medium"
            className="mt-8 w-full inline-flex items-center justify-center px-3 py-3 border border-transparent text-4xl font-medium rounded-xl text-indigo-600 bg-white hover:bg-african-violet hover:text-logo-blue sm:w-auto"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </div>
    </div>
  );
}
