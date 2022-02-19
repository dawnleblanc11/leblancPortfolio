import React from "react";
import { SocialIcon } from "react-social-icons";


function Footer() {
  return (
    <div>
      <footer class="bodycolumn">
        <ul>
          <li>
            <SocialIcon url="https://www.linkedin.com/in/dawn-leblanc-innov11?trk=profile-badge" />
          </li>
          <li>
            <SocialIcon url="https://twitter.com/insurtechdawn" />
          </li>
          <li>
            <SocialIcon url="https://github.com/dawnleblanc11" />
          </li>
          <li>
            <h6>Copyright D.LeBlanc 2022</h6>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
