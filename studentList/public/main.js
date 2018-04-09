// alert('are you late tho?');
document.getElementById('showStudents').onclick = showAll;
document.getElementById('go').onclick = noRe;

function showAll(){
  var students = document.querySelector('.students');
  var container = document.querySelector('.container');
  var block = 'block';
if((students.style.display) === (block) && (container.style.display) === (block)){
    students.style.display = 'none'
    container.style.display = 'none'
}
else{
    students.style.display = 'block'
    container.style.display = 'block'
}

}

// function noRe(e){
//   e.preventDefault();
// }
