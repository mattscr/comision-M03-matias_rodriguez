/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "../context/Authcontext";
import Postcard from "../components/Postcard";
import { usePost } from "../context/PostContext";
import { useEffect } from "react";
const Profile = () => {
  const { user, isAuth } = useAuth();
  console.log(user);

  const { getAllPost, post } = usePost();

  useEffect(() => {
    getAllPost();
  }, [isAuth]);

  const userpost = post.filter((post) => post.autor._id == user.id);
  console.log(user.id);
  console.log(userpost);

  function renderPost() {
    if (userpost.length === 0) return <h1>no hay post</h1>;

    return userpost.map((post, index) => <Postcard post={post} key={index} />);
  }
  return (
    <>
      {/*profile*/}
      <>
        {/* component */}
        <div className="  h-screen  flex flex-row justify-center items-center">
          <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src={user.avatar}
              alt=""
            />
            <div className="text-center mt-2 font-bold text-3xl  text-black">
              {user.username}
            </div>
            <div className="text-center mt-2  text-sm text-black">
              @{user.username}
            </div>
            <div className="px-6 text-center mt-2 text-sm text-black">
              <p>{user.email}</p>
            </div>
            <hr className="mt-8" />
            <div className="flex p-4 justify-center items-center">
              <div className="w-1/2 text-center  text-black">
                <span className="font-bold text-black">{userpost.length}</span>{" "}
                post
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {renderPost()}
        </div>
      </>

      {/*end profile*/}
    </>
  );
};

export default Profile;
