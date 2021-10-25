/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import classNames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav scheme="light" dir="horizontal" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" pill variant="outline-yellow">
            Contact
          </Button>
        </div>
        <div className="w-9/12 text-right md:hidden">
          <img
            src="/menu.svg"
            alt=""
            className="inline-block cursor-pointer"
            onClick={() => setOffcanvas(true)}
          />
        </div>
      </div>

      <div
        className={classNames(
          "fixed bg-white z-10 top-0 p-10 h-full w-full transition-all md:hidden",
          offcanvas ? "right-0" : "-right-full"
        )}
      >
        <Nav scheme="dark" dir="vertical" />
        <img
          src="/close.svg"
          alt=""
          className="absolute top-10 right-10 w-8 cursor-pointer"
          onClick={() => setOffcanvas(false)}
        />
      </div>
    </>
  );
}
