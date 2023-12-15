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
      <div>
        <div className="px-6 py-6">
          <div className="container justify-between mx-auto">
            <div className="items-center justify-between">
              <h1 className="text-4xl p-8 sm:p-2 sm:text-6xl md:text-4xl font-bold text-gray-800  font font-dancing ">
                Post
              </h1>
            </div>
            <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/*post card */}

              {renderPost()}
              {/*fin card */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
