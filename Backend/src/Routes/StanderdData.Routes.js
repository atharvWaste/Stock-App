import UniversalCaller from '../Controllers/UniversalCaller.Controller.js'

const StanderdData =(app)=>{
// funtions of this route is
// 1.Call on the api endpoint✅
// 2.Data handling✅
// 3.Data Transmition inform of Array✅

app.get("/StanderdData", UniversalCaller);

}

export default StanderdData;