export default function (state, action) {
    switch (action.type) {
        case 'SELECTED':
        console.log("SELECTED")
    }

    return [
        {title:"Movie 1", year:"2012"},
        {title:"Movie 2", year:"2013"},
        {title:"Movie 3", year:"2014"},
        {title:"Movie 4", year:"2015"},
        {title:"Movie 5", year:"2016"},
        {title:"Movie 6", year:"2017"},
    ]

}