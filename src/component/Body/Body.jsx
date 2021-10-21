import React from 'react'
import Buttons from '../Buttons/Buttons'
import Card from '../mid-section/Card'
import Table from '../Table/Table'
import "./Body.scss"

function Body() {
    return (
        <div className="body">
            <Card />
            <Table />
            <Buttons />
        </div>
    )
}

export default Body
