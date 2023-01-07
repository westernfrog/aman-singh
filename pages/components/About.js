import Image from "next/image";

export default function Aboutme(params) {
  return (
    <>
      <div className="container col-xxl-12 py-5 text-white mb-5">
        <div className="row flex-lg-row-reverse align-items-center py-lg-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/9120/9120832.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="400"
              height="400"
              priority
            />
          </div>
          <div className="col-lg-6 order-first">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-mono">
              Hi, I am Aman. A Front-end Developer. Currently pursuing
              Bachelor&apos;s degree in Computer Science Engineering from
              Chandigarh University.
            </h1>
            <p className="lead text-rubik">
              I have my skills in Web Development and I started building sites
              since 3 years. I have an intermediate experience in React.js and
              currently I am learning more about 3D animations in front-end
              development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
