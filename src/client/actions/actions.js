export function selectItem(item) {
    console.log("selectItem",item);
    return {
        type:"ITEM_SELECTED",
        payload:item
    }
}

export function makeTitleSearch(item) {

    fetch(`https://netflixroulette.net/api/api.php?title=${value}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
        });

    return {
        type:"MAKE_TITLE_SEARCH",
        payload:item
    }
}

export function makeDirectorSearch(item) {

    fetch(`http://netflixroulette.net/api/api.php?director=${value}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
        });

    return {
        type:"MAKE_TITLE_SEARCH",
        payload:item
    }
}

export function setSearchBy(item) {
    return {
        type:"SET_SEARCH_BY",
        payload:item
    }
}

export function setFilterBy(item) {
    return {
        type:"SET_FILTER_BY",
        payload:item
    }
}