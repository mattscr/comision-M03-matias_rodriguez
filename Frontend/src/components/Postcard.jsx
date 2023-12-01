/* eslint-disable react/prop-types */
import { usePost } from "../context/PostContext";
import { Link } from "react-router-dom";
const Postcard = ({ Post = [] }) => {

  const {deletePost} = usePost()
  return (
    <>
      {Post.map((post, i) => (
        <div className="mt-6" key={i}>
          <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <span className="font-light text-gray-600">
                {new Date(post.createdAt).toDateString("es-ES")}
              </span>
            </div>
            <div className="mt-2">
              <a
                href={post._id}
                className="text-2xl font-bold text-gray-700 hover:underline"
              >
                {post.title}
              </a>
              <p className="mt-2 text-gray-600">
                {post.description}
                ------
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora expedita dicta totam aspernatur doloremque. Excepturi
                iste iusto eos enim reprehenderit nisi, accusamus delectus nihil
                quis facere in modi ratione libero!
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
            <Link to={`/updatepost/${post._id}`}>editar</Link>
            <button
            onClick={() => {
              //console.log(post._id)
              deletePost(post._id);
            }}
          >
            eliminar
          </button>
              <div>
                <a href="#" className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                    alt="avatar"
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  />
                  <h1 className="font-bold text-gray-700 hover:underline">
                  {post.autor}
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Postcard;
