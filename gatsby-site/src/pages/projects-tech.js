import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ProjectsTech = () => (
  <Layout>

  <h1>Tech</h1>
    <p>HTML5, CSS3, JavaScript, Node, Express, React, Ruby, Ruby on Rails, Git, Adobe Suite, Capture One, Sketch</p>

    <h1>Projects</h1>

      <h3><a href="https://skill-checker.netlify.com" target="_blank" rel="noopener noreferrer">Skill Checker</a></h3>
          <p>This is a minimalistic skill guide for the hit RPG game, <i>Divinity Original Sin: 2.</i> Allows you to easily search for keywords, categories, skill names, and more. <strong>Built with:</strong> React and Reactstrap. <a href="https://github.com/Tsardines/divinity-2-skills" target="_blank" rel="noopener noreferrer">Github</a></p>

      <h3><a href="https://pc-wizard.herokuapp.com" target="_blank" rel="noopener noreferrer">PC Wizard</a></h3>
        <p>PC Wizard helps people build computers. Users can view information on different types of computer components, as well as information regarding specific computer parts (series, price, RAM slots, etc). <strong>Built with:</strong> Rails, Devise, and Bulma. <a href="https://github.com/Tsardines/pc-wizard" target="_blank" rel="noopener noreferrer">Github</a></p>

      <h3><a href="https://spark-lines.herokuapp.com/" target="_blank" rel="noopener noreferrer">Spark Lines</a></h3>
        <p>Spark Lines is a single-page news aggregator. Users can also submit their own articles. <strong>Built with:</strong> Node, Express, PostgreSQL, and NewsAPI. <a href="https://github.com/Tsardines/news-app" target="_blank" rel="noopener noreferrer">Github</a></p>

      <h3><a href="https://terminal-hacker.netlify.com/" target="_blank" rel="noopener noreferrer">Terminal Hacker</a></h3>
        <p>This is a recreation of the terminal hacking mini game from the Fallout series. <strong>Built with:</strong> HTML, CSS, and JavaScript. <a href="https://github.com/Tsardines/fallout-terminal" target="_blank" rel="noopener noreferrer">Github</a></p>

      <h3><a href="https://afternoon-citadel-73979.herokuapp.com" target="_blank" rel="noopener noreferrer">Marvel Character Finder</a></h3>
        <p>Allows users to create accounts, view information on over a thousand characters, and add characters to their favorites list. <strong>Built with:</strong> Marvel API, React, Express, PostgreSQL, and Bootstrap. <a href="https://github.com/Tsardines/MarvelApp" target="_blank" rel="noopener noreferrer">Github</a></p>

      <h3><a href="https://haleysulcerphoto.netlify.com" target="_blank" rel="noopener noreferrer">Photography Portfolio</a></h3>
        <p>I built a site that showcases my photography. <strong>Built with:</strong> React, TypeIt, and react-photo-gallery. <a href="https://github.com/Tsardines/react-photo" target="_blank" rel="noopener noreferrer">Github</a></p>



    <Link to="/">Home</Link>
    <Link to ="/contact/">Contact</Link>
  </Layout>

)

export default ProjectsTech
