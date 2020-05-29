//grab the news container
let mostp = document.getElementById('mostp')
let footb = document.getElementById('footb')

//create a get request
const xhr = new XMLHttpRequest();
const f = new XMLHttpRequest();

xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&category=sports&q=football&apiKey=977c1e621d6048138e9d5a1d76f8e927', true);
f.open('GET', 'https://newsapi.org/v2/everything?q=football&apiKey=977c1e621d6048138e9d5a1d76f8e927', true);

xhr.onload = function () {
    if (this.status === 200) {
        console.log('yes')
        let json = JSON.parse(this.responseText)

        console.log(json)
        let articles = json.articles

        let newshtml = ""
        let n = articles.length
        if (n > 4) {
            n = 4;
        }
        for (var i = 0; i < n; i++) {
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
f.onload = function () {
    if (this.status === 200) {
        console.log('yes')
        let json = JSON.parse(this.responseText)

        console.log(json)
        let articles = json.articles

        let foothtml = ""

        for (var i = 0; i < 16; i++) {
            let foot = ` <div class="col-lg-3 col-md-6 col-sm-12">
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

            foothtml += foot;
        }
        footb.innerHTML = foothtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();
f.send();
