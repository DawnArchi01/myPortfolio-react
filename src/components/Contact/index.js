import './index.scss'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_yc26fnj', 'template_0ibr44j', form.current, 'PYwJp-qqN8h_SBmBl')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As I sit here staring at the blank page, my mind feels as empty as
            the paper in front of me. I try to conjure up some inspiration, but
            my thoughts seem to be stuck in a perpetual state of limbo. Maybe I
            just need a break, a moment to let my mind wander and gather some
            new ideas. But for now, I'll keep typing away, hoping that the words
            will eventually come to me.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" placeholder="Name" name="name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>

                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>

                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Archisman Dawn,
          <br />
          India,
          <br />
          Salt Lake Sector III, Kolkata-700106
          <br />
          West Bengal <br />
          <span>archismandawn7@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[22.499425, 88.371349]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.499425, 88.371349]}>
              <Popup>
                Archisman lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
