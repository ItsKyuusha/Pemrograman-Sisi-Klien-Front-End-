import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Mahasiswa() {
  const [mahasiswa, setMahasiswa] = useState([
    { id: 1, nama: 'Kyuusha', nim: 'A11.2022.14745', prodi: 'Teknik Informatika' },
    { id: 2, nama: 'Lenathea', nim: 'A11.2022.14746', prodi: 'Sistem Informasi' },
    { id: 3, nama: 'Ali Gondrong', nim: 'A11.2022.14747', prodi: 'Desain Komunikasi Visual' },
  ]);
  const [isTambahModalOpen, setTambahModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newNim, setNewNim] = useState('');
  const [newProdi, setNewProdi] = useState('');
  const [editData, setEditData] = useState({ id: '', nama: '', nim: '', prodi: '' });

  // Fungsi untuk membuka dan menutup modal tambah
  const handleTambah = () => setTambahModalOpen(true);
  const closeTambahModal = () => {
    setTambahModalOpen(false);
    setNewName('');
    setNewNim('');
    setNewProdi('');
  };

  // Fungsi untuk membuka dan menutup modal edit
  const handleEdit = (mhs) => {
    setEditData(mhs);
    setEditModalOpen(true);
  };
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditData({ id: '', nama: '', nim: '', prodi: '' });
  };

  // Fungsi untuk menambah mahasiswa
  const handleAddMahasiswa = (e) => {
    e.preventDefault();
    setMahasiswa([
      ...mahasiswa,
      { id: mahasiswa.length + 1, nama: newName, nim: newNim, prodi: newProdi }
    ]);
    closeTambahModal();
  };

  // Fungsi untuk menyimpan hasil edit mahasiswa
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setMahasiswa(mahasiswa.map((mhs) => (mhs.id === editData.id ? editData : mhs)));
    closeEditModal();
  };

  // Fungsi untuk menghapus mahasiswa
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Yakin nih?',
      text: 'Data yang sudah dihapus tidak dapat dikembalikan',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yoi, hapuso!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswa(mahasiswa.filter((mhs) => mhs.id !== id));
        Swal.fire('Dihapus!', 'Data telah dihapus.', 'success');
      }
    });
  };

  return (
    <div>
      {/* Tombol Tambah Mahasiswa */}
      <div className="mt-4 flex justify-end">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded"
          onClick={handleTambah}
        >
          Tambah
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">List Mahasiswa</h2>

      {/* Tabel Mahasiswa */}
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">No.</th>
            <th className="py-2 px-4 text-left">Nama</th>
            <th className="py-2 px-4 text-left">NIM</th>
            <th className="py-2 px-4 text-left">Prodi</th>
            <th className="py-2 px-4 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs, index) => (
            <tr key={mhs.id}>
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{mhs.nama}</td>
              <td className="py-2 px-4">{mhs.nim}</td>
              <td className="py-2 px-4">{mhs.prodi}</td>
              <td className="py-2 px-4">
                {/* Tombol Edit */}
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleEdit(mhs)}
                >
                  Edit
                </button>
                {/* Tombol Hapus */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(mhs.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Tambah Mahasiswa */}
      {isTambahModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Tambah Mahasiswa</h2>
            <form onSubmit={handleAddMahasiswa}>
              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">NIM</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newNim}
                  onChange={(e) => setNewNim(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Prodi</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newProdi}
                  onChange={(e) => setNewProdi(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 border rounded mr-2"
                  onClick={closeTambahModal}
                >
                  Batal
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit Mahasiswa */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Mahasiswa</h2>
            <form onSubmit={handleSaveEdit}>
              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={editData.nama}
                  onChange={(e) => setEditData({ ...editData, nama: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">NIM</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={editData.nim}
                  onChange={(e) => setEditData({ ...editData, nim: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Prodi</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={editData.prodi}
                  onChange={(e) => setEditData({ ...editData, prodi: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 border rounded mr-2"
                  onClick={closeEditModal}
                >
                  Batal
                </button>
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mahasiswa;
