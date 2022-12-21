import React, {useState, useEffect} from 'react'
import './App.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {

    const url = 'https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json'
 
    const [players, setPlayers] = useState([])
    const [team, setTeam] = useState('')
    let res = ''
    // const [batsman, setBatsman] = useState([])
    // const [bowler, setBowler] = useState([])
    // const [allRounder, setAllRounder] = useState([])
    // const [wicketKeeper, setWicketKeeper] = useState([])


    useEffect(()=>{
       axios.get(url)
            .then((response)=>{
                const result =response.data
                setPlayers(result)
            })

    }, [])

    const TeamTable=()=>{
        return (
            <div>
              <h2> Final Team </h2>
               <table>
                   <thead>
                      <tr>
                           <th>Players</th>
                           <th>credit</th>  
                      </tr>     
                    </thead>
                   <tbody>
                           <tr>
                                <td>Zahir</td>
                                <td>8.5</td>
                            </tr> 
                            <tr>
                                <td>Glen Maxwell</td>
                                <td>9.5</td>
                            </tr>
                            <tr>
                                <td>Colin Munro</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Jason Roy</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Mitchell Marsh</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Seb Gotch</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Josh Inglis</td>
                                <td>8.5</td>
                            </tr>
                            <tr>
                                <td>Andre Fletcher</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Kurtis Patterson</td>
                                <td>8.5</td>
                            </tr>
                            <tr>
                                <td>Jhye Richard</td>
                                <td>8.5</td>
                            </tr>
                            <tr>
                                <td>Liam Hather</td>
                                <td>8</td>
                            </tr>
                   </tbody>
                
               </table>   
            </div>
        )
    }

    const team11=()=>{
              res = <TeamTable />
              setTeam(res)
    }
    

    return (
        <div>
            <h1>Pick Players</h1>
            <div class="container px-4 text-center">
              <div class="row gx-5">
                <div class="col">
                <div class="p-3 border bg-light">0/11 players</div>
                </div>
                <div class="col">
                  <div class="p-3 border bg-light">0 Melbourne Stars</div>
                </div>
                <div class="col">
                  <div class="p-3 border bg-light">0 Perth Scorchers</div>
                </div>
                <div class="col">
                  <div class="p-3 border bg-light">100 Cr Left</div>
                </div>
              </div>
          </div>
            <h2>Pick 3-7 Batsman</h2>
            <table border='1'>
                     <thead>
                        <tr>
                            <th>players</th>
                            <th>credit</th>
                        </tr>
                    </thead>
                     <tbody>
                            {
                                players.map((ele)=>{
                                    if(ele.role==='Batsman'){
                                        return <tr>
                                        <td key={ele.name}>{ele.name}</td>
                                        <td key={ele.player_id} >{ele.event_player_credit}</td>
                                    </tr>
                                    }
                                })
                            }
                    </tbody>
                </table> 
                <h2>Pick 1-5 Wicket Keepers</h2>
                <table border='1'>
                        <thead>
                            <tr>
                                <th>players</th>
                                <th>credit</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    players.map((ele)=>{
                                        if(ele.role==="Wicket-Keeper"){
                                            return <tr>
                                            <td key={ele.name}>{ele.name}</td>
                                            <td key={ele.player_id}>{ele.event_player_credit}</td>
                                        </tr>
                                        }
                                    })
                                }
                        </tbody>
                    </table>
                    <h2>Pick 0-4 All Rounder</h2>
                <table border='1'>
                        <thead>
                            <tr>
                                <th>players</th>
                                <th>credit</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    players.map((ele)=>{
                                        if(ele.role==='All-Rounder'){
                                            return <tr>
                                            <td key={ele.name}>{ele.name}</td>
                                            <td key={ele.player_id} >{ele.event_player_credit}</td>
                                        </tr>
                                        }
                                    })
                                }
                        </tbody>
                    </table>
                    
                <h2>Pick 3-7 Bowler</h2>
                <table border='1'>
                        <thead>
                            <tr>
                                <th>players</th>
                                <th>credit</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    players.map((ele)=>{
                                        if(ele.role==='Bowler'){
                                            return <tr>
                                            <td key={ele.name}>{ele.name}</td>
                                            <td key={ele.player_id}>{ele.event_player_credit}</td>
                                        </tr>
                                        }
                                    })
                                }
                        </tbody>
                    </table>
                    <div class="d-grid gap-2 col-6 mx-auto">
                      <button class="btn btn-primary" type="submit" onClick={team11}>Proceed</button>
                    </div>
                    {team}
            </div> 
    
    )            
}


export default App;
