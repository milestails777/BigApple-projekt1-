async function load() {
    const url = "https://digi-api.com/api/v1/digimon";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
   
    const element = document.querySelector(".img");
   
    for (const item of data.content) {
        const id = item.id;
        const name = item.name;
        const image = item.image;
        const href = item.href;
        element.innerHTML += "<a href='" + href + "'>See Also</a>";
        element.innerHTML += "<img src='"+ image +"'>"
      }
      window.scrollTo(0, document.body.scrollHeight);
    }
load();

