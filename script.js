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
  function cart(){
   if(cartshop.className==""){
    cartshop.style.display="block"
    cartshop.classList.add("cartt");
   }
   else{
    cartshop.style.display="none";
    cartshop.classList.remove("cartt");

   }   
  }
function add(){
  if(event.target.id=="minus"){
    if(zero.textContent>0){
      zero.textContent--;}}
  if(event.target.id=="plus"){
    zero.textContent++;
  }

}
function btn(){
  
  if(zero.textContent>0){
    cartnum.style.display="block";
    cartnum.textContent=Number(cartnum.textContent)+Number( zero.textContent)
  }
}