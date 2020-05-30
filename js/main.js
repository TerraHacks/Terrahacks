$(document).ready(function () {

    getTeamJSON(function (data) {
        for (var i = 0; i < data.length; i++) {
            var teamHTML = '';
            teamHTML += '<img class="circle teamPhoto" src="' + data[i].img_low + '" />'
            teamHTML += '<h3 style="font-family: Lobster, cursive;"><strong>' + data[i].name + '</strong></h3>';
            teamHTML += '<figcaption>' + data[i].short_title + '</figcaption>';

            $("#member" + (
                i + 1)).html(teamHTML);

            teamHTML = "";

        }
    });

    function addJudgeInfo(callback) {

        getJudgesJSON(function (data) {
            for (var i = 0; i < data.length; i++) {
                var teamHTML = '<h2 class="text-center">';
                teamHTML += '<div class="center-block circle teamPhoto"><div style="display: none;" class="circle photo-overlay"><p>Learn more</p></div></div><br/>' + data[i].name + '</h2>'
                teamHTML += '<p class="text-center teamPos">'
                teamHTML += '<p class="teamPos"><span style="color: #BDBEC0">' + data[i].title + '</span><br/>' + data[i].company + '</p>';
                teamHTML += '</p>';

                $("#judge" + (
                    i + 1)).html(teamHTML);

                $("#judge" + (
                    i + 1) + " > h2 > div.teamPhoto").css("background-image", "url('" + data[i].img + "')");

                teamHTML = "";

                callback();
            }
        });

    }

    function getTeamJSON(callback) {
        //Load team info from json file
        $.getJSON("resources/teaminfo.json", function (data) {
            return callback(data);
        });
    }

    function getJudgesJSON(callback) {
        //Load team info from json file
        $.getJSON("resources/judgeinfo.json", function (data) {
            return callback(data);
        });
    }

});