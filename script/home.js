 //total Count
const totalIssue = document.getElementById("total-issue");
 
 
const allCardContainer =document.getElementById('allCard-container');
const openCardContainer = document.getElementById('openCard-container');
const closedCardContainer =document.getElementById('closedCard-container')

const showAllcard =()=>{
const allBtn = document.getElementById('all-btn');
allBtn.classList.add('active');
allCardContainer.innerHTML='';
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues") 
   .then(res => res.json()) 
   .then(data=> {
const allCard = data.data;
totalIssue.innerText=allCard.length;
    allCard.forEach(card => {
     if(card.status==='open') {
     openCard(card);
     } 
     if(card.status==='closed'){
 closedCard(card);
     }
    });
})
    
}

showAllcard();


//open card section
document.getElementById('open-btn')
.addEventListener('click',function(){
allCardContainer.classList.add('hidden');
closedCardContainer.classList.add('hidden')
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues") 
   .then(res => res.json()) 
   .then(data => {
    const allCard = data.data;
   const openCard = allCard.filter(card => card.status ==='open');
   totalIssue.innerText=openCard.length;
 openCard.forEach(card=>{
  const createDiv = document.createElement('div');
createDiv.innerHTML=`
 <div class="issue card border-t-4 border-green-600 shadow-md">
  <div class="border-b-1 border-gray-300">
  <div class="flex justify-between p-4">
    <img src="assets/Open-Status.png" alt="">
    <span class="text-red-400 bg-red-100 px-5 rounded-lg">${card.priority}</span>
  </div>
  <div class="space-y-3 p-4"> 
    <h3 class="font-bold">${card.title}</h3>
  <p class="text-gray-500">${card.description}</p>
  <span class="text-red-400 bg-red-100 py-1 px-3 rounded-md"><i class="fa-regular fa-face-frown"></i>Bug</span>
  <span class="text-yellow-600 bg-yellow-100 py-1 px-3 rounded-md"><i class="fa-solid fa-life-ring"></i>Help wanted</span>
  </div>
 </div>
 <div class="p-5">
  <p class="text-gray-500">#1 by john_doe</p>
  <p  class="text-gray-500">1/15/2024</p>
 </div>
 </div>
 `;  
 openCardContainer.appendChild(createDiv);
 })
   })
})

//closed card section
 document.getElementById('closed-btn')
 .addEventListener('click',function(){
allCardContainer.classList.add('hidden');
openCardContainer.classList.add('hidden');
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
.then(res => res.json())
.then(data =>{
  const allCard = data.data;
   const closedCard = allCard.filter(card => card.status ==='closed');
   console.log(closedCard);
   totalIssue.innerText=closedCard.length;
   closedCard.forEach(card =>{
    const createDiv = document.createElement('div');
createDiv.innerHTML=`
 <div class="issue card border-t-4 border-purple-500 shadow-md">
  <div class="border-b-1 border-gray-300">
  <div class="flex justify-between p-4">
    <img src="assets/Open-Status.png" alt="">
    <span class="text-red-400 bg-red-100 px-5 rounded-lg">${card.priority}</span>
  </div>
  <div class="space-y-3 p-4"> 
    <h3 class="font-bold">${card.title}</h3>
  <p class="text-gray-500">${card.description}</p>
  <span class="text-red-400 bg-red-100 py-1 px-3 rounded-md"><i class="fa-regular fa-face-frown"></i>Bug</span>
  <span class="text-yellow-600 bg-yellow-100 py-1 px-3 rounded-md"><i class="fa-solid fa-life-ring"></i>Help wanted</span>
  </div>
 </div>
 <div class="p-5">
  <p class="text-gray-500">#1 by john_doe</p>
  <p  class="text-gray-500">1/15/2024</p>
 </div>
 </div>
 `;  
 closedCardContainer.appendChild(createDiv);

   })
})

 })
 





//create openCard

const openCard =(card)=>{
 const createDiv = document.createElement('div');
createDiv.innerHTML=`
 <div class="issue card border-t-4 border-green-600 shadow-md">
  <div class="border-b-1 border-gray-300">
  <div class="flex justify-between p-4">
    <img src="assets/Open-Status.png" alt="">
    <span class="text-red-400 bg-red-100 px-5 rounded-lg">${card.priority}</span>
  </div>
  <div class="space-y-3 p-4"> 
    <h3 class="font-bold">${card.title}</h3>
  <p class="text-gray-500">${card.description}</p>
  <span class="text-red-400 bg-red-100 py-1 px-3 rounded-md"><i class="fa-regular fa-face-frown"></i>Bug</span>
  <span class="text-yellow-600 bg-yellow-100 py-1 px-3 rounded-md"><i class="fa-solid fa-life-ring"></i>Help wanted</span>
  </div>
 </div>
 <div class="p-5">
  <p class="text-gray-500">#1 by john_doe</p>
  <p  class="text-gray-500">1/15/2024</p>
 </div>
 </div>
 `;  
 allCardContainer.appendChild(createDiv);

}

//create closed Card
const closedCard =(card)=>{
const createDiv = document.createElement('div');
createDiv.innerHTML=`
 <div class="issue card border-t-4 border-purple-500 shadow-md">
  <div class="border-b-1 border-gray-300">
  <div class="flex justify-between p-4">
    <img src="assets/Open-Status.png" alt="">
    <span class="text-red-400 bg-red-100 px-5 rounded-lg">${card.priority}</span>
  </div>
  <div class="space-y-3 p-4"> 
    <h3 class="font-bold">${card.title}</h3>
  <p class="text-gray-500">${card.description}</p>
  <span class="text-red-400 bg-red-100 py-1 px-3 rounded-md"><i class="fa-regular fa-face-frown"></i>Bug</span>
  <span class="text-yellow-600 bg-yellow-100 py-1 px-3 rounded-md"><i class="fa-solid fa-life-ring"></i>Help wanted</span>
  </div>
 </div>
 <div class="p-5">
  <p class="text-gray-500">#1 by john_doe</p>
  <p  class="text-gray-500">1/15/2024</p>
 </div>
 </div>
 `;  
 allCardContainer.appendChild(createDiv);


}