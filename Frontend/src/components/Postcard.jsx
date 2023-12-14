/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { usePost } from "../context/PostContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
const Postcard = ({ post, index }) => {
  const { user, isAuth } = useAuth();
  const { deletePost } = usePost();
  return (
    <>
      <div className="md:p-8 p-2 bg-white/75 rounded-md" key={index}>
        <Link to={`/post/${post._id}`}>
          {/*Banner image*/}
          <img className="rounded-lg w-full" src={post.imageURL} />
          {/*Title*/}
          <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
            {post.title}
          </h1>
          {/*Description*/}
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
              {post.description}
            </p>
          </div>
        </Link>
        <div className="flex items-center space-x-2 mt-20">
          {/*Author's profile photo*/}
          <img
            className="w-10 h-10 object-cover object-center rounded-full"
            src={post.autor.avatar}
            alt="random user"
          />
          <div>
            {/*Author name*/}
            <p className="text-gray-900 font-semibold">{post.autor.username}</p>
            <p className="text-gray-500 font-semibold text-sm">
              {new Date(post.createdAt).toDateString("es-ES")}
            </p>
          </div>
          {isAuth ? (
            user.id == post.autor._id ? (
              <div className="flex m-4">
                <button className="mx-2">
                  <Link to={`/updatepost/${post._id}`}>
                    <i className="fas fa-pen text-gray-700"></i>
                  </Link>
                </button>
                <button
                  className="mx-2"
                  onClick={() => {
                    //console.log(post._id)
                    deletePost(post._id);
                  }}
                >
                  <i className="fas fa-trash-alt text-red-700"></i>
                </button>
              </div>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Postcard;
