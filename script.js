   // Add event listener to each checkbox
   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
   let insert1 =document.querySelector('#h1') ;
   let array=[];
   let insert =document.querySelectorAll('input .checked') ;
   checkboxes.forEach(function(checkbox) {
       checkbox.addEventListener('change', function() {
           // Toggle 'checked' class when checkbox is checked/unchecked
           if (this.checked) {
               this.parentNode.querySelector('.custom-checkbox').classList.add('checked');
               console.log(insert.length);
               array.push(insert);
               insert1.innerHTML= array.lastIndexOf(insert)+1;
           } else {
               this.parentNode.querySelector('.custom-checkbox').classList.remove('checked');
               array.pop();
               insert1.innerHTML= array.lastIndexOf(insert)+1;
           }
       });
   });