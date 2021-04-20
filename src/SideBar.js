import React from 'react';
import './SideBar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import {useDataLayerValue} from './DataLayer'

function SideBar() {
    const str = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg";
    const [{playlists} , dispatch] = useDataLayerValue();
    
    return (
        <div className = "sidebar">
            <img src = {str} alt = "" />

            <SidebarOption Icon = {HomeIcon} title = "Home" />
            <SidebarOption Icon = {SearchIcon} title = "Search" />
            <SidebarOption  Icon = {LibraryMusicIcon} title = "Library" />

            <br />
            <strong className = "sidebar_title">PLAYLISTS</strong>
            <hr/>
            
            {playlists?.items?.map(e => (
                    <SidebarOption title = {e.name}/>
            ))}
        </div>  
    );
}

export default SideBar;