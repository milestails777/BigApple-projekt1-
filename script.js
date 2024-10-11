

async function load() {
    const url = "https://digi-api.com/api/v1/digimon";
    const response = await fetch(url + window.location.search);
    const data = await response.json();
    console.log(data);

    const element = document.querySelector(".img");

    for (const item of data.content) {
        const id = item.id;
        const name = item.name;
        const image = item.image;
        const href = item.href;
        element.innerHTML += "<a href='" + href + "'>";
        element.innerHTML += "<img src='" + image + "'>"
        element.innerHTML += "<h1>" + id + ". " + name + "</h1>"
        
        const url2 = item.href;
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        const desc = data2.descriptions[1].description;
        const type = data2.types[0].type;
        const lvl = data2.levels[0].level;
        const skl = data2.skills[0].skill;
        const skldesc = data2.skills[0].description
        element.innerHTML += "<h2>" + "Type: " + type + "</h2>"
        element.innerHTML += "<h2>" + "Level of age: " + lvl + "</h2>"
        element.innerHTML += "<h3>" + desc + "</h3>"
        element.innerHTML += "<h2>" + "Skills: " + skl + "</h2>" 
        element.innerHTML += "<h3>" + "About skill: " + skldesc + "</h3>"

    }
    window.scrollTo(0, document.body.scrollHeight);
}

load();

// ._.

