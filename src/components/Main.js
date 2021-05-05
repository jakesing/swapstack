import { Route, Routes } from "react-router";
import Home from "./main/home/home";
import Writers from "./main/writers/writers";
import Brands from "./main/brands/brands";
import Pricing from "./main/pricing/pricing";
import Blog from "./main/blog/blog";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writers" element={<Writers />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default Main;
