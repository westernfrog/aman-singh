import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="container">
        <button
          className="btn bg-dark btn-lg fixed-bottom mx-lg-5 my-lg-5 rounded-pill mx-3 my-5 btnp shadow border border-dark"
          style={{
            left: "auto",
            boxShadow: "inherit",
          }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="fa-regular fa-comment fa-lg text-light"></i>
        </button>

        <div
          className="offcanvas offcanvas-end mx-lg-5 my-lg-5 rounded-3 bg-black"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header bg-dark text-light rounded-3 shadow-sm">
            <h5 id="offcanvasRightLabel">
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark border-0"
                  aria-current="true"
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/8263/8263515.png"
                    alt="twbs"
                    width="32"
                    height="32"
                    className="rounded-circle flex-shrink-0"
                  />
                  <div className="d-flex gap-2 w-100 justify-content-between bg-dark text-light">
                    <div>
                      <h5 className="mb-0 text-rubik">Amswe Bot</h5>
                      <p className="mb-0 opacity-75 h6 text-dm">
                        Ask me a question!
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </h5>
            <button
              type="button"
              className="text-reset bg-dark btn"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark fa-lg text-light"></i>
            </button>
          </div>
          <div className="offcanvas-body text-light">
            I may not be able to teleport, but I can make your website load
            faster than you can say &apos;abracadabra&apos;
          </div>
        </div>
      </div>
    </>
  );
}
