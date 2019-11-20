$(document).ready(function () {

    $('#mainbody').hide().fadeIn(1000);
    $('#hometext').hide().delay(1000).slideDown();
    $("#title").hide().delay(2000).slideDown();
    $("#links").hide().delay(2500).slideDown();
    $("#thumbnail").hide().delay(2500).slideDown();
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
