const servemp = require('../servicess/serv').servemp

exports.controlemp = {

  add : async (req, res) => {
    console.log(`the emp route hit`);
    const data = await servemp.add(req.body)
    res.send(data)
    console.log(data);
  },
  getEmp : async (req, res) => {

    const data = await servemp.Getemp()
    res.send({data : data , msz : " your request is comleted" })

  },
  deleteemp : async (req, res) => {
    const id = req.params.id
    const condtion = { _id : id}
    await servemp.Deleteemp(condtion)
    res.send(" data deleted")
    },
  updateemp : async ( req, res) => {
    const id = req.params.id
    const condtion = {_id : id}
    const fdata = req.body
    const data = await servemp.Updateemp(condtion, fdata)
    res.send({data : data , msz : " new data add"})

  }


}