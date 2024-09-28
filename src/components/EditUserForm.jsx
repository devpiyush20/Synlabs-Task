import React, { useState } from 'react';

const EditUserForm = ({ user, setUserData, setIsEditing }) => {
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('User updated:', result);

      // Update the userData state in the parent component
      setUserData((prevData) => prevData.map(item => item.id === user.id ? result : item));
      setIsEditing(false); // Close the editing form
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="border rounded w-full py-2 px-3 mb-2"
        type="text"
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="border rounded w-full py-2 px-3 mb-2"
        type="email"
        placeholder="Email"
        required
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="border rounded w-full py-2 px-3 mb-2"
        type="text"
        placeholder="Phone"
        required
      />
      <input
        name="address.city"
        value={formData.address.city}
        onChange={handleInputChange}
        className="border rounded w-full py-2 px-3 mb-2"
        type="text"
        placeholder="City"
        required
      />
      <input
        name="address.zipcode"
        value={formData.address.zipcode}
        onChange={handleInputChange}
        className="border rounded w-full py-2 px-3 mb-2"
        type="text"
        placeholder="Zipcode"
        required
      />
      <button type="submit" className="bg-[#48CFCB] text-white p-2 rounded-lg mt-2">
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
