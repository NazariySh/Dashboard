let wrap = document.getElementById('wrap');
let wrap2 = document.querySelector('.body');
let username = document.getElementById('inp1').value;
let password = document.getElementById('inp2').value;
let photo = 
    signup.onclick = function(){
      let username = document.getElementById('inp1').value;
  let password = document.getElementById('inp2').value;

  let data1 = Math.floor(Math.random()*100)
let data2 = Math.floor(Math.random()*(100-data1))
let data3 = 100 - data1 - data2;
let info1 = Math.floor(Math.random()*100)
let info2 = Math.floor(Math.random()*100)
let info3 = Math.floor(Math.random()*100)
let sum1 = Math.floor(Math.random()*10000)
let sum2 = Math.floor(Math.random()*10000)
let sum3 = Math.floor(Math.random()*10000)
let sum4 = Math.floor(Math.random()*10000)
let activitySum = Math.floor(Math.random()*50000)

let API = 'https://randomuser.me/api'
fetch(API)
              .then((response) => {
                  return response.json();
              })
              .then((data) =>{
                 console.log(data)
              
                    
              
           

      let user = {
      username: username,
     password: password,
     activity1: data1,
     activity2: data2,
     activity3: data3,
     info1: info1,
     info2: info2,
     info3: info3,
     sum1: sum1,
     sum2: sum2,
     sum3: sum3,
     sum4: sum4,
     activitySum: activitySum,
     avatar: data.results[0].picture.large ,

      };
  
  
        localStorage.setItem(username , JSON.stringify(user))

        alert('Користувач зареєстрований');
      
    
        
      })
         
  }
  
     
    




let btn = document.getElementById('btn');
let sidebar = document.getElementById('sidebar');
let main = document.getElementById('main')
btn.onclick = ()=>{
    sidebar.classList.toggle('active');
 main.classList.toggle('active')
}
let burger = document.getElementById('burger-menu')
let sidebar2 = document.getElementById('sidebar2');
burger.onclick = ()=>{
    sidebar2.classList.toggle('fixed');


}
burger2.onclick = ()=>{
    sidebar2.classList.remove('fixed');
}
const mydata = {
labels :  [
        'Green',
        'Red',
        'Blue'
      ],
  datasets: [{
    label: 'Over',
    data: [165, 1380, 1381,],
    backgroundColor: [
      ' rgba(0, 209, 113, 1)',
      'rgba(255, 104, 77, 1)',
      'rgba(14, 110, 255, 1)',
      
    ],
    borderColor: [
      ' rgba(0, 209, 113, 1)',
     
      'rgba(255, 104, 77, 1)',
      'rgba(14, 110, 255, 1)',
      
    ],
  
    borderWidth: 1
  }]
};
const myconfig = {
    type: 'bar',
    data: mydata,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
const myChart = new Chart(
    document.getElementById('myChart'),
    myconfig
  );

    
const data = {
    labels: [
      'Sun',
      'Mon',
      'Tue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [40, 50, 60],
      backgroundColor: [
        'rgba(0, 209, 113, 1)',
        'rgba(255, 104, 77, 1)',
        'rgba(1, 190, 255, 1)'
      ],
      hoverOffset: 4
    }]
  };
  const config = {
    type: 'doughnut',
    data: data,
  };

  
const activityChart = new Chart(
    document.getElementById('activityChart'),
    config
  );


let card = document.getElementById('card')
  card.addEventListener('click', (e) =>{
    card.classList.toggle('toggleCard') ;  
   
 })


 signin.onclick = function(){
      
  let username = document.getElementById('inp1').value;
let password = document.getElementById('inp2').value;
 let user = localStorage.getItem(username);
 let dat = JSON.parse(user);

 console.log(dat)




 if(user == null){
     alert('wrong username')
 }else if(username == dat.username && password == dat.password){
         alert('Hello ' + username);
   let cardName = document.getElementById('cardName')
   let avatar = document.getElementById('photo')
         wrap2.style.display = 'flex';
         wrap.style.display = 'none';
         data.datasets[0].data[0] = dat.activity1;
         data.datasets[0].data[1] = dat.activity2;
         data.datasets[0].data[2] = dat.activity3;
         mydata.datasets[0].data[0] = dat.info1;
         mydata.datasets[0].data[1] = dat.info2;
         mydata.datasets[0].data[2] = dat.info3;
         num1.innerText = dat.sum1;
         num2.innerText = dat.sum2;
         num3.innerText = dat.sum3;
         num4.innerText = dat.sum4;
         cardName.innerText = dat.username;
         activityNum.innerText = '  $'+dat.activitySum;
         balanceNum.innerText = '  $'+dat.activitySum;
         email.innerText =  dat.username+ '@gmail.com';
         userName.innerText = 'Hi ' + dat.username;
         avatar.style.backgroundImage = dat.avatar;
 }else{
     alert('wrong password')
 }

}
