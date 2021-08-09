
function add(){
    let text=document.getElementById('text');
    let notes=localStorage.getItem("notes");
    if(notes==null)
    Obj=[];
    else
    {
    Obj= JSON.parse(notes);
    }
    Obj.push(text.value);
    localStorage.setItem("notes", JSON.stringify(Obj))
    text.value=""
}
function deletenote(index){
  let notes=localStorage.getItem("notes");
  if(notes==null)
  Obj=[];
  else
  {
  Obj= JSON.parse(notes);
  }
  Obj.splice(index,1);
  let array=localStorage.getItem("arr");
 if(array==null)
 a=[];
 else
 a=JSON.parse(array);
  for(i=0;i<a.length;i++)
{
  if(a[i]==index)
    a.splice(i,1);
}
  localStorage.setItem("notes", JSON.stringify(Obj))
  notes=localStorage.getItem("notes");
    if(notes==null)
    Obj=[];
    else
    {
    Obj= JSON.parse(notes);
    }
    let html=""
    Obj.forEach(function(element,index){
      let count=0;
      for(i=0;i<a.length;i++){
        if(index==a[i])
        {
          html += `<div class="card my-2 mx-2 findme" style="width: 18rem; background-color: black; border: solid 5px red; color: yellow;">
        <div class="card-body">
          <h5 class="card-title">Note ${1+index}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
          <button class="btn btn-primary" id="-${index}" onclick="mark(this.id)">Mark Imp.</button>
        </div>
      </div>`
      count++;
      break;
        }
      }
      if(count==0)
      {
      html += `<div class="card my-2 mx-2 findme" style="width: 18rem; background-color: black; border: solid 3px white; color: yellow;">
      <div class="card-body">
        <h5 class="card-title">Note ${1+index}</h5>
        <p class="card-text">${element}</p>
        <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
        <button class="btn btn-primary" id="-${index}" onclick="mark(this.id)">Mark Imp.</button>
      </div>
    </div>`
      }
    });
    let note=document.getElementById('Notes');
    if(Obj.length==0)
  note.innerHTML=`<h3>Nothing to show!! Please use "Add Note" to add your notes</h3>`;
  else
  note.innerHTML=html;
    localStorage.setItem("notes", JSON.stringify(Obj))
    localStorage.setItem("arr",JSON.stringify(a));
}
  let btn = document.getElementById('mybtn')
btn.addEventListener('click',function(){
  let notes=localStorage.getItem("notes");
  if(notes==null)
  Obj=[];
  else
  {
  Obj= JSON.parse(notes);
  } 
  let html=""
  Obj.forEach(function(element,index){
    let count=0;
    let array=localStorage.getItem("arr");
 if(array==null)
 a=[];
 else
 a=JSON.parse(array);
    for(i=0;i<a.length;i++){
      if(index==a[i])
      {
        html += `<div class="card my-2 mx-2 findme" style="width: 18rem; background-color: black; border: solid 5px red; color: yellow;">
      <div class="card-body">
        <h5 class="card-title">Note ${1+index}</h5>
        <p class="card-text">${element}</p>
        <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
        <button class="btn btn-primary" id="-${index}" onclick="mark(this.id)">Mark Imp.</button>
      </div>
    </div>`
    count++;
    break;
      }
    }
    if(count==0)
    {
    html += `<div class="card my-2 mx-2 findme" style="width: 18rem; background-color: black; border: solid 3px white; color: yellow;">
    <div class="card-body">
      <h5 class="card-title">Note ${1+index}</h5>
      <p class="card-text">${element}</p>
      <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
      <button class="btn btn-primary" id="-${index}" onclick="mark(this.id)">Mark Imp.</button>
    </div>
  </div>`
    }
  });
  let note=document.getElementById('Notes');
  note.innerHTML=html;
  localStorage.setItem("notes", JSON.stringify(Obj))
  localStorage.setItem("arr",JSON.stringify(a));
})
let search=document.getElementById('find');
search.addEventListener('input',function(){
  let textval=search.value;
  let Card =document.getElementsByClassName('findme')
   Array.from(Card).forEach(function(element){
    let par=element.getElementsByTagName('p')[0].innerText;
    if(par.includes(textval))
    {
      element.style.display ="block";
    }
    else
    element.style.display ="none";
  })
})
function show(){
  let notes=localStorage.getItem("notes");
  if(notes==null)
  Obj=[];
  else
  {
  Obj= JSON.parse(notes);
  }
  let html=""
  Obj.forEach(function(element,index){
    let count=0;
    let array=localStorage.getItem("arr");
 if(array==null)
 a=[];
 else
 a=JSON.parse(array);
    for(i=0;i<a.length;i++){
      if(index==a[i])
      {
        html += `<div class="card my-2 mx-2 findme" style="width: 18rem; background-color: black; border: solid 5px red; color: yellow;">
      <div class="card-body">
        <h5 class="card-title">Note ${1+index}</h5>
        <p class="card-text">${element}</p>
        <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
        <button class="btn btn-primary" id="-${index}" onclick="mark(this.id)">Mark Imp.</button>
      </div>
    </div>`
    count++;
    break;
      }
    }
    if(count==0)
    {
    html += `<div class="card my-2 mx-2 findme" style="width: 18rem; background-color: black; border: solid 3px white; color: yellow;">
    <div class="card-body">
      <h5 class="card-title">Note ${1+index}</h5>
      <p class="card-text">${element}</p>
      <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
      <button class="btn btn-primary" id="-${index}" onclick="mark(this.id)">Mark Imp.</button>
    </div>
  </div>`
    }
  });
  let note=document.getElementById('Notes');
  if(Obj.length==0)
  note.innerHTML=`<h3>Nothing to show!! Please use "Add Note" to add your notes</h3>`;
  else
  note.innerHTML=html;
  localStorage.setItem("notes", JSON.stringify(Obj))
  localStorage.setItem("arr",JSON.stringify(a));
}
function mark(index1){
 let array=localStorage.getItem("arr");
 if(array==null)
 a=[];
 else
 a=JSON.parse(array);
  a.push(-index1);
  let notes=localStorage.getItem("notes");
  if(notes==null)
  Obj=[];
  else
  {
  Obj= JSON.parse(notes);
  }
  let html=""
  Obj.forEach(function(element,index){
    let count=0;
    for(i=0;i<a.length;i++){
      if(index==a[i])
      {
        html += `<div class="card my-2 mx-2 findme" style="width: 18rem; background-color: black; border: solid 5px red; color: yellow;">
      <div class="card-body">
        <h5 class="card-title">Note ${1+index}</h5>
        <p class="card-text">${element}</p>
        <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
        <button class="btn btn-primary" id="-${index}" onclick="mark(this.id)">Mark Imp.</button>
      </div>
    </div>`
    count++;
    break;
      }
    }
    if(count==0)
    {
    html += `<div class="card my-2 mx-2 findme" style="width: 18rem; background-color: black; border: solid 3px white; color: yellow;">
    <div class="card-body">
      <h5 class="card-title">Note ${1+index}</h5>
      <p class="card-text">${element}</p>
      <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
      <button class="btn btn-primary" id="-${index}" onclick="mark(this.id)">Mark Imp.</button>
    </div>
  </div>`
    }
  });
  let note=document.getElementById('Notes');
  note.innerHTML=html;
  localStorage.setItem("notes", JSON.stringify(Obj))
  localStorage.setItem("arr",JSON.stringify(a));
}