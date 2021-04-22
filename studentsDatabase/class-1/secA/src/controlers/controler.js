const studentsService = require('../service/service').studentsService

exports.studentsContrelr = 
({
   add : async (req, res) => {
   const data = await studentsService.add(req.body)
   res.send(data)
   },
   get : async (req, res) => {
      const data = await studentsService.get()
      res.send({data : data, msz : ' your request is completed'})
   },
   update : async (req, res) => {
      const id = req.params.id
      const condtion = {_id : id }
      const data = req.body
      await studentsService.update(condtion,data)
      res.send('data is updated')
   },
   getById : async (req, res) => {
      const id = req.params.id
      const condition = {_id : id}
      const data = await studentsService.getById(condition)
      res.send({data : data, msz : ' your request is completed'})
   },
   delete : async (req, res) => {
      const id = req.params.id
      const condition = {_id : id}
      await studentsService.delete(condition)
      res.send({msz : 'your data is deletted'})
   }

})