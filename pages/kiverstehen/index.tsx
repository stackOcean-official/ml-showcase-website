import { GetStaticProps } from "next";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import CallToAction from "../../components/shared/CallToAction";
import PostTile from "../../components/shared/PostTile";
import { getPosts } from "../../lib/posts";

function KIVerstehen({ posts }: any) {
  return (
    <div className="bg-white">
      <Navigation />
      <main className="mt-5">
        <div className="relative px-4 pt-10 pb-20 bg-gray-50 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                KI verstehen
              </h2>
              <p className="max-w-6xl mx-auto mt-3 text-gray-500 text-md sm:mt-4">
                Künstliche Intelligenz ist ein Buzz-Word, was oft schwer zu
                greifen ist, besonders weil es verschiedene Definitionen und
                Interpretationen für den Begriff gibt. Unser Ziel ist es,
                Entscheider, Entwickler und alle Interessierte dabei zu
                unterstützen, mehr über die grundlegenden Prinzipien zu lernen
                und diese im eigenen Unternehmen anwenden zu können.
              </p>
            </div>
            <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
              {posts.map((post: any) => (
                <PostTile key={post.title} post={post} />
              ))}
            </div>
          </div>
        </div>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};

export default KIVerstehen;
