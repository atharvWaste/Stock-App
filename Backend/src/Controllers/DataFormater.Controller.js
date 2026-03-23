const DataFormater=(Result,res,market)=>{
    res.send(Result)

// switch (market) {
//     case "BSE":
//         try {
//         const BSE_52WeekHigh = Result[0].BSE_52WeekHighLow.high52Week;
//         const BSE_52WeekLow = Result[0].BSE_52WeekHighLow.Low52Week;
//         const BSEStock = BSE_52WeekHigh.slice(0,4);
//                 const BSE_52WeekLowTop4 = BSE_52WeekLow.slice(0,4);

// res.json({BSEStock, BSE_52WeekLowTop4});
//     } catch (error) {
//         console.error(error)
//     }
//         break;


//         case "NSE":
//         try {
//         const NSE_52WeekHighLow = Result[0].NSE_52WeekHighLow.high52Week;
//         const NSEStock = NSE_52WeekHighLow.slice(0,4)
// res.send(NSEStock);
//     } catch (error) {
//         console.error(error)
//     }
//         break;


//         default: try {
//         const BSE_52WeekHighLow = Result[0].BSE_52WeekHighLow.high52Week;
//         const BSEStock = BSE_52WeekHighLow.slice(0,4)
// res.send(BSEStock);
//     } catch (error) {
//         console.error(error)
//     }
        
    
//         break;
// }


}
export default DataFormater;