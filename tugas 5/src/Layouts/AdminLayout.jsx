import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminLayout({ children }) {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-row min-h-screen">
        <Sider />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-grow p-4 bg-blue-50">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Sider() {
  return (
    <aside className="w-64 bg-indigo-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="py-2 px-4 mt-4">
          <ul>
            <li className="hover:bg-indigo-700">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="hover:bg-indigo-700">
              <Link to="/mahasiswa">Mahasiswa</Link>
            </li>
            <li className="hover:bg-indigo-700">
              <Link to="/setting">Setting</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="bg-white p-4">
      <div className="flex justify-end">
        <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4 text-center">
      &copy; Kyuusha
    </footer>
  );
}

export default AdminLayout;
