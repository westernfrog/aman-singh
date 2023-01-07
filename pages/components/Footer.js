export default function Footer(params) {
  return (
    <>
      <div className="container vw-100 vh-100 d-flex align-items-center justify-content-between">
        <div className="text-light text-mono mx-auto text-center rose py-5">
          <h1 className="display-4 fw-bold">
            Lets get in&nbsp;
            <span className="fw-bold" style={{ color: "#FF0032" }}>
              touch!
            </span>
          </h1>
          <p className="text-rubik fs-3 text-center mt-4">
            Have an exciting project where you need some help? <br />
            Send me over a message, and&nbsp; I may not be able to teleport, but
            I can make your website load faster than you can say
            &apos;abracadabra&apos;
            <span className="text-decoration-underline">let&apos;s chat.</span>
          </p>
        </div>
      </div>
    </>
  );
}
