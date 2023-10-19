<template>
    <div class="Navigation-Bar">
        <div class="Navigation-Bar-Logo">
            <router-link to="/">Book-it</router-link>
        </div>
        <nav class="Navigation-Bar-Links">
            <ul>
                <li>
                    <router-link to="/">Catalogue</router-link>
                </li>
                <li>
                    <router-link to="/readlist">ReadList</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <router-view></router-view>
</template>

<style scoped>
.Navigation-Bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: #333;
    /* Changed background color */
    color: #fff;
    /* Added font color */
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.Navigation-Bar-Logo a {
    text-decoration: none;
    color: #fff;
    /* Added font color */
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
    color: #fff;
    /* Added font color */
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease-in-out;
    /* Added transition */
}

.Navigation-Bar-Links a:hover {
    color: #DAAA63;
    /* Added hover color */
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
}</style>