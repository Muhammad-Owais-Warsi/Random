const add = document.getElementById("add");
const remove = document.getElementById("remove");
const text = document.getElementById("text");
const share = document.getElementById("share");

add.addEventListener("click",() => {
    text.innerHTML = "We're now Friends"
    document.body.style.backgroundColor="green"
    share.disabled = false;
})

remove.addEventListener("click",() => {
    text.innerHTML = "We're not Friends"
    document.body.style.backgroundColor="red"
    share.disabled = false;
})
function CaptureAndShare() {
    html2canvas(document.body).then(function (canvas) {
        var screenshot = canvas.toDataURL('image/png');
         var link = document.createElement('a');
        link.href = screenshot;
        link.download = 'screenshot.png';
        link.click();
    });
}
