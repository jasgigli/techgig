import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Tech-Gig. All rights reserved.</p>
        <p className="mt-2">
          Follow us on{" "}
          <a href="#" className="text-yellow-300 hover:underline">
            Twitter
          </a>{" "}
          and{" "}
          <a href="#" className="text-yellow-300 hover:underline">
            LinkedIn
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
