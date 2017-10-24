// client-side js

$(function() {
  console.log('hello world :o');

  $('form').submit(function(event) {
    var dis = document.getElementById('dis');
    event.preventDefault();
    console.log("submitted");
    
    var formData = new FormData();
    var file = document.getElementById('myFile').files[0];
    formData.append('myFile', file);
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
      
      if (req.readyState == 4 && req.status == 200){
        console.log(req.responseText);
        dis.innerHTML = "<p>" + req.responseText + "B</p>";
      }
    }
    req.open("POST", "https://incandescent-metadata.glitch.me/metadata", true);
    req.send(formData);
  });
});
