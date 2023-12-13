/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useComment } from "../context/CommentContext";
import { useAuth } from "../context/Authcontext";
import { useEffect } from "react";

const Comment = () => {
  //console.log(comments);
  const { comment, getAllComment, deleteComment } = useComment();
  const { user, isAuth } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    getAllComment(id);
  }, [getAllComment]);

  if (comment.length === 0)
    return (
      <>
        <p>No hay comentarios</p>
      </>
    );

  return (
    <>
      {comment.map((comment, i) => (
        <div className="flex items-center space-x-2" key={i}>
          <img
            src="https://placekitten.com/32/32"
            alt="User Avatar"
            className="w-6 h-6 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-semibold">{comment.autor}</p>
            <p className="text-gray-500 text-sm">{comment.description}</p>
          </div>

          {isAuth ? (
            user.id == comment.autor ? (
              <>
                <button>
                  <i className="fas fa-pen"></i>
                </button>
                <button
                  onClick={() => {
                    //   console.log(task._id);
                    deleteComment(id, comment._id);
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
};

export default Comment;
