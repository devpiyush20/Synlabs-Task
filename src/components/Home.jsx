import React, { useEffect, useState } from "react";
import useFetchData from "../utils/useFetchData";
import UserCard from "./UserCard";
import CreateUserForm from "./CreateUserForm";
import UserCardShimmer from "./UserCardShimmer"; 

const Home = () => {
  const { data, loading } = useFetchData();
  const [userData, setUserData] = useState([]);
  const [isCreatingUser, setCreatingUser] = useState(false);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  const handleCreateUser = () => {
    setCreatingUser(true);
  };

  return (
    <div className="flex flex-col gap-3 px-48 py-4 items-center h-[100vh]">
      <h1 className="bg-[#229799] text-2xl rounded-lg w-[90vw] text-center font-bold text-white p-6">
        User Management Application
      </h1>

      {isCreatingUser ? (
        <CreateUserForm setNewUserData={setUserData} setCreatingUser={setCreatingUser} />
      ) : (
        <button
          className="bg-[#48CFCB] text-white p-4 rounded-lg text-lg hover:shadow-lg"
          onClick={handleCreateUser}
        >
          Create new user
        </button>
      )}

      <div className="flex flex-row flex-wrap mt-4 gap-10">
        {loading ? (
          [...Array(6)].map((_, index) => <UserCardShimmer key={index} />)
        ) : (
          userData !== null &&
          userData.map((item) => (
            <UserCard key={item.id} data={item} setUserData={setUserData} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
