import React from 'react';
import { toast } from 'react-toastify';
import './NoteList.css';
import { FiLink2 } from 'react-icons/fi';

const NoteList = ({ title, snippet, noteId }) => {
  const handleCopyLink = () => {
    const url = `${window.location.origin}/notes/${noteId}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Link berhasil di salin!")
    });
  };

  return (
    <div className='card'>
      <div className='cardContent'>
        <h3 className='cardTitle'>{title}</h3>
        <p className='cardSnippet'>{snippet}</p>
      </div>
      <div className='cardActions'>
        <button className='copyButton' onClick={handleCopyLink}>
          <FiLink2 size={14} />
          <span>Salin Link</span>
        </button>
      </div>
    </div>
  );
};

export default NoteList;

