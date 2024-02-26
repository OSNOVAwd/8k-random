const container = document.querySelector('.container')

const random = ['Abdurahmanov Murodjon', 'Ahmadjanov Ismatillo', 'Ahmadjanov Valiakbar', 'Baxtiyorov Muhammad', 'Boqiyev Abdulahad', 'Patxiddinov Xumoyun', 'Tolibjanov Muhammad Shukur', 'Maksumov Ibrohim', 'Mahmudjanov Abdulahad', 'Abdulkasimov Jasur', 'Xashimov Ayubxon', 'Musayev Sardor', 'Turganbayev Arslan', 'Xabibullayev Ibrohim', 'Rasuljanov Umar', 'Rustamjanov Shoxjahon', 'Rahimjanova Hayotxon', 'Nabijonova Muslima', 'Muhammadova Shahzoda', 'Yusupova Madina', 'Gaziyeva Aziza', 'Muhammadova Sarvinoz', 'Ikramova Yasmina', 'Yakubova Fotima', 'Gulomjonova Samira']


const generateName = () => {

let result = random[Math.floor(Math.random() * random.length)]
document.getElementById('name').textContent = result
}

document.getElementById('generate-btn').addEventListener('click', generateName)
 const name = document.getElementById('name')
 if(random[0] && random[1] && random[2] && random[3] && random[5] && random[6] && random[7] && random[8] && random[9] && random[10] && random[11] && random[12] && random[13] && random[14] && random[15]
   ){
    const name = document.getElementById('name').style.color = 'blue'
 }else{
  document.getElementById('name').style.color = 'red'
 }