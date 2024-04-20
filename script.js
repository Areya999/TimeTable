/*
================SHOW TIME IN THE SITE }==========================
*/
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const formattedHour = String(hour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');
    const formattedSecond = String(second).padStart(2, '0');
    const formattedTime = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    let co =document.querySelector('#date');
    co.innerHTML=`${formattedTime}`;
}
setInterval(updateClock, 1000);
updateClock();
/*
======================{ CHECK THE DAY }=========================
*/
function check(a){
let rows =a;
var checkboxes = document.querySelectorAll(rows);
let insert1 = document.querySelector('#h1');
let array=[];
let insert =document.querySelectorAll('input .checked') ;
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentNode.querySelector('.custom-checkbox').classList.add('checked');
            array.push(insert);
            if(array.lastIndexOf(insert)+1 <= 3){
            insert1.innerHTML= array.lastIndexOf(insert)+1;
            }else if(array.lastIndexOf(insert)+1 === 4){
                insert1.innerHTML='<h5 style="paddig:0;margin:0;" class="green">complate</h5>';
            }
        }else {
            this.parentNode.querySelector('.custom-checkbox').classList.remove('checked');
            array.pop();
            insert1.innerHTML= array.lastIndexOf(insert)+1;
            
        }
    });
});

}
let select_Saturday = document.querySelector('.date1');
let select_Sunday = document.querySelector('.date2');
let select_Monday = document.querySelector('.date3');
let select_Tuesday = document.querySelector('.date4');
let select_Wednesday = document.querySelector('.date5');
let select_Thursday = document.querySelector('.date6');
let select_Friday = document.querySelector('.date7');   
const now = new Date();
const dayOfMonth = now.getDate();
console.log(dayOfMonth);
let row1='.row1[type="checkbox"]';
let row2='.row2[type="checkbox"]';
let row3='.row3[type="checkbox"]';
let row4='.row4[type="checkbox"]';
let row5='.row5[type="checkbox"]';
let row6='.row6[type="checkbox"]';
let row7='.row7[type="checkbox"]';
switch (dayOfMonth) {
  case 20:
      check(row1)
      select_Saturday.innerHTML+=`<div style="border-radius: 10px;margin:auto;width:10px;height:10px;background:green;"></div>`;
      break;
  case 21:
      check(row2)
      select_Sunday.innerHTML+=`<div style="border-radius: 10px;margin:auto;width:10px;height:10px;background:green;"></div>`;
      break;
  case 22:
      check(row3)
      select_Monday.innerHTML+=`<div style="border-radius: 10px;margin:auto;width:10px;height:10px;background:green;"></div>`;
      break;
  case 23:
      check(row4)
      select_Tuesday.innerHTML+=`<div style="border-radius: 10px;margin:auto;width:10px;height:10px;background:green;"></div>`;
      break;
  case 24:
      check(row5)
      select_Wednesday.innerHTML+=`<div style="border-radius: 10px;margin:auto;width:10px;height:10px;background:green;"></div>`;
      break;
  case 25:
      check(row6)
      select_Thursday.innerHTML+=`<div style="border-radius: 10px;margin:auto;width:10px;height:10px;background:green;"></div>`;
      break;
  case 19:
      check(row7)
      select_Friday.innerHTML+=`<div style="border-radius: 10px;margin:auto;width:10px;height:10px;background:green;"></div>`;
      break; 
}


    
    
    
