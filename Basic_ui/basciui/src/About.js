import React from 'react'
import Common from './Common'
import img from '../src/img/business.jpg'

export default function About() {
    return (
        <div>
            <Common
                name='Welcom to About page'
                imgsrc={img}
                visit='/contact'
                btname='Contact Now'
            />
        </div>
    )
}
