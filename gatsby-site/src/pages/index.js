import React from 'react'
import { Link } from 'gatsby'

import './styles.css'
import Layout from '../components/layout'

const IndexPage = () => (

  <Layout>
    <h1>Hello!</h1>
    <p id='#example'>I'm a web developer based in NY and NJ.</p>
    <p>I'm also into <a href="https://haleysulcerphoto.netlify.com" target="_blank" rel="noopener noreferrer">photography.</a></p>

    <br />

    <h3>Experience</h3>

    <table className="work-table">

      <tr>
        <td>Junior Developer</td>
        <td><a href="https://kobrekim.com/">Kobre & Kim - New York, NY</a></td>
        <td>Jan 2019 - Present</td>
      </tr>

    </table>

    <br />

    <h3>Education</h3>

    <table className="edu-table">
      <tr>
        <td><strong><a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a></strong></td>
        <td>Web Development Immersive</td>
        <td>Feb 2018 - May 2018</td>
      </tr>

      <tr>
        <td><strong><a href="https://tcnj.pages.tcnj.edu/" target="_blank" rel="noopener noreferrer">The College of New Jersey</a></strong></td>
        <td>B.A. in Public & Mass Communication</td>
        <td>Aug 2013 - May 2015</td>
      </tr>

      <tr>
        <td><strong><a href="https://www.ucc.edu/" target="_blank" rel="noopener noreferrer">Union County College</a></strong></td>
        <td>A.A. in Liberal Arts</td>
        <td>Jan 2011 - May 2013</td>
      </tr>
    </table>

  
    <Link to="/projects-tech/">Projects and Tech</Link>
    <Link to ="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
