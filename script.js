// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    
   
  }
// **********cart pop
var cartshop=document.getElementById('cart');
var minus=document.getElementById('minus');
var zero=document.getElementById('zero');
var cartnum=document.getElementById("cartnum");
var current=document.getElementsByClassName('active')
var smallImg=document.getElementsByClassName('smallimg');
var cartItem=document.getElementById('cartitem');
var emptyCart=document.getElementById('emcart');
var price =document.getElementById('price');
var incart=document.getElementById("incart")



  function cart(){
      if(cartshop.className==""){
            cartshop.style.display="block";
            cartshop.classList.add("cartt");
        if(!cartnum.textContent==""){
          cartItem.style.display="block";
        
          price.innerHTML="$125.00 x "+cartnum.textContent+" <strong style='color:black;'>$"+125*Number(cartnum.textContent)+"</strong>"
          emptyCart.style.display="none";
        }
        else{
          cartItem.style.display="none";
          emptyCart.style.display="block";

        }
      }
      else{
        cartshop.style.display="none";
        cartshop.classList.remove("cartt");
      }   
  }
function add(){
  cartshop.style.display="none";
  cartshop.classList.remove("cartt");
  if(event.target.id=="minus"){
    if(zero.textContent>0){
      zero.textContent--;}}
  if(event.target.id=="plus"){
    zero.textContent++;
  }

}
function btn(){
  cartshop.style.display="none";
  cartshop.classList.remove("cartt");
  
  if(zero.textContent>0){
    cartnum.style.display="block";
    cartnum.textContent=Number(cartnum.textContent)+Number( zero.textContent)
  }
}
//..............
for(var x=0; x<smallImg.length; x++){
  smallImg[x].addEventListener("click",function(e){
    if(current.length>0){
      current[0].className=current[0].className.replace(" active","");
    }
    e.target.className+=" active";

  })
}
incart.addEventListener('click',function(e){
  console.log(e.target)
  if(e.target.id=="deleteCart"){
   cartItem.style.display="none";
   emptyCart.style.display="block";
   cartnum.textContent="";
   cartnum.style.display="none"
  }
})