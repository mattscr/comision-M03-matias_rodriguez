/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { usePost } from "../context/PostContext";
import CommentList from "../components/CommentList";

import FormComment from "../components/FormComment";

const Post = () => {
  const { post } = usePost();
  const { id: idpost } = useParams();

  const postid = post.filter((post) => String(post._id) === idpost);
  //console.log(postid[0].comments.map);
  return (
    <>
      <>
        {/* component */}
        <div className="flex justify-center h-screen">
          <div className=" my-4">
            <div className="bg-white border rounded-sm max-w-md">
              <div className="flex items-center px-4 py-3">
                <img
                  className="h-8 w-8 rounded-full"
                  src={postid[0].autor.avatar}
                />
                <div className="ml-3 ">
                  <span className="text-sm font-semibold antialiased block leading-tight text-black">
                    {postid[0].autor.username}
                  </span>
                  <span className="text-gray-600 text-xs block">
                    {new Date(postid[0].createdAt).toDateString("es-ES")}
                  </span>
                  <span className="text-gray-600 block">
                    {postid[0].description}
                  </span>
                </div>
              </div>
              <img src={postid[0].imageURL} />
            </div>
          </div>
          <div className=" my-4 ">
            <div className="bg-white border rounded-sm max-w-md pl-2 ">
              <p className="text-gray-800 font-semibold">Comentarios</p>
              <hr className="mt-2 mb-2" />
              {/* Comment */}
              <CommentList />
              {/** comments={postid[0].comments} end comment */}
              <FormComment postid={postid[0]._id} />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Post;
