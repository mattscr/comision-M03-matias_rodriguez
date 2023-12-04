/* eslint-disable react/prop-types */
import { usePost } from "../context/PostContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
const Postcard = ({ Post = [] }) => {
  const { isAuth } = useAuth();
  console.log(isAuth);

  const { deletePost } = usePost();
  return (
    <>
      <div className="rounded w-full lg:flex mb-10">
        <div
          className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")',
          }}
          title="deit is very important"
        ></div>
        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
          <div>
            <a href="#">
              <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                Integer commodo, sapien ut vulputate viverra
              </div>
              <p className="text-gray-700 text-base">
                Nam malesuada aliquet metus, ac commodo augue mollis sit amet.
                Nam bibendum risus sit amet metus semper consectetur. Proin
                consequat ullamcorper eleifend. Nam bibendum risus sit amet
                metus semper consectetur.
              </p>
            </a>
          </div>

          <a href="#" className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/women/54.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-700 text-sm capitalize">
                {" "}
                Serenity Hughes{" "}
              </p>
              <p className="text-gray-600 text-xs"> 14 Aug </p>
            </div>
          </a>
        </div>
      </div>
      {Post.map((post, i) => (
        <div className="mt-6" key={i}>
          <div className="max-w-4xl px-10 py-6 flex mx-auto bg-white rounded-lg shadow-md">
            <div
              className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")',
              }}
              title="deit is very important"
            ></div>
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
                ------ Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora expedita dicta totam aspernatur doloremque. Excepturi
                iste iusto eos enim reprehenderit nisi, accusamus delectus nihil
                quis facere in modi ratione libero!
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              {isAuth ? (
                <>
                  <Link to={`/updatepost/${post._id}`}>editar</Link>
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
              )}

              <div>
                <a href="#" className="flex items-center">
                  <img
                    src={post.autor.avatar}
                    alt="avatar"
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  />
                  <h1 className="font-bold text-gray-700 hover:underline">
                    {post.autor.username}
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
