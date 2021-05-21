import photo1 from "../Assets/real-estate.jpeg";
import photo2 from "../Assets/ALS2.jpeg";
import photo3 from "../Assets/ALS1.jpeg";
import photo4 from "../Assets/property-management-services.jpeg";
const posts = [
  {
    title: "Real Estate",
    href: "#",

    description:
      "Do you dream about buying a property in France, whether it is a holiday home or a permanent move, but just don’t know where to start?",

    imageUrl: photo1,
  },
  {
    title: "Property Management",
    href: "#",
    description:
      "Many people rent out property, but not everyone is aware of the rules and regulations. We will advise you on how to register with the local town hall, how rental should be declared and what tax should be paid.",

    imageUrl: photo2,
  },
  {
    title: "Financial Advice",
    href: "#",

    description:
      "When moving or investing in France you will need to understand the implications from a financial and fiscal standpoint.",

    imageUrl: photo3,
  },
  {
    title: "Relocation Services",
    href: "#",

    description:
      "Relocating to France means dealing with the legendary French Administration. Let us deal with that!",

    imageUrl: photo4,
  },
];

export default function Products() {
  return (
    <div className="relative bg-logo-blue pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-logo-blue h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            A Full Range Of Services Under One Roof
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.href} className="hover:underline">
                      {post.title}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
