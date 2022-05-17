import "../css/main.css";

function Footer() {
  return (
    <div className="container">
      <div className="logo">Shortly</div>
      <div className="footer-menu">
        <div className="features">
          <h5>Features</h5>
          <ul>
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>
        <div className="resources">
          <h5>Resources</h5>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="company">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="social-links">
        <i class="fa-brands fa-facebook-square"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}

export default Footer;
