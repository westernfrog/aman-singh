export default function Footer(params) {
  return (
    <>
      <div className="container vw-100 vh-100 d-flex align-items-center justify-content-between">
        <div className="text-light text-mono mx-auto text-center rose py-5">
          <h1
            className="display-3 fw-bolder text-center"
            style={{
              textShadow: " 0 0 3px blue, 0 0 5px purple",
            }}
          >
            Lets get in touch!
          </h1>
          <p
            className="text-any fs-5 text-center mt-4"
            style={{
              textShadow: " 0 0 3px #111, 0 0 3px #191919",
            }}
          >
            Have an exciting project where you need some help? <br />
            Send me over a message, <br />
            <span
              className="text-decoration-underline"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              let&apos;s chat
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
