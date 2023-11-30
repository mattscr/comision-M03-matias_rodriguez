import { useAuth } from "../context/Authcontext";
const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <h1>Perfil</h1>
      {JSON.stringify(user)}
    </>
  );
};

export default Profile;
