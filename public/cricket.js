//grab the news container
let mostp = document.getElementById('mostp')
let cric = document.getElementById('cric')

//create a get request
const xhr = new XMLHttpRequest();
const c = new XMLHttpRequest();

xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&category=sports&q=cricket&apiKey=977c1e621d6048138e9d5a1d76f8e927', true);
c.open('GET', 'https://newsapi.org/v2/everything?q=cricket&apiKey=977c1e621d6048138e9d5a1d76f8e927', true);

xhr.onload = function () {
    if (this.status === 200) {
        console.log('yes')
        let json = JSON.parse(this.responseText)

        console.log(json)
        let articles = json.articles

        let newshtml = ""
        let n = articles.length
        if (n > 4) {
            n = 8;
        }
        for (var i = 3; i < n; i++) {
            let news = `<li class="list-group-item"><a href="${articles[i].url}">${articles[i].title}
                        </a></li>`;

            newshtml += news;
        }
        mostp.innerHTML = newshtml;
        // news1.innerHTML = news;
    }
    else {
        console.log("Some error occured")
    }
}
c.onload = function () {
    if (this.status === 200) {
        console.log('yes')
        let json = JSON.parse(this.responseText)

        console.log(json)
        let articles = json.articles

        let crichtml = ""

        for (var i = 0; i < 16; i++) {
            let cricket = ` <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card mb-3">
            <a href="${articles[i].url}"><img src="${articles[i].urlToImage}"
                    class="card-img-top" alt="..."><a>
                <div class="card-body">
                <h6 class="card-title"><a href="${articles[i].url}">${articles[i].title}</a></h6>
                    <p class="card-text">${articles[i].description}</p>
                    <p class="card-text"><small class="text-muted">${articles[i].publishedAt}</small></p>
                </div>
                </div>
        </div>`;

            crichtml += cricket;
        }
        cric.innerHTML = crichtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();
c.send();