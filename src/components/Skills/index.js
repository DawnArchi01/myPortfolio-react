import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import TextSphere from './TextSphere'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>

          <p>
            As a highly skilled professional, I possess a diverse range of
            technical and interpersonal skills that enable me to excel in
            various fields. With a strong background in Programming and Data
            Structures and Algorithms (DSA), I am well-equipped to handle
            complex problem-solving tasks using C++. Additionally, I have a deep
            understanding of Git and GitHub, making it easy for me to work
            collaboratively with other developers in team projects.
            <br />
            Moreover, my knowledge of Web Development technologies such as HTML,
            CSS, and JavaScript, combined with my expertise in ReactJS, makes me
            a valuable asset to any team looking to develop dynamic and
            responsive web applications. I also have experience in Content
            Marketing, which enables me to develop and execute effective
            strategies to drive traffic and increase engagement on digital
            platforms.
            <br />
            Furthermore, I am proficient in NodeJS, MongoDB, DBMS, and SQL,
            which allows me to build scalable and efficient web applications
            with robust database management. Additionally, my excellent
            communication and leadership skills make it easy for me to work
            effectively with others and manage team projects efficiently.
            <br />
            <br />
            Visit my <a href='https://www.linkedin.com/in/archisman-d-203a3a207/'>LinkedIn</a> profile for more details. Also you can checkout my cv on this <a href='https://drive.google.com/drive/folders/1g-wkChiYsobmGj9jVqOk63wTtG5C1_QD'>link</a>, or feel free to to give a peek on my <a href='https://leetcode.com/archismandawn7/'>LeetCode</a> profile. 
          </p>
          {/* <TextSphere /> */}
        </div>
        
      </div>
      
      <Loader type="pacman" />
      <TextSphere className="anim" />
      
    </>
  )
}

export default Skills
