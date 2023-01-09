import PPage from "../components/PPage";
import img1 from "../../public/carnetHome.png";
import img2 from "../../public/carnetChat.png";

export default function songbird() {
  return (
    <>
      <PPage
        title="songbird."
        lang="react"
        link="https://westernfrog.github.io/songbird"
        head="a music player made from react and spotify api 🎵✨"
        img1={img1}
        img2={img2}
      />
    </>
  );
}
