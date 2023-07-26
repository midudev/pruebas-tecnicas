<template>
    <div class="Navigation-Bar">
        <div class="Navigation-Bar-Logo">
            <a href="#">Book-it</a>
        </div>
        <nav class="Navigation-Bar-Links">
            <ul>
                <li><a href="#">Catálogo</a></li>
                <li><a href="#">Favoritos</a></li>
            </ul>
        </nav>
    </div>
</template>


<style scoped>
/* Navigation Bar */
.Navigation-Bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.Navigation-Bar-Logo a {
    text-decoration: none;
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
}

.Navigation-Bar-Links {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.Navigation-Bar-Links ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
}

.Navigation-Bar-Links li {
    margin-right: 1em;
}

.Navigation-Bar-Links a {
    color: #333;
    text-decoration: none;
    font-size: 1rem;
}

.Navigation-Bar-Search {
    display: flex;
    align-items: center;
}

.Navigation-Bar-Search input[type="text"] {
    border: none;
    border-radius: 12px;
    padding: 0.5em 1em;
    margin-right: 0.5em;
    font-size: 1em;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.Navigation-Bar-Search input[type="text"]:focus {
    outline-color: #DAAA63;
}

.Navigation-Bar-Search button {
    background-color: #DAAA63;
    border: none;
    border-radius: 12px;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    padding: 0.5em 1em;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.Navigation-Bar-Search button:hover {
    background-color: #C7A259;
}
</style>