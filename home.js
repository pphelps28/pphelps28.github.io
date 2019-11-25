$(document).ready(function () {

    $("#title").hide().delay().slideDown();
    $('#mainbody').hide().fadeIn(1000);
    $('#hometext').hide().delay(1000).slideDown();
    $("#links").hide().delay(2000).slideDown();
    $("#thumbnail").hide().delay(1500).fadeIn();
})


/*
This is the Javascript variation of .get, which is native to express

async function getData(url) {
    let jsonObject = await fetch(url)
        .then((req, res) => {
            res.json()
        })
        .then(jsonObj => {
            return jsonObj
        })
    return jsonObject
}
*/
