import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="shadow sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark fs-5 py-3">
            <div className="container-fluid text-rubik px-0">
              <Link className="navbar-brand text-mono fw-bold fs-4" href="/">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/9120/9120848.png"
                  alt="a rose"
                  width="30"
                  height="30"
                  className="d-inline-block me-2"
                ></Image>
                Aman Singh
              </Link>
              <button
                className="navbar-toggler d-md-none collapsed ms-auto bg-dark opacity-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars text-light"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav fw-bold text-center">
                  <li className="nav-item mx-lg-4">
                    <Link className="nav-link" aria-current="page" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-lg-4">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item d-lg-none">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="collapse navbar-collapse d-none d-lg-block"
                id="navbarNav"
              >
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link ps-4"
                      aria-current="page"
                      href="/"
                    >
                      <i
                        className="fa-solid fa-heart"
                        style={{ color: "maroon" }}
                      ></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto"></ul>
              </div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto fw-bold">
                  <li className="nav-item me-4 d-none d-lg-block">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                      href="/"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item me-4 d-none d-lg-block">
                    <Link className="nav-link" aria-current="page" href="/">
                      <i className="fa-brands fa-github fa-lg"></i>
                    </Link>
                  </li>
                  <li className="nav-item d-none d-lg-block">
                    <Link className="nav-link" href="/">
                      <i className="fa-brands fa-linkedin-in fa-lg"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
