let id;
async function  search(){
    let query = document.querySelector("#search").value;
    
    if (query.length <= 2) {
        return false;
    }
    let response = await fetch(`http://www.omdbapi.com/?apikey=20b8a83d&s=${query}`);

    let data = await response.json();
    let movie_arr = data.Search;

    display_movies(movie_arr);
}
function display_movies(arr) {
    document.querySelector("#movie_div").innerHTML = null;
    if (arr === undefined) {
        return false;
    }
    arr.map(function (ele) {
        let main = document.createElement("div");
        main.setAttribute('class', 'search_content');
        let div_poster = document.createElement("div");
        let poster = document.createElement("img");
        poster.src = ele.Poster;
        let content = document.createElement("div");


        let yr = document.createElement("p");
        yr.innerHTML = ele.Year;
        let p = document.createElement('p');
        let Movname = ele.Title;
        p.innerHTML = `<b>${ele.Title}</b>`;
        div_poster.append(poster);
        content.append(p, yr);
        main.append(div_poster, content);
        main.addEventListener('click', function () {
            display_full(Movname);
        })
        document.querySelector("#movie_div").append(main);
    })
}

function debounce(func){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func()
    },1000)
}