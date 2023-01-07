export default function Footer(params) {
  return (
    <>
      <div className="container vw-100 vh-100 d-flex align-items-center justify-content-between">
        <div className="text-light text-mono mx-auto text-center ">
          <h1
            className="display-3 fw-bolder text-center"
            style={{
              textShadow: " 0 0 3px #000, 0 0 10px #C780FA",
            }}
          >
            Lets get in touch!
          </h1>
          <p className="text-rubik fs-5 text-center">
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
            &nbsp;🌹💫
          </p>
        </div>
      </div>
    </>
  );
}
