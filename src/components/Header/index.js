import React from "react";
import avatar from '../../assets/cover/avatar.jpeg';

function Header() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
        <img
        src={avatar}
        className="my-2"
        style={{ width: "10%" }}
        alt="cover"
      />
          <span role="img" aria-label="headshot"></span> DLeBlanc Portfolio
        </a>
      </h2>
      </header>
  );
}
export default Header;
