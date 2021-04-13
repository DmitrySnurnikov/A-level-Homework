// function renderRecord(id, title, body) {
//   return `
//   <tr>
//       <td>${id}</td>
//       <td>${title}</td>
//       <td>${body}</td>
//       <td>
//           <button class="btn-delete" style="background-color: red">delete</button>
//           <button class="btn-rec" style="background-color: green">recover</button>
//       </td>
//   </tr>
//   `;
// }

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');


// xhr.onload = function () {
//   const records = JSON.parse(xhr.response);
//   let tbody = document.querySelector('tbody');

//   let i = 1;
//   for (let record of records) {
//       tbody.innerHTML += renderRecord(i++, record.title, record.body);
//   }
// };

// xhr.send();

// document.addEventListener('click', function (event) {
//   const target = event.target;
//   if (target.classList.contains('btn-delete')) {
//       target.parentNode.previousSibling.remove();
//       // target.parentNode.parentNode.remove();
//   }    
// }); 

// document.addEventListener('click', function(event){
//   const target = event.target;
//   if(target.classList.contains('btn-rec')){
//     target.parentNode.previousSibling.tbody;
//   }
// });

let records = [];
class Record{
  constructor(title, body){
    this._title = title;
    this._body = body;
  }
  delete(){
    this._isDeleted = true;
  }
  restore(){
    this._isDeleted = false;  
  }

  get isDeleted(){
      return this._isDeleted;
    }
    get title(){
      return this.isDeleted ? '' : this._title;
    }
    get body(){
      return this.isDeleted ? '' : this._body;
    }
}


function render(records){
  let id = 1;
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  for(let record of records){
    tbody.innerHTML += renderRecord(id++, record);
  }
}
function renderRecord(id, record) {
  const deleteButton =  `<button class="btn-delete" style="background-color: red" data-id="${id}">delete</button>`;
  const restoreButton =  `<button class="btn-restore" style="background-color: green" data-id="${id}">restore</button>`;
  const button = record.isDeleted ? restoreButton : deleteButton;  
  return `
    <tr>
        <td>${id}</td>
        <td>${record.title}</td>
        <td>${record.body}</td>
        <td>
        ${button}
        </td>
    </tr>
    `;
  }

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.onload = function(){
  for( let object of JSON.parse(xhr.response)){
    let record = new Record(object.title, object.body);
    records.push(record);
  }
  render(records);
}
xhr.send();

document.addEventListener('click', function(event){
  const target = event.target;
  if(target.classList.contains('btn-delete')){
    records[target.dataset.id-1].delete();
    render(records);
  }
});
document.addEventListener('click', function(event){
  const target = event.target;
  if(target.classList.contains('btn-restore')){
    records[target.dataset.id-1].restore();
    render(records);
  }
});
const title = document.getElementById('title');
const body = document.getElementById('body');
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
  event.preventDefault();
  let record = new Record(title.value, body.value);
records.unshift(record);
  title.value = '';
  body.value = '';
  render(records);
})