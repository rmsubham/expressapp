const class2models = require('../models/class2models').class2models
const class2control = require('../controlers/controlers').class2control


exports.class2services = {

   create : async (data) =>{
    await class2models.create(data)
    return data
   },
   getdata : async () => {
 const data = await class2models.find()
  return data
   },
    getdataById : async (condtion) => {
       const data = await class2models.findById(condtion)
   return data 
    },
   updateData : async (condtion, updata) => {
      const data = await class2models.findByIdAndUpdate(condtion,updata)
      return data

   }, 
   dataDelete : async (condtion) => {
 const data =  await class2models.findByIdAndDelete(condtion)
 return data
   }
}

