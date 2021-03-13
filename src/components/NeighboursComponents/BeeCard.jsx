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
                        <h4>Name</h4>
                        <p>{data.name}</p>
                    </div>
                    <div className="familybox">
                        <h4>Family</h4>
                        <p>{data.family}</p>
                    </div>
                    <div className="sizebox">
                        <h4>Size</h4>
                        <p>{data.size}</p>
                    </div>
                    <div className="temperbox">
                        <h4>Temper</h4>
                        <p>{data.temper}</p>
                    </div>
                </div>
                <br/>
                <div className="funfacts">
                    <h4>Fun Facts</h4>
                    <p>{data.funfacts}</p>
                </div>
            </div>
        </div>
    )
}

export default BeeCard;
