////////////////////////////////////////
//   1 Javascript File 2 HTML files   //
////////////////////////////////////////

var tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(window).on('load', function() {
  $('#welcomemodal').modal('show');
});

document.getElementById("modalstop").addEventListener("click",    function(evt){
  var video = document.getElementsByClassName("ytvideo");
  for (var i=0; i<video.length; i++) {
     video.item(i).contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }
  
  });