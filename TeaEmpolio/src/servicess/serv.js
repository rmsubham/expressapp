const teaMembers = require('../models/structre').teaMembers
const controlemp = require('../controler/contoroler').controlemp



exports.servemp = {

  add : async data => {
    await teaMembers.create(data)
    console.log(`${data} this is from servemp`)
    return data
  },
  Getemp : async () => {
 const data =  await teaMembers.find()
   return data
  },
  Deleteemp : async (condtion) => {
   const data =  await teaMembers.findByIdAndDelete(condtion)
   return data
  },
  Updateemp: async (condtion, fdata) => {
     await teaMembers.findByIdAndUpdate(condtion,fdata)
   }
}