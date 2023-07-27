import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{display:"flex"}}>
        <div className="allink">
        <h2 style={{padding:"1rem"}}>Nadil</h2>
          <div style={{marginTop:"7rem"}}>
          <button className="btn">
            <Link className="link" to="/accounts">
              Accounts
            </Link>
          </button>
          <br />
          <button className="btn">
            <Link className="link" to="/password">
              Password
            </Link>
          </button>
          <br />
          <button className="btn">
            <Link className="link" to="/security">
              Security
            </Link>
          </button>
          <br />
          <button className="btn">
            <Link className="link" to="/application">
              Application
            </Link>
          </button>
          <br />
          <button className="btn">
            <Link className="link" to="/notification">
              Notification
            </Link>
          </button>
          </div>
          </div>
          <div className="out">
            <Outlet />
          </div>
      </div>
  );
}

export default Layout;
