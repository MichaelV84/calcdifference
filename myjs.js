

const select1 = document.querySelector('.select-1');
// document.getElementById('past_per_hour_div').textContent = 50.5
document.getElementById('new_per_our_div').textContent = 54.59
var a = 54.59
var b = 54.59
select1.addEventListener('change',function(){
    if (this.value == "54.59"){
        // a = 50.5
        b = 54.59
    }
    if (this.value == "52.49"){
        // a = 49
        b = 52.49
    }
    if (this.value == "51.35"){
        // a = 47.50
        b = 51.35
    }
    if (this.value == "49.97"){
        // a = 46.22
        b = 49.97
    }
    if (this.value == "46.69"){
        // a = 43.19
        b = 46.69
    }
    if (this.value == "45.74"){
        // a = 42.31
        b = 45.74
    }
    if (this.value == ""){
        a = 0
        b = 0
    }

    // document.getElementById('past_per_hour_div').textContent = a
    document.getElementById('new_per_our_div').textContent = b
    myFunction()

})

function myFunction(){

    var last_per_hour_december = 0;
var new_per_hour_december = 0;

var december_50 = Number(document.getElementById("december_50").value);
var december_20 = Number(document.getElementById("december_20").value);
var december_200 = Number(document.getElementById("december_200").value);
var december_150_2 = Number(document.getElementById("december_150_2").value);
var december_150_1 = Number(document.getElementById("december_150_1").value);
var december_125 = Number(document.getElementById("december_125").value);
var december_100 = Number(document.getElementById("december_100").value);
var december_mahala = Number(document.getElementById("december_mahala").value);
var december_hofesh = Number(document.getElementById("december_hofesh").value);
var december_shabat = Number(document.getElementById("december_shabat").value);



new_per_hour_december =
  (b / 100) * 20 * december_20 +
  (b / 100) * 50 * december_50 +
  (b / 100) * 200 * december_200 +
  (b / 100) * 150 * december_150_2 +
  (b / 100) * 150 * december_150_1 +
  (b / 100) * 125 * december_125 +
  b * december_100 +
  b * december_mahala +
  b * december_hofesh +
  b * december_shabat;

last_per_hour_december = Math.round(parseFloat(last_per_hour_december) * 100) / 100;
new_per_hour_december = Math.round(parseFloat(new_per_hour_december) * 100) / 100;

var hoser_december = new_per_hour_december - last_per_hour_december;
hoser_december = Math.round(parseFloat(hoser_december) * 100) / 100;

// document.getElementById("last_price_december").innerText = last_per_hour_december;
document.getElementById("new_price_december").innerText = new_per_hour_december;
// document.getElementById("hoser_december").innerText = hoser_december;
   

    
   

 


  
    var hos_all = hoser_december
    hos_all = Math.round(parseFloat(hos_all)*100)/100

    var l_per_hour_all = last_per_hour_december
    l_per_hour_all = Math.round(parseFloat(l_per_hour_all)*100)/100

    var n_per_hour_all =  new_per_hour_december
    n_per_hour_all = Math.round(parseFloat(n_per_hour_all)*100)/100

            document.getElementById('new_price_all').innerText = n_per_hour_all
    document.getElementById('last_price_all').innerText = l_per_hour_all
    document.getElementById('hoser_all').innerText = hos_all
            hos_all = hos_all+""
    if (hos_all == "NaN"){
        alert("You must write only numbers and \".\" no \",\" whith numbers. For example : \"4.5\" no \"4,5")
    }
}



const timeInput1 = document.getElementById('timeInput1');

timeInput1.addEventListener('change', (event) => {
    const selectedTime1 = event.target.value;
    console.log('Выбранное время:', selectedTime1);
  });


  const timeInput2 = document.getElementById('timeInput2');

  timeInput2.addEventListener('change', (event) => {
      const selectedTime2 = event.target.value;
      console.log('Выбранное время:', selectedTime2);
    });

    select1.dispatchEvent(new Event('change'));





