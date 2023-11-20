

const select1 = document.querySelector('.select-1');
document.getElementById('past_per_hour_div').textContent = 41.36
document.getElementById('new_per_our_div').textContent = 50.50
var a = 41.36
var b = 50.50
select1.addEventListener('change',function(){
    if (this.value == "41.36"){
        a = 41.36
        b = 50.50
    }
    if (this.value == "38.50"){
        a = 38.50
        b = 49
    }
    if (this.value == "37.80"){
        a = 37.80
        b = 47.50
    }
    if (this.value == "38.52"){
        a = 38.52
        b = 46.22
    }
    if (this.value == "35.99"){
        a = 35.99
        b = 43.19
    }
    if (this.value == "35.26"){
        a = 35.26
        b = 42.31
    }
    if (this.value == ""){
        a = 0
        b = 0
    }

    document.getElementById('past_per_hour_div').textContent = a
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

last_per_hour_december =
  (a / 100) * 20 * december_20 +
  (a / 100) * 50 * december_50 +
  (a / 100) * 200 * december_200 +
  (a / 100) * 150 * december_150_2 +
  (a / 100) * 150 * december_150_1 +
  (a / 100) * 125 * december_125 +
  a * december_100 +
  a * december_mahala +
  a * december_hofesh +
  a * december_shabat;

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

document.getElementById("last_price_december").innerText = last_per_hour_december;
document.getElementById("new_price_december").innerText = new_per_hour_december;
document.getElementById("hoser_december").innerText = hoser_december;
   

    
   

    var last_per_hour_november = 0
    var new_per_hour_november = 0

    var november_50 = Number(document.getElementById("november_50").value)
    var november_20 = Number(document.getElementById("november_20").value)
    var november_200 = Number(document.getElementById("november_200").value)
    var november_150_2 = Number(document.getElementById("november_150_2").value)
    var november_150_1 = Number(document.getElementById("november_150_1").value)
    var november_125 = Number(document.getElementById("november_125").value)
    var november_100 = Number(document.getElementById("november_100").value)
    var november_mahala = Number(document.getElementById("november_mahala").value)
    var november_hofesh = Number(document.getElementById("november_hofesh").value)
    var november_shabat = Number(document.getElementById("november_shabat").value)


    last_per_hour_november = (a/100*20*november_20)+(a/100*50*november_50)+(a/100*200*november_200)+(a/100*150*november_150_2)+(a/100*150*november_150_1)+(a/100*125*november_125)+(a*november_100)+(a*november_mahala)+(a*november_hofesh)+(a*november_shabat)
    new_per_hour_november =  (b/100*20*november_20)+(b/100*50*november_50)+(b/100*200*november_200)+(b/100*150*november_150_2)+(b/100*150*november_150_1)+(b/100*125*november_125)+(b*november_100)+(b*november_mahala)+(b*november_hofesh)+(b*november_shabat)

    last_per_hour_november = Math.round(parseFloat(last_per_hour_november)*100)/100
    new_per_hour_november = Math.round(parseFloat(new_per_hour_november)*100)/100

    var hoser_november =  new_per_hour_november - last_per_hour_november
    hoser_november = Math.round(parseFloat(hoser_november)*100)/100


            document.getElementById('last_price_november').innerText = last_per_hour_november
    document.getElementById('new_price_november').innerText = new_per_hour_november
    document.getElementById('hoser_november').innerText = hoser_november

    var last_per_hour_october = 0
    var new_per_hour_october = 0

    var october_50 = Number(document.getElementById("october_50").value)
    var october_20 = Number(document.getElementById("october_20").value)
    var october_200 = Number(document.getElementById("october_200").value)
    var october_150_2 = Number(document.getElementById("october_150_2").value)
    var october_150_1 = Number(document.getElementById("october_150_1").value)
    var october_125 = Number(document.getElementById("october_125").value)
    var october_100 = Number(document.getElementById("october_100").value)
    var october_mahala = Number(document.getElementById("october_mahala").value)
    var october_hofesh = Number(document.getElementById("october_hofesh").value)
    var october_shabat = Number(document.getElementById("october_shabat").value)


    last_per_hour_october = (a/100*20*october_20)+(a/100*50*october_50)+(a/100*200*october_200)+(a/100*150*october_150_2)+(a/100*150*october_150_1)+(a/100*125*october_125)+(a*october_100)+(a*october_mahala)+(a*october_hofesh)+(a*october_shabat)
    new_per_hour_october =  (b/100*20*october_20)+(b/100*50*october_50)+(b/100*200*october_200)+(b/100*150*october_150_2)+(b/100*150*october_150_1)+(b/100*125*october_125)+(b*october_100)+(b*october_mahala)+(b*october_hofesh)+(b*october_shabat)

    last_per_hour_october = Math.round(parseFloat(last_per_hour_october)*100)/100
    new_per_hour_october = Math.round(parseFloat(new_per_hour_october)*100)/100

    var hoser_october =  new_per_hour_october - last_per_hour_october
    hoser_october = Math.round(parseFloat(hoser_october)*100)/100


            document.getElementById('last_price_october').innerText = last_per_hour_october
    document.getElementById('new_price_october').innerText = new_per_hour_october
    document.getElementById('hoser_october').innerText = hoser_october

    var last_per_hour_september = 0
    var new_per_hour_september = 0

    var september_50 = Number(document.getElementById("september_50").value)
    var september_20 = Number(document.getElementById("september_20").value)
    var september_200 = Number(document.getElementById("september_200").value)
    var september_150_2 = Number(document.getElementById("september_150_2").value)
    var september_150_1 = Number(document.getElementById("september_150_1").value)
    var september_125 = Number(document.getElementById("september_125").value)
    var september_100 = Number(document.getElementById("september_100").value)
    var september_mahala = Number(document.getElementById("september_mahala").value)
    var september_hofesh = Number(document.getElementById("september_hofesh").value)
    var september_shabat = Number(document.getElementById("september_shabat").value)


    last_per_hour_september = (a/100*20*september_20)+(a/100*50*september_50)+(a/100*200*september_200)+(a/100*150*september_150_2)+(a/100*150*september_150_1)+(a/100*125*september_125)+(a*september_100)+(a*september_mahala)+(a*september_hofesh)+(a*september_shabat)
    new_per_hour_september =  (b/100*20*september_20)+(b/100*50*september_50)+(b/100*200*september_200)+(b/100*150*september_150_2)+(b/100*150*september_150_1)+(b/100*125*september_125)+(b*september_100)+(b*september_mahala)+(b*september_hofesh)+(b*september_shabat)

    last_per_hour_september = Math.round(parseFloat(last_per_hour_september)*100)/100  
    new_per_hour_september = Math.round(parseFloat(new_per_hour_september)*100)/100  

    var hoser_september =  new_per_hour_september - last_per_hour_september
    hoser_september = Math.round(parseFloat(hoser_september)*100)/100 


    document.getElementById('last_price_september').innerText = last_per_hour_september
    document.getElementById('new_price_september').innerText = new_per_hour_september
    document.getElementById('hoser_september').innerText = hoser_september

    var last_per_hour_august = 0 
    var new_per_hour_august = 0 

    var august_50 = Number(document.getElementById("august_50").value)
    var august_20 = Number(document.getElementById("august_20").value)
    var august_200 = Number(document.getElementById("august_200").value)
    var august_150_2 = Number(document.getElementById("august_150_2").value)
    var august_150_1 = Number(document.getElementById("august_150_1").value)
    var august_125 = Number(document.getElementById("august_125").value)
    var august_100 = Number(document.getElementById("august_100").value)
    var august_mahala = Number(document.getElementById("august_mahala").value)
    var august_hofesh = Number(document.getElementById("august_hofesh").value)
    var august_shabat = Number(document.getElementById("august_shabat").value)


    last_per_hour_august = (a/100*20*august_20)+(a/100*50*august_50)+(a/100*200*august_200)+(a/100*150*august_150_2)+(a/100*150*august_150_1)+(a/100*125*august_125)+(a*august_100)+(a*august_mahala)+(a*august_hofesh)+(a*august_shabat)
    new_per_hour_august =  (b/100*20*august_20)+(b/100*50*august_50)+(b/100*200*august_200)+(b/100*150*august_150_2)+(b/100*150*august_150_1)+(b/100*125*august_125)+(b*august_100)+(b*august_mahala)+(b*august_hofesh)+(b*august_shabat)

    last_per_hour_august = Math.round(parseFloat(last_per_hour_august)*100)/100  
    new_per_hour_august = Math.round(parseFloat(new_per_hour_august)*100)/100  

    var hoser_august =  new_per_hour_august - last_per_hour_august
    hoser_august = Math.round(parseFloat(hoser_august)*100)/100 


    document.getElementById('last_price_august').innerText = last_per_hour_august
    document.getElementById('new_price_august').innerText = new_per_hour_august
    document.getElementById('hoser_august').innerText = hoser_august

    var last_per_hour_july = 0 
    var new_per_hour_july = 0 
    
    var july_50 = Number(document.getElementById("july_50").value)
    var july_20 = Number(document.getElementById("july_20").value)
    var july_200 = Number(document.getElementById("july_200").value)
    var july_150_2 = Number(document.getElementById("july_150_2").value)
    var july_150_1 = Number(document.getElementById("july_150_1").value)
    var july_125 = Number(document.getElementById("july_125").value)
    var july_100 = Number(document.getElementById("july_100").value)
    var july_mahala = Number(document.getElementById("july_mahala").value)
    var july_hofesh = Number(document.getElementById("july_hofesh").value)
    var july_shabat = Number(document.getElementById("july_shabat").value)
    
    
    last_per_hour_july = (a/100*20*july_20)+(a/100*50*july_50)+(a/100*200*july_200)+(a/100*150*july_150_2)+(a/100*150*july_150_1)+(a/100*125*july_125)+(a*july_100)+(a*july_mahala)+(a*july_hofesh)+(a*july_shabat)
    new_per_hour_july =  (b/100*20*july_20)+(b/100*50*july_50)+(b/100*200*july_200)+(b/100*150*july_150_2)+(b/100*150*july_150_1)+(b/100*125*july_125)+(b*july_100)+(b*july_mahala)+(b*july_hofesh)+(b*july_shabat)
    
    last_per_hour_july = Math.round(parseFloat(last_per_hour_july)*100)/100  
    new_per_hour_july = Math.round(parseFloat(new_per_hour_july)*100)/100  
    
    var hoser_july =  new_per_hour_july - last_per_hour_july
    hoser_july = Math.round(parseFloat(hoser_july)*100)/100 
    

    document.getElementById('last_price_july').innerText = last_per_hour_july
    document.getElementById('new_price_july').innerText = new_per_hour_july
    document.getElementById('hoser_july').innerText = hoser_july

    var last_per_hour_june = 0 
    var new_per_hour_june = 0 
    
    var june_50 = Number(document.getElementById("june_50").value)
    var june_20 = Number(document.getElementById("june_20").value)
    var june_200 = Number(document.getElementById("june_200").value)
    var june_150_2 = Number(document.getElementById("june_150_2").value)
    var june_150_1 = Number(document.getElementById("june_150_1").value)
    var june_125 = Number(document.getElementById("june_125").value)
    var june_100 = Number(document.getElementById("june_100").value)
    var june_mahala = Number(document.getElementById("june_mahala").value)
    var june_hofesh = Number(document.getElementById("june_hofesh").value)
    var june_shabat = Number(document.getElementById("june_shabat").value)
    
    
    last_per_hour_june = (a/100*20*june_20)+(a/100*50*june_50)+(a/100*200*june_200)+(a/100*150*june_150_2)+(a/100*150*june_150_1)+(a/100*125*june_125)+(a*june_100)+(a*june_mahala)+(a*june_hofesh)+(a*june_shabat)
    new_per_hour_june =  (b/100*20*june_20)+(b/100*50*june_50)+(b/100*200*june_200)+(b/100*150*june_150_2)+(b/100*150*june_150_1)+(b/100*125*june_125)+(b*june_100)+(b*june_mahala)+(b*june_hofesh)+(b*june_shabat)
    
    last_per_hour_june = Math.round(parseFloat(last_per_hour_june)*100)/100  
    new_per_hour_june = Math.round(parseFloat(new_per_hour_june)*100)/100  
    
    var hoser_june =  new_per_hour_june - last_per_hour_june
    hoser_june = Math.round(parseFloat(hoser_june)*100)/100 
    

    document.getElementById('last_price_june').innerText = last_per_hour_june
    document.getElementById('new_price_june').innerText = new_per_hour_june
    document.getElementById('hoser_june').innerText = hoser_june

    var last_per_hour_may = 0 
    var new_per_hour_may = 0 
    
    var may_50 = Number(document.getElementById("may_50").value)
    var may_20 = Number(document.getElementById("may_20").value)
    var may_200 = Number(document.getElementById("may_200").value)
    var may_150_2 = Number(document.getElementById("may_150_2").value)
    var may_150_1 = Number(document.getElementById("may_150_1").value)
    var may_125 = Number(document.getElementById("may_125").value)
    var may_100 = Number(document.getElementById("may_100").value)
    var may_mahala = Number(document.getElementById("may_mahala").value)
    var may_hofesh = Number(document.getElementById("may_hofesh").value)
    var may_shabat = Number(document.getElementById("may_shabat").value)
    
    
    last_per_hour_may = (a/100*20*may_20)+(a/100*50*may_50)+(a/100*200*may_200)+(a/100*150*may_150_2)+(a/100*150*may_150_1)+(a/100*125*may_125)+(a*may_100)+(a*may_mahala)+(a*may_hofesh)+(a*may_shabat)
    new_per_hour_may =  (b/100*20*may_20)+(b/100*50*may_50)+(b/100*200*may_200)+(b/100*150*may_150_2)+(b/100*150*may_150_1)+(b/100*125*may_125)+(b*may_100)+(b*may_mahala)+(b*may_hofesh)+(b*may_shabat)
    
    last_per_hour_may = Math.round(parseFloat(last_per_hour_may)*100)/100  
    new_per_hour_may = Math.round(parseFloat(new_per_hour_may)*100)/100  
    
    var hoser_may =  new_per_hour_may - last_per_hour_may
    hoser_may = Math.round(parseFloat(hoser_may)*100)/100 
    

    document.getElementById('last_price_may').innerText = last_per_hour_may
    document.getElementById('new_price_may').innerText = new_per_hour_may
    document.getElementById('hoser_may').innerText = hoser_may

    
    
    var last_per_hour_april = 0 
    var new_per_hour_april = 0 
    
    var april_50 = Number(document.getElementById("april_50").value)
    var april_20 = Number(document.getElementById("april_20").value)
    var april_200 = Number(document.getElementById("april_200").value)
    var april_150_2 = Number(document.getElementById("april_150_2").value)
    var april_150_1 = Number(document.getElementById("april_150_1").value)
    var april_125 = Number(document.getElementById("april_125").value)
    var april_100 = Number(document.getElementById("april_100").value)
    var april_mahala = Number(document.getElementById("april_mahala").value)
    var april_hofesh = Number(document.getElementById("april_hofesh").value)
    var april_shabat = Number(document.getElementById("april_shabat").value)

    last_per_hour_april = (a/100*20*april_20)+(a/100*50*april_50)+(a/100*200*april_200)+(a/100*150*april_150_2)+(a/100*150*april_150_1)+(a/100*125*april_125)+(a*april_100)+(a*april_mahala)+(a*april_hofesh)+(a*april_shabat)
    new_per_hour_april =  (b/100*20*april_20)+(b/100*50*april_50)+(b/100*200*april_200)+(b/100*150*april_150_2)+(b/100*150*april_150_1)+(b/100*125*april_125)+(b*april_100)+(b*april_mahala)+(b*april_hofesh)+(b*april_shabat)


    last_per_hour_april = Math.round(parseFloat(last_per_hour_april)*100)/100  
    new_per_hour_april = Math.round(parseFloat(new_per_hour_april)*100)/100  
    
    var hoser_april =  new_per_hour_april-last_per_hour_april
    hoser_april = Math.round(parseFloat(hoser_april)*100)/100 
    

    document.getElementById('last_price_april').innerText = last_per_hour_april
    document.getElementById('new_price_april').innerText = new_per_hour_april
    document.getElementById('hoser_april').innerText = hoser_april


    var last_per_hour_march = 0 
    var new_per_hour_march = 0 

    var march_50 = Number(document.getElementById("march_50").value)
    var march_20 = Number(document.getElementById("march_20").value)
    var march_200 = Number(document.getElementById("march_200").value)
    var march_150_2 = Number(document.getElementById("march_150_2").value)
    var march_150_1 = Number(document.getElementById("march_150_1").value)
    var march_125 = Number(document.getElementById("march_125").value)
    var march_100 = Number(document.getElementById("march_100").value)
    var march_mahala = Number(document.getElementById("march_mahala").value)
    var march_hofesh = Number(document.getElementById("march_hofesh").value)
    var march_shabat = Number(document.getElementById("march_shabat").value)

    last_per_hour_march = (a/100*20*march_20)+(a/100*50*march_50)+(a/100*200*march_200)+(a/100*150*march_150_2)+(a/100*150*march_150_1)+(a/100*125*march_125)+(a*march_100)+(a*march_mahala)+(a*march_hofesh)+(a*march_shabat)
    new_per_hour_march =  (b/100*20*march_20)+(b/100*50*march_50)+(b/100*200*march_200)+(b/100*150*march_150_2)+(b/100*150*march_150_1)+(b/100*125*march_125)+(b*march_100)+(b*march_mahala)+(b*march_hofesh)+(b*march_shabat)


    last_per_hour_march = Math.round(parseFloat(last_per_hour_march)*100)/100  
    new_per_hour_march = Math.round(parseFloat(new_per_hour_march)*100)/100  
    
    var hoser_march =  new_per_hour_march-last_per_hour_march
    hoser_march = Math.round(parseFloat(hoser_march)*100)/100 
    

    document.getElementById('last_price_march').innerText = last_per_hour_march
    document.getElementById('new_price_march').innerText = new_per_hour_march
    document.getElementById('hoser_march').innerText = hoser_march



    var last_per_hour_feb = 0 
    var new_per_hour_feb = 0 

    var feb_50 = Number(document.getElementById("feb_50").value)
    var feb_20 = Number(document.getElementById("feb_20").value)
    var feb_200 = Number(document.getElementById("feb_200").value)
    var feb_150_2 = Number(document.getElementById("feb_150_2").value)
    var feb_150_1 = Number(document.getElementById("feb_150_1").value)
    var feb_125 = Number(document.getElementById("feb_125").value)
    var feb_100 = Number(document.getElementById("feb_100").value)
    var feb_mahala = Number(document.getElementById("feb_mahala").value)
    var feb_hofesh = Number(document.getElementById("feb_hofesh").value)
    var feb_shabat = Number(document.getElementById("feb_shabat").value)


    last_per_hour_feb = (a/100*20*feb_20)+(a/100*50*feb_50)+(a/100*200*feb_200)+(a/100*150*feb_150_2)+(a/100*150*feb_150_1)+(a/100*125*feb_125)+(a*feb_100)+(a*feb_mahala)+(a*feb_hofesh)+(a*feb_shabat)
    new_per_hour_feb =  (b/100*20*feb_20)+(b/100*50*feb_50)+(b/100*200*feb_200)+(b/100*150*feb_150_2)+(b/100*150*feb_150_1)+(b/100*125*feb_125)+(b*feb_100)+(b*feb_mahala)+(b*feb_hofesh)+(b*feb_shabat)

    last_per_hour_feb = Math.round(parseFloat(last_per_hour_feb)*100)/100  
    new_per_hour_feb = Math.round(parseFloat(new_per_hour_feb)*100)/100  

    var hoser_feb =  new_per_hour_feb-last_per_hour_feb
    hoser_feb = Math.round(parseFloat(hoser_feb)*100)/100 
    

    document.getElementById('last_price_feb').innerText = last_per_hour_feb
    document.getElementById('new_price_feb').innerText = new_per_hour_feb
    document.getElementById('hoser_feb').innerText = hoser_feb


    var last_per_hour_jen = 0 
    var new_per_hour_jen = 0 

    var jen_50 = Number(document.getElementById("jen_50").value)
    var jen_20 = Number(document.getElementById("jen_20").value)
    var jen_200 = Number(document.getElementById("jen_200").value)
    var jen_150_2 = Number(document.getElementById("jen_150_2").value)
    var jen_150_1 = Number(document.getElementById("jen_150_1").value)
    var jen_125 = Number(document.getElementById("jen_125").value)
    var jen_100 = Number(document.getElementById("jen_100").value)
    var jen_mahala = Number(document.getElementById("jen_mahala").value)
    var jen_hofesh = Number(document.getElementById("jen_hofesh").value)
    var jen_shabat = Number(document.getElementById("jen_shabat").value)


    last_per_hour_jen = (a/100*20*jen_20)+(a/100*50*jen_50)+(a/100*200*jen_200)+(a/100*150*jen_150_2)+(a/100*150*jen_150_1)+(a/100*125*jen_125)+(a*jen_100)+(a*jen_mahala)+(a*jen_hofesh)+(a*jen_shabat)
    new_per_hour_jen =  (b/100*20*jen_20)+(b/100*50*jen_50)+(b/100*200*jen_200)+(b/100*150*jen_150_2)+(b/100*150*jen_150_1)+(b/100*125*jen_125)+(b*jen_100)+(b*jen_mahala)+(b*jen_hofesh)+(b*jen_shabat)

    last_per_hour_jen = Math.round(parseFloat(last_per_hour_jen)*100)/100  
    new_per_hour_jen = Math.round(parseFloat(new_per_hour_jen)*100)/100  

    var hoser_jen =  new_per_hour_jen-last_per_hour_jen
    hoser_jen = Math.round(parseFloat(hoser_jen)*100)/100 
    

    document.getElementById('last_price_jen').innerText = last_per_hour_jen
    document.getElementById('new_price_jen').innerText = new_per_hour_jen
    document.getElementById('hoser_jen').innerText = hoser_jen


  
    var hos_all = hoser_may + hoser_april + hoser_march + hoser_feb + hoser_jen + hoser_june + hoser_july + hoser_august + hoser_september+hoser_october+hoser_november+hoser_december
    hos_all = Math.round(parseFloat(hos_all)*100)/100

    var l_per_hour_all = last_per_hour_feb + last_per_hour_march + last_per_hour_april + last_per_hour_may + last_per_hour_jen + last_per_hour_june+last_per_hour_july+last_per_hour_august+last_per_hour_september+last_per_hour_october+last_per_hour_november+last_per_hour_december
    l_per_hour_all = Math.round(parseFloat(l_per_hour_all)*100)/100

    var n_per_hour_all = new_per_hour_feb + new_per_hour_march + new_per_hour_april + new_per_hour_may +new_per_hour_jen + new_per_hour_june +new_per_hour_july + new_per_hour_august +new_per_hour_september  +new_per_hour_october+new_per_hour_november+ new_per_hour_december
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







