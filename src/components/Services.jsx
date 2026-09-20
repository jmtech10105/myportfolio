import { useEffect, useRef, useState } from 'react'
import {
  FaGlobe,
  FaCog,
  FaSatelliteDish,
  FaMobileAlt,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaChartLine,
  FaCashRegister,
  FaUserShield,
  FaWifi,
  FaCalculator,
  FaLayerGroup,
  FaThermometerHalf,
  FaPowerOff,
  FaHeartbeat,
  FaSlidersH,
  FaBatteryFull,
  FaPlug,
  FaBell,
} from 'react-icons/fa'
import servicesBg from '../image/services.png'
import websiteServiceImg from '../image/service website.png'
import webAppServiceImg from '../image/webappservice.png'
import iotServiceImg from '../image/iotpictures.png'
import mobileServiceImg from '../image/mobileapp.png'
import Reveal from './Reveal'
import './Services.css'

const SERVICES_BG = {
  backgroundImage: `linear-gradient(100deg, var(--hero-overlay-1) 0%, var(--hero-overlay-2) 45%, var(--hero-overlay-3) 85%), url(${servicesBg})`,
}

const AUTO_DELAY = 5500

const SERVICES = [
  {
    number: '01',
    icon: FaGlobe,
    brand: 'Nexora IoT',
    title: 'Website Development',
    tagline: 'MODERN • RESPONSIVE • FAST',
    headline: 'Run your laundry business',
    headlineAccent: 'smarter.',
    color: '#3B82F6',
    image: websiteServiceImg,
    features: [
      { icon: FaChartLine, label: 'Real-time Monitoring' },
      { icon: FaCashRegister, label: 'Smart POS System' },
      { icon: FaUserShield, label: 'Full Admin Control' },
      { icon: FaWifi, label: 'Connected Through IoT' },
    ],
  },
  {
    number: '02',
    icon: FaCog,
    brand: 'Solar Calc',
    title: 'Web Applications',
    tagline: 'SCALABLE • SECURE • EFFICIENT',
    headline: 'Size Your Solar System',
    headlineAccent: 'in Minutes, Not Hours',
    color: 'var(--accent-2)',
    image: webAppServiceImg,
    features: [
      { icon: FaSlidersH, label: 'Custom System Design' },
      { icon: FaCalculator, label: 'Accurate Calculations' },
      { icon: FaLayerGroup, label: 'Multiple Configurations' },
      { icon: FaMobileAlt, label: 'Multiple Mobile Ready' },
    ],
  },
  {
    number: '03',
    icon: FaSatelliteDish,
    brand: 'SmartLVD',
    title: 'IoT Projects',
    tagline: 'CONNECTED • SMART • RELIABLE',
    headline: 'Protect Your Battery.',
    headlineAccent: 'Monitor Everything.',
    color: 'var(--accent)',
    image: iotServiceImg,
    features: [
      { icon: FaHeartbeat, label: 'Real-Time Monitoring' },
      { icon: FaPowerOff, label: 'Auto Disconnect' },
      { icon: FaThermometerHalf, label: 'Temperature Sensing' },
      { icon: FaMobileAlt, label: 'Mobile Dashboard' },
    ],
  },
  {
    number: '04',
    icon: FaMobileAlt,
    brand: 'SmartLVD',
    title: 'Mobile Applications',
    tagline: 'CROSS-PLATFORM • RELIABLE',
    headline: 'Smart Control.',
    headlineAccent: 'Anywhere.',
    color: '#A855F7',
    image: mobileServiceImg,
    visualCaption: {
      title: 'SMART CONTROL. ANYWHERE.',
      subtitle: 'Monitor. Manage. Stay Connected',
    },
    features: [
      { icon: FaBatteryFull, label: 'Battery Monitoring' },
      { icon: FaPlug, label: 'Load Control' },
      { icon: FaChartLine, label: 'Real-time Data' },
      { icon: FaBell, label: 'Instant Alerts' },
    ],
  },
]

function Services() {
  const [active, setActive] = useState(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActive((prev) => (prev + 1) % SERVICES.length)
      }
    }, AUTO_DELAY)
    return () => clearInterval(id)
  }, [])

  const goTo = (index) => {
    setActive(((index % SERVICES.length) + SERVICES.length) % SERVICES.length)
  }

  return (
    <section id="services" className="services" style={SERVICES_BG}>
      <Reveal as="div" className="section__heading">
        <span className="services__eyebrow">Services</span>
        <h2>
          What I <span className="services__accent">Do</span>
        </h2>
        <p className="services__subtitle">Turn ideas into real solutions</p>
      </Reveal>

      <div
        className="services__carousel"
        onMouseEnter={() => {
          pausedRef.current = true
        }}
        onMouseLeave={() => {
          pausedRef.current = false
        }}
      >
        <div className="services__track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {SERVICES.map(
            ({
              number,
              icon: Icon,
              brand,
              title,
              tagline,
              headline,
              headlineAccent,
              color,
              features,
              image,
              visualCaption,
            }) => (
              <article className="service-slide" key={title} style={{ '--service-color': color }}>
                <div className="service-slide__inner">
                  <div className="service-slide__top">
                    <span className="service-slide__number">{number}</span>
                    <span className="service-slide__brand">
                      <Icon /> {brand}
                    </span>
                  </div>

                  <h3 className="service-slide__title">{title}</h3>
                  <p className="service-slide__tagline">{tagline}</p>

                  <p className="service-slide__headline">
                    {headline} <span>{headlineAccent}</span>
                  </p>

                  <ul className="service-slide__features">
                    {features.map(({ icon: FeatureIcon, label }) => (
                      <li key={label}>
                        <span className="service-slide__feature-icon">
                          <FeatureIcon />
                        </span>
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="service-slide__cta">
                    Let's Talk <FaArrowRight />
                  </a>
                </div>

                {image && (
                  <div className="service-slide__visual" aria-hidden="true">
                    <div className="service-slide__visual-float">
                      {visualCaption && (
                        <div className="service-slide__caption">
                          <strong>{visualCaption.title}</strong>
                          <span>{visualCaption.subtitle}</span>
                        </div>
                      )}
                      <img src={image} alt="" />
                    </div>
                  </div>
                )}
              </article>
            ),
          )}
        </div>

        <button
          type="button"
          className="services__arrow services__arrow--prev"
          onClick={() => goTo(active - 1)}
          aria-label="Previous service"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="services__arrow services__arrow--next"
          onClick={() => goTo(active + 1)}
          aria-label="Next service"
        >
          <FaChevronRight />
        </button>

        <div className="services__dots">
          {SERVICES.map((service, i) => (
            <button
              type="button"
              key={service.title}
              className={`services__dot ${i === active ? 'is-active' : ''}`}
              style={{ '--service-color': service.color }}
              onClick={() => goTo(i)}
              aria-label={`Show ${service.title}`}
            />
          ))}
        </div>
      </div>

      <p className="services__tagline">Technology creates a better tomorrow</p>
    </section>
  )
}

export default Services
