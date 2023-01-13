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
            <Hcard
              title="Learning Three.js"
              name="using next.js"
              year="2023 ~"
            />
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-4">
            <Hcard
              title="Learnt React"
              name="made awesome react sites"
              year="2022"
            />
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Hcard
              title="Static websites phase"
              name="discovering amazing sites"
              year="2022"
            />
          </div>
          <div className="col-md-4"></div>

          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Hcard
              title="Discord bot phase"
              name="busy with discord.py"
              year="2021"
            />
          </div>
          <div className="col-md-6"></div>

          <div className="col-md-4">
            <Hcard
              title="College started (BTech CSE)"
              name="a college student"
              year="August 2021"
            />
          </div>
        </div>
      </div>
    </>
  );
}
