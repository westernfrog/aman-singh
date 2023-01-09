import PPage from "../components/PPage";
import img1 from "../../public/carnetHome.png";
import img2 from "../../public/carnetChat.png";

export default function carnet() {
  return (
    <>
      <PPage
        title="songbird."
        lang="react"
        link="https://westernfrog.github.io/songbird"
        head="a place where you can see the divine meeting of front-end with back-end. ✨"
        img1={img1}
        img2={img2}
        body="the data from the input field goes directly to MongoDB database and that data is display in a form of note."
      />
    </>
  );
}
