/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePost } from "../context/PostContext";
import Comment from "../components/comment";
import { useComment } from "../context/CommentContext";

const Post = () => {
  const { post } = usePost();
  const { id } = useParams();

  const postid = post.filter((post) => String(post._id) === id);
  //console.log(postid[0].comments.map);

  return (
    <>
      <>
        <>
          {/* component */}
          <div className="bg-gray-100 h-screen flex  justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
              {/* User Info with Three-Dot Menu */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={postid[0].autor.avatar}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {postid[0].autor.username}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {new Date(postid[0].createdAt).toDateString("es-ES")}{" "}
                    </p>
                  </div>
                </div>
                <div className="text-gray-500 cursor-pointer">
                  {/* Three-dot menu icon */}
                  <button className="hover:bg-gray-50 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={7} r={1} />
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={17} r={1} />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Message */}
              <div className="mb-4">
                <p className="text-gray-800">{postid[0].description}</p>
              </div>
              {/* Image */}
              <div className="mb-4">
                <img
                  src={postid[0].imageURL}
                  alt="Post Image"
                  className="w-fulls h-48 object-cover rounded-md"
                />
              </div>
              {/* Like and Comment Section */}
              <div className="flex items-center justify-between text-gray-500">
                <div className="flex items-center space-x-2"></div>
                <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                      />
                    </g>
                  </svg>
                  <span>{/*postid[0].comments.length*/} Comment</span>
                </button>
              </div>
              <hr className="mt-2 mb-2" />
              <p className="text-gray-800 font-semibold">Comentarios</p>
              <hr className="mt-2 mb-2" />
              <div className="mt-4">
                {/* Comment 1 */}

                <Comment />
                {/** comments={postid[0].comments} end comment */}
              </div>
            </div>
          </div>
        </>
      </>

      {/* comment form }
      <div className="flex items-center justify-center shadow-lg mt-5 mx-8 mb-4">
        <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Agregar un nuevo comentario
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Escribe tu comentario"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="w-full flex items-start md:w-full px-3">
              <div className="-mr-1">
                <input
                  type="submit"
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  defaultValue="Post Comment"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      { */}
    </>
  );
};

export default Post;
