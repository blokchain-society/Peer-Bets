
import { gamesList } from '../utils/gameList';
import GamesCard from './GamesCard';
export default function GamesList(){
    return(
    <div className="bg-vision p-12" style={{height:"100vh"}}>
    <div className="flex flex-col items-center text-center">
        <h1 className="font-header text-3xl pb-8">Games You Can Bet</h1>
        <p className="font-fontJost ">Through ownership and rewarding merit, games are now governed by the players. Innovative in-game economics reward players for their performance, creating a new economy in the Metaverse.</p>
    </div>

    <div className='flex flex-col items-center lg:grid lg:grid-cols-3'>
        {
            gamesList.map((el,i)=>{
                return(
                    <GamesCard imgSrc={el.imgSrc} gameName={el.gameName} key={el.gameName} id={el.id} gameType={el.gameType} />
                )
            })
        }
    </div>
    </div>
    )
}