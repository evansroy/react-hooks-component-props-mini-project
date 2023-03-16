import React from 'react'

function About(props) {
    const { image, about } = props;

  return (

    <div>
      <aside>
        <img src= {image || 'https://via.placeholder.com/215'} alt="blog logo"/>
        <p>{about}</p>
      </aside>
    </div>
  )
}

export default About
