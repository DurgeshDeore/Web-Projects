// let txt=document.getElementById('txt');
function showPreview(event) {
    event.preventDefault(); 
    let txt = document.getElementById('txt').value;
    let pre = document.getElementById('preview');
    pre.innerHTML = txt; 
}
function changeMode(){
    let body = document.body; 
    let txt = document.getElementById('txt');
    txt.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode'); 
    
}