async function getData(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data.meals;
}

let showData = (arr) => {
    document.getElementById("search_display").style.display = "none";
    document.getElementById("display").innerHTML = "";
    arr.map((el) => {
        let div = document.createElement("div");
        let title = document.createElement("h3");
        title.textContent = el.strMeal;

        let img = document.createElement("img");
        img.setAttribute("src", el.strMealThumb);

        let p = document.createElement("p");
        p.textContent = el.strInstructions;

        let divNew = document.createElement("div");
        for (let i = 1; i <= 20; i++) {
            let ins = document.createElement("p");
            let temp = "strIngredient" + i;
            let flag = "strMeasure" + i;
            if (el[temp] == "" || el[temp] == "null")
                break;
            ins.textContent = `${el[temp]} : ${el[flag]}`;
            divNew.append(ins);
        }

        div.append(title, img, p, divNew);
        document.getElementById("display").append(div);
    })

}

let display_search = (arr) => {
    document.getElementById("search_display").innerHTML = "";
    document.getElementById("search_display").style.display = "block";
    arr.map((el) => {
        let p = document.createElement("p");
        p.textContent = el.strMeal;
        document.getElementById("search_display").append(p);
        p.onclick = () => {
            let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${el.strMeal}`;
            let result = getData(url)
                .then((res) => {
                    showData(res);
                })
        }
    })
}

let debouncing = () => {
    let id_debounce;
    clearInterval(id_debounce);
    id_debounce = setTimeout(display_debouncing, 1000)
}

let display_debouncing = () => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.querySelector("#navbar form>input").value}`;
    let list = getData(url)
        .then((res) => {
            display_search(res);
        })
}

let search = (e) => {
    e.preventDefault();
    console.log(document.querySelector("#search>input").value);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.querySelector("#navbar form>input").value}`;
    let recipe = getData(url)
        .then((res) => {
            showData(res);
        })
}
export { getData, showData, display_search, debouncing, search };