const allBtn = document.getElementsByClassName('seat');
console.log(allBtn);

let cnt = 0;

for(const btn of allBtn){

    btn.addEventListener("click", function(e){
        if(cnt >= 4){
            alert('You have selected maximum number of seat !!');

            allBtn.forEach(function(button){
               button.setAttribute('disabled', true);
            });

            //return; 
        }
        cnt++;

       
        // enable button when at least one ticket is selected
       if(cnt>0){
        var myButton = document.getElementById('apply-btn');
        myButton.removeAttribute('disabled');
      
       }

        
        
        //remaining seat setup
        const bakiSeat = document.getElementById('remaining-seat').innerText;
        let convertedBakiSeat = parseInt(bakiSeat);
        convertedBakiSeat--;
        setInnerText('remaining-seat', convertedBakiSeat);

        //selected seat count setup
        const selectedSeat = document.getElementById('total-selected-seat').innerText;
        let convertedSelectedSeat = parseInt(selectedSeat);
        convertedSelectedSeat++;
        setInnerText('total-selected-seat', convertedSelectedSeat);
       // console.log(convertedSelectedSeat);

        //total price setup
        setInnerText('total', cnt * 550);

        //grand total setup
        setInnerText('grand-total', cnt * 550);

         //set background of selected button
         let target = e.target;
         target.style.backgroundColor = '#1DD100';
         target.style.color = 'white';

         //show selected seat on list
        let seatNumber = e.target.innerText;
        addSeatList(seatNumber);

         //disable selected button
         btn.setAttribute('disabled', true);

    });
}
function applyCoupon(){
    const total = document.getElementById('grand-total').innerText;
    let convertedTotal = parseInt(total);
    
    let coupon = document.getElementById('input-coupon').value;
    //console.log(convertedTotal);

    if(coupon == 'NEW15'){
        convertedTotal =  convertedTotal - 0.15 * convertedTotal;
        setInnerText('grand-total', convertedTotal);
        const couponSection = document.getElementById('coupon');
        couponSection.classList.add('hidden');
    }
    else if(coupon == 'Couple 20'){
        convertedTotal =  convertedTotal - 0.2 * convertedTotal;
        setInnerText('grand-total', convertedTotal);
        const couponSection = document.getElementById('coupon');
        couponSection.classList.add('hidden');
    }
    else{
        alert('Please Enter a Valid Coupon!');
    }

    
}
function success(){
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const congo = document.getElementById('congo');

    header.classList.add('hidden');
    main.classList.add('hidden');
    congo.classList.remove('hidden');
}
function exitCongo(){

    //const header = document.getElementById('header');
    //const main = document.getElementById('main');
    //const congo = document.getElementById('congo');

    //header.classList.remove('hidden');
    //main.classList.remove('hidden');
    //congo.classList.add('hidden');

    document.getElementById('congo').addEventListener('click', function(e){
        location.reload();
    });
}
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-green-400');
}
function addSeatList(id){

    //create div
    let seatList = document.createElement('div');
    seatList.classList.add('flex', 'justify-between');

    //create p for seat number
    let seatId = document.createElement('p');
    seatId.innerText = id;

    //create p for seat class type
    let classType = document.createElement('p');
    classType.innerText = 'Economy';

    //create p for price
    let taka = document.createElement('p');
    taka.innerText = '550';

    //push operation
    seatList.appendChild(seatId);
    seatList.appendChild(classType);
    seatList.appendChild(taka);

    document.getElementById('seat-list').appendChild(seatList);
}