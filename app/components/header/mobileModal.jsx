function Topmodal({ onClose }){
    return(
                <div className="mobile-link">
                    <span className='cancel' onClick={onClose}><p>x</p></span>
        <div>
        <ul className="header-menu">
          <li>
            <Link href="#">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#program"  >
              Service
            </Link>
          </li>
          <li>
            <Link href="/#availiable">
              Availiable
            </Link>
          </li>
          <li>
            <Link href="/#plans">
              Plans
            </Link>{" "}
          </li>
          <li>
            <Link href="/#testmonials">
              Testimonials
            </Link>
          </li>
        </ul>
          <span className="mobile-login">
          <button className="mobile-in-btn">Sign in</button>
        <button className="mobile-up-btn">Sign up</button>
            </span>
          </div>
        </div>
    )
}
export default Topmodal