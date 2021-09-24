//Initialize the news parameters
// let apiKey = '1a04fbec96a14fd5a91aae53ca3fd1b0';
let source = 'bbc-news';
let country='in';
let category='science'; 
let imageCantLoad='https://uploads-us-west-2.insided.com/looker-en/attachment/d0a25f59-c9b7-40bd-b98e-de785bbd04e7.png';
let newsPanel = document.getElementById('newsPanel');
let url = "https://saurav.tech/NewsAPI/";
url+=`/top-headlines/category/${category}/${country}.json`;
// let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`

getNews(url);

function getNews(url) {
  fetch(url).then(res =>res.json()).then(data =>{
    // console.log(data.articles);
    showNews(data.articles);
  })
}

function showNews(data) {
    let articles=data;
    let news="";
    articles.forEach(function(element,index) {
        // console.log(element["content"]);
        if(element["content"]!=null){
        news += ` <div class="card mx-4 my-3 shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <img src="${element["urlToImage"]}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${element["title"]}</h5>
          <p class="card-text">${element["content"]}</p>
          <a href="${element["url"]}" target="_blank"class="btn btn-primary">Read more here</a>
        </div>
      </div>`
        }
            });
    newsPanel.innerHTML = news;
}

