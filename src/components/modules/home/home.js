import React from "react";
import Navbar from "../../ui/navbar/navbar";
import Flexbox from "../../ui/flexbox/flexbox";
import Footer from "../../ui/footer/footer";
import Main from "./main";
import Aside from "./aside";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Flexbox gap={20} classProp="bg-white dark:bg-gray-900 py-10">
        <Aside />
        <Main />
      </Flexbox>
      <Footer />
    </div>
  );
};

export default Home;
