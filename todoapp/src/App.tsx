import { UserCard } from "./components/Usercard";
import { useAllUsers } from "./hooks/useAllUsers";

export const App = () => {
  const {getUsers,userProfiles,loading,error} =useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>取得</button>
      {error?(
        <p style={{color:"red"}}>データの取得に失敗しました</p>
      ):loading?(
        <p>Loading...</p>
      ):(
        <>
        {userProfiles.map((user)=>(
        <UserCard key={user.id} user={user} />
      ))}
        </>
      )}


    </div>
  );
};
