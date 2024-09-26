import React, { useEffect, useState } from "react";
import "./header.css";
import Button from "../button/Button";
const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //   console.log(window.scrollY);
      if (window.scrollY > 500) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <nav className={`navigation ${showHeader === true ? "show" : ""}`}>
        <img
          src="src\images\logo_project.png"
          className="logo w-[107px] h-[107px] mt-4 object-cover"
          alt="Logo"
        />
        <a href="#" className="menu">
          Trang chủ
        </a>
        <a href="#" className="menu">
          Thực đơn
        </a>
        <a href="#" className="menu">
          Liên hệ
        </a>
        <a href="#" className="menu">
          Tra cứu đơn hàng
        </a>
      </nav>

      <div>
        <img
          src="src\images\final_background_header.jpg"
          alt=""
          className="background "
        />
      </div>
      <section>
        <div className="wrapper mb-8">
          <span className="quote ">
            Life is short <br />
            Eat dessert first
          </span>
          <div className="mt-32 flex items-center justify-center  gap-x-3 text-sm w-full">
            <Button className=" bg-[#933C24] w-[120px] font-semibold text-white border-black-10 rounded-[5px] h-12 p-4 text-center">
              Đặt hàng ngay
            </Button>
            <a className=" text-[#E9BD8C] text-xl w- inline-block " href="#">
              Về chúng tôi
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
