
import { gamesList } from '../utils/gameList';
import GamesCard from './GamesCard';
export default function GamesList(){
    return(
    <div className="bg-vision p-12" style={{height:"100vh"}}>
    <div className="flex flex-col items-center text-center">
        <h1 className="font-header text-3xl pb-8">Games We Are Playing</h1>
        <p className="font-fontJost ">Check out the list of trending on-going and upcoming games on which users in our platform are betting. Create your own PeerBets pool or join your friends!</p>
    </div>

    <div className='flex flex-col items-center lg:grid lg:grid-cols-3'>
        {
            gamesList.map((el,i)=>{
                return(
                    <GamesCard imgSrc={el.imgSrc} gameName={el.gameName} key={el.gameName} id={el.id} gameType={el.gameType} gameStatus={el.gameStatus}/>
                )
            })
        }
    </div>
    </div>
    )
}