const paginate = (followers) => {
  const itemsPerPage = 9
  const pages = Math.ceil(followers.length / itemsPerPage)

  // {2} we are creating a new array with,this will return an array of twelve undefined element,than we setup a callback function that iterate over the item and the index
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    // {2} this is the value that we use to pull out the followers from our main list
    const start = index * itemsPerPage
    console.log(start)
    //{2} with slice we pull out the item from the orginal array and setting up a new one,we pass the startpoint and where we want to end,first iteration we start at 0 and we end with 9
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}

export default paginate
