function Header() {
  return (
    <>
      <nav className="navbar bg-info bg-gradient mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/src/pics/logo.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
            Cats
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="select-container d-flex" id="select-container"></div>
        <div className="row" id="catalog-row"></div>
      </div>
    </>
  );
}

export default Header;