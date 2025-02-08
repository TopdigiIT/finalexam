import React, { useState } from 'react';

const AdminPage = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Admin' && password === 'Admin1234') {
      setIsUnlocked(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      userType: 'Admin',
      rating: 4.8,
      verified: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      userType: 'Customer',
      rating: 4.5,
      verified: false,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael@example.com',
      userType: 'Seller',
      rating: 4.9,
      verified: true,
    },
  ];

  if (!isUnlocked) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={handleLogin}
          >
            Unlock Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-green-100 rounded-lg shadow-lg">
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-lg">Admin Dashboard</h1>
        <p className="mt-3 text-gray-700 text-lg">Manage user accounts and their information</p>
      </header>

      <table className="w-full mt-6 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-4 text-left">User Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">User Type</th>
            <th className="p-4 text-left">Rating</th>
            <th className="p-4 text-left">Verified</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-4 text-gray-800">{user.name}</td>
              <td className="p-4 text-gray-600">{user.email}</td>
              <td className="p-4 text-gray-800">{user.userType}</td>
              <td className="p-4 text-gray-800">{user.rating}</td>
              <td className="p-4 text-gray-800">{user.verified ? '✔️' : '❌'}</td>
              <td className="p-4 flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Send Email</button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remove</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
