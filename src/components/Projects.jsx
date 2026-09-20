import { FaGlobe, FaTasks, FaHome, FaMobileAlt, FaArrowRight } from 'react-icons/fa'
import websiteImg from '../image/website.png'
import webAppImg from '../image/web app.png'
import iotImg from '../image/iot.png'
import mobileImg from '../image/mobile.png'
import Reveal from './Reveal'
import './Projects.css'

const TAG_COLORS = {
  PHP: '#60a5fa',
  MySQL: '#f59e0b',
  JavaScript: '#fbbf24',
  React: '#38bdf8',
  'Node.js': '#34d399',
  ESP32: '#60a5fa',
  IoT: '#2dd4bf',
  Lua: '#a78bfa',
  Flutter: '#38bdf8',
  Firebase: '#f59e0b',
}

const PROJECTS = [
  {
    icon: FaGlobe,
    color: '#3b82f6',
    title: 'Business Website with Booking',
    description: 'A clean, responsive business website with an integrated appointment booking system.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    image: websiteImg,
    link: 'https://iot.johnportfolio.work/',
  },
  {
    icon: FaTasks,
    color: '#8b5cf6',
    title: 'Task Management App',
    description: 'A real-time collaborative task manager with live updates and team boards.',
    tags: ['React', 'Node.js'],
    image: webAppImg,
    link: 'https://solarcalc.johnportfolio.work/#features',
  },
  {
    icon: FaHome,
    color: '#10b981',
    title: 'Smart Home System',
    description: 'Arduino/ESP32-based home automation with remote monitoring and control.',
    tags: ['ESP32', 'IoT', 'Lua'],
    image: iotImg,
    link: 'https://smartlvd.johnportfolio.work/',
  },
  {
    icon: FaMobileAlt,
    color: '#ec4899',
    title: 'Mobile Booking App',
    description: 'A cross-platform mobile app for browsing services and booking appointments on the go.',
    tags: ['Flutter', 'Firebase'],
    image: mobileImg,
    link: 'https://smartlvd.johnportfolio.work/downloads.php',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <span className="projects__corner projects__corner--left" aria-hidden="true">
        <span>Turn</span>
        <span>Ideas</span>
        <span>Into Reality</span>
      </span>
      <span className="projects__corner projects__corner--right" aria-hidden="true">
        <span>Build</span>
        <span>Innovate</span>
        <span>Create</span>
      </span>

      <Reveal as="div" className="section__heading">
        <span className="projects__eyebrow">Projects</span>
        <h2>
          Featured <span className="projects__accent">Work</span>
        </h2>
        <p className="projects__subtitle">Real Projects &bull; Real Solutions</p>
      </Reveal>

      <div className="projects__grid">
        {PROJECTS.map(({ icon: Icon, color, title, description, tags, image, link }, i) => (
          <Reveal
            as="article"
            className="project-card"
            key={title}
            delay={i * 100}
            style={{ '--project-color': color }}
          >
            <div className="project-card__preview">
              <img src={image} alt={title} loading="lazy" />
              <div className="project-card__badge">
                <Icon />
              </div>
            </div>

            <div className="project-card__body">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-card__tags">
                {tags.map((tag) => (
                  <span key={tag} style={{ '--tag-color': TAG_COLORS[tag] || color }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card__footer">
                <a
                  href={link || '#projects'}
                  className="project-card__link"
                  {...(link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  View Project
                </a>
                <a
                  href={link || '#projects'}
                  className="project-card__arrow"
                  aria-label={`View ${title}`}
                  {...(link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="projects__tagline">Technology creates a better tomorrow</p>
    </section>
  )
}

export default Projects
