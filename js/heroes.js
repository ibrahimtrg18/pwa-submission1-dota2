// hero radiant strength
fetch('/data.json').then(res => res.json()).then(data => {
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 1 && data.data.heroes[i].side === "radiant")
            document.getElementById("heroes-radiant-strength-content").innerHTML += `
                <div class="col s6 m4 heroes">
                    <div class="heroes-image-container">
                        <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                        <span>${data.data.heroes[i].name}</span>
                    </div>
                </div>`
    }
})

// hero dire strength
fetch('/data.json').then(res => res.json()).then(data => {
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 1 && data.data.heroes[i].side === "dire")
            document.getElementById("heroes-dire-strength-content").innerHTML += `
                <div class="col s6 m4 heroes">
                    <div class="heroes-image-container">
                        <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                        <span>${data.data.heroes[i].name}</span>
                    </div>
                </div>`
    }
})

// hero radiant agility
fetch('/data.json').then(res => res.json()).then(data => {
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 2 && data.data.heroes[i].side === "radiant")
            document.getElementById("heroes-radiant-agility-content").innerHTML += `
            <div class="col s6 m4 heroes">
                <div class="heroes-image-container ">
                    <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                    <span>${data.data.heroes[i].name}</span>
                </div>
            </div>`
    }
});

// hero dire agility
fetch('/data.json').then(res => res.json()).then(data => {
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 2 && data.data.heroes[i].side === "dire")
            document.getElementById("heroes-dire-agility-content").innerHTML += `
                <div class="col s6 m4 heroes">
                    <div class="heroes-image-container">
                        <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                        <span>${data.data.heroes[i].name}</span>
                    </div>
                </div>`
    }
})

// hero radiant intelligence
fetch('/data.json').then(res => res.json()).then(data => {
    console.log(data.data.heroes)
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 3 && data.data.heroes[i].side === "radiant")
            document.getElementById("heroes-radiant-intelligence-content").innerHTML += `
                <div class="col s6 m4 heroes">
                    <div class="heroes-image-container">
                        <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                        <span>${data.data.heroes[i].name}</span>
                    </div>
                </div>`
    }
})

// hero dire intelligence
fetch('/data.json').then(res => res.json()).then(data => {
    console.log(data.data.heroes)
    for (var i = 0; i < data.data.heroes.length; i++) {
        if (data.data.heroes[i].int_main_attributes === 3 && data.data.heroes[i].side === "dire")
            document.getElementById("heroes-dire-intelligence-content").innerHTML += `
            <div class="col s6 m4 heroes">
                <div class="heroes-image-container ">
                    <img src="${data.data.heroes[i].path_image}" width="100%" height="auto" />
                    <span>${data.data.heroes[i].name}</span>
                </div>
            </div>`
    }
});

