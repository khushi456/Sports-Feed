//grab the news container
let mostp = document.getElementById('mostp')
let cric = document.getElementById('cric')
let footb = document.getElementById('footb')
let tennis = document.getElementById('tennis')
let news1 = document.getElementById('news1')
//create a get request
const xhr = new XMLHttpRequest();
const c = new XMLHttpRequest();
const f = new XMLHttpRequest();
const t = new XMLHttpRequest();
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=977c1e621d6048138e9d5a1d76f8e927', true);
c.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&category=sports&q=cricket&apiKey=977c1e621d6048138e9d5a1d76f8e927', true);
f.open('GET', 'https://newsapi.org/v2/everything?q=football&apiKey=977c1e621d6048138e9d5a1d76f8e927', true);
t.open('GET', 'https://newsapi.org/v2/everything?q=tennis&apiKey=977c1e621d6048138e9d5a1d76f8e927', true);
xhr.onload = function () {
    if (this.status === 200) {
        console.log('yes')
        let json = JSON.parse(this.responseText)

        console.log(json)
        let articles = json.articles

        let newshtml = ""
        let posthtml = `<div class="carousel-item active">
        <a href="${articles[0].url}"><img src="${articles[0].urlToImage}"
            class="d-block w-100" alt="..."></a>
        <div class="carousel-caption d-none d-md-block">
            <p>${articles[0].title}</p>
        </div>
    </div>`

        for (var i = 1; i < 3; i++) {
            let post = `<div class="carousel-item">
            <a href="${articles[i].url}"><img src="${articles[i].urlToImage}"
                class="d-block w-100" alt="..."></a>
            <div class="carousel-caption d-none d-md-block">
                <p>${articles[i].title}</p>
            </div>
        </div>`;

            posthtml += post;
        }

        for (var i = 3; i < 8; i++) {
            let news = `<li class="list-group-item"><a href="${articles[i].url}">${articles[i].title}
                        </a></li>`;

            newshtml += news;
        }
        mostp.innerHTML = newshtml;
        news1.innerHTML = posthtml;
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

        for (var i = 0; i < 4; i++) {
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
f.onload = function () {
    if (this.status === 200) {
        console.log('yes')
        let json = JSON.parse(this.responseText)

        console.log(json)
        let articles = json.articles

        let footbhtml = ""
        let n = articles.length
        if (n > 4) {
            n = 4;
        }
        for (var i = 0; i < n; i++) {
            let footnews = ` <div class="col-lg-3 col-md-6 col-sm-12">
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

            footbhtml += footnews;
        }
        footb.innerHTML = footbhtml;
    }
    else {
        console.log("Some error occured")
    }
}
t.onload = function () {
    if (this.status === 200) {
        console.log('yes')
        let json = JSON.parse(this.responseText)

        console.log(json)
        let articles = json.articles

        let tennishtml = ""
        let n = articles.length
        if (n > 4) {
            n = 4;
        }
        for (var i = 0; i < n; i++) {
            let tennisnews = ` <div class="col-lg-3 col-md-6 col-sm-12">
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

            tennishtml += tennisnews;
        }
        tennis.innerHTML = tennishtml;
    }
    else {
        console.log("Some error occured")
    }
}



xhr.send();

c.send();
f.send();
t.send();
