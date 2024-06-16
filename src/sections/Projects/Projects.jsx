import styles from "./ProjectsStyles.module.css";
import web from "../../assets/web.png";
import ec from "../../assets/ec1.png";
import blog from "../../assets/blog.png";
import weather from "../../assets/weather.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={blog}
          link="https://blog-app-n8i4.onrender.com/"
          h3="BlogNest"
          p="Blog App"
        />
        <ProjectCard
          src={ec}
          link="https://github.com/SanjayNithish/ecommerce-mern"
          h3="Shopify"
          p="Ecommerce App"
        />
        <ProjectCard
          src={web}
          link="https://github.com/SanjayNithish/web_it_like_spider"
          h3="InnoHack"
          p="Hackethon Website"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="SkyScope"
          p="Weather App"
        />
      </div>
    </section>
  );
}

export default Projects;
