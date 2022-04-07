var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(){
    monitorslist = [];

    for(var i = 0; i < 3; i++) {
        monitorslist.push([monitorsListArray[i], i + 1]);     
    }
    return monitorslist;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
