 //all section
const totalIssue = document.getElementById("total-issue");
 const allCardContainer =document.getElementById('allCard-container');
const openCardContainer = document.getElementById('openCard-container');
const closedCardContainer =document.getElementById('closedCard-container')
const searchContainer=document.getElementById("search-issue");
const spinner = document.getElementById("spinner");
const allTab =  document.getElementById("all-tab");
const modal = document.getElementById('modal');
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
 searchContainer.classList.add('hidden');
// modal.classList.add('hidden');
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
 <div onclick="showDetails(${card.id})" class="issue card border-t-4 h-full border-green-600 shadow-md">
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
  <div class="flex justify-between items-center">
 <div class="p-5">
 <p class="text-gray-500">${card.author}</p>
  <p  class="text-gray-500">${card.assignee}</p>
 </div>
 <div class="p-5">
 <p class="text-gray-500  text-[10px]">${card.createdAt}</p>
  <p  class="text-gray-500  text-[10px]">${card.updatedAt}</p>
 </div>
  <div>
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
 <div class="flex justify-between items-center">
 <div class="p-5">
 <p class="text-gray-500">${card.author}</p>
  <p  class="text-gray-500">${card.assignee}</p>
 </div>
 <div class="p-5">
 <p class="text-gray-500 text-[10px]">${card.createdAt}</p>
  <p  class="text-gray-500 text-[10px]">${card.updatedAt}</p>
 </div>
  <div>
 </div>
 `;  
 return createDiv;
 
}
// searchIssue
const searchIssue= async(keyword)=>{
  console.log(keyword);
  const url =`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${keyword}`;
  const res=await fetch(url);
  const data =await res.json();
   const allCard = data.data;
   const filterCard=allCard.filter(card =>card.title.toLowerCase().includes(keyword));
   totalIssue.innerText=filterCard.length; 
  filterCard.forEach(card=>{
     if(card.status==='open') {
const openDiv = openCard(card);
 searchContainer.appendChild(openDiv);
 
     }else if(card.status==='closed'){
const closedDiv = closedCard(card);
 searchContainer.appendChild(closedDiv);

     }
      
   })

loadSpinner(false);
}
// const showDetails= async(id)=>{
//   modal.classList.remove("hidden")
//   modal.innerHTML='';
// const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
// const res= await fetch(url);
// const data = await res.json();
// const card = data;
// console.log(card);
  
  
//   modal.innerHTML=`
//   <button class="btn" onclick="my_modal_5.showModal()">open modal</button>
// <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
//   <div id="modal-content" class="modal-box">
//    <div class="space-y-3">
//         <h3 class="font-bold text-xl">${card.title}</h3>
//         <div class="space-x-2">
//           <span class="bg-green-600 text-white rounded-full px-3 py-1">Opened</span>
//           <span class="text-gray-500">Opened by Fahim Ahmed,</span>
//           <span class="text-gray-500">22/02/2026</span>
//         </div>
//         <div>
//           <span class="text-yellow-600 bg-yellow-100 py-1 px-3 rounded-md"><i class="fa-regular fa-face-frown"></i>Bug</span>
//           <span class="text-yellow-600 bg-yellow-100 py-1 px-3 rounded-md"><i class="fa-regular fa-face-frown"></i>help wanted</span>
//         </div>
//         <p class="text-gray-500">The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
//       <div class="bg-slate-100 flex justify-between p-4">
//         <div class="text-left">
//           <p class="text-gray-500">Assignee:</p>
//           <h4 class="font-bold">Fahim Ahmed</h4>
//         </div>
//         <div class="text-left">
//           <p class="text-gray-500">Priority:</p>
//           <span class="bg-red-500 text-white rounded-full px-3 py-1">High</span>
//         </div>
//       </div>
//       </div>div class="modal-action">
//       <form method="dialog">
//         <!-- if there is a button in form, it will close the modal -->
//         <button class="btn btn-primary">Close </button>
//       </form>
//     </div>
//   </div>
// </dialog>`;
    
  

// }

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
      
    });  
   loadSpinner(false);  
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

// active searcbar
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener('click',async function(){
  remove();
  addhidden();
 loadSpinner(true);
  searchContainer.classList.remove('hidden');
  searchContainer.innerHTML='';
  const input = document.getElementById("search-keyword");
  const keyword = input.value.trim().toLowerCase() ;
 await searchIssue(keyword);
})



 






