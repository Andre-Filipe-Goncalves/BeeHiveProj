import React, { useState } from 'react'
import data from './data'
import BeeCard from './components/NeighboursComponents/BeeCard'
import Checkbox from '@material-ui/core/Checkbox'
import {FormControlLabel} from '@material-ui/core'


const Neighbours = () => {
    const [flowerList, setFlowerList] = useState([]);

    const toggleCheckbox = event => {
        console.log(`${event.target.value} is ${event.target.checked}`);
        console.log(`${flowerList}`);
        
        setFlowerList((prev) => {
            if(!event.target.checked){
                return prev.filter(flower => flower !== event.target.value)
            } else {
                return [event.target.value, ...prev]
            }
        })
    }

    return (
        <div className="neighbours">
            <div className="checkbox">
                <FormControlLabel control={<Checkbox size="small" value="Siberian Wallflower" onChange={(event) => toggleCheckbox(event)}/>} label="Siberian Wallflower"/> 
                <FormControlLabel control={<Checkbox size="small" value="Chinese Forget-Me-Not" onChange={(event) => toggleCheckbox(event)} />} label="Chinese Forget-Me-Not"/>
                <FormControlLabel control={<Checkbox size="small" value="Baby Blue Eyes" onChange={(event) => toggleCheckbox(event)} />} label="Baby Blue Eyes" />
                <FormControlLabel control={<Checkbox size="small" value="Sweet Alyssum" onChange={(event) => toggleCheckbox(event)} />} label="Sweet Alyssum" />
                <FormControlLabel control={<Checkbox size="small" value="Fleabane Daisy" onChange={(event) => toggleCheckbox(event)} />} label="Fleabane Daisy"/>
                <FormControlLabel control={<Checkbox size="small" value="Blue Flax" onChange={(event) => toggleCheckbox(event)} />} label="Blue Flax"/>
                <FormControlLabel control={<Checkbox size="small" value="Plains Coreopsis" onChange={(event) => toggleCheckbox(event)} />} label="Plains Coreopsis"/>
                <FormControlLabel control={<Checkbox size="small" value="Lance-Leaved Coreopsis" onChange={(event) => toggleCheckbox(event)} />} label="Lance-Leaved Coreopsis"/>
                <FormControlLabel control={<Checkbox size="small" value="Globe Gilia" onChange={(event) => toggleCheckbox(event)} />} label="Globe Gilia"/>
                <FormControlLabel control={<Checkbox size="small" value="Corn Poppy" onChange={(event) => toggleCheckbox(event)} />} label="Corn Poppy"/>
                <FormControlLabel control={<Checkbox size="small" value="Lavender Hyssop" onChange={(event) => toggleCheckbox(event)} />} label="Lavender Hyssop"/>
                <FormControlLabel control={<Checkbox size="small" value="Indian Blanket" onChange={(event) => toggleCheckbox(event)} />} label="Indian Blanket"/>
                <FormControlLabel control={<Checkbox size="small" value="Purple Coneflower" onChange={(event) => toggleCheckbox(event)} />} label="Purple Coneflower"/>
                <FormControlLabel control={<Checkbox size="small" value="California Poppy" onChange={(event) => toggleCheckbox(event)} />} label="California Poppy"/>
                <FormControlLabel control={<Checkbox size="small" value="Bergamot" onChange={(event) => toggleCheckbox(event)} />} label="Bergamot"/>
                <FormControlLabel control={<Checkbox size="small" value="China Aster" onChange={(event) => toggleCheckbox(event)} />} label="China Aster"/>
                <FormControlLabel control={<Checkbox size="small" value="New England Aster" onChange={(event) => toggleCheckbox(event)} />} label="New England Aster"/>
            </div>
            <div className="beelist">

                {data
                .filter(bee => bee.flowers.some(flower => flowerList.includes(flower)))
                .map(bee => (<BeeCard data={bee} key={bee.id}/>))
                }
            </div>
            
        </div>
    )
}

export default Neighbours;
