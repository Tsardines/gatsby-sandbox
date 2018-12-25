import React from 'react'
import { Link } from 'gatsby'

import './styles.css'
import Layout from '../components/layout'

const IndexPage = () => (

  <Layout>
    <h1>Hello!</h1>
    <p id='#example'>I'm a web developer based in NY and NJ.</p>
    <p>I'm also a skilled tennis player and an avid  <a href="https://haleysulcerphoto.netlify.com" target="_blank" rel="noopener noreferrer">street photographer.</a></p>

    <br />

    <h3>Experience</h3>

    <table className="work-table">

      {/* <tr>Junior Web Developer</tr>
      <tr><a href="https://kobrekim.com/">Kobre & Kim</a></tr>
      <tr>New York, NY</tr>
      <tr>January 2019 - Present</tr> */}
      <tr>
        <td>Junior Developer</td>
        <td><a href="https://kobrekim.com/">Kobre & Kim</a></td>
        <td>New York, NY</td>
        <td>January 2019 - Present</td>
      </tr>

    </table>

    <br />

    <h3>Education</h3>

    <table className="edu-table">
      <tr>
        <td><strong><a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a></strong></td>
        <td>Web Development Immersive</td>
        <td>May 2018</td>
      </tr>

      <tr>
        <td><strong><a href="https://tcnj.pages.tcnj.edu/" target="_blank" rel="noopener noreferrer">The College of New Jersey</a></strong></td>
        <td>B.A. in Public & Mass Communication</td>
        <td>May 2015</td>
      </tr>

      <tr>
        <td><strong><a href="https://www.ucc.edu/" target="_blank" rel="noopener noreferrer">Union County College</a></strong></td>
        <td>A.A. in Liberal Arts</td>
        <td>May 2013</td>
      </tr>
    </table>

  
    <Link to="/projects-tech/">Projects and Tech</Link>
    <Link to ="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
