import express from 'express'
const app=express();

import DataFormater from '../Controllers/DataFormater.Controller'
import UniversalCaller from "../Controllers/UniversalCaller.controller.js"

const StanderdData = ()=>{

app('/stockData1', UniversalCaller);

}

export default StanderdData;