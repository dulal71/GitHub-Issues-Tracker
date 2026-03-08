 //all section
const totalIssue = document.getElementById("total-issue");
 const allCardContainer =document.getElementById('allCard-container');
const openCardContainer = document.getElementById('openCard-container');
const closedCardContainer =document.getElementById('closedCard-container')
const searchContainer=document.getElementById("search-issue");
const spinner = document.getElementById("spinner");
const allTab =  document.getElementById("all-tab");
const input = document.getElementById("search-keyword");
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
   const createLabel =labels.map(label=> `<span class="text-yellow-800 bg-yellow-200 py-1 px-3 rounded-md"><i class="fa-regular fa-face-frown"></i>${label}</span>`)
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
    <span class="${
    card.priority === "high" ? "bg-red-300" :
    card.priority === "medium" ? "bg-yellow-100" :
    card.priority === "low" ? "bg-gray-100" :
    "bg-gray-400"
  } px-5 rounded-lg">${card.priority}</span>
 
    </div>
  <div class="space-y-3 p-4"> 
    <h3 class="font-bold">${card.title}</h3>
  <p class="text-gray-500">${card.description.slice(0,80)}</p>
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
 <p class="text-gray-500 text-[10px]">
  ${new Date(card.createdAt).toLocaleString('en-US')}
</p>
 <p class="text-gray-500 text-[10px]">
  ${new Date(card.updatedAt).toLocaleString('en-US')}
</p>
 
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
 <div onclick="showDetails(${card.id})" class="issue card border-t-4 border-purple-500 shadow-md">
  <div class="border-b-1 border-gray-300">
  <div class="flex justify-between p-4">
    <img src="assets/Closed- Status .png" alt="Closed-icon">
  <span class="${
    card.priority === "high" ? "bg-red-300" :
    card.priority === "medium" ? "bg-yellow-100" :
    card.priority === "low" ? "bg-gray-100" :
    "bg-gray-400"
  } px-5 rounded-lg">${card.priority}</span>
 
  </div>
  <div class="space-y-3 p-4"> 
    <h3 class="font-bold">${card.title}</h3>
  <p class="text-gray-500">${card.description.slice(0,80)}</p>
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
 <p class="text-gray-500 text-[10px]">
  ${new Date(card.createdAt).toLocaleString('en-US')}
</p>
 <p class="text-gray-500 text-[10px]">
  ${new Date(card.updatedAt).toLocaleString('en-US')}
</p>
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

const showDetails= async(id)=>{
loadSpinner(true);
const modal= document.getElementById('modal-content');
const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
const res= await fetch(url);
const data = await res.json();
const card = data.data;
console.log(card);
modal.innerHTML=`
 <div class="space-y-3">
        <h3 class="font-bold text-xl">${card.title}</h3>
        <div class="space-x-2">
          <span class=" text-white rounded-full px-3 py-1 ${card.status === 'open' ? 'bg-green-600' : 'bg-red-600'}">${card.status}</span>
          <span class="text-gray-500"><i class="fa-solid fa-circle-dot"></i>${card.assignee? card.assignee:"unknonwn"}</span>
          <span class="text-gray-500"><i class="fa-solid fa-circle-dot"></i>22/02/2026</span>
        </div>
        <div>
      ${labels(card.labels)}  
        </div>
        <p class="text-gray-500">${card.description}</p>
      <div class="bg-slate-100 flex justify-between p-4 mb-4">
        <div class="text-left">
          <p class="text-gray-500">Assignee:</p>
          <h4 class="font-bold">${card.author?card.author:'unknonwn'}</h4>
        </div>
        <div class="text-left">
          <p class="text-gray-500">Priority:</p>
          <span class="${
    card.priority === "high" ? "bg-red-500" :
    card.priority === "medium" ? "bg-yellow-300" :
    card.priority === "low" ? "bg-gray-400" :
    "bg-gray-400"
  } text-white rounded-full px-3 py-1
">${card.priority}</span>
        </div>
      </div>
      </div>
     `;
   document.getElementById('my_modal_5').showModal();
   loadSpinner(false);
}

//show all issue
const showAllIssue = async ()=>{
  loadSpinner(true);
remove();
allBtn.classList.add('active');
addhidden();
allCardContainer.classList.remove('hidden');
input.value='';
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
showAllIssue();


// show open issue

const showOpenIssue=async()=>{
loadSpinner(true);
  remove();
  openBtn.classList.add('active');
  addhidden();
openCardContainer.classList.remove('hidden');
openCardContainer.innerHTML='';
input.value='';

const allCard = await loadData();
   const openCardArray = allCard.filter(card => card.status ==='open');
   totalIssue.innerText=openCardArray.length;
   openCardArray.forEach(card=>{
  const openDiv=  openCard(card);
  openCardContainer.appendChild(openDiv);
   })
    loadSpinner(false); 
  
}

  

//closed card section
 
  const showClosedIssue=async()=>{
 loadSpinner(true); 
  remove();
  closedBtn.classList.add('active');
addhidden();
closedCardContainer.classList.remove('hidden');
closedCardContainer.innerHTML='';
input.value='';
const allCard = await loadData();
   const closedCardArray = allCard.filter(card => card.status ==='closed');
   totalIssue.innerText=closedCardArray.length;
   closedCardArray.forEach(card =>{
const closedDiv = closedCard(card);
 closedCardContainer.appendChild(closedDiv);
   })
    loadSpinner(false); 
  }
 

// active searcbar


  const showSearchIssue =async()=>{
 remove();
  addhidden();
 loadSpinner(true);
  searchContainer.classList.remove('hidden');
  searchContainer.innerHTML='';
  const keyword = input.value.trim().toLowerCase() ;
 await searchIssue(keyword);
  }
 




 






