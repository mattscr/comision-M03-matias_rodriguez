/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Postcard from "../components/Postcard";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/Authcontext";

const Home = () => {
  const { getAllPost, post } = usePost();
  const { isAuth } = useAuth;

  useEffect(() => {
    getAllPost();
  }, [isAuth]);

  function renderPost() {
    if (post.length === 0) return <h1>no hay post</h1>;

    return post.map((post, index) => <Postcard post={post} key={index} />);
  }
  return (
    <>
      <div>
        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl p-8 sm:p-2 sm:text-6xl md:text-4xl font-bold text-gray-800  font font-dancing ">
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
