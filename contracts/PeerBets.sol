/SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0 ;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

// For Goerli Testnet : 
//  VRF Coordinator : 0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D
// GasLane : 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15
// Subscription ID : 8497
// CallbackGasLimit : 500000 

contract Bet is VRFConsumerBaseV2 {
    //Betting  Status 
    uint constant STATUS_WIN = 1;
    uint constant STATUS_LOSE = 2;
    uint constant STATUS_TIE = 3;
    uint constant STATUS_PENDING = 4;

    //game status 
    uint constant STATUS_NOT_STARTED = 1;
    uint constant STATUS_STARTED = 2;
    uint constant STATUS_COMPLETE = 3;

    //general status 
    uint constant STATUS_ERROR = 4;

    struct PeerBet{
      uint guess;
      address payable addr;
      uint status;
    }

    struct Game {
      uint256 betAmount;
      uint outcome;
      uint status;
      PeerBet creator;
      PeerBet joiner;
    }
    

    Game game; 
    uint256 public s_lastTimeStamp ; 
    VRFCoordinatorV2Interface public immutable i_vrfCoordinator ;
    bytes32 public i_gasLane ; 
    uint64  public i_subscriptionId ; 
    uint16 public constant REQUEST_CONFIRMATIONS = 3;
    uint32 private immutable i_callbackGasLimit;
    uint32 private constant NUM_WORDS = 1;
     
     //fallback function
    fallback() external payable {

    }

    function createRoom(uint _guess) public payable {
      game = Game(msg.value, 0, STATUS_STARTED, PeerBet(_guess, payable(msg.sender), STATUS_PENDING), PeerBet(0, payable(address(0)), STATUS_NOT_STARTED));
      game.creator = PeerBet(_guess, payable(msg.sender), STATUS_PENDING);
    }
    
    //Betting by the joiner of the room 
    function takeBet(uint _guess) public payable {      
      require(msg.value == game.betAmount);
      game.joiner = PeerBet(_guess, payable(msg.sender), STATUS_PENDING);
      generateBetOutcome();
    }

    function checkUpkeep(
        bytes memory /* checkData */
    )
        public
        view
       
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )

    function payout() public payable {

      checkPermissions(msg.sender);
     
     if (game.creator.status == STATUS_TIE && game.joiner.status == STATUS_TIE) {
       game.creator.addr.transfer(game.betAmount);
       game.joiner.addr.transfer(game.betAmount);
     } else {
        if (game.creator.status == STATUS_WIN) {
          game.creator.addr.transfer(game.betAmount*2);
        } else if (game.joiner.status == STATUS_WIN) {
          game.joiner.addr.transfer(game.betAmount*2);
        } else {
          game.creator.addr.transfer(game.betAmount);
          game.joiner.addr.transfer(game.betAmount);
        }
     }
    }

    function checkPermissions(address sender) view private {
     //only the creator or joiner can call this function
     require(sender == game.creator.addr || sender == game.joiner.addr);  
    }

     function getBetAmount() public view returns (uint) {
         checkPermissions(msg.sender);
     
         return game.betAmount;
    }

     function generateBetOutcome() private {
        
        game.outcome =uint (blockhash(block.number-1))%10 + 1;
        game.status = STATUS_COMPLETE;

        if (game.creator.guess == game.joiner.guess) {
          game.creator.status = STATUS_TIE;
          game.joiner.status = STATUS_TIE;
        } else if (game.creator.guess > game.outcome && game.joiner.guess > game.outcome) {
          game.creator.status = STATUS_TIE;
          game.joiner.status = STATUS_TIE;
        } else {
           if ((game.outcome - game.creator.guess) < (game.outcome - game.joiner.guess)) {
             game.creator.status = STATUS_WIN;
             game.joiner.status = STATUS_LOSE;
           } else if ((game.outcome - game.joiner.guess) < (game.outcome - game.creator.guess)) {
             game.creator.status = STATUS_LOSE;
             game.joiner.status = STATUS_WIN;
           } else {
             game.creator.status = STATUS_ERROR;
             game.joiner.status = STATUS_ERROR;
             game.status = STATUS_ERROR;
           }
        }
    }


    }
