export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "https://spotify-clone-c3397.web.app/"

const clientId = "84334fffc3f3424e89b74b99002b96a2"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

    export const getTokenFromResponse = () => {
    return window.location.hash //this function gives us the url of # e.g   #access_token=something&token_type=something
      .substring(1) // now our string reduced to access_token=something
      .split("&")  // this will creatw array
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]); //it decodes the encoded the token we got
        //access_token = something
        //access_type = something
        return initial;
      }, {});
  };