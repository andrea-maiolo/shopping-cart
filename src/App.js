import React, { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="homePage">
      <Header />
      <main className="storySection">
        <h2 className="secondHeader">About us</h2>
        <p className="storytelling">
          This section is about storytelling, because as great marketing teach
          us, nothing sells like a good story!
        </p>
        <div className="firstLorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at
          consectetur lorem donec massa sapien. Tellus in hac habitasse platea
          dictumst vestibulum rhoncus est. Aliquam vestibulum morbi blandit
          cursus risus. Vulputate ut pharetra sit amet aliquam id. Donec ac odio
          tempor orci dapibus ultrices in. Platea dictumst vestibulum rhoncus
          est pellentesque elit. Est ante in nibh mauris. Pretium vulputate
          sapien nec sagittis aliquam malesuada. Ac ut consequat semper viverra
          nam libero justo laoreet. Tortor at auctor urna nunc id cursus metus
          aliquam. Quis eleifend quam adipiscing vitae. Donec pretium vulputate
          sapien nec sagittis aliquam malesuada. Vitae tempus quam pellentesque
          nec nam aliquam. Diam ut venenatis tellus in metus vulputate eu
          scelerisque felis. Amet massa vitae tortor condimentum lacinia quis
          vel eros donec. Mi eget mauris pharetra et. Morbi non arcu risus quis
          varius quam quisque. Ut tortor pretium viverra suspendisse potenti
          nullam ac tortor. Facilisi morbi tempus iaculis urna id volutpat
          lacus.
        </div>
        <img
          className="imageFrontPage"
          src="https://www.thedigitalbridges.com/wp-content/uploads/2016/09/ssd-drive-advantages-over-hdd-drive.jpg"
          alt="SDD picture"
        ></img>
        <p className="storytelling">
          Like every shop that you can respect i am going to tell you about our
          superior quality
        </p>
        <div className="firstLorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at
          consectetur lorem donec massa sapien. Tellus in hac habitasse platea
          dictumst vestibulum rhoncus est. Aliquam vestibulum morbi blandit
          cursus risus. Vulputate ut pharetra sit amet aliquam id. Donec ac odio
          tempor orci dapibus ultrices in. Platea dictumst vestibulum rhoncus
          est pellentesque elit. Est ante in nibh mauris. Pretium vulputate
          sapien nec sagittis aliquam malesuada. Ac ut consequat semper viverra
          nam libero justo laoreet. Tortor at auctor urna nunc id cursus metus
          aliquam. Quis eleifend quam adipiscing vitae. Donec pretium vulputate
          sapien nec sagittis aliquam malesuada. Vitae tempus quam pellentesque
          nec nam aliquam. Diam ut venenatis tellus in metus vulputate eu
          scelerisque felis. Amet massa vitae tortor condimentum lacinia quis
          vel eros donec. Mi eget mauris pharetra et. Morbi non arcu risus quis
          varius quam quisque. Ut tortor pretium viverra suspendisse potenti
          nullam ac tortor. Facilisi morbi tempus iaculis urna id volutpat
          lacus.
        </div>
        <img
          className="imageFrontPage"
          src="https://images.idgesg.net/images/article/2017/06/intel_ssd_5_4-100727490-large.jpg"
          alt="SDD picture"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
