import { Suspense } from "react";
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import { ImSpinner3 } from "react-icons/im";
import Technology from "./Components/Technologies/technology";
import type { TechType } from "./types/type";
import Footer from "./Components/Footer";

function App() {

  const techPromise=async():Promise<TechType[]>=>{
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  }
  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading..<ImSpinner3 /></p>}>
      <Technology techPromise={techPromise()}></Technology>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
