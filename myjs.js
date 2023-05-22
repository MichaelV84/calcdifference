

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
    

})

function myFunction(){
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


    last_per_hour_jen = (a/100*20*jen_20)+(a/100*50*jen_50)+(a/100*200*jen_200)+(a/100*150*jen_150_2)+(a/100*150*jen_150_1)+(a/100*125*jen_125)+(a*jen_100)+(a*jen_mahala)+(a*feb_hofesh)+(a*feb_shabat)
    new_per_hour_jen =  (b/100*20*jen_20)+(b/100*50*jen_50)+(b/100*200*jen_200)+(b/100*150*jen_150_2)+(b/100*150*jen_150_1)+(b/100*125*jen_125)+(b*jen_100)+(b*jen_mahala)+(b*feb_hofesh)+(b*feb_shabat)

    last_per_hour_jen = Math.round(parseFloat(last_per_hour_jen)*100)/100  
    new_per_hour_jen = Math.round(parseFloat(new_per_hour_jen)*100)/100  

    var hoser_jen =  new_per_hour_jen-last_per_hour_jen
    hoser_jen = Math.round(parseFloat(hoser_jen)*100)/100 
    

    document.getElementById('last_price_jen').innerText = last_per_hour_jen
    document.getElementById('new_price_jen').innerText = new_per_hour_jen
    document.getElementById('hoser_jen').innerText = hoser_jen


  

    var hos_all = hoser_may + hoser_april + hoser_march + hoser_feb +  hoser_jen
    hos_all = Math.round(parseFloat(hos_all)*100)/100 

    var l_per_hour_all = last_per_hour_feb + last_per_hour_march + last_per_hour_april + last_per_hour_may + last_per_hour_jen
    l_per_hour_all = Math.round(parseFloat(l_per_hour_all)*100)/100

    var n_per_hour_all = new_per_hour_feb + new_per_hour_march + new_per_hour_april + new_per_hour_may +new_per_hour_jen
    n_per_hour_all = Math.round(parseFloat(n_per_hour_all)*100)/100

    document.getElementById('new_price_all').innerText = n_per_hour_all
    document.getElementById('last_price_all').innerText = l_per_hour_all
    document.getElementById('hoser_all').innerText = hos_all
    hos_all = hos_all+""
    if (hos_all == "NaN"){
        alert("You must write only numbers and \".\" no \",\" whith numbers. For example : \"4.5\" no \"4,5")
    }
}











