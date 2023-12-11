const Comment = ({ comments = [] }) => {
  console.log(comments);

  return (
    <>
      {comments.map((comments, i) => (
        <div className="flex items-center space-x-2" key={i}>
          <img
            src="https://placekitten.com/32/32"
            alt="User Avatar"
            className="w-6 h-6 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-semibold">
              autor {comments.autor}
            </p>
            <p className="text-gray-500 text-sm">
              Losfdfa! 📸 {comments.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
