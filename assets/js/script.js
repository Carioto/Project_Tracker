var timeEl = dayjs();
var todayDate = document.querySelector("#todayDate");
var todayTime = document.querySelector("#todayTime");
var dpbtn = document.querySelector("#startbtn");
var saveBtn = document.querySelector("#saveBtn");
var tbody = document.getElementById("bodyTable");
var clBut = document.querySelector("#closeBtn");
const tr = document.createElement("tr");


var timeInterval = setInterval (function() {
    timeEl = dayjs();
    todayDate.textContent = timeEl.format("MMM DD, YYYY");
    todayTime.textContent = timeEl.format("hh:mm:ss a");
}, 1000);

saveBtn.addEventListener("click", projString);
clBut.addEventListener("click", resetTable);

function resetTable() {
    window.location.reload();
} 

function projString() {
    var projName=document.querySelector("#projName");
    var datePicker=document.querySelector("#datepicker");
    var projType=document.querySelector("#projType");
    var projEntry = {
        name:projName.value,
        date:datePicker.value,
        type:projType.value};
    var projJSON=JSON.parse(localStorage.getItem('projEntry')) || [];
    projJSON.push(projEntry);
    localStorage.setItem('projEntry', JSON.stringify(projJSON));
    
};

window.addEventListener("load", createTable());


function createTable() { 
     var projJSON=JSON.parse(localStorage.getItem('projEntry')) || [];
     for (i=0; i<projJSON.length; i++) {
     var trow = document.createElement("tr");
     
     var proNum = i+1;
    $(trow).append("<td>" + proNum + "</td><td>" + projJSON[i].name +"</td><td>" + projJSON[i].date +
          "</td><td>" + projJSON[i].type + "</td></tr>");
 tbody.append(trow);
 }}