export default function Footer(params) {
  return (
    <>
      <div className="container vw-100 vh-100 d-flex align-items-center justify-content-between">
        <div className="text-light text-mono mx-auto text-center rose py-5">
          <h1
            className="display-3 fw-bolder text-center"
            style={{
              textShadow: " 0 0 3px #CD0404, 0 0 10px pink",
            }}
          >
            Lets get in touch!
          </h1>
          <p
            className="text-rubik fs-5 text-center mt-4"
            style={{
              textShadow: " 0 0 3px pink, 0 0 5px #111",
            }}
          >
            Have an exciting project where you need some help? <br />
            Send me over a message, and&nbsp;
            <span className="text-decoration-underline bg-dark">
              let&apos;s chat.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
