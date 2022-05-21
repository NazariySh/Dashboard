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
      data: [300, 50, 100],
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
    checkCards(e);
 })