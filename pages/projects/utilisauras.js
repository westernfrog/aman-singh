import PPage from "../components/PPage";
import img1 from "../../public/carnetHome.png";
import img2 from "../../public/carnetChat.png";

export default function utilisauras() {
  return (
    <>
      <PPage
        title="utilisauras."
        lang="next.js and mongoDB"
        link="https://westernfrog.github.io/utilisauras"
        head="a site which offers tons of online utilities. 🔩✨"
        img1={img1}
        img2={img2}
      />
    </>
  );
}
