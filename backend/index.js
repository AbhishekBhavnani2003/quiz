const connecttomongo = require("./db") ; 
const express = require('express') ; 
const QuestionRouter = require('./routes/question');
const app = express()
const port = 5000
connecttomongo() ;
var cors = require('cors')
app.use(cors())

app.use(express.json())

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/question', QuestionRouter);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Quiz Backend : listening on port ${port}`)
})