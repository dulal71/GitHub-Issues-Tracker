 //all section
const totalIssue = document.getElementById("total-issue");
 const allCardContainer =document.getElementById('allCard-container');
const openCardContainer = document.getElementById('openCard-container');
const closedCardContainer =document.getElementById('closedCard-container')
const spinner = document.getElementById("spinner");
const allTab =  document.getElementById("all-tab");
// loading spinner
const loadSpinner=(status)=>{
  if(status === true){
    spinner.classList.remove('hidden')
   allTab.classList.add('hidden');
  }else{
     spinner.classList.add('hidden')
    allTab.classList.remove('hidden');
  }
}
//load Data
const loadData = async()=>{
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
   const res = await fetch(url);
   const data = await res.json();
    console.log(data.data);
  return data.data
   
}
//create labels
const labels=(labels)=>{
   const createLabel =labels.map(label=> `<span class="text-yellow-600 bg-yellow-100 py-1 px-3 rounded-md"><i class="fa-regular fa-face-frown"></i>${label}</span>`)
 return createLabel.join(' ');
 }
 
//add hidden class for all section
const addhidden=()=>{
  allCardContainer.classList.add('hidden');
  openCardContainer.classList.add('hidden');
 closedCardContainer.classList.add('hidden');
}

// git all btn
const allBtn = document.getElementById('all-btn');
const openBtn = document.getElementById('open-btn');
const closedBtn = document.getElementById('closed-btn');
// remone active class in all btn
const remove=()=>{
allBtn.classList.remove('active')
openBtn.classList.remove('active')
closedBtn.classList.remove('active')
}
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
 <div>
${labels(card.labels)}
  </div>
  </div>
 </div>
 <div class="p-5">
  <p class="text-gray-500">#1 by john_doe</p>
  <p  class="text-gray-500">1/15/2024</p>
 </div>
 </div>
 `;  
 return  createDiv;
}

//create closed Card
const closedCard =(card)=>{
const createDiv = document.createElement('div');
createDiv.innerHTML=`
 <div class="issue card border-t-4 border-purple-500 shadow-md">
  <div class="border-b-1 border-gray-300">
  <div class="flex justify-between p-4">
    <img src="assets/Closed- Status .png" alt="Closed-icon">
    <span class="text-gray-500 bg-gray-100 px-5 rounded-lg">${card.priority}</span>
  </div>
  <div class="space-y-3 p-4"> 
    <h3 class="font-bold">${card.title}</h3>
  <p class="text-gray-500">${card.description}</p>
  <div>
${labels(card.labels)}
  </div>
  </div>
 </div>
 <div class="p-5">
  <p class="text-gray-500">#1 by john_doe</p>
  <p  class="text-gray-500">1/15/2024</p>
 </div>
 </div>
 `;  
 return createDiv;
 
}


//show all issue
const showAllcard = async ()=>{
  loadSpinner(true);
remove();
allBtn.classList.add('active');
addhidden();
allCardContainer.classList.remove('hidden');
allCardContainer.innerHTML='';
const allCard = await loadData();
// console.log(allCard);
totalIssue.innerText=allCard.length;
    allCard.forEach(card => {
     if(card.status==='open') {
const openDiv = openCard(card);
 allCardContainer.appendChild(openDiv);
 
     } 
     if(card.status==='closed'){
const closedDiv = closedCard(card);
 allCardContainer.appendChild(closedDiv);

     }
      loadSpinner(false);  
    });  
   
}
showAllcard();


// show open issue
document.getElementById('open-btn')
.addEventListener('click', async function(){
  loadSpinner(true);
  remove();
  openBtn.classList.add('active');
  addhidden();
openCardContainer.classList.remove('hidden');
openCardContainer.innerHTML='';
const allCard = await loadData();
   const openCardArray = allCard.filter(card => card.status ==='open');
   totalIssue.innerText=openCardArray.length;
   openCardArray.forEach(card=>{
  const openDiv=  openCard(card);
  openCardContainer.appendChild(openDiv);
   })
    loadSpinner(false); 
   })

//closed card section
 document.getElementById('closed-btn')
 .addEventListener('click',async function(){
  loadSpinner(true); 
  remove();
  closedBtn.classList.add('active');
addhidden();
closedCardContainer.classList.remove('hidden');
closedCardContainer.innerHTML='';
const allCard = await loadData();
   const closedCardArray = allCard.filter(card => card.status ==='closed');
   totalIssue.innerText=closedCardArray.length;
   closedCardArray.forEach(card =>{
const closedDiv = closedCard(card);
 closedCardContainer.appendChild(closedDiv);
   })
    loadSpinner(false); 
})

 







