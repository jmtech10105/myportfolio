import { SiCplusplus } from 'react-icons/si'
import { FaServer, FaWifi } from 'react-icons/fa'
import esp32Img from '../image/esp32.png'
import aboutBg from '../image/about.png'
import Reveal from './Reveal'
import './About.css'

const ABOUT_BG = {
  '--about-bg-image': `url(${aboutBg})`,
}

const FLOAT_ICONS = [
  { icon: SiCplusplus, top: 4, left: 2, color: '#00599C', delay: 0 },
  { icon: FaServer, top: 4, left: 104, color: 'var(--accent-2)', delay: 1.3 },
  { icon: FaWifi, top: 88, left: 104, color: 'var(--accent)', delay: 2.6 },
]

const CENTER = { x: 50, y: 55 }

const SKILLS = [
  { label: 'Web Development', percent: 97 },
  { label: 'Web Applications', percent: 93 },
  { label: 'IoT Projects', percent: 90 },
  { label: 'Mobile Applications', percent: 87 },
]

function SkillBar({ label, percent, delay }) {
  return (
    <Reveal className="skill" delay={delay}>
      <div className="skill__label">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__fill" style={{ '--target': `${percent}%` }} />
      </div>
    </Reveal>
  )
}

function About() {
  return (
    <section id="about" className="about" style={ABOUT_BG}>
      <Reveal as="div" className="section__heading">
        <span className="section__eyebrow">About</span>
        <h2>I'm John Michael Baes</h2>
        <p className="about__subtitle">Full-Stack Developer &amp; IoT Enthusiast</p>
      </Reveal>

      <div className="about__body">
        <div className="about__content">
          <Reveal className="about__bio">
            <p>
              I'm a dedicated developer who thrives at the intersection of creativity
              and technology. With <strong>4+ years of experience</strong>, I build
              websites, web applications, mobile apps, and smart embedded systems
              with a sharp eye for clean, purposeful design.
            </p>
          </Reveal>

          <div className="about__skills">
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.label} {...skill} delay={i * 100} />
            ))}
          </div>
        </div>

        <Reveal as="div" className="about__visual" delay={150}>
          <div className="about__visual-frame">
            <svg className="about__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              {FLOAT_ICONS.map(({ top, left }, i) => (
                <line key={i} x1={CENTER.x} y1={CENTER.y} x2={left} y2={top} />
              ))}
            </svg>

            <img src={esp32Img} alt="ESP32 development board" className="about__visual-img" />

            {FLOAT_ICONS.map(({ icon: Icon, top, left, color, delay }, i) => (
              <span
                className="about__float-icon"
                key={i}
                style={{ top: `${top}%`, left: `${left}%`, color, animationDelay: `${delay}s` }}
              >
                <Icon />
              </span>
            ))}
          </div>
          <p className="about__signature">Build • Innovate • Create</p>
        </Reveal>
      </div>
    </section>
  )
}

export default About
