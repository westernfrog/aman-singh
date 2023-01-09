import PPage from "../components/PPage";
import img1 from "../../public/carnetHome.png";
import img2 from "../../public/carnetChat.png";

export default function carnet() {
  return (
    <>
      <PPage
        title="planets."
        lang="html and css"
        link="https://westernfrog.github.io/planets"
        head="three planets revolving around the sun using just html and css. ☀️🌍"
        img1={img1}
        img2={img2}
      />
    </>
  );
}
