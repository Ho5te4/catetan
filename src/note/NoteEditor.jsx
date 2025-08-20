import './NoteEditor.css';
import React from 'react';
const NoteEditor = () => {
 return (
  <div className="AppContainer">
    <div className="input-container">
      <form>
        <div className="input-judul">
          <input
           type='text'
           id='judul'
           name='judul'
           placeholder='Masukan Judul....'
          />
        </div>
        <div className='input-cerita'>
          <textarea
          type='text'
          id='desc'
          name='desc'
          placeholder='Catatan disini....'
          ></textarea>
        </div>
      </form>
    </div>
    <button className='saveButton'>Simpan</button>
  </div>
 )
}

export default NoteEditor