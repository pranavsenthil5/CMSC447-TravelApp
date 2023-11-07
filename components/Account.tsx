import React from 'react';

export default function AccountForm() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-cover bg-center w-1/2 h-screen" style={{ backgroundImage: `url('./travel.png')` }}></div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="form">
          <div className="form-field">
            <p className="label">User Name:</p>
            <input
              type="text"
              className="input border border-black"
              name="user_name"
              value=""
            />
          </div>
          <div className="form-field">
            <p className="label">First Name:</p>
            <input
              type="text"
              className="input border border-black"
              name="first_name"
              value=""
            />
          </div>
          <div className="form-field">
            <p className="label">Last Name:</p>
            <input
              type="text"
              className="input border border-black"
              name="last_name"
              value=""
            />
          </div>
          <div className="form-field">
            <p className="label">Password:</p>
            <input
              type="password"
              className="input border border-black"
              name="password_hash"
              value=""
            />
          </div>
          <div className="form-field">
            <p className="label">Location:</p>
            <input
              type="text"
              className="input border border-black"
              name="location"
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
