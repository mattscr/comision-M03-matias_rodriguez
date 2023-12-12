/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Postcard from "../components/Postcard";
import { usePost } from "../context/PostContext";

const Home = () => {
  const { getAllPost, post } = usePost();

  useEffect(() => {
    getAllPost();
  }, []);

  function renderPost() {
    if (post.length === 0) return <h1>no hay post</h1>;

    return post.map((post, index) => <Postcard post={post} key={index} />);
  }
  return (
    <>
      <div className="bg-slate-400">
        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                  Post
                </h1>
              </div>

              {renderPost()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
