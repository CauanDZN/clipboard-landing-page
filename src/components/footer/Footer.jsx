import './footer.css'

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src="logo.svg" alt="Logo" />
        </div>
        <div className="footer-menu">
          <div className="f-menu">
            <a href="#">FAQs</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="f-menu">
            <a href="#">Privacy Policy</a>
            <a href="#">Preses Kit</a>
          </div>
          <div className="f-menu">
            <a href="#">Install Kit</a>
          </div>
        </div>
        <div className="social-icons">
          <a href="#">
            <img src="icon-facebook.svg" alt="https://twitter.com/rai_jenis" />
          </a>
          <a href="https://twitter.com/rai_jenis">
            <img src="icon-twitter.svg" alt="" />
          </a>
          <a href="https://instagram.com/rai_jenis">
            <img src="icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}
