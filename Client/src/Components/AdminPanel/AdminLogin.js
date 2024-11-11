import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { useLogin } from '../../hooks/useLogin';

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loginBtnText, setLoginBtnText] = useState('Login');
  const { login, loginError, isLoading } = useLogin();

  useEffect(() => {
    if (loginError) {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [loginError]);

  const handleLogin = async () => {
    setLoginBtnText('Logging in');
    try {
      await login(username.toLowerCase(), password);
      if (!loginError) {
        setLoginSuccess(true);
      } else {
        setLoginSuccess(false);
      }
    } catch (error) {
      setLoginSuccess(false);
      setShowErrorMessage(true);
    } finally {
      setLoginBtnText('Login');
    }
  };

  return (
    <div>
      {loginSuccess ? (
        <AdminPanel />
      ) : (
        <div className="login-body">
          <div className="login-container">
            <h2>Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showErrorMessage && (
              <p className="error-message">{loginError}</p>
            )}
            <button
              className="float-right"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {loginBtnText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
