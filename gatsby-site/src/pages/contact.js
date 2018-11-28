import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Contact</h1>
      <h4><a href="mailto:hjsulcer@gmail.com" target="_blank" rel="noopener noreferrer">hjsulcer@gmail.com</a></h4>
      <h4><a href="https://github.com/Tsardines" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
      <h4><a href="https://www.linkedin.com/in/haley-sulcer/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h4>
      <h4><a href="https://500px.com/hjs342" target="_blank" rel="noopener noreferrer">Photography</a></h4>
    <Link to="/">Home</Link>
    <Link to="/projects-tech/">Projects and Tech</Link>
  </Layout>
)

export default Contact
