import {
  FaPaperPlane,
  FaDownload,
  FaFolder,
  FaCode,
  FaUsers,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaMugHot,
  FaGlobe,
  FaMicrochip,
  FaMobileAlt,
  FaPalette,
} from 'react-icons/fa'
import profileImg from '../image/profile.png'
import bgImage from '../image/background.png'
import useCountUp from './useCountUp'
import './Hero.css'

const HERO_BG = {
  backgroundImage: `radial-gradient(120% 130% at 50% 50%, transparent 55%, var(--hero-vignette) 100%), linear-gradient(115deg, var(--hero-overlay-1) 0%, var(--hero-overlay-2) 40%, var(--hero-overlay-3) 75%), url(${bgImage})`,
  backgroundPosition: '70% center',
}

const STATS = [
  { icon: FaFolder, target: 12, suffix: '+', label: 'Projects Done' },
  { icon: FaCode, target: 4, suffix: '+', label: 'Years Coding' },
  { icon: FaUsers, target: 100, suffix: '%', label: 'Dedication' },
]

const META = [
  { icon: FaMapMarkerAlt, text: 'Philippines' },
  { icon: FaLaptopCode, text: 'Remote / On-site' },
  { icon: FaMugHot, text: 'Open to Opportunities' },
]

const CHIPS = [
  { icon: FaGlobe, label: 'Web Development' },
  { icon: FaMicrochip, label: 'IoT Systems' },
  { icon: FaMobileAlt, label: 'Mobile Applications' },
  { icon: FaPalette, label: 'UI/UX Design' },
]

function Stat({ icon: Icon, target, suffix, label }) {
  const [ref, value] = useCountUp(target)
  return (
    <div className="hero__stat" ref={ref}>
      <span className="hero__stat-icon">
        <Icon />
      </span>
      <div>
        <span className="hero__stat-number">
          {value}
          {suffix}
        </span>
        <span className="hero__stat-label">{label}</span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero" style={HERO_BG}>
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__tagline hero__anim" style={{ animationDelay: '0ms' }}>
            👋 <span>Hello, I'm</span>
          </p>
          <h1 className="hero__headline hero__anim" style={{ animationDelay: '90ms' }}>
            John Michael <span>Baes</span>
            <br />
            <em>Full-Stack Developer</em>
          </h1>
          <p className="hero__description hero__anim" style={{ animationDelay: '180ms' }}>
            I craft powerful and intuitive digital experiences — from full-stack
            web apps to smart IoT systems — with a sharp eye for clean, purposeful
            design.
          </p>

          <div className="hero__actions hero__anim" style={{ animationDelay: '270ms' }}>
            <a className="btn btn--primary" href="#contact">
              <FaPaperPlane /> Let's Talk
            </a>
            <a className="btn btn--ghost btn--glow" href="/John_Michael_Baes_CV.pdf" download>
              <span className="btn--glow-inner">
                <FaDownload /> Download CV
              </span>
            </a>
          </div>

          <div className="hero__stats hero__anim" style={{ animationDelay: '360ms' }}>
            {STATS.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>

        </div>

        <div className="hero__visual hero__anim" style={{ animationDelay: '150ms' }}>
          <div className="hero__visual-top">
            <div className="hero__photo-wrap">
              <span className="hero__sparkle" aria-hidden="true">
                ✦
              </span>
              <div className="hero__photo-panel">
                <img src={profileImg} alt="John Michael Baes" className="hero__photo" />
              </div>
            </div>

            <div className="hero__side-card">
              <div className="hero__badge-pill">
                <span className="hero__dot" />
                Available for Projects
              </div>
              <p className="hero__quote">"Turning ideas into real solutions."</p>
              <ul className="hero__meta-list">
                {META.map(({ icon: Icon, text }) => (
                  <li key={text}>
                    <Icon /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hero__chip-row">
            <div className="hero__chip-row-inner">
              {CHIPS.map(({ icon: Icon, label }) => (
                <div className="hero__chip" key={label}>
                  <span className="hero__chip-icon">
                    <Icon />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <p className="hero__signature">Build • Innovate • Create</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
