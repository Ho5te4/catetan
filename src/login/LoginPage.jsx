import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import Json from '../assets/data.json'; // Jangan lupa mengimpor file CSS
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  let [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  let handleChange = (event) => {
  const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  let UserValidation = (event) => {
  event.preventDefault();
  let [usernamereal, passwordreal] = Json.user;
  if (formData.username == 'admin' && formData.password == 'admin') {
  toast.success("Berhasil Login!")
  navigate('/note')
  } else {
      toast.error("Gagal username atau password salah!");
  }
  }
  return (
    <div className="login-page-background">
      <ToastContainer />
      <div className="login-container">
        <h1>Catetan App.</h1>
        <form className="login-form" onSubmit={UserValidation}>
          <div className="input-group">
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Username" 
              value={formData.username}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password}
              placeholder="Password"
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-primary">
              Masuk
            </button>
            <button type="submit" className="btn-secondary">
              Buat akun
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;