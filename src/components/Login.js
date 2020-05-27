import React, { useState } from "react";
import { AUTH_TOKEN } from "../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String! $password: String!) {
    login(email: $email, password; $password) {
        token
    }
  }
`;

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
        <Mutation
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, name }}
          onCompleted={(data) => this._confirm(data)}
        >
          {(mutation) => (
            <div className="pointer m2 button" onClick={mutation}>
              {login ? "login" : "create account"}
            </div>
          )}
        </Mutation>
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
