const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid=ea1224e9743617c3ad4a24cd46952863";

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let data = jsObject;
    console.log(jsObject.main.temp);
    console.log(jsObject.weather[0].description);
    document.querySelector("#current-desc").innerHTML =
      data.weather[0].description;
    document.querySelector("#current-temp").innerHTML = data.main.temp;
    document.querySelector("#current-feelsLike").innerHTML =
      data.main.feels_like;
    document.querySelector("#current-humid").innerHTML = data.main.humidity;
    document.querySelector("#current-windSpeed").innerHTML = data.wind.speed;
    document.querySelector("#icon").innerHTML = data.weather[0].icon;

    let temp = data.main.temp;
    let windSpeed = data.wind.speed;
    var windChill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temp * Math.pow(windSpeed, 0.16);
    var windChill = Math.round(windChill);
    document.getElementById("current-windChill").innerHTML = windChill;
  });
//
const URL2 =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f78e9e5284a477cbf766b77b7f45d22";

fetch(URL2)
  .then((response) => response.json())
  .then((jsObject) => {
    let Ndata = jsObject;
    console.log(jsObject);

    // console.log(Ndata.articles[0].title);
    document.querySelector("#header-img").src =
      Ndata.articles[0].urlToImage || document.querySelector("#header-img").src;
    document.querySelector("#header-article").innerHTML =
      Ndata.articles[0].title;
    document.querySelector("#header-desc").innerHTML =
      Ndata.articles[0].description;
    document.querySelector("#imglink1").href = Ndata.articles[0].url;
    document.querySelector("#header-img").alt = Ndata.articles[0].url;
    //
    //
    //
    document.querySelector("#article-img-2").src =
      Ndata.articles[2].urlToImage ||
      document.querySelector("#article-img-2").src;
    document.querySelector("#article-link-2").innerHTML =
      Ndata.articles[2].title;
    document.querySelector("#imglink3").href = Ndata.articles[2].url;
    document.querySelector("#article-img-2").alt = Ndata.articles[2].url;
    document.querySelector("#article-desc-2").innerHTML =
      Ndata.articles[2].description;
    //
    //
    //
    document.querySelector("#article-img-3").src =
      Ndata.articles[3].urlToImage ||
      document.querySelector("#article-img-3").src;
    document.querySelector("#article-link-3").innerHTML =
      Ndata.articles[3].title;
    document.querySelector("#imglink4").href = Ndata.articles[3].url;
    document.querySelector("#article-img-3").alt = Ndata.articles[3].url;
    document.querySelector("#article-desc-3").innerHTML =
      Ndata.articles[3].description;
    //
    //
    //
    document.querySelector("#article-img-4").src =
      Ndata.articles[4].urlToImage ||
      document.querySelector("#article-img-4").src;
    document.querySelector("#article-link-4").innerHTML =
      Ndata.articles[4].title;
    document.querySelector("#imglink5").href = Ndata.articles[4].url;
    document.querySelector("#article-img-4").alt = Ndata.articles[4].url;
    document.querySelector("#article-desc-4").innerHTML =
      Ndata.articles[4].description;
    //
    //
    //
    document.querySelector("#article-img-5").src =
      Ndata.articles[5].urlToImage ||
      document.querySelector("#article-img-5").src;
    document.querySelector("#article-link-5").innerHTML =
      Ndata.articles[5].title;
    document.querySelector("#imglink6").href = Ndata.articles[5].url;
    document.querySelector("#article-img-5").alt = Ndata.articles[5].url;
    document.querySelector("#article-desc-5").innerHTML =
      Ndata.articles[5].description;
    //
    //
    //
    document.querySelector("#article-img-1").src =
      Ndata.articles[1].urlToImage ||
      document.querySelector("#article-img-1").src;
    document.querySelector("#article-link-1").innerHTML =
      Ndata.articles[1].title;
    document.querySelector("#imglink2").href = Ndata.articles[1].url;
    document.querySelector("#article-img-1").alt = Ndata.articles[1].url;
    document.querySelector("article-desc-1").innerHTML =
      Ndata.articles[1].description;
  });
