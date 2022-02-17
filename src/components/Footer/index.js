import React from "react";
import { SocialIcon } from 'react-social-icons';


function Footer() {
  return (
    <div>
      <footer class="bodycolumn">
            <ul>
                <li>
                    <h3>Reach Out Today</h3>
                </li>
                <li>
                    <a href="tel:+1(860)5582606">Click to call</a>
                </li>
                <li>
                    <a href="mailto:dawnleblanc11@gmail.com">Email</a>
                </li>
                <li>
                    <SocialIcon url="https://www.linkedin.com/in/dawn-leblanc-innov11?trk=profile-badge" />
                </li>
                <li>
                    <SocialIcon url="https://twitter.com/insurtechdawn" />
                </li>
                <li>
                    <SocialIcon url="https://github.com/dawnleblanc11" />
                </li>

            </ul>
        </footer>
    </div>
  );
}

export default Footer;