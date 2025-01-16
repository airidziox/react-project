import React, {useState} from 'react';

const Monster = ({monsters, select}) => {

    const [selected, setSelected] = useState(null)

    return (
        <div className="d-flex gap-5 flex-wrap justify-content-center">
            {monsters.map((monster,index) =>
            <div className={`monster card p-3 ${selected === index && "selected"}`} key={index} onClick={() => {select(index); setSelected(index)}}>
                <img src={monster.image} alt=""/>
                <div className="hpBar my-3">
                    <div className="bar d-flex justify-content-center align-items-center" style={{width: monster.hp + "%"}}>{monster.hp}%</div>
                </div>
                <div>Damage: <b>{monster.damage}</b></div>
            </div>
            )}
        </div>
    );
};

export default Monster;