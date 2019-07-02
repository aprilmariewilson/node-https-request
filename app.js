// request to begin process
const request = https.request(url, (res) => {
  // chunks will get added into this string until all data is collected
  let data = ''
  // once you receive a chunk add it to the string
  res.on('data', (chunk) => {
    data += chunk.toString()
  })
  // once you have received all chunks, parse the data
  res.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})
//error handling
request.on('error', (error) => {
  console.log('an error: ', error)
})

// this tells the program you have completed 
// setting up the request and to start running
request.end();