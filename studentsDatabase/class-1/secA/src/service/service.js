const studentsOne = require('../models/students').studentsOne
const studentsContrelr = require('../controlers/controler').studentsContrelr 



exports.studentsService = {

  add : async (data )=> {
    await studentsOne.create(data)
    console.log("the creat route is hit");
    return data
  },

  update : async (condition, data) => {
    console.log('update route is hit');
   const updated = await studentsOne.findByIdAndUpdate(condition , data)
   return updated
  },

  get : async () => {
   const data = await studentsOne.find().sort({ roll : 1})
   console.log('the get routes is hit');
    return data
  },

  getById : async (condition) => {
    console.log('the getbyid request is hit');
   const data =  await studentsOne.findById(condition)
   return data
  },

  delete : async (condition) => {
    console.log('data is deleted');
     await studentsOne.findByIdAndDelete(condition)
   return console.log('data is deleted');
  }
  
}