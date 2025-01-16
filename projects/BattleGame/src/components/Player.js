import React, {useState} from 'react';

const Player = ({player}) => {

    return (
        <div className="Player">
                <div className="card p-3">
                    <img src={player.image} alt=""/>
                    <div className="hpBar my-3">
                        <div className="bar d-flex justify-content-center align-items-center" style={{width: player.hp / 3 + "%"}}>{player.hp}%</div>
                    </div>
                </div>
        </div>
    );
};

export default Player;