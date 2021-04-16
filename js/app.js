///////////////
//Get data from Google sheets
//////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1Nwnf95jFIWGZCCkXJ8owORB7dtd6QCsk2xrBil3CTrA/1/public/full?alt=json")
//.then for when the datat arrives
.then((data) => {
    console.log(data)
    //map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) => {
        return {
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            image: item.gsx$image.$t,
            liveurl: item.gsx$liveurl.$t,
            project: item.gsx$project.$t,
        }
    })
    console.log(projects)
    ///////////////
    //JQuery to render project below
    /////////////
    // const $cardBody = $("div.card-body")
    // const $projectDescript = $("<div>")
    // $projectDescript.html = $(`<p>${item.description}</p>`)
    // $cardBody.append($projectDescript)

    // const $li = $("<li>").append($(`<p>`).text(`${projects.description}`) )
    // $(".cards ul").append($li)
    const final = projects.map((project) => {
        return `
        <my-card project=${project.project} git=${project.giturl} live=${project.liveurl}
        description=${project.description} img=${project.image} ></my-card>`
    })
    console.log(final.join(""))
    const $divCards = $("div.cards")
    $divCards.html(final.join(""))
    // const $myCard = $("final")
    // $divCards.append($myCard)
    /////////////////////
    //end of code to make site
    /////////////////////
})
//.catch in case of error
.catch((error) => {
    console.error(error)
})