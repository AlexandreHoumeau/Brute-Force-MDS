import React, { useReducer, useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isValid, setValid] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.email === "test@gmail.com" && formData.password === "password") {
      setValid(true);
      setError(false)
    } else {
      setError(true)
    }

    setFormData({
      ...formData,
      password: "",
    })
  };

  return (
    <figure className="h-screen flex bg-gray-100">
      {isValid ? (
        <div>Vous êtes connecté</div>
      ) : (
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
          <blockquote className="text-2xl font-medium text-center">
            <p className="text-lg font-semibold">Welcome to My-App</p>
          </blockquote>

          <div className="text-primary m-6">
            <div className="flex items-center mt-3 justify-center">
              <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
                Login to your account
              </h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label className="text-left">Email:</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={
                  "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Password:</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={
                  "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <div className="flex items-center mt-3 justify-center">
                <button
                  className={
                    "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                  }
                  value="Login"
                >
                  Login
                </button>
              </div>
            </form>
            {error && <div className="font-semibold text-center text-red-400 mt-5">Mot de passe ou email incorrect</div>}
          </div>
        </div>
      )}
    </figure>
  );
}
