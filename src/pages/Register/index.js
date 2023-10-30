import React, { useState } from "react";
import "./index.css";
export default function Index() {
  /**
   * Local state tanimliyoruz.
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  /**
   * Yeni uyelik icin tetiklenecek arrowFunction tanimliyoruz
   */
  const register = () => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-control">Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-control">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-control">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <button className="btn btn-success">Kaydol</button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
