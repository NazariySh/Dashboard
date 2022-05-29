let signUpPage = document.getElementById('signUpPage')
let logUp = document.getElementById('logUp');
let logIn = document.getElementById('logIn');
let password = document.getElementById('password')
let confirPassword = document.getElementById('confirPassword')
let userName = document.getElementById('userName');
let firsName = document.getElementById('firsName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let bdate = document.getElementById('bdate');
let wrap = document.getElementById('wrap');
let wrap2 = document.querySelector('.body');
let registration = document.getElementById('registration');
let settings = document.getElementById('settings');
let logout = document.getElementById('logout');
registration.onclick = ()=>{
  wrap2.style.display = 'none';
  wrap.style.display = 'flex';
  logIn.style.display = 'none';
  logUp.style.display = 'flex';
}    
logout.onclick = ()=>{
  wrap2.style.display = 'none';
  wrap.style.display = 'flex';
 
}
signUpPage.onclick = ()=>{
  logIn.style.display = 'none';
  logUp.style.display = 'flex';
 
}
dropbtn.onclick =()=>{
  dropdown.classList.toggle('active')
} 


console.log(localStorage.getItem('users'))

function signUPValues(dataes){
 
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
      
     
      
       
                     let user = {};
                  
                     user.name = firsName.value;
                     user.lastName = lastName.value;
                     user.userName = userName.value;
                     user.mail = email.value;
                     user.birthday = bdate.value;
                     user.activity1 = data1,
                     user.activity2 = data2,
                     user.activity3 =  data3,
                     user.info1 =  info1,
                     user.info2 =  info2,
                     user.info3 =  info3,
                     user.sum1 =  sum1,
                     user.sum2 =  sum2,
                     user.sum3 =  sum3,
                     user.sum4 =  sum4,
                     user.activitySum =  activitySum;
                   
                     fetch('https://randomuser.me/api')
                                 .then((response) => {
                                     return response.json();
                                 })
                                 .then((data) =>{
                                    console.log(data)
                                    user.avatar =  data.results[0].picture.large;
                              
                    })
                                
                             
                     
                     if(password.value === confirPassword.value){
                         user.password = password.value;
                         dataes.lists.push(user);
                         user.allVisits =  []; 
                         user.countVisits = 0;
                         user.statistics = [3,4,1,5,6]
                        
                     
                    
                     
                     
                         alert("sign up seccess")
                     
                        //  console.log(dataes);
                         localStorage.setItem('users', JSON.stringify(dataes))
                     
                         logIn.style.display = 'flex';
                         logUp.style.display = 'none';
                     }else{
                         alert('confirm password false')
                         password = ' ';
                         confirPassword = '';
                     }
                     
                     
      
      
        
        
            
       
      
}
function getUsersValues(){
  const storedValues = localStorage.getItem('users');
  if(!storedValues){
    let dataes = {
      lists:[]
    };
 
    signUp.onclick = ()=>{
      signUPValues(dataes);
      }
      
  
  
   
         
  }else{
    let dataes = JSON.parse(storedValues);
    signUp.onclick = ()=>{
      signUPValues(dataes);
      
      }
      
    
  }
}
getUsersValues();


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
  
    borderWidth: 0
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


  signIn.onclick = ()=>{
    let logUserName = document.getElementById('logUserName')
    let logPassword = document.getElementById('logPassword')
  
  
   let dat = JSON.parse(localStorage.getItem('users'));
  
   let isGoodPassword = false;
    for(let i = 0; i < dat.lists.length; i++){
     
      if(dat.lists[i].userName === logUserName.value && dat.lists[i].password === logPassword.value){
      
        isGoodPassword = true;
        let name = document.getElementById('name')
        let cardName = document.getElementById('cardName')
        let photo = document.getElementById('photo')
        let myEmail = document.getElementById('myEmail')
        
              wrap2.style.display = 'flex';
              wrap.style.display = 'none';
              data.datasets[0].data[0] = dat.lists[i].activity1;
              data.datasets[0].data[1] = dat.lists[i].activity2;
              data.datasets[0].data[2] = dat.lists[i].activity3;
              mydata.datasets[0].data[0] = dat.lists[i].info1;
              mydata.datasets[0].data[1] = dat.lists[i].info2;
              mydata.datasets[0].data[2] = dat.lists[i].info3;
              num1.innerText = dat.lists[i].sum1;
              num2.innerText = dat.lists[i].sum2;
              num3.innerText = dat.lists[i].sum3;
              num4.innerText = dat.lists[i].sum4;
              cardName.innerHTML = dat.lists[i].userName;
              activityNum.innerText = '  $'+dat.lists[i].activitySum;
              balanceNum.innerText = '  $'+dat.lists[i].activitySum;
              myEmail.innerText =  dat.lists[i].mail;
              name.innerText = 'Hi ' + dat.lists[i].userName;
           
              photo.style.backgroundImage = 'url('+dat.lists[i].avatar+')';
              logUserName.value = '';
              logPassword.value = '';
            
        }else{
           isGoodPassword = false;
           
        }
      }
        if(isGoodPassword == true){
          
          
          logPassword.value = '';
          alert('wrong password')
        }else{
          console.log('good entrance')
         
        }
  
   
   
       
  
       
   
    
  }
  
  

