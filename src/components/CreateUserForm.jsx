import React, { useState } from 'react';

const CreateUserForm = ( {previousData,setNewUserData , setCreatingUser}) => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');

    if (keys.length > 1) {
      setUserData((prevState) => {
        const updatedData = { ...prevState };
        let temp = updatedData;

        for (let i = 0; i < keys.length - 1; i++) {
          temp = temp[keys[i]];
        }

        temp[keys[keys.length - 1]] = value;
        return updatedData;
      });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      setNewUserData([...previousData ,result])
      console.log('User created:', result);
      setResponseMessage('User successfully created!');
    } catch (error) {
      console.error('Error creating user:', error);
      setResponseMessage('There was an error creating the user.');
    }
    setCreatingUser(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Create New User</h2>

      {/* User Info */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Username</label>
        <input
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Username"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="email"
          placeholder="Email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Phone</label>
        <input
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Phone"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Website</label>
        <input
          name="website"
          value={userData.website}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Website"
          required
        />
      </div>

      {/* Address Section */}
      <h3 className="text-lg font-bold mb-2">Address</h3>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Street</label>
        <input
          name="address.street"
          value={userData.address.street}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Street"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Suite</label>
        <input
          name="address.suite"
          value={userData.address.suite}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Suite"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">City</label>
        <input
          name="address.city"
          value={userData.address.city}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="City"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Zipcode</label>
        <input
          name="address.zipcode"
          value={userData.address.zipcode}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Zipcode"
          required
        />
      </div>

      {/* Company Info */}
      <h3 className="text-lg font-bold mb-2">Company</h3>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Company Name</label>
        <input
          name="company.name"
          value={userData.company.name}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Company Name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Catchphrase</label>
        <input
          name="company.catchPhrase"
          value={userData.company.catchPhrase}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Catchphrase"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Business</label>
        <input
          name="company.bs"
          value={userData.company.bs}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Business"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create User
      </button>

      {responseMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          {responseMessage}
        </div>
      )}
    </form>
  );
};

export default CreateUserForm;
