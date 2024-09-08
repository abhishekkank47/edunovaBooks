import React from "react";
import { Link } from "react-router-dom"
import { FaBook } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="px-5 md:px-20 dark:bg-base-200 bg-gray-800 text-white">
        <div className="navbar ">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/all-books">Books</Link>
                </li>
                <li>
                  <Link to="/issue-books">Issue Book</Link>
                </li>
                <li>
                  <Link to="/return-book">Return Book</Link>
                </li>
                <li>
                  <Link to="/all-users">User's</Link>
                </li>
                <li>
                  <Link to="/transactions">Transactions</Link>
                </li>
                <li>
                  <label className="input input-bordered flex items-center gap-2 bg-slate-700">
                    <input
                      type="text"
                      className="grow w-20"
                      placeholder="Search Books"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl "> <FaBook /> EDUNOVA BOOK'S STORE</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="px-24">
                <label className="input input-bordered flex items-center gap-2 hover:bg-slate-700">
                  <input
                    type="text"
                    className="grow w-60 "
                    placeholder="Search Books"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <details>
                  <summary><Link to="/all-books">Books</Link></summary>
                  <ul className="p-2 bg-black">
                    <li>
                      <Link to="/issue-books">Issue</Link>
                    </li>
                    <li>
                      <Link to="/return-book">Return</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/all-users">User's</Link>
              </li>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
