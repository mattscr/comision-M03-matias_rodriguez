/* eslint-disable react/prop-types */
import { usePost } from "../context/PostContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
const Postcard = ({ Post = [] }) => {
  const { user, isAuth } = useAuth();

  const { deletePost } = usePost();
  return (
    <>
      {Post.map((post, i) => (
        <div key={i} className="rounded max-w-4xl lg:flex mb-10">
          <img
            src={post.imageURL}
            alt="post img"
            className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
          />
          <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
            <div>
              <a href="#">
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  {post.title}
                </div>
                <p className="text-gray-700 text-base">{post.description}</p>
              </a>
            </div>
            <a href="#" className="flex mt-3">
              <img
                src={post.autor.avatar}
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm capitalize">
                  {" "}
                  {post.autor.username}{" "}
                </p>
                <p className="text-gray-600 text-xs">
                  {" "}
                  {new Date(post.createdAt).toDateString("es-ES")}{" "}
                </p>
              </div>
            </a>
            {isAuth ? (
              user.id == post.autor._id ? (
                <>
                  <button>
                    <Link to={`/updatepost/${post._id}`}>editar</Link>
                  </button>
                  <button
                    onClick={() => {
                      //console.log(post._id)
                      deletePost(post._id);
                    }}
                  >
                    eliminar
                  </button>
                </>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Postcard;
