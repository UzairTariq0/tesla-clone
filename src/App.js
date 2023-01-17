import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/0x0/3304be3b-dd0a-4128-9c26-eb61c0b98d61')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70')] h-screen bg-cover bg-center">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
