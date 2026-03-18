import cors from 'cors'

const SolutionOfCors = (app)=>{
const AlowedOrigins=[
    "http://localhost:3000",
    "http://localhost:5173"
]

app.use(cors({
    origin:function (origin , callBack) {
        if(!origin || AlowedOrigins.includes(origin)){
            callBack(null, true);
        }else{
            callBack(new Error("Not allowed by the CORS"))
        }
    }
}))
}

export default SolutionOfCors;