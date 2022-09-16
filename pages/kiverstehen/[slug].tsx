import { GetStaticProps } from "next";
import Head from "next/head";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import CallToAction from "../../components/shared/CallToAction";
import PostTile from "../../components/shared/PostTile";
import { getPosts, getSinglePost } from "../../lib/posts";

function KIVerstehenPost({ post }: any) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.feature_image} />
      </Head>
      <Navigation />
      <div className="relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-ocean-700 to-cyan-600 xl:inline sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              {post.title}
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {post.excerpt}
            </p>
            {/* <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#demo"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-ocean-600 hover:bg-ocean-700 md:py-4 md:text-lg md:px-10"
                >
                  Live-Demo
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="https://github.com/stackOcean-official/sentiment-showcase">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-ocean-600 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    <AiFillGithub className="w-5 h-5 mr-2" />
                    Github
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={post.feature_image}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 to-teal-600 mix-blend-multiply" />
        </div>
      </div>
      <div className="py-12 bg-gray-50">
        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative px-4 py-4 bg-white shadow-xl lg:px-8 rounded-2xl sm:px-10 sm:py-10">
            <div className="mx-auto mt-6 prose prose-lg text-center text-gray-500 prose-ocean ">
              <div
                className="mx-auto mt-3 prose prose-lg text-gray-500 prose-indigo text-md sm:mt-4 prose-a:text-ocean-700"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  let paths;
  // Get the paths we want to create based on posts
  if (posts) {
    paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));
  }

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getSinglePost(context.params?.slug?.toString());

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export default KIVerstehenPost;
