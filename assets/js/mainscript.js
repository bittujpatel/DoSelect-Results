function promptMe(){
    //userurl = prompt("Enter URL to Generate QR","https://example.com");
    alert (userurl);
    console.log(userurl);

    var total = userurl;
    var tail = '#proctoring'; 
    //document.getElementById('containerm').innerHTML = '<img src="https://doselect.com/reports/hacker?access_code='+ total + tail +'" id="pagetop"/>';
    document.getElementById('dwn').innerHTML = '<a href="https://doselect.com/reports/hacker?access_code='+ total + tail + '" download="logo"> <button class="btn"><i class="fa fa-search"></i> search</button> </a>';

    //document.getElementById('dwn').innerHTML = '<a href="https://chart.apis.google.com/chart?cht=qr&chs='+ total + tail +'" download="logo"> <button class="btn"><i class="fa fa-download"></i> Download</button> </a>';
    console.log(userurl);
}

/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input);
  
  });
  
  document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  
     var input = document.querySelector("input").value;
    console.log(input);
  
    // if the key ENTER is pressed...
    if(e.which === 13) {
      pushToDOM(input);
    }
  
  });
  
  /* 2. do the data stuff with the API */
  
  
  
  
  
  
  
  
  /* 3. Show me the GIFs */
  
  function pushToDOM(input) {
  
    var container = document.querySelector(".js-container");
    userurl = input;
    console.log(userurl);

    var total = userurl;
    var tail = '#proctoring';

    //document.getElementById('containerm').innerHTML = '<img src="https://doselect.com/reports/hacker?access_code=' + total + tail + '" id="pagetop"/>';

    document.getElementById('dwn').innerHTML = '<a href="https://doselect.com/reports/hacker?access_code='+ total + tail + '" download="logo"> <button class="btn"><i class="fa fa-download"></i> View</button> </a>';
    console.log(userurl);  
  }