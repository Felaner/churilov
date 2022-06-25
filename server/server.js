const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express()

const loadRouter = require('./routes/load.js')

app.set('port', 3000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// eslint-disable-next-line node/no-path-concat
app.use('/', express.static(path.join(__dirname, '../dist')))
app.use('/*', express.static(path.join(__dirname, '../dist')))
app.use(cors()) // it enables all cors requests
app.use(fileUpload())

app.use('/api/image', loadRouter)

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`)
})
