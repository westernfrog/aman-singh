import Image from "next/image";

export default function Project(props) {
  return (
    <>
      <div className="container" id="projects">
        <div className="row my-5 text-rubik p-3">
          <button className="btn text-light p-0">
            <div
              className="col-md-12 bg-dark p-5 mx-auto shadow"
              style={{ borderRadius: "2rem" }}
            >
              <div
                className="bg-dark pb-5 text-center pt-3"
                style={{ borderRadius: "2rem" }}
              >
                <h5 className="bg-dark fs-4 text-dm fw-bold">{props.title}</h5>
                <p className="mb-0 bg-dark text-uppercase">{props.lang}</p>
              </div>
              <Image
                src={props.img}
                className="img-fluid bg-dark mx-auto d-block rounded pb-5"
                alt="project"
                width={"500"}
                height={"500"}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
