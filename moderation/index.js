const express= require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events', async (req, res) => {
  const {type} = req.body
  const incomingData = req.body.data
  if (type === 'CommentCreated') {
    const status = incomingData.content.includes('orange') ? 'rejected' : 'approved'
    if (status === 'rejected') console.log('ORANGE HERE!');

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: incomingData.id,
        postId: incomingData.postId,
        status,
        content: incomingData.content
      }
    })
  }
  res.send({})
})


app.listen(4003, () => {
  console.log('moderation listening 4003');
} )