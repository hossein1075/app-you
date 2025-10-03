import Home from "./page/Home";
import Blog from "./page/Blog";
import About from "./Components/main/section1/about";

let router = [
      { path: "/", element: <Home/>},
      { path: "/blog", element: <Blog/>}
]

export default router