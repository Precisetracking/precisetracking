/******************************************************************************
 * 
 * The Cyber Oracle
 * 
 *****************************************************************************/

function trackDevice(){
    
    
        var subject = document.getElementById("imeiField").value;
        
        const secretKey = '$2b$10$5.GD5IWqNSL2RsbiNWZdbeQGJ3wkUk/t3ZxfbbLn2ddvAPibpWpr.';
        const binName= 'myBin';

      
        const data = {
        IMEi: subject
      };

       fetch('https://api.jsonbin.io/v3/b', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-Master-Key": secretKey,
              "X-Bin-Private": true,
              'X-Bin-Name': subject
            },
            body: JSON.stringify(data)
          })
         .then(response => response.json())
         .then(jsonData => console.log(jsonData))
         .catch(error => console.error(error));

         alert("Recieved,processing may take up to an hour.Keep on checking Feedback");
    
}



/*******************************************************************************

CheckBox Functions

*******************************************************************************/


document.addEventListener("DOMContentLoaded", function() {
  
  var checkbox = document.getElementById("ni2");



  checkbox.addEventListener("click", function() {
    
    
        var subject = document.getElementById("imeiField").value;
        
        if(subject=="12345"){
            window.location.href=("https://www.google.com/");
        }else{
            var myAlert = document.getElementById("alert");
            myAlert.style.display=("block");
        }
        
        
    
  });
});




/*******************************************************************************

Date And Time

*******************************************************************************/



document.addEventListener("DOMContentLoaded", function() {
  
  var datetimeElement = document.getElementById("dateTime");

  function updateDateTime() {
  
    var now = new Date();

    var dateTimeString = now.toLocaleString();

    datetimeElement.textContent = dateTimeString+" Today";
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);

});










