/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "../context/Authcontext";
import Postcard from "../components/Postcard";
import { usePost } from "../context/PostContext";
import { useEffect } from "react";
const Profile = () => {
  const { user } = useAuth();
  console.log(user);

  const { getAllPost, post } = usePost();

  useEffect(() => {
    getAllPost();
  }, []);

  const userpost = post.filter((post) => post.autor._id == user.id);
  console.log(user.id);
  console.log(userpost);
  /*
  function renderPost() {
    if (userpost.length === 0) return <h1>no hay post</h1>;

    return userpost.map((post, index) => <Postcard post={post} key={index} />);
  }*/
  return (
    <>
      <div className="bg-slate-400">
        {/*fin profile*/}
        <h1>Perfil de </h1>
        <p>username: {user.username}</p>
        <p>id: {user.id}</p>
        <img src={user.avatar} alt="avatar user" />
        <p>email: {user.email}</p>
        {/*renderPost()*/}
        {<Postcard Post={userpost} />}
      </div>
    </>
  );
};

export default Profile;
