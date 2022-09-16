import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL || "",
  key: process.env.GHOST_API_KEY || "",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      filter: "tag:ki-verstehen",
      limit: "all",
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string | undefined) {
  if (!postSlug) {
    return undefined;
  }
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
