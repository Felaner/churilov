const { Router } = require('express')
const router = Router()
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

router.post('/load', async (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: 'Файл не найден' })
  }
  const myFile = req.files.file

  const filename = uuidv4() + '-' + myFile.name

  await fs.promises.mkdir(path.join(__dirname, '../../dist/img/portfolio'), { recursive: true })

  await myFile.mv(path.join(__dirname, `../../dist/img/portfolio/${filename}`), function (err) {
    if (err) {
      return res.status(500).send({ msg: 'Ошибка' })
    }
    return res.send({
      path: `/img/portfolio/${filename}`
    })
  })
})

router.post('/remove', async (req, res) => {
  fs.unlink((path.join(__dirname, `../../dist/${req.body.image}`)), function (err) {
    if (err) {
      return res.status(500).send({ msg: 'Ошибка' })
    }
    return res.send('Ok')
  })
})

module.exports = router
