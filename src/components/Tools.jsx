import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiEspressif,
  SiGit,
  SiGithub,
  SiPython,
  SiLua,
  SiFlutter,
  SiAndroid,
  SiFirebase,
  SiXampp,
} from 'react-icons/si'
import { FaCode, FaImage } from 'react-icons/fa'
import toolsBg from '../image/services.png'
import Reveal from './Reveal'
import './Tools.css'

const TOOLS_BG = {
  backgroundImage: `linear-gradient(100deg, var(--hero-overlay-1) 0%, var(--hero-overlay-2) 45%, var(--hero-overlay-3) 85%), url(${toolsBg})`,
}

const TOOLS = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'ESP32', icon: SiEspressif, color: '#E7352C' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: 'var(--text)' },
  { name: 'VS Code', icon: FaCode, color: '#007ACC' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Lua', icon: SiLua, color: '#2C2D72' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Android', icon: SiAndroid, color: '#3DDC84' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Photoshop', icon: FaImage, color: '#31A8FF' },
  { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
]

function Tools() {
  return (
    <section id="tools" className="tools" style={TOOLS_BG}>
      <Reveal as="div" className="section__heading">
        <span className="section__eyebrow">Tools</span>
        <h2>Tools &amp; Technologies</h2>
      </Reveal>

      <div className="tools__grid">
        {TOOLS.map(({ name, icon: Icon, color }, i) => (
          <Reveal as="div" className="tool-logo" key={name} delay={(i % 6) * 60}>
            <Icon className="tool-logo__icon" style={{ color }} />
            <span className="tool-logo__name">{name}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Tools
