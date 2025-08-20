import LoginPage from './login/LoginPage';
import NotePage from './note/NotePage';
import EditPage from './note/NoteEditor';
import ViewPage from './note/NoteView';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Anda bisa mengosongkan isi file App.css jika mau

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/note" element={<NotePage />} />
        <Route path="/new" element={<EditPage />}/>
        <Route path="/view" element={<ViewPage />} />
      </Routes>  
  );
}

export default App;