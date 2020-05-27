import React, { useState } from "react";
import { AUTH_TOKEN } from "../constants";

const Login = () => {
  const [user, setUser] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
  });

  const _confirm = () => {
    //ToDo
    return;
  };

  const _saveUserData = () => {
    //ToDo
    return;
  };

  const { login, email, password, name } = user;
  return (
    <div>
      <h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {!login && (
          <input
            value={name}
            onChange={(e) => this.setUser({ ...user, name: e.target.value })}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={(e) => this.setUser({ ...user, email: e.target.value })}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={(e) => this.setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={() => _confirm()}>
          {login ? "login" : "create account"}
        </div>
        <div
          className="pointer button"
          onlick={() => setUser({ ...user, login: !login })}
        >
          {login ? "need to create an account?" : "already have an account?"}
        </div>
      </div>
    </div>
  );
};

export default Login;
