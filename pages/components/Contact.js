export default function Contact() {
  return (
    <>
      <div className="container">
        <button
          className="btn btn-dark btn-lg fixed-bottom mx-lg-5 my-lg-5 rounded-circle mx-3 my-5"
          style={{
            left: "auto",
            boxShadow: "inherit",
          }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="fa-solid fa-comment"></i>
        </button>

        <div
          className="offcanvas offcanvas-end mx-lg-5 my-lg-5 rounded-3 bg-black mx-md-0 my-md-0"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header bg-dark text-light">
            <h5 id="offcanvasRightLabel">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <img
                    src="https://github.com/twbs.png"
                    alt="twbs"
                    width="32"
                    height="32"
                    class="rounded-circle flex-shrink-0"
                  />
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">List group item heading</h6>
                      <p class="mb-0 opacity-75">
                        Some placeholder content in a paragraph.
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
              <i class="fa-solid fa-xmark fa-xl text-light"></i>
            </button>
          </div>
          <div className="offcanvas-body">...</div>
        </div>
      </div>
    </>
  );
}
