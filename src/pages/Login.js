import React, { useState } from "react";
import axios from "axios";
import api from '../api/api.js'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // Bisa email atau username
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await api.post('https://betoram.vercel.app/login', {
        identifier,
        password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen hero bg-base-200">
        <div className="w-full hero-content">
          <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
            <form onSubmit={Auth} className="w-full card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email or Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Email or Username"
                  className="input input-bordered input-sm"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  className="input input-bordered input-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <a
                    href="/register"
                    className="label-text-alt link link-hover"
                  >
                    You don't have Account?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <span className="text-red-600 label-text-alt">{msg}</span>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
