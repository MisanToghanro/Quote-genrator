



window.addEventListener("DOMContentLoaded" , ()=>{
const Notif =  document.getElementById("notif");
Notif.classList.add("show")

  setTimeout(()=>{
     Notif.classList.remove("show");
  },4000);
  
})


const api = "https://api.adviceslip.com/advice";

const getAdvice = async () =>{
  
    try{
      const response = await fetch(api);

      if(!response.ok){
        throw new Error("response was not ok");
      }

         const data = await response.json();
         document.getElementById("advice-id").innerText = data.slip.id;
         document.getElementById("advice-text").innerText=`"${data.slip.advice}"`

    }catch(error){
        document.getElementById("error").innerText = "You are offline, connect to the internet. ";
        document.getElementById("error").style.display = "block";
    }

    document.getElementById("img-button").addEventListener("click", getAdvice);
    
}

getAdvice();