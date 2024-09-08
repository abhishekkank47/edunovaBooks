import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import IssueNewBook from "./pages/IssueNewBook.jsx";
import ReturnBookPage from "./pages/ReturnBookPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-books" element={<BooksPage />} />
          <Route path="/issue-books" element={<IssueNewBook />} />
          <Route path="/return-book" element={<ReturnBookPage />} />
          <Route path="/all-users" element={<UsersPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
