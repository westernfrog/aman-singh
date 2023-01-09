import PPage from "../components/PPage";
import img1 from "../../public/carnetHome.png";
import img2 from "../../public/carnetChat.png";

export default function carnet() {
  return (
    <>
      <PPage
        title="carnet."
        lang="next.js and mongoDB"
        link="https://carnet69.vercel.app/"
        head="a place where you can see the divine meeting of front-end with back-end. 📝✨"
        img1={img1}
        img2={img2}
      />
    </>
  );
}
