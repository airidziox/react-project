import React from 'react';

const Shop = ({money, shopItems, buyItem}) => {
    return (
        <div className="d-flex flex-column border border-1 rounded-2 p-2" style={{backgroundColor: "#ffe900"}}>
            <h4 className="text-center">Money: ${money}</h4>

            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                {shopItems.map((item, index) =>
                    <div className="card p-3 justify-content-center align-items-center" key={index}>
                        <img className="shopImg" src={item.image} alt=""/>
                        <div><b>{item.name}</b></div>
                        <div>Cost: ${item.cost}</div>
                        <button className="btn btn-dark mt-2 w-100" onClick={() => buyItem(index)}>BUY</button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Shop;