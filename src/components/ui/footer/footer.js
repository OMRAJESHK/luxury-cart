import React from "react";

const Footer = () => {
  const date = new Date();
  const currentyear = date.getFullYear();

  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 ">
      <p class="text-gray-500 dark:text-gray-400 w-full p-0 m-0">
        {`© ${currentyear} LuxuryCart™. All Rights Reserved.`}
      </p>
    </footer>
  );
};

export default Footer;
