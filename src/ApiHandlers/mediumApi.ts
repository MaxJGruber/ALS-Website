import axios from "axios";

// const service = axios.create({
//   baseURL: "https://api.medium.com/v1",
// });

// export async function getMediumArticles(): Promise<number | undefined> {
//   try {
//     const url =
//       "/users/1903209d6cc2fdc601a5441f26c68fffe4eb1f8a11ffb07a52041173b47d6679e/publications";
//     const { data } = await service.request({
//       method: "get",
//       url,
//     });
//     console.log("data>>>>", data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getMediumFeed() {
  try {
    const mediumRssFeed = "https://medium.com/feed/@maxjgruber";
    const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
    const parameters = { params: { rss_url: mediumRssFeed } };
    const { data } = await axios.get(rssToJsonApi, parameters);
    console.log(data);
    console.log(data.feed);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// getMediumArticles();
// getMediumFeed();
