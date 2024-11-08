import "./style.css";
import { catagory } from "/catagory-data.js";

document.querySelector("#app").innerHTML = `
  <div class="bg-[#0d1c31] h-screen w-screen overflow-x-hidden scroll-smooth ">
    
  <div class="bg-[#001938] h-14 fixed z-20 top-0 left-0 w-full flex items-center">
  
  <img src="/img/site-logo.jpg" class="w-12 h-12 ml-2">

  <div class="flex gap-14 font-medium justify-end w-screen mr-16 text-2xl items-center">
  <a href="#home" class=" hover:text-[#86aade] hover:drop-shadow-glow hover:scale-105">Home</a>
  <a href="#more" class=" hover:text-[#86aade] hover:drop-shadow-glow hover:scale-105">More</a>
  <a href="#games" class=" hover:text-[#86aade] hover:drop-shadow-glow hover:scale-105">Games</a>
  <a href="#contactus" class=" hover:text-[#86aade] hover:drop-shadow-glow hover:scale-105">Contact us</a>
  <a href="#aboutus" class=" hover:text-[#86aade] hover:drop-shadow-glow hover:scale-105">About us</a>
  </div>

  </div>

  <div id="home" class="m-0 w-screen h-screen relative flex">
  <img src="https://i.pinimg.com/originals/ef/37/81/ef37815019ae52354c7c5772f4e886d6.png" class="w-full h-screen z-0">

  <div class="absolute z-10 translate-x-5 translate-y-16">

  <h1 class="text-blue-900 font-extrabold ">Gato Games</h1>

  <p class="text-black p-2 font-semibold text-2xl">Discover, play, and connect with the latest in gaming. <br> Dive into reviews, tips, and a world of adventures crafted for gamers like you.<br> Let's play!
  </p>
  </div>

  </div>


  <div class="ml-5" id="games">
  <h1 class="font-bold mb-2">Home</h1>
  
  <div>
  <p class="text-3xl font-semibold pb-2 mt-2">Recommended Games</p>

  <div class="flex items-center mt-2 relative">
  <img src="/img/icons/211686_back_arrow_icon.png" class="z-10 w-20 h-20 invert absolute" id="backBtn">

  <div id="games-container" class="flex gap-1 w-screen justify-start overflow-x-scroll z-0 h-96"> 
  <img src="https://i.ytimg.com/vi/IrTeFxPG0eY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAys6ojmNRl7-EHpxE1L5sTaCa3RQ" class="hover:scale-110 duration-75 cursor-pointer">

  <img src="https://img.tapimg.net/market/images/8bf92db4d5e8a61810e29fa4c5de0f55.png?imageView2/0/w/1080/h/608/format/jpg/interlace/1/ignore-error/1" class="hover:scale-110 duration-75 cursor-pointer">

  <img src="https://gfuel.com/cdn/shop/articles/here-are-the-12-best-indie-games-coming-in-2020-301836.png?v=1678219369"class="hover:scale-110 duration-75 cursor-pointer">

  <img src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/01/indie-games-norco.jpg"class="hover:scale-110 duration-75 cursor-pointer">

  <img src="https://mms.businesswire.com/media/20211215005342/en/1306947/5/NintendoSwitch_SeaofStars_Screenshot_3.jpg"class="hover:scale-110 duration-75 cursor-pointer">

  <img src="https://media.npr.org/assets/img/2020/12/24/hld_wide-3c139e1ddc01691be92f2548e4a502259c3a9e36.jpg"class="hover:scale-110 duration-75 cursor-pointer">

  <img src="https://mms.businesswire.com/media/20210811005240/en/898299/5/Switch_Eastward_Screenshot_%285%29.jpg"class="hover:scale-110 duration-75 cursor-pointer">

  <img src="https://rog.asus.com/media/1686030073163.jpg"class="hover:scale-110 duration-75 cursor-pointer">
  </div>
  
  <img src="/img/icons/352561_navigate_next_icon.png" id="nextBtn" class="z-10 w-24 h-24 invert absolute right-0">
  </div>
  
  </div>
  

  </div>

  <div id="more" class="ml-5 mt-5">
  
  <h1 class="font-bold">Games</h1>
  <p class="font-semibold pl-1 text-xl pt-1">Catagories</p>
  <div class="catagory-box">
  <div id="catagory-container" class="relative w-screen z-0 p-10">
  <div class="menu grid grid-rows-4 grid-cols-3 gap-5 w-[500px] font-semibold"></div>
  </div>
  </div>
  
  </div>


  <footer class="bg-gradient-to-t to-[#0d1c31] from-[#000000] mt-5">

  <div class="ml-5">
  <h1 id="aboutus" class="font-bold pt-5">About Us</h1>
  <p class="font-semibold py-5">At Gato, we’re dedicated to bringing you closer to the games you love. <br>
  Our platform is crafted by gamers, for gamers—delivering fresh insights, reviews, and resources that keep you in the loop with the latest releases and trends.
  <br>
  Whether you’re looking for tips, want to connect with a passionate community, or simply explore new games, Gato is here to level up your experience.<br> 
  Join us as we explore the endless worlds of gaming, one adventure at a time!</p><hr>

  <div class="text-white w-screen flex justify-center text-2xl gap-5 py-5" id="contactus">
  <a href="https://www.instagram.com/godsaintbhh265/" target="blank"><i class="ri-instagram-line"></i></a>
  <a href="https://www.facebook.com/arijit.kabiraj.129" target="blank"><i class="ri-facebook-circle-line"></i></a>
  <a href="https://www.youtube.com/@godsaintbhh265" target="blank"><i class="ri-youtube-line"></i></a>
  <a href="https://x.com/GamingBhh" target="blank"><i class="ri-twitter-line"></i></a>
  <a href="discord.com/invite/KBBNJZwZ7C" target="blank"><i class="ri-discord-line"></i></a>
  <a href="https://www.linkedin.com/in/arijit-kabiraj-2b7230255/" target="blank"><i class="ri-linkedin-fill"></i></a>
    
  </div>
  </div>

  </footer>
  



  </div>
`;

// -----------------------------------------------
let gamesContainer = document.getElementById("games-container");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  gamesContainer.style.scrollBehavior = "smooth";
  gamesContainer.scrollLeft += 1000;
});

backBtn.addEventListener("click", () => {
  gamesContainer.style.scrollBehavior = "smooth";
  gamesContainer.scrollLeft -= 1000;
});
// -----------------------------------------------

//Generating html for the dropdown menu --------------
let menuHtml = "";

catagory.forEach((ele) => {
  menuHtml += `<button data-target=${ele.divId} class="catagory-btn bg-gradient-to-t from-[#3f5efb] to-black h-16 p-2 rounded hover:drop-shadow-glow">${ele.catagoryText}</button>
  <div id=${ele.divId} class="catagory-menu bg-gradient-to-tr from-[#0e106e] to-[#01654d] w-[500px] h-56 text-black font-semibold duration-110 z-20 translate-x-[800px] absolute hidden">
  <ul class="grid grid-cols-2 place-items-center menu-list text-white font-semibold text-xl pt-1">
  <li><a href="">${ele.catagoryText}</a></li>
  <li><a href="">${ele.catagoryText}</a></li>
  <li><a href="">${ele.catagoryText}</a></li>
  <li><a href="">${ele.catagoryText}</a></li>
  <li><a href="">${ele.catagoryText}</a></li>
  </ul>
  </div>`;
});

document.querySelector(".menu").innerHTML = menuHtml;

// ------------------------------------------
let classBtn = document.querySelectorAll("#catagory-container button");

function clickAction(clsName) {
  let targetId = clsName.target.getAttribute("data-target");
  let targetDiv = document.getElementById(targetId);

  document.querySelectorAll(".catagory-menu").forEach((menu) => {
    if (menu !== targetDiv) menu.classList.add("hidden");
  });
  
  targetDiv.classList.toggle("hidden");
}

classBtn.forEach((btn) => {
  btn.addEventListener("click", clickAction);
});

// buttons.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });
