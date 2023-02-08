import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { ethers } from "ethers";
import { BsWalletFill } from "react-icons/bs";
import Web3Modal from "web3modal";
import {CoinbaseWalletSdk} from "@coinbase/wallet-sdk";
const Navbar = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const providerOptions={
    coinbasewallet:{
      package:CoinbaseWalletSdk,
      options:{
        appName:"Web3 Modal Neeraj",
        infuraId:{5:"https://goerli.infura.io/v3/53159e36e3a1471d98d38fff0c58a181"}
      }
    }
  }

  const onConnectingWallet = async() => {
    try {
      let web3modal= new Web3Modal({opts:{
        cacheProvider:false,
        providerOptions
      }})
      const web3ModalInstance= await web3modal.connect();
      const web3ModalProvider= new ethers.providers.Web3Provider(web3ModalInstance);
      console.log("Web3 modal",web3ModalProvider);
    } catch (error) {
      console.log(error)
    }
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const loadProvider = async () => {
    //   setIsLoading(true);
    //   if (provider) {
    //     window.ethereum.on("chainChanged", () => {
    //       window.location.reload();
    //     });

    //     window.ethereum.on("accountsChanged", () => {
    //       window.location.reload();
    //     });
    //     await provider.send("eth_requestAccounts", []);
    //     const signer = provider.getSigner();
    //     const address = await signer.getAddress();
    //     setAccount(address);
    //     setProvider(provider);
    //     setIsLoading(false);
    //   } else {
    //     console.error("Metamask is not installed");
    //     setIsLoading(false);
    //   }
    // };
    // provider && loadProvider();
  };
  // useEffect(() => {
  //   onConnectingWallet();
  // }, []);
  return (
    <>
      <div className="container">
        <ul
          className="nav justify-content-between p-3"
          style={{ width: "100%" }}
        >
          <li className="nav-item">
            <div className="d-flex justify-content-between">
              <a className="nav-link" href="#">
                <Button
                  style={{
                    backgroundColor: "black",
                    border: "0.5px solid white",
                  }}
                >
                  PEER-BET
                </Button>
              </a>
              <a className="nav-link" href="#">
                <Button
                  style={{
                    backgroundColor: "black",
                    border: "0.5px solid white",
                  }}
                >
                  Login
                </Button>
              </a>
              <a className="nav-link" href="#">
                <Button
                  style={{
                    backgroundColor: "black",
                    border: "0.5px solid white",
                  }}
                >
                  Create-Room (Custom Bet)
                </Button>
              </a>
            </div>
          </li>
          <li className="nav-item mt-2">
            <p>
              <Button
                style={{
                  backgroundColor: "black",
                  border: "0.5px solid white",
                }}
                onClick={onConnectingWallet}
                spinner={isLoading}
              >
                {" "}
                <BsWalletFill className="mx-2" />
                <code className={styles.code}>
                  {account
                    ? account.toString().slice(0, 15) +
                      "..." +
                      account.toString().slice(25)
                    : "Connect your Wallet"}
                </code>
              </Button>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
