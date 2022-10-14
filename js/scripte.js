var allProducts = document.querySelectorAll (".list li")

var content = document.querySelector("#content")

var btn = document.querySelector("#add")

var totalPrice = 0;

allProducts.forEach(function (item){
    item.onclick = function (){

      totalPrice +=  parseInt (item.getAttribute ("price"))
      content.innerHTML += item.textContent  + "  " ;

      if (content.innerHTML != "" ) {
          btn.style.display = "block"
      }
    }
})
btn.onclick = function (){
    console.log(totalPrice)
    p1.innerHTML = totalPrice, "   ";
    if (p1.innerHTML != "")
        btn.style.background = "gold" 
    alert("how do you submit")

}






  