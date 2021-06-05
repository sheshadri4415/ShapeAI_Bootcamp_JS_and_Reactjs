import React from "react";
import ReactDOM, { render } from "react-dom";
import Header from "./Components/Header";
import Note from "./Components/Note";
import Note_2 from "./Components/Note_2";
import Note_3 from "./Components/Note_3";

import Footer from "./Components/footer";

ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Note_2 />
    <Note_3 />
    <Footer />
  </div>,
  document.querySelector("#root")
);
