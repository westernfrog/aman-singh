import Project from "./Project";

export default function Projects() {
  return (
    <>
      <Project
        link="projects/carnet"
        title="Carnet"
        lang="Next.js and MongoDB"
        img="https://cdn-icons-png.flaticon.com/512/4187/4187213.png"
      />
      <Project
        link="projects/utilisauras"
        title="Utilisauras"
        lang="Next.js and MongoDB"
        img="https://cdn-icons-png.flaticon.com/512/675/675780.png"
      />
      <Project
        link="projects/songbird"
        title="SongBird"
        lang="React"
        img="https://cdn-icons-png.flaticon.com/512/3011/3011981.png"
      />
      <Project
        link="projects/planets"
        title="Planets"
        lang="HTML and CSS"
        img="https://cdn-icons-png.flaticon.com/512/2240/2240744.png"
      />
    </>
  );
}
