import { useAuth } from "../context/Authcontext";
const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <h1>Perfil de </h1>
      <p>username: {user.username}</p>
      <p>id: {user.id}</p>
      <img src={user.avatar} alt="avatar user" />
      <p>email: {user.email}</p>

    </>
  );
};

export default Profile;
