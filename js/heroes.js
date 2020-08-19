fetch('/data.json').then(res => res.json()).then(data => {
    console.log(data.data.heroes)
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 1)
            document.getElementById("heroes-strength-content").innerHTML += `
                <div class="col s6 m4 heroes">
                    <div class="heroes-image-container">
                        <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                        <span>${data.data.heroes[i].name}</span>
                    </div>
                </div>`
    }
})

fetch('/data.json').then(res => res.json()).then(data => {
    console.log(data.data.heroes)
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 2)
            document.getElementById("heroes-agility-content").innerHTML += `
            <div class="col s6 m4 heroes">
                <div class="heroes-image-container ">
                    <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                    <span>${data.data.heroes[i].name}</span>
                </div>
            </div>`
    }
});

fetch('/data.json').then(res => res.json()).then(data => {
    console.log(data.data.heroes)
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 3)
            document.getElementById("heroes-intelligence-content").innerHTML += `
            <div class="col s6 m4 heroes">
                <div class="heroes-image-container ">
                    <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                    <span>${data.data.heroes[i].name}</span>
                </div>
            </div>`
    }
});

