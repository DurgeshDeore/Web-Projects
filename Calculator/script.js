let expr=document.getElementById("expr");
function appendExpr(val){
    expr.value+=val;
}
function clearExpr() {
    expr.value = "";
}

function cal(){
    try{
        var res=eval(expr.value);
        // document.getElementById("expr").innerHTML=res;
        expr.value=res;
    }catch{
        alert("Invalid Expression");
    }
}

//theme
function changeTheme(){
    var theme_img = document.getElementById("theme-img");
    var theme_name = document.getElementById("theme-name");
    if(theme_img.src.match("images/sun-solid.svg")){
        theme_img.src="images/moon-regular.svg";
        theme_name.innerText = "Dark";
    }else{
        theme_img.src="images/sun-solid.svg";
        theme_name.innerText = "Light";
    }
}