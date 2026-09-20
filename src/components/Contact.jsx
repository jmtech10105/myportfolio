import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaCommentDots, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import contactBg from '../image/contactsbg.png'
import gmailIcon from '../image/gmail.png'
import './Contact.css'

const EMAIL = 'baesmichael5@gmail.com'
const LOCATION = 'Philippines'

const CONTACT_BG = {
  backgroundImage: `url(${contactBg})`,
}

function Contact() {
  const [message, setMessage] = useState('')

  const gmailParams = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: EMAIL,
    su: 'Portfolio inquiry',
    body: message.trim(),
  })
  const gmailHref = `https://mail.google.com/mail/?${gmailParams.toString()}`

  return (
    <section id="contact" className="contact" style={CONTACT_BG}>
      <div className="section__heading">
        <span className="section__eyebrow">Contact</span>
        <h2>Let's Work Together</h2>
        <p className="contact__status">Open for Freelance</p>
      </div>

      <div className="contact__card">
        <div className="contact__header">
          <span className="contact__gmail-icon" aria-hidden="true">
            <img src={gmailIcon} alt="" />
          </span>
          <div>
            <h3>Send a Message</h3>
            <p>Write a message, then open Gmail to send it to me.</p>
          </div>
        </div>

        <div className="contact__field">
          <label>Email</label>
          <div className="contact__box">
            <FaEnvelope className="contact__box-icon" />
            <span>{EMAIL}</span>
            <FaCheckCircle className="contact__check" />
          </div>
        </div>

        <div className="contact__field">
          <label>Location</label>
          <div className="contact__box">
            <FaMapMarkerAlt className="contact__box-icon" />
            <span>{LOCATION}</span>
            <FaCheckCircle className="contact__check" />
          </div>
        </div>

        <div className="contact__field">
          <label htmlFor="contact-message">
            Message <span className="contact__optional">(Optional)</span>
          </label>
          <div className="contact__box contact__box--textarea">
            <FaCommentDots className="contact__box-icon contact__box-icon--top" />
            <textarea
              id="contact-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me about your project..."
              rows={3}
            />
          </div>
        </div>

        <a className="contact__submit" href={gmailHref} target="_blank" rel="noopener noreferrer">
          <FaPaperPlane /> Open Gmail
        </a>

        <p className="contact__note">
          Let's turn your ideas into reality. <span aria-hidden="true">💚</span>
        </p>
      </div>
    </section>
  )
}

export default Contact
