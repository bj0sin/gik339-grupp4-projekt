 //import {response} from "express";

 const url = "http://localhost:3000/movies";
 
 window.addEventListener("load",fetchData);
 


 function fetchData(){
     fetch(url)
     .then((result) => result.json())
     .then((movies) => {
         if(movies.length > 0){
         let html = `<ul class="w-3/4 my-3 mx-auto flex flex-wrap gap-2 
         justify-center">`;
             movies.forEach(movies =>{
              html += ` 
              <li
                 class="bg-green-200 basis-1/4 text-green-900 p-2 rounded-md
                 border-2 border-green-400 flex flex-col justify-between">
                 <h3> Title: ${movies.movieTitle} Längd: ${movies.runTime} min Utgiven: ${movies.movieYear}</h3>
                 <p>Genre: ${movies.genre}</p>
                 <div>
                     <button
                         class="border border-green-300 hover:bg-white/100
                         rounded-md/50 bg-white/50 p-1 text-sm mt-2" onclick="setCurrentMovie(${movies.id})">
                         Ändra
                     </button>
                     <button class="border border-green-300 hover:bg-white/100
                         rounded-md/50 bg-white/50 p-1 text-sm mt-2" onclick="deleteMovie(${movies.id})">
                         Ta bort
                     </button>
 
                 </div>
           </li>`  
             })
         html +=`</ul>`
 
         const listContainer = document.getElementById('listContainer');
         listContainer.innerHTML = '';
         listContainer.insertAdjacentHTML('beforeend', html);
         }
     
 });
   
 
 }
 
 function setCurrentMovie(id){
     console.log('current', id);
 
     fetch(`${url}/${id}`)
     .then(result => result.json())
     .then(movie => {
         console.log(movie);
         userForm.movieTitle.value = movie.movieTitle;
         userForm.runTime.value = movie.runTime;
         userForm.movieYear.value = movie.movieYear;
         userForm.genre.value = movie.genre;
 
         localStorage.setItem("currentId", movie.id);
 
     });
 }
 
 function deleteMovie (id) {
    console.log ("deletemovie körs med id",id);
    if(!confirm("Är du säker på att du vill ta bort filmen?")) return;
     console.log('delete', id);
     fetch(`${url}/${id}`, { method: 'DELETE' })
     .then(() => {
        alert ("Filmen har tagits bort");
        fetchData();
     });
         
     
     
 }
 
 
 const userForm = document.getElementById('userForm');
 
 userForm.addEventListener('submit',handleSubmit);
 
 function handleSubmit(e){
     e.preventDefault();
     const serverUserObject = {
         movieTitle: '',
         runTime:'',
         movieYear:'',
         genre:''
 
     };
     serverUserObject.movieTitle = userForm.movieTitle.value;
     serverUserObject.runTime = userForm.runTime.value;
     serverUserObject.movieYear = userForm.movieYear.value;
     serverUserObject.genre = userForm.genre.value;
 
     const id = localStorage.getItem("currentId");

     if(id) {
        if(!confirm("Vill du verkligen ändra filmen?")) return;
         serverUserObject.id = id;
 
     }
     else {
        if(!confirm("Vill du lägga till filmen?")) return;
     }
 
     const request = new Request(url,{
         method: serverUserObject.id ? "PUT" : "POST",
         headers:{
             "content-type": "application/json"
         },
         body: JSON.stringify(serverUserObject)
     });
     
     fetch(request).then(() => {

        if (id){
            alert("Filmen har uppdaterats");
        }
        else {
            alert("Filmen har lagts till");
        }
         
         fetchData();
 
         localStorage.removeItem("currentId");
         userForm.reset()
         
         
     });
     
 } 