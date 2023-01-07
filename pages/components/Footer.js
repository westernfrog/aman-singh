export default function Footer(params) {
  return (
    <>
      <div className="container vw-100 vh-100 d-flex align-items-center justify-content-between">
        <div className="text-light text-mono mx-auto text-center">
          <h1 className="display-4 fw-bold">
            Lets get in&nbsp;
            <span className="fw-bold" style={{ color: "maroon" }}>
              touch!
            </span>
          </h1>
          <p className="text-rubik fs-3 text-center mt-4">
            Have an exciting project where you need some help? <br />
            Send me over a message, and&nbsp;
            <span className="text-decoration-underline">let's chat.</span>
          </p>
        </div>
      </div>
    </>
  );
}
