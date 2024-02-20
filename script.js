const addBtn=document.getElementById('add');
const decBtn=document.getElementById('remove');

addBtn.addEventListener('click' , function a() {
    text.innerHTML = "we're now friends";
    document.body.style.backgroundColor = "#00ff00";
    share.disabled = false;
});

decBtn.addEventListener('click', function b() {
    text.innerHTML = "we're not friends";
    document.body.style.backgroundColor = "#ff0000";
    share.disabled = false;
});

function screenshot() {
    html2canvas(document.body).then(function(canvas) {
    var b = document.createElement("a");
    b.href = canvas.toDataURL("image/png");
    b.download = "ss.png";
    b.click();
  });
}
