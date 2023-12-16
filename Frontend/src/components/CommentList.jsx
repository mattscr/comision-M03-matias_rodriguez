/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useComment } from "../context/CommentContext";
import { useAuth } from "../context/Authcontext";
import { useEffect } from "react";

const CommentList = () => {
  //console.log(comments);
  const { comment, getAllComment, deleteComment } = useComment();
  const { user, isAuth } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    getAllComment(id);
  }, []);
  console.log(comment);
  if (comment.length === 0)
    return (
      <>
        <p className="text-black">No hay comentarios</p>
      </>
    );

  return (
    <>
      {comment.map((comment, i) => (
        <div className="flex items-center space-x-2" key={i}>
          <img
            src={comment.autor.avatar}
            alt="User Avatar"
            className="w-6 h-6 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-semibold">
              {comment.autor.username}
            </p>
            <p className="text-gray-500 text-sm">{comment.description}</p>
          </div>

          {isAuth ? (
            user.id == comment.autor._id ? (
              <>
                {/* <button>
                  <i className="fas fa-pen text-slate-800"></i>
                </button> */}
                <button
                  onClick={() => {
                    //console.log(id, comment._id);
                    deleteComment(id, comment._id);
                    window.location.replace("");
                  }}
                >
                  <i className="fas fa-trash-alt text-red-600"></i>
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

export default CommentList;
