import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]); 

  
  if (!user) {
    return < div className=' justify-center items-center flex flex-col gap-y-9 '>
    <h1 className="bg-[#229799] text-2xl rounded-lg w-[90vw] text-center font-bold text-white p-6">
        User Management Application
      </h1>
    <Shimmer/>;
    </div>
  }

  return (
  <div className=' justify-center items-center flex flex-col gap-y-9'>
   <h1 className="bg-[#229799] text-2xl rounded-lg w-[90vw] text-center font-bold text-white p-6">
        User Management Application
      </h1>
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Contact Info</h3>
        <p className="text-gray-700">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Website:</span>{' '}
          <a
            href={`http://${user.website}`}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Address</h3>
        <p className="text-gray-700">
          {user.address.street}, {user.address.suite}
        </p>
        <p className="text-gray-700">
          {user.address.city}, {user.address.zipcode}
        </p>
        <p className="text-gray-700">
          Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Company</h3>
        <p className="text-gray-700">
          <span className="font-medium">Name:</span> {user.company.name}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Catchphrase:</span> {user.company.catchPhrase}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Business:</span> {user.company.bs}
        </p>
      </div>
    </div>
    </div>
  );
};

export default UserDetails;
