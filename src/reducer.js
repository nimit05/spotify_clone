export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    playing : false,
    top_artists : null,
    // token : ' BQBrPGjU83oqZO3hITZIu-F43W0X8bFJBcLXUt3vhkEm79tL63mHQPiiB7KKmDxRQqR3RdlowkwNPUEJkrfssSDNvO1yQ6tBk5cHo7_hdYTE_fHXWUv3noq9J_sJBiJ1FpYVF2O0RftPtZkYBbnvWdH1zOf_J3lpc3WfqgfWcDALlcXktZKZ'
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  
  