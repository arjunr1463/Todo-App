import Main from "./main";
import Header from "./header";
import About from "./about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
       <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
