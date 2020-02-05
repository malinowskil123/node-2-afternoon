let msgArr = []
let id = 0

module.exports = {
  create: (req, res) => {
    let { text, time } = req.body
    let msg = {
      id: id,
      text: text,
      time: time
    }
    id++
    msgArr.push(msg)
    res.status(200).send(msgArr)
  },

  read: (req, res) => {
    res.status(200).send(msgArr)
  },

  update: (req, res) => {
    let { text } = req.body
    let { id } = req.params
    let index = msgArr.findIndex(elm => elm.id === +id)
    if (index === -1) res.status(404).send({ text: 'bad request 404' })
    else {
      let message = msgArr[index]
      message = {
        id: message.id,
        text: text || message.text,
        time: message.time
      }
      msgArr[index] = message
      res.status(200).send(msgArr)
    }
  },

  delete: (req, res) => {
    let { id } = req.params
    let index = msgArr.findIndex(elm => elm.id === +id)
    if (index === -1) res.status(404).send({ text: 'bad request 404' })
    else {
      msgArr.splice(index, 1)
      res.status(200).send(msgArr)
    }
  }
}
