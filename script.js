


function weather(lat,lon){ 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f2e734eeb6b03063a36b237765330d4e`)
      .then((data)=>data.json()).then((data)=>{
    alert(`Temperature is ${data.main.temp}`);
      });
      }




fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data) => {
  data.forEach((element) => {
    const detailsrequired = {
      ...element,
      name: element.name.common,
      flag: element.flags.png,
      latlng: element.latlng,
      region: element.region,
      capital: element.capital,
      lat: element.latlng[0],
      long: element.latlng[1],
      code: element.cca3,
    };
    Createdetails(detailsrequired);
  });
})
.catch((error) => console.log(error));

let Whole = document.createElement("div");
Whole.setAttribute("class", "container");
document.body.append(Whole);

let Heading = document.createElement("H1");
Heading.innerHTML = "Country Details";
Heading.setAttribute("class", "text-center");
Heading.setAttribute("id", "title");
Whole.append(Heading);

let row = document.createElement("div");
row.setAttribute("class", "row");
Whole.append(row);

function Createdetails({
name,
flag,
latlng,
region,
capital,
lat,
long,
code,
}) {
var columnchange = document.createElement("div");
columnchange.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4");
row.append(columnchange);

var Carddiv = document.createElement("div");
Carddiv.setAttribute("class", "card h-100");
Carddiv.setAttribute("id", "Card");
columnchange.append(Carddiv);

var Cardhead = document.createElement("H4");
Cardhead.setAttribute("class", "text-center card-header");
Cardhead.innerHTML += name;
Carddiv.append(Cardhead);

var imageFlag = document.createElement("img");
imageFlag.setAttribute("src", flag);
imageFlag.setAttribute("class", "card-img-top");
Carddiv.append(imageFlag);

var Cardbody = document.createElement("div");
Cardbody.setAttribute("class", "card-body");
Carddiv.append(Cardbody);
var S1 = document.createElement("span");
S1.innerHTML = `Country code :${code}`;
Cardbody.append(S1);

var S2 = document.createElement("span");
S2.innerHTML = `latlng${latlng}`;
Cardbody.append(S2);

var S3 = document.createElement("span");
S3.innerHTML = `Region :${region}`;
Cardbody.append(S3);

var S4 = document.createElement("span");
S4.innerHTML = `Capital :${capital}`;
Cardbody.append(S4);

var Weatherbutton = document.createElement("button");
Weatherbutton.setAttribute("class", "btn btn-primary");
Weatherbutton.addEventListener("click", () => {
  Weather(lat, long);
});
Weatherbutton.setAttribute("id", "buttons");
Weatherbutton.innerHTML = "Click For Weather";
Cardbody.append(Weatherbutton);
}