export default function Hcard(props) {
  return (
    <>
      <div
        class="card text-light bg-dark my-3 mx-auto px-2"
        style={{ borderRadius: "1.7em" }}
      >
        <div className="row mx-0 px-0">
          <div className="col-8">
            <div class="card-body text-rubik">
              <p class="card-title fs-5">{props.title}</p>
              <p class="card-title fs-6">{props.name}</p>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-between">
            <div class="card-body text-rubik">
              <p class="card-title h5 text-end">{props.year}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
