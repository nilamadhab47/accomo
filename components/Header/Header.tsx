"use client";

import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";

const Header = () => {

  return (
    <section className="h-wrapper" style={{ background: "transparent" }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link href="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        {/* menu */}
        <div
          // ref={menuRef}
          className="flexCenter h-menu"
        >
          <Link className="join-button" href="/signin">Owner</Link>

          <Link className="join-button" href="/signin">Tenant</Link>

        </div>

        {/* for medium and small screens */}
        <div className="menu-icon">
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header