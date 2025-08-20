import React from 'react';
import './NotePage.css';
import { ToastContainer } from 'react-toastify';
import { FiLogOut } from 'react-icons/fi';
import NoteList from './NoteList';
import Json from '../assets/data.json'

const NotePage = () => {
  // Contoh data untuk kartu catatan
  const exampleNote = {
    id: '123-abc',
    title: 'Rapat Tim Proyek',
    snippet: 'Diskusi progres mingguan, pembagian tugas untuk fase berikutnya, dan identifikasi...',
  };
  
  return (
    <div className='appContainer'>
      <ToastContainer />
      <div className='appHeader'>
        <button className='addButton'>+ Tambah Catetan</button>
        <button className='logOutButton'>
          <FiLogOut size={30} />
        </button>
      </div>
      <div className='mainContent'>
        <h1 className='mainTitle'>List Catetan</h1>
        <div className='notesGrid'>
          {Json.note.map((a) => (
           <NoteList
            title={a.judul}
            snippet={a.cerita}
            noteId={a.id}
           /> 
          ))}
          {/* Anda bisa menambahkan lebih banyak kartu di sini */}
        </div>
      </div>
    </div>
  );
}

export default NotePage;
