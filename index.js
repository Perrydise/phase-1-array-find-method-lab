// code your solution here
function superbowlWin(records){
   const result = records.find(element => element.result ==='W')
    if (result == undefined){
        return undefined
    } else{
        return result.year
    }
    return result
}