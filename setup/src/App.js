import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  //{1}import data and loading from my custom hook
  const { loading, data } = useFetch()

  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])
  //{3 if loading is true i use a return to stop and then i set followers to be equal to my data that is an array and i use page to display the array in that page,every time loading or page change this will run}
  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])
  //{3} this function set the page tobe equal to our index from the data
  const handlePage = (index) => {
    setPage(index)
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {/* //{3} the i map my array from the utils.js and pass them with the spread operator to my component follower */}
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {/* //{3}i display btn container only if loading is false */}
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {/* //{3} map my data from the api and display the index */}
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  //{3} if my index is equal to the page i want to add the active-btn class otherwise i don't
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  //{3}when i click on this btn i grab the index and pass it to handlepage
                  onClick={() => handlePage(index)}
                >
                  {/* {3} plus 1 because javascript count from 0 */}
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
