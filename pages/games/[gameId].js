import React from 'react'
import BetChoice from "../../components/BetChoice";
import { useRouter } from 'next/router';
const SingleGamePage = () => {
  
  const router= useRouter();
  const {gameId} = router.query;
  
  return (
    <>
      <BetChoice id={gameId} />
    </>
  )
}

export default SingleGamePage