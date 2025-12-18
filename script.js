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
                <h3> Title:${movies.movieTitle} Längd:${movies.runTime}minuter Utgiven:${movies.movieYear}</h3>
                <p>Genre: ${movies.genre}</p>
                <div>
                    <button
                        class="rounded-md bg-white/50 p-1 text-sm">
                
                    </button>
                    <button
                        class="border border-green-300 hover:bg-white/100
                        rounded-md/50 bg-white/50 p-1 text-sm mt-2">
                        Ändra
                    </button>
                    <button class="border border-green-300 hover:bg-white/100
                        rounded-md/50 bg-white/50 p-1 text-sm mt-2">
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

