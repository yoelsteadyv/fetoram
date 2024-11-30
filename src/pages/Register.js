import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from './api/api.js'


const Register = () => {
  const [username, setUsername] = useState("");
  const [ign, setIgn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassoword] = useState("");
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await api.post('https://betoram.vercel.app/users', {
        username,
        ign,
        email,
        password,
        confPassword,
      });
      navigate("/");
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
            <form onSubmit={Register} className="w-full card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered input-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">InGameName</span>
                </label>
                <input
                  type="text"
                  placeholder="InGameName"
                  className="input input-bordered input-sm"
                  value={ign}
                  onChange={(e) => setIgn(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered input-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  className="input input-bordered input-sm"
                  value={confPassword}
                  onChange={(e) => setConfPassoword(e.target.value)}
                  required
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    have account??
                  </a>
                </label>
              </div>
              <div className="form-control">
                <span className="text-red-600 label-text-alt">{msg}</span>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
