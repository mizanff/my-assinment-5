
function buyTicket() {
    const heroContainer = document.getElementById('hero-container');
    heroContainer.classList.add('hidden');
    // console.log(heroContainer);


    const ticketContainer = document.getElementById('ticket-container');
    ticketContainer.classList.remove('hidden');
    // console.log(ticketContainer);
}


const allBtnSet = document.getElementsByClassName('set-btn');
let count = 0;
let countSet = 40;
const mid = 'Economy';
let totalPrice = 550;
for (const btn of allBtnSet) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        document.getElementById('seat').innerText = count;
        countSet = countSet - 1;
        document.getElementById('seats-left').innerText = countSet;

        const bgcolor = btn.querySelector('button');
     
        bgcolor.classList.add('text-white');
         bgcolor.classList.add('bg-green-400');
         
        const title = btn.querySelector('span').innerText;
        // console.log(title);
        const busSit = document.getElementById('bus-sit');
        // console.log(busSit);

    const p = document.createElement('h1');
        p.innerText = title;
        busSit.appendChild(p);

        document.getElementById('bus-sit')
      const t = document.createElement("h1");
      t.innerText = mid;
      busSit.appendChild(t);

      document.getElementById('bus-sit')
      const td = document.createElement("h1");
      td.innerText = 550;
      busSit.appendChild(td);
        
        const price =parseInt(document.getElementById('up-total').innerText);
         totalPrice+= price ;
          console.log(totalPrice);
  
      document.getElementById('up-total').innerText = totalPrice;
      document.getElementById('grand-total').innerText=totalPrice;
    })
}


const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    
    const couponInput = document.getElementById('coupon-input').value;
    const couponCode = couponInput.split(' ').join('').toUpperCase();
    console.log(couponCode);

    if(totalPrice >= 2200){
        if(couponCode === 'NEW15'){
            const newTotalPrice = totalPrice * 0.15.toFixed(2);
            grandPrice = parseInt(totalPrice-newTotalPrice);
            document.getElementById('grand-total').innerText = grandPrice;
        }
        else if(couponCode === 'COUPLE20'){
            const newTotalPrice = totalPrice * 0.2.toFixed(2);
            grandPrice = parseInt(totalPrice-newTotalPrice);
            document.getElementById('grand-total').innerText = grandPrice;  
        }
    } else{
        alert('invalid coupon code');
    }

})


    
  
   const ppp = document.getElementById('popup');
   function openPopup(){
    ppp.classList.remove('hidden')
   }
   function closePopup(){
    ppp.classList.add('hidden')
   }