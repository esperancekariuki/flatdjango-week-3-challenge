const section = document.querySelector('section')

//get data from the json-server
fetch('http://localhost:3000/films')
.then(function (res){
    return res.json()
})
.then(function(res){
    console.log(res)
    
    let output = ""
    for(let i = 0; i<res.length; i++){
        // const btn = document.querySelector('button')
        // let tickets = parseInt(`${res[i].capacity}`) - parseInt(`${res[i].tickets_sold}`);
        // const availableTickets = btn.addEventListener('click', function (){
            
        //     newTickets = tickets - 1;

        // })
        // const button = document.querySelector("#button");
        // console.log(button)
        // const availableTickets = document.querySelector("span");
        // console.log(availableTickets)
        let tickets = parseInt(`${res[i].capacity}`) - parseInt(`${res[i].tickets_sold}`)
        const handleDecrement = () => {
            
            tickets--;
            
          };
        // button.addEventListener("click", handleDecrement);
        // document.querySelector("img").src = `${res[i].poster}`;

        
        
         output += `<div class="filmTitle">
         <h2 class="title">${res[i].title}</h2>
        
         <img src="${res[i].poster}" alt="">
         <p>${res[i].description} <br> Runtime: ${res[i].runtime} <br> Showtime: ${res[i].showtime} <br>
         Available tickets: <span id="availableTicket">${tickets}</span><p>
          <button id="button" type="button">Buy Ticket</button> 
        
         <p><hr><p>
        
       
     </div>`
     document.querySelector('button').innerHTML = "Available Ticket"
     //document.querySelector("button").textContent = "Buy Ticket";
    
    }
    section.innerHTML = output})