import Image from "next/image";
import Chat from "./Chat";
import { useState } from "react";
import $ from "jquery";

export default function Contact() {
  const [formData, setformData] = useState({
    text: "",
  });

  const handleChange = async (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setformData(newData);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/posted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    $(".btnReload").on("click", function () {
      $(".btnReload").html("Submitted! ✨");
    });
  };
  return (
    <>
      <div className="container">
        <button
          className="btn bg-dark btn-lg fixed-bottom mx-lg-5 my-lg-5 rounded-pill mx-3 my-5 btnp shadow border border-dark"
          style={{
            left: "auto",
            boxShadow: "inherit",
          }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="fa-regular fa-comment fa-lg text-light"></i>
        </button>

        <div
          className="offcanvas offcanvas-end mx-lg-5 my-lg-5 rounded-3 bg-black"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header bg-dark text-light rounded-3 shadow-sm">
            <h5 id="offcanvasRightLabel">
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark border-0"
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/8263/8263515.png"
                    alt="twbs"
                    width="32"
                    height="32"
                    className="rounded-circle flex-shrink-0"
                  />
                  <div className="d-flex w-100 justify-content-between bg-dark text-light">
                    <div>
                      <h5 className="mb-0 text-dm fw-bold">ContactMe Bot</h5>
                      <p className="mb-0 opacity-50 h6 text-rubik">
                        Send me a question!
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </h5>
            <button
              type="button"
              className="text-reset btn-dark btn btn-lg bg-dark border-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ boxShadow: "inherit" }}
            >
              <i className="fa-solid fa-xmark fa-lg text-light"></i>
            </button>
          </div>
          <div className="offcanvas-body text-light">
            <Chat chat="Hi! I'm ContactMe Bot. 🤖" />
            <Chat chat="I'm just like Aman, but a far better conversationalist. 😉 I hope you've enjoyed browsing my work. ❤️" />
            <Chat chat="Send me a message! or simply a Hii. 👋" /> <br />
            <div
              className="border border-dark p-3"
              style={{ borderRadius: "12px" }}
            >
              <textarea
                className="form-control border-dark bg-dark mt-2 text-light text-rubik"
                id="text"
                rows="4"
                value={formData.text}
                placeholder="what's on your mind?..."
                style={{ resize: "none" }}
                onChange={(e) => handleChange(e)}
              ></textarea>
              <button
                className="btn btn-dark btn-sm my-3 rounded-pill px-3 btnReload text-rubik shadow-sm text-primary"
                role="button"
                onClick={handleSubmit}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                autoCorrect="false"
              >
                send <i class="fa-regular fa-paper-plane ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
