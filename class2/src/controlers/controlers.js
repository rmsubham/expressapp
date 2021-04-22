const class2services = require('../service/class2service').class2services


exports.class2control = {


  add : async (req,res) =>  {
    try{
      const data = await class2services.create(req.body)
      res.send({data : data , msz : " data is saved"})
    }catch(e){
      console.log(e);
    }
  },
  get : async (req,res) => {
    const data = await class2services.getdata()
    res.send({data : data , msz : " your request is successfull"})
  },
  getById : async (req, res) => {
    const id = req.params.id
    const condtion = { _id : id}
    const data = await class2services.getdataById(condtion)
 res.send({data : data, msz : "your request is successfull"})
  },
  update : async (req, res) => {
  const id = req.params.id
  const condtion = {_id : id}
  const updata = req.body
  const update = await class2services.updateData(condtion,updata)
  res.send({data : updata, msz : ' the data is updated'})
  },
  delete : async (req, res) => {
  const id = req.params.id
  const condtion = { _id : id}
  const data = await class2services.dataDelete(condtion)
  res.send({data : data, msz : " the data is delted"})
  }}