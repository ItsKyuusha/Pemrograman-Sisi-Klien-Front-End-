import React from 'react';
import AdminLayout from './Layouts/AdminLayout';
import Mahasiswa from './Pages/Admin/Mahasiswa';
import Login from './Pages/Auth/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <AdminLayout>
          <Mahasiswa />
        </AdminLayout>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
