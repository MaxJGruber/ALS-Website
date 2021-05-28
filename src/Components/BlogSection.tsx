import { useState, useEffect } from "react";
import { getMediumFeed } from "../ApiHandlers/mediumApi";
import profilePic from "../Assets/madeline-pic.jpeg";
import blogging from "../Assets/undraw_blogging_vpvv.png";
import moment from "moment";

interface BlogObject {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  categories: string[];
  thumbnail: string;
}

export default function BlogSection() {
  const [articles, setArticles] = useState<Array<BlogObject>>([]);
  useEffect(() => {
    if (!articles.length) {
      getMediumFeed().then((response) => setArticles(response.items));
    }
  }, [articles.length]);
  console.log(articles);
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-left  grid grid-cols-2">
          <div className="">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-3xl">
              The Aquitaine Lifestyle Solutions Blog
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              We regularly post stories to keep our followers up to date on the
              latest rule & regulation changes decided by the French government.
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              If you struggle to find correct and concise information relating
              to travels or life in France, look no further!
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Follow Aquitaine Lifestyle Solutions on Medium or FaceBook!
            </p>
          </div>
          <div className="flex justify-center">
            <img src={blogging} className="blog-pic" alt="women blogging" />
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articles.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.thumbnail}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <p className="text-sm font-medium text-indigo-600 hover:underline">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    title="Medium story"
                  >
                    Read the story in full
                  </a>
                </p>
                <div className="flex-1 flex items-center justify-center">
                  {/* <a href={post.href} className="block mt-2"> */}
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  {/* </a> */}
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    {/* <a href={post.author.href}> */}
                    <span className="sr-only">{post.author}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={profilePic}
                      alt=""
                    />
                    {/* </a> */}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a
                        href="https://www.linkedin.com/in/madeline-aveson-gruber-66a6b06/"
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn Madeline Aveson"
                        className="hover:underline"
                      >
                        {post.author}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time>
                        {moment(post.pubDate).format("dddd, MMMM Do YYYY")}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
