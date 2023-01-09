import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

export default function PPage(props) {
  return (
    <>
      <Header />
      <div className="container col-xxl-12 pt-5 pb-2 text-white">
        <div className="row align-items-center py-lg-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold mb-3 text-mono">
              {props.title}
              <p className="lead text-rubik">
                {props.lang}
                <Link href={props.link ?? " "}>
                  <i className="fa-solid fa-arrow-up-right-from-square h5 btnp ms-3"></i>
                </Link>
              </p>
            </h1>
            <p className="text-rubik mb-0">{props.head}</p>
          </div>
        </div>
      </div>
      <div className="container text-white mb-5 text-rubik">
        <div>
          <Image
            src={props.img1}
            className="d-block mx-lg-auto img-fluid"
            alt="home"
            width="3000"
            height="3000"
            priority="true"
          />
        </div>

        <div>
          <Image
            src={props.img2}
            className="d-block mx-lg-auto img-fluid mt-4"
            alt="home"
            width="3000"
            height="3000"
            priority="true"
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
