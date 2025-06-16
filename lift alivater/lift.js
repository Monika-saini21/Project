console.log("hello world");
 const building =document.getElementById("building");
const submit=document.getElementById("submit");
const flore =document.getElementById("flore");
const lift=document.getElementById("lift");
const from=document.getElementById("from");

submit.addEventListener("click",(e)=>{
       e.preventDefault()

   //   if (flore.value == '' || lift.value == '')
   //  return alert("Plese fill the form")

    

    from.remove()
     let nofloor=document.createElement("div")
     nofloor.className=`floorbox`
      nofloor.innerHTML=
    `<div class="block">
        <button class="up">up</button>
        <button class="down">down</button>
     </div>
     
     
     <div>
        <p>floor 0</p>
     </div>
     <div class="buildlift"></div>
    <hr>
     `

      ;
      building.prepend(nofloor)

     for(let i=1;i<flore.value;i++){
      let nofloor=document.createElement("div")
      nofloor.className=`floorbox`
      nofloor.innerHTML=
    `<div >
         <button class="up">up</button>
        <button class="down">down</button>
     </div>
    
     <div>
        <p>floor ${i}</p>
     </div>
      <hr>`

      ;
      building.prepend(nofloor)
     }

    let buildlift=document.querySelector(".buildlift")

    
    for(let i=0;i<lift.value;i++){
            let nolift=document.createElement("div")
            nolift.className="liftup"
            nolift.innerHTML =

            `<div class="liftno"> ${i}</div>
          
            <div class="lift">
             <div class="leftdoor">          
               </div>
                <div class="rightdoor">          
                 </div>
                 </div>
                 
                 
        `;buildlift.append(nolift)
    }
  
    let up=document.querySelector(".up")
    let down=document.querySelector(".down")
     let liftup =document.querySelector(".liftup")

    

  


}

)