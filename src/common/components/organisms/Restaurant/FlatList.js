import React from 'react'
import { Composition } from 'atomic-layout'
import Flat from './Flat'

const FlatsList = ({ data }) => (
    <Composition
        templateCols="repeat(auto-fit, 250px)"
        templateColsMd="repeat(2, 1fr)"
        templateColsLg="repeat(auto-fit, minmax(250px, 1fr))"
        justifyContent="center"
        gutter={15}
        gutterLg={25}
    >
        {data.map(flat => (
            <Flat key={flat.restaurant_id} {...flat} />
        ))}
    </Composition>
)

export default FlatsList
