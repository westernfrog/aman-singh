import PPage from "../../components/PPage";
import img1 from "../../public/carnetHome.png";
import img2 from "../../public/carnetChat.png";

export default function carnet() {
  return (
    <>
      <PPage
        title=".todaynews."
        lang="next.js and fetch api"
        link="https://localhost:3000/"
        head="I used Fetch api to fetch the news data from Bing News api but it is not for commerical use so it is only visible for localhost. 📰"
        img1={img1}
        img2={img2}
      />
    </>
  );
}
