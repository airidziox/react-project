import './App.css';
import {useEffect, useState, useRef} from "react";
import Monster from "./components/Monster";
import Player from "./components/Player";
import Shop from "./components/Shop";

function BattleGame() {

    const [money, setMoney] = useState(100)

    const shopItems = [
        {
            name: "HP Potion",
            image: "https://ih1.redbubble.net/image.1875991015.4227/st,small,507x507-pad,600x600,f8f8f8.jpg",
            cost: 50
        },
        {
            name: "Hit All Monsters",
            image: "https://dejpknyizje2n.cloudfront.net/media/carstickers/versions/pixel-lightning-bolt-sticker-u45bb-878d-x450.png",
            cost: 75
        },
        {
            name: "2x Damage",
            image: "https://as1.ftcdn.net/v2/jpg/02/21/80/50/1000_F_221805033_L5SQMulgMJ9JvWzvaYGXiy1kN1KLvlF7.jpg",
            cost: 100
        },
        {
            name: "New Monster",
            image: "https://www.seekpng.com/png/detail/148-1488091_monster-energy-monster-energy-pixel-art.png",
            cost: 150
        },
        {
            name: "Resurection",
            image: "https://i.pinimg.com/736x/81/43/92/814392657fd1665c07b51cc4a231e956.jpg",
            cost: 200
        },
        {
            name: "Auto Attack",
            image: "https://www.pngarts.com/files/2/Cursor-PNG-Image-Background.png",
            cost: 100
        }
    ]

    const [dmgMultiply, setDmgMultiply] = useState(1)
    const [revive, setRevive] = useState(false)

    const [player, setPlayer] = useState({
        image: "https://ih1.redbubble.net/image.3680630368.8464/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        hp: 300,
        damage: 10
    });

    const [monsters, setMonsters] = useState([
        {
            image: "https://ih1.redbubble.net/image.3459330984.2584/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
            damage: 15,
            hp: 100,
            selected: false
        },
        {
            image: "https://ih1.redbubble.net/image.3459254877.0513/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
            damage: 5,
            hp: 100,
            selected: false
        },
        {
            image: "https://ih1.redbubble.net/image.3701721055.3103/st,small,507x507-pad,600x600,f8f8f8.jpg",
            damage: 17,
            hp: 100,
            selected: false
        }
    ])

    function selectMonster(index) {
        for (let i = 0; i < monsters.length; i++) {
            monsters[i].selected = false;
            monsters[index].selected = true;
        }
    }

    function attack() {
        player.damage = Math.floor(Math.random() * 25) * dmgMultiply;
        for (let i = 0; i < monsters.length; i++) {
            if (monsters[i].selected) {
                monsters[i].hp -= player.damage
                player.hp -= monsters[i].damage
                setMonsters([...monsters])
                setPlayer(player)
            }
        }
    }

    useEffect(() => {
        for (let i = 0; i < monsters.length; i++) {
            if (monsters[i].hp <= 0) {
                monsters[i].hp = 100
                monsters[i].damage = Math.floor(Math.random() * 20)
                setMoney(money + Math.floor(Math.random() * 50))
            }
        }
        if (player.hp <= 0 && revive) {
            player.hp = 150
            setRevive(false)
        }
    },[monsters])

    //// SHOP ITEMS

    function buyItem(index) {
        if (money < shopItems[index].cost) return

        if (index === 0) {
            setMoney(money - shopItems[index].cost)
            player.hp = 300
            setPlayer(player)
        }

        if (index === 1) {
            setMoney(money - shopItems[index].cost)

            for (let i = 0; i < monsters.length; i++) {
                monsters[i].hp -= Math.floor(Math.random() * 70)
                setMonsters([...monsters])
            }
        }

        if (index === 2) {
            setMoney(money - shopItems[index].cost)
            setDmgMultiply(2)
        }

        if (index === 3) {
            setMoney(money - shopItems[index].cost)

            const newMonster = {
                image: "https://ih1.redbubble.net/image.3680664653.9293/st,small,845x845-pad,1000x1000,f8f8f8.jpg",
                damage: 25,
                hp: 100,
                selected: false
            }
            let monstersCopy = [...monsters,newMonster]
            setMonsters(monstersCopy)
        }

        if (index === 4) {
            setMoney(money - shopItems[index].cost)
            setRevive(true)
        }

        if (index === 5) {
            setMoney(money - shopItems[index].cost)
            setInterval(attack, 500)
        }

    }


    return (
        <div className="App d-flex flex-column justify-content-center align-items-center gap-5">

            <div>
                <Monster monsters={monsters} select={selectMonster} />
            </div>

            <button className="btn btn-danger fw-bold w-25" onClick={attack}>ATTACK</button>

            <div className="d-flex flex-column justify-content-center align-items-center gap-5">
                <Player player={player}/>
                <Shop money={money} shopItems={shopItems} buyItem={buyItem}/>
            </div>

        </div>
    );
}

export default BattleGame;
