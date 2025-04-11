import { Routes, Route } from "react-router-dom";

import Posts from "./components/posts";
import Post from "./components/post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<Post />}></Route>
    </Routes>
  );
}

export default App;