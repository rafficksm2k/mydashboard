import React, { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [id, setId] = useState();
  const [pwd, setPwd] = useState();
  const API = import.meta.env.VITE_EXPRESS_API_HOST;

  const login = async (e) => {
    try {
      e.preventDefault();
      setId("");
      setPwd("");
      console.log("Login button click===", id, "=====", pwd);
      const response = await fetch(`${API}/users/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          pwd: pwd,
        }),
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("service not found..");
        } else if (response.status === 500) {
          throw new Error("Internal server error..");
        } else {
          throw new Error("Unexpected Error..");
        }
      }
      const result = await response.json();
      console.log("result===", result);
      if (result.message && result.message === "success") {
        onLoginSuccess();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>Login page</div>
      <div>
        Id:{" "}
        <input
          value={id}
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        Password:{" "}
        <input
          value={pwd}
          type="password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        ></input>
      </div>
      <button type="button" onClick={login}>
        Login
      </button>
    </>
  );
}
