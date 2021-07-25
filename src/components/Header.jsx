function Header() {
  return (
    <nav className='blue'>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          React Shop
        </a>
        <ul id='nav-mobile' className='right '>
          <li>
            <a href='#' className='nav-link'>
              Repository
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
