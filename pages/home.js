import Image from "next/image";
import Graphics from "./components/Graphics";

export default function Home(params) {
  return (
    <>
      <div className="container col-xxl-12 py-5 text-white">
        <div className="row align-items-center py-lg-5">
          <div className="col-lg-6 ">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-mono">
              Hi, I&apos;m Aman Singh.
              <br />A Front-end Developer.
            </h1>
            <p className="lead text-rubik">
              I build stuffs for the web and bring them to life by using HTML,
              CSS and JavaScript as my spells. I am also a back-end developer
              and I love roses.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1087/1087460.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="500"
              priority
            />
            <Graphics />
          </div>
        </div>
      </div>
    </>
  );
}
