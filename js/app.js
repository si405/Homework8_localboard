$(document).ready(function() {

        // Prepare the Handlebars template

        var source = $("#song-template").html();
        var songTemplate = Handlebars.compile(source);

        // Look for returned hash token from Spotify
        // Regex to find only the access token from the URL

        if (accessToken === '') {
            var tokenMatches = window.location.hash.match(/access_token=(.*));
            if (tokenMatches) {
                accessToken = tokenMatches[1];
                // Store the values in session storage that will be cleared when the browser closes
                // Local storage would persist when the browser closes, which we don't want
                window.sessionStorage.setItem("instagram_access_token", accessToken);
                console.log(accessToken);
            };
        };

//end of document
});
