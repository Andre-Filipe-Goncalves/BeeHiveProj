import React from 'react'

const BeeCard = (props) => {
const {data} = props;
    return (
        <div className="beecard-wrapper">
            <div className="beepic-wrapper">
                <img src={data.pic} alt={data.name}/>
            </div>
            <div className="beetext-wrapper">
                <div className="beeprops">
                    <div className="namebox">
                        <h3>Name</h3>
                        <p>{data.name}</p>
                    </div>
                    <div className="familybox">
                        <h3>Family</h3>
                        <p>{data.family}</p>
                    </div>
                    <div className="sizebox">
                        <h3>Size</h3>
                        <p>{data.size}</p>
                    </div>
                    <div className="temperbox">
                        <h3>Temper</h3>
                        <p>{data.temper}</p>
                    </div>
                </div>
                <br/>
                <div className="funfacts">
                    <h3>Fun Facts</h3>
                    <p>{data.funfacts}</p>
                </div>
            </div>
        </div>
    )
}

export default BeeCard;
