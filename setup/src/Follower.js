import React from 'react'
//{2} i deconstruct and grab this item from my api and i display them
const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className='btn'>
        view profile
      </a>
    </article>
  )
}

export default Follower
