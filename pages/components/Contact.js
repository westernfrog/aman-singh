export default function Contact() {
  return (
    <>
      <div className="container">
        <button
          className="btn btn-dark btn-lg fixed-bottom mx-lg-5 my-lg-5 rounded-pill mx-3 my-5 btnp shadow"
          style={{
            left: "auto",
            boxShadow: "inherit",
          }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="fa-regular fa-comment fa-lg"></i>
        </button>

        <div
          className="offcanvas offcanvas-end mx-lg-5 my-lg-5 rounded-3 bg-black my-2"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header bg-dark text-light rounded-3 shadow-sm">
            <h5 id="offcanvasRightLabel">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark border-0"
                  aria-current="true"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/185/185788.png"
                    alt="twbs"
                    width="32"
                    height="32"
                    class="rounded-circle flex-shrink-0"
                  />
                  <div class="d-flex gap-2 w-100 justify-content-between bg-dark text-light">
                    <div>
                      <h6 class="mb-0 text-rubik">Amswe Bot</h6>
                      <p class="mb-0 opacity-75 h6 text-dm">
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
              <i class="fa-solid fa-xmark fa-lg text-light"></i>
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
