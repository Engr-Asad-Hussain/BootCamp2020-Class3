import React from 'react'

function Games(props)  {
    return(
        <div>
            <h1>Most played Games of 2020</h1>
            <p>Following are the best games played in 2020</p>
            <ul>
                <li>Dota 2</li>
                <li>Counter Strike Global Offensive</li>
                <li>PUBG</li>
                <li>Empire Earth</li>
                <li>Age of Empire</li>
                <li>Project IGI</li>
            </ul>
            <h1>User's Feedback:</h1>
            <p>I love playing following games since past 10 years</p>
            <ul>
                <li>I played {props.gameName1}</li>
                <li>I played {props.gameName2}</li>
            </ul>
        </div>
    )
}

export default Games;
