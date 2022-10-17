fetch('https://randomuser.me/api/').then((apiData) => {
    return apiData.json();
}).then((currData) => {
    console.log(currData);
})