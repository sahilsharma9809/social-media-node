const express = require('express')

const { db } = require('./db/models')
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

const PORT =process.env.PORT || 3002
 
db.sync()
  .then(() => {
    app.listen(PORT,()=>{
      console.log(`server started at http://localhost:${PORT}`);
  })
  })
  .catch((err) => {
    console.error(new Error('Could not start database'))
    console.error(err)
  })
