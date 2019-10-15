import React from 'react'
import { render } from 'react-dom'
import MyApp from './App'
import AppTitle from './AppTitle'

render(
    <div>
        <MyApp />,
        <AppTitle />
    </div>,
    document.getElementById('reactinjectedhere')
)