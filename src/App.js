import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import "./app.css";

const App = () => {
  let users = [
    {
      name: "Diana",
      lastName: "Beishenbaeva",
      age: 20,
      id: 1,
    },
    {
      name: "Diana",
      lastName: "Beishenbaeva",
      age: 20,
      id: 2,
    },
    {
      name: "Diana",
      lastName: "Beishenbaeva",
      age: 20,
      id: 3,
    },
    {
      name: "Diana",
      lastName: "Beishenbaeva",
      age: 20,
      id: 4,
    },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
