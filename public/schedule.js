//grab the news container
let sch = document.getElementById('sch')

//create a get request
const scheduled_matches = new XMLHttpRequest();

scheduled_matches.open('GET', 'https://cricapi.com/api/matchCalendar?apikey=0B6sd9RtXCgncfSNdqFKd7wqp6V2', true);

scheduled_matches.onload = function () {
    if (this.status === 200) {
        console.log('yes')
        let json = JSON.parse(this.responseText)

        console.log(json)
        let data = json.data

        let matches = ""

        for (var i = 0; i < data.length; i++) {
            let match = `<li class="list-group-item">
            <p>${data[i].name}</p>
            <p>${data[i].date}</p>
            </li>`;

            matches += match;
        }

        sch.innerHTML = matches;
    }
    else {
        console.log("Some error occured")
    }
}
scheduled_matches.send();
