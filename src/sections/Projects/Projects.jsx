import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.png';
import quizwhiz from '../../assets/quizwhiz.png';
import aiva from '../../assets/aiva.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://rchemjong-weather-app.netlify.app/"
          h3="Weather Whiz"
          p="Weather App"
        />
        <ProjectCard
          src={quizwhiz}
          link="https://quiz-whiz-rc.netlify.app/"
          h3="Quiz Whiz"
          p="Trivia App"
        />
        <ProjectCard
          src={aiva}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="AIVA"
          p="Smart Voice Assistant"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
