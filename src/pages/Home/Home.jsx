import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/Rightbar/Rightbar'
import Feed from '../../components/Feed/Feed'
import Topbar from '../../components/topbar/Topbar'
import './home.css'

function Home() {
    return (
        <>
            <Topbar />

            <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Rightbar />

            </div>
        </>
    )
}

export default Home
