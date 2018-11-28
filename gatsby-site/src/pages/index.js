import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (

  <Layout>
    <h1>Hello!</h1>
    <p id='#example'>I'm a Frontend Developer based in NY and NJ.</p>
    <p>I'm also a skilled tennis player and an avid  <a href="https://500px.com/hjs342" target="_blank" rel="noopener noreferrer">street photographer.</a></p>

    <h3>Education</h3>
      <p><strong><a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a></strong> Web Development Immersive - May 2018</p>

      <p><strong><a href="https://tcnj.pages.tcnj.edu/" target="_blank" rel="noopener noreferrer">The College of New Jersey</a></strong> B.A. in Public & Mass Communication - May 2015</p>

      <p><strong><a href="https://www.ucc.edu/" target="_blank" rel="noopener noreferrer">Union County College</a></strong> A.A. in Liberal Arts - May 2013</p>

    <Link to="/projects-tech/">Projects and Tech</Link>
    <Link to ="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
