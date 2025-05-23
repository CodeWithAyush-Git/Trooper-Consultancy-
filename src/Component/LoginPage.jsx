import { useState } from 'react';
import LpImg from "../photos/Lp.jpg";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src={LpImg}
        alt="Login Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: 1 }}></div>
      {/* Form Container */}
      <div className="relative z-10 w-full max-w-2xl space-y-8 bg-white bg-opacity-90 p-10 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-800">
            {isLogin ? 'Login to Your Account' : 'Create a New Account'}
          </h2>
        </div>

        <div className="mt-8 space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? 'Login using social networks' : 'Sign up using social networks'}
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors">
                <span className="sr-only">Facebook</span>
                <span className="text-blue-600 font-bold">f</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 transition-colors">
                <span className="sr-only">Google</span>
                <span className="text-red-600 font-bold">G+</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <span className="text-blue-600 font-bold">in</span>
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <span className="border-t border-gray-300 w-16"></span>
              <span className="px-2 text-gray-500 text-sm">OR</span>
              <span className="border-t border-gray-300 w-16"></span>
            </div>
          </div>

          <form className="mt-8 space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </form>

          <div className="text-center pt-2">
            <p className="text-sm text-gray-600">
              {isLogin ? 'New Here?' : 'Already have an account?'}
            </p>
            <button
              onClick={toggleAuthMode}
              className="mt-1 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              {isLogin ? 'Sign up and discover a great amount of new opportunities!' : 'Sign in to your account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;