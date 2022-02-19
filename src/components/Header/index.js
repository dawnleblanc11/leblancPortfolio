import React from "react";
import avatar from '../../assets/cover/avatar.jpeg';

function Header() {
  return (
    <header className="flex-row px-1">
      
      <h3> D LeBlanc Portfolio</h3>
      <h2>
        <a data-testid="link" href="/">
        <img
        src={avatar}
        className="bodyavatar"
        style={{ width: "20%" }}
        alt="dawnphoto"
      />
          <span role="img" aria-label="headshot"></span>
        </a>
        
      </h2>
      </header>
  );
}
export default Header;
