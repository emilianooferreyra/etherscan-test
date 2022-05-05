import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-cols">
          <div className="footer-logo">
            <div className="footer-span">
              <img
                src="https://etherscan.io/images/svg/brands/ethereum.svg?v=1.3"
                width="20"
                alt="Ethereum Logo"
              />
              <span className="text-ether">Powered by Ethereum</span>
            </div>

            <p className="text-white">
              Etherscan is a Block Explorer and Analytics Platform for Ethereum,
              a decentralized smart contracts platform.
            </p>
          </div>

          <ul>
            <li>
              <a href="#">
                <h4 className="text-heading">Company</h4>
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Brand Assets</a>
            </li>
            <li data-badge="Join Us">
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <h4 className="text-heading">Resources</h4>
              </a>
            </li>
            <li>
              <a href="#">API Documentation</a>
            </li>
            <li>
              <a href="#">Knowledge Base</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Network Status</a>
            </li>
            <li>
              <a href="#">Disqus Comments</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <h4 className="text-heading">Products & Services</h4>
              </a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
            <li>
              <a href="#">Explorer-as-a-Service (EaaS)</a>
            </li>
            <li>
              <a href="#">Developer APIs</a>
            </li>
            <li>
              <a href="#">Blockscan</a>
            </li>
            <li>
              <a href="#">BeaconScan</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
