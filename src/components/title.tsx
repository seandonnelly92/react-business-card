import React from 'react'
import sean from "../assets/sean-donnelly.jpg"

export default function Title() {
  return (
  <div>
    <img src={sean} alt="Sean Donnelly" />
    <h1>Sean Donnelly</h1>
    <h4>Software Engineer</h4>
    <h5>www.seandonnelly.co.uk</h5>
    <div className='two-buttons'>
    <a href="https://www.linkedin.com/in/seandonnelly92" target='_blank'><button>Linkedin</button></a>
    <a href="https://www.linkedin.com/in/seandonnelly92" target='_blank'><button>Email</button></a>
    </div>
  </div>
  )
}
