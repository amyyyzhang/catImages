imageArr = [
"images1/cat1.jpeg", 
"images1/cat2.jpeg", 
"images1/cat3.jpeg", 
"images1/cat4.jpeg",
 "images1/cat5.png", 
 "images1/cat6.jpeg", 
 "images1/cat7.jpeg", 
 "images1/cat8.png", 
 "images1/cat9.webp", 
 "images1/cat10.jpeg",
"images1/cat11.jpeg",
"images1/cat12.jpeg",
"images1/cat13.jpeg",
"images1/cat14.jpeg",
"images1/cat15.jpeg",
"images1/cat16.jpeg",
"images1/cat17.jpeg",
"images1/cat18.jpeg",
"images1/cat19.jpeg",
"images1/cat20.jpeg"
]

 const image = document.querySelector('img');
 const button = document.querySelector("button");

 window.onload = () => get_image(imageArr);

 button.addEventListener("click", () => get_image(imageArr));

 


 function get_image(array)
 {
     let ran_index = Math.floor(Math.random() * imageArr.length );

     image.setAttribute("src", array[ran_index]);

 }