export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    // token : ' BQBrPGjU83oqZO3hITZIu-F43W0X8bFJBcLXUt3vhkEm79tL63mHQPiiB7KKmDxRQqR3RdlowkwNPUEJkrfssSDNvO1yQ6tBk5cHo7_hdYTE_fHXWUv3noq9J_sJBiJ1FpYVF2O0RftPtZkYBbnvWdH1zOf_J3lpc3WfqgfWcDALlcXktZKZ'
}

 const reducer = (state , action) => {
    console.log(action)

    switch(action.type){
        case 'SET_USER':
        return {
            ...state,
            user : action.user
        };
        case 'SET_TOKEN' :
            return{
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS' :
            return{
                ...state,
                playlists : action.playlists
            }
        case 'SET_DISCOVER_WEEKLY' :
            return{
                ...state,
                discover_weekly : action.discover_weekly
            }
        default :
        return state;
    }
}

export default reducer