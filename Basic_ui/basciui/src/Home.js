import React from 'react'
import web from "../src/img/Business_team_5.jpg"
import Common from './Common'

export default function Home() {
    return (
        <div>
            <Common
                name='Welcom to home page'
                imgsrc={web}
                visit='/services'
                btname='get started'
            />
        </div>
    )
}
