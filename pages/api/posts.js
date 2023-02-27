import axios from "axios";
import { load } from "cheerio";

const { BLOGGER_API_URL } = process.env;

// Medapatkan thumbnail (foto pertama yang adad di dalam postingan)
function getThumbnail(content) {
  const $ = load(content);

  const images = $("img")
    .map((_, element) => $(element).attr("src"))
    .toArray();

  return images[0] || null;
}

// Membuat potongan content
function summary(content, end) {
  const newContent = load(content).text();
  return newContent.length > end
    ? newContent.slice(0, end) + "..."
    : newContent;
}

// Mendapatkan semua postingan
async function getAllPosts() {
  return await axios
    .get(BLOGGER_API_URL)
    .then(({ data }) =>
      data.items.map(({ title, content, published, updated, url }) => ({
        title,
        published,
        updated,
        slug: url.split("/").slice(-1)[0].replace(".html", ""),
        thumbnail: getThumbnail(content),
        summary: summary(content, 130),
        content,
      }))
    )
    .catch(console.log);
}

/** @type {import("next").NextApiHandler} */
export default async function posts(req, res) {
  const posts = await getAllPosts();
  const { slug } = req.query;

  // Jika tidak ada slug return semua postingan
  if (!slug) {
    res.json(posts);
    return;
  }

  // Mencari postingan berdasarkan slug
  const post = posts.find((item) => slug === item.slug);

  // Jika postingan tidak ditemukan
  if (!post) {
    res.status(404).send("Not found");
    return;
  }

  // Jika postingan ditemuka
  res.json(post);
}
