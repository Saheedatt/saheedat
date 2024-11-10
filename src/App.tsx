import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Cursor from "./components/Cursor"; 

function App() {
  return(
    <main>
      <Cursor  />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </main>
  )

}

export default App
