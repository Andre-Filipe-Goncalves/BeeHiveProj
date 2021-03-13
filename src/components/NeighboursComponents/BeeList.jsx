import React from 'react'

const BeeList = (props) => {
const {data} = props;
    return (
        <div>
            <p>{data[1].name}</p>
        </div>
    )
}

export default BeeList;
