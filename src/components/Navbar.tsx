import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";

export const Navbar: FC = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <header>
      <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:justify-between sm:items-center sm:flex">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {isAuthenticated
                ? `Welcome Back, ${user?.given_name}`
                : "Archivo"}
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              {isAuthenticated && user && `our ID is: ${user.sub}`}
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
            <button
              className="inline-flex items-center justify-center px-5 py-3 text-gray-500 transition border border-gray-200 rounded-lg hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring"
              type="button"
            >
              <span className="text-sm font-medium"> Open Intro Dialog </span>
            </button>

            <button
              onClick={() => {
                if (isAuthenticated) {
                  logout({
                    returnTo: window.location.origin,
                  });
                } else {
                  loginWithRedirect();
                }
              }}
              className="block px-5 py-3 text-sm font-medium text-custom-black bg-primary-500 hover:bg-primary-800 transition rounded-lg focus:outline-none focus:ring"
              type="button"
            >
              {isAuthenticated ? "Log out" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
