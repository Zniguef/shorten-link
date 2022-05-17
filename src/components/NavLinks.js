import "../css/main.css"

function NavLinks() {
  return (
    <div className='nav'>
      <div className="menu">
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
      </ul>
      </div>
      <div className="right">
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  )
}

export default NavLinks