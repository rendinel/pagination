import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  //{1}import data and loading from my custom hook
  const { loading, data } = useFetch()

  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading])

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {/* //{1} the i map my data from the api pass them with the spread operator to my component follower */}
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App