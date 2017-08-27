import React from 'react'
import './css/Section.css'
export default ({title, subtitle, time, content}) => (
    <div className={'thiscontainer'}>
        <div className={'titleContainer'}>
            <p className={'title'}>{title}</p>
            <div className={'containerHell'}>
                <p className={'subtitle'}>{subtitle}</p>
                <p className={'time'}>{time}</p>
            </div>
        </div>
        <div className={'contentContainer'}>
            <p className={'content'}>{content}</p>
        </div>
    </div>
)