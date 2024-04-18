   var checkboxes = document.querySelectorAll('.row1[type="checkbox"]');
   let insert1 = document.querySelector('#h1');
   let comp = [];
   let array=[];
   let insert =document.querySelectorAll('input .checked') ;
   checkboxes.forEach(function(checkbox) {
       checkbox.addEventListener('change', function() {
           if (this.checked) {
               this.parentNode.querySelector('.custom-checkbox').classList.add('checked');
               array.push(insert);
               insert1.innerHTML= array.lastIndexOf(insert)+1;
           } else {
               this.parentNode.querySelector('.custom-checkbox').classList.remove('checked');
               array.pop();
               comp.pop();
               insert1.innerHTML= array.lastIndexOf(insert)+1;
           }
       });
   });
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
    
    
    
