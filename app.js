const container = document.querySelector('.container')
const secondStopwatch = document.getElementById('stopwatch')

const random = ['Abdurahmanov Murodjon', 'Ahmadjanov Ismatillo', 'Ahmadjanov Valiakbar', 'Baxtiyorov Muhammad', 'Boqiyev Abdulahad', 'Patxiddinov Xumoyun', 'Tolibjanov Muhammad Shukur', 'Maksumov Ibrohim', 'Mahmudjanov Abdulahad', 'Abdulkasimov Jasur', 'Xashimov Ayubxon', 'Musayev Sardor', 'Turganbayev Arslan', 'Xabibullayev Ibrohim', 'Rasuljanov Umar', 'Rustamjanov Shoxjahon', 'Rahimjanova Hayotxon', 'Nabijonova Muslima', 'Muhammadova Shahzoda', 'Yusupova Madina', 'Gaziyeva Aziza', 'Muhammadova Sarvinoz', 'Ikramova Yasmina', 'Yakubova Fotima', 'Gulomjonova Samira']


const generateName = () => {
let result = random[Math.floor(Math.random() * random.length)];
document.getElementById('name').textContent = result;
};

const gnrBtn = document.getElementById('generate-btn');


function stopwatch() {
  let counter = 1;


  const intervalId = setInterval(() => {
    // stopwatch.innerHTML = counter;
    counter++;
   
    if(counter <= 3){
    clearInterval(intervalId);
    }
  }, 1000)
};

gnrBtn.addEventListener('click', function() {
  setTimeout(generateName, 3000);
  secondStopwatch.innerHTML = stopwatch();
});


















