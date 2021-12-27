async function navbar(){
    return ` <nav id="navbar">
    <ul type="none">
        <li>
            <h3><a href="index.html">Home</a></h3>
        </li>
        <li>
            <form id="search">
                <input placeholder="EnterDish Name">
                <button type="submit">Search</button>
            </form>
            <div id="search_display"></div>
        </li>
        <li>
            <h3><a href="latest.html">Latest Recipe</a></h3>
        </li>
        <li>
            <h3><a href="day.html">Receipe of the day</a></h3>
        </li>
    </ul>
</nav>`
}

export {navbar}