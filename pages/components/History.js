import Hcard from "./Hcard";

export default function History() {
  return (
    <>
      <div className="container">
        <div className="text-light h3 text-mono fw-bold text-center">
          A Brief History
        </div>
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <Hcard title="Learning Three.js" name="Student" year="ongoing" />
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-4">
            <Hcard title="Learnt React" name="Student" year="2022" />
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Hcard
              title="Started building static websites"
              name="Student"
              year="2022"
            />
          </div>
          <div className="col-md-4"></div>

          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Hcard
              title="Started building discord bot"
              name="Student"
              year="2021"
            />
          </div>
          <div className="col-md-6"></div>

          <div className="col-md-4">
            <Hcard
              title="College started (BTech CSE)"
              name="Student"
              year="August 2021"
            />
          </div>
        </div>
      </div>
    </>
  );
}
