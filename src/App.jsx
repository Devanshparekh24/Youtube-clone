import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";
import PlayingVideo from "./components/PlayingVideo";
// testing
// import { useAuth } from "./contexts/AuthProvider";
function App() {
  // testing
  // const { loading, data } = useAuth();
  // console.log(loading);
  // console.log(data);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/serachQuery" element={<Search />} />
        <Route path="/playing-video/id:" element={<PlayingVideo />} />
      </Routes>
    </>
  );
}

export default App;
