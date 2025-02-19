import React, { memo } from "react";
import { LoginViewProps } from "./page.type";

const LoginView: React.FC<LoginViewProps> = ({
  onSubmit,
  loading,
  error,
  accessToken,
}) => {
  return (
    <div className="flex justify-center pt-36 min-h-screen w-full bg-gray-200">
      <div className="bg-white w-full rounded-2xl p-6 relative space-y-4">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Login as Administrator</h1>
          <p className="text-sm font-medium text-gray-500">
            Login to access the admin cashier
          </p>
        </div>
        <form onSubmit={onSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-zinc-100 border border-white rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-zinc-100 border border-white rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-zinc-800 text-white font-semibold text-lg rounded-xl h-12 mt-4"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(LoginView);
