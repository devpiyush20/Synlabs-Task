import React, { useState } from 'react';
import EditUserForm from './EditUserForm'; // Assuming you already created this component

const UserCard = ({ data, setUserData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = async () => {
    try {
      // Simulating DELETE request
      await fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`, {
        method: 'DELETE',
      });

      // Remove user from state
      setUserData(prevData => prevData.filter(user => user.id !== data.id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {isEditing ? (
        <EditUserForm user={data} setUserData={setUserData} setIsEditing={setIsEditing} />
      ) : (
        <>
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.address.city}, {data.address.zipcode}</p>
          <button
            className="bg-[#48CFCB] text-white p-2 rounded-lg mt-4"
            onClick={handleEditToggle}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded-lg mt-4 ml-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default UserCard;
