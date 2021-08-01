import express from 'express'
import request from 'request'
import path from "path"
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

// All Credential Things in .env
import dotenv from 'dotenv'
dotenv.config()

const ping = () => {
    request('https://akhilranaportfolio.herokuapp.com/', (error, response, body) => {
    console.log("ping started")
    
});

}
setInterval(ping, 1200000);



const __dirname = path.resolve() 

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  // Server Testing
  app.use('/test', (req, res) => {
    res.send('Server Tested')
  })
}
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
  )