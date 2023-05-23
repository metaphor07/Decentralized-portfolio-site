import "./Wallet.css";
import ABI from "./ABI.json";
import Web3 from "web3";
import { useState } from "react";
import { CONTRACT_URL } from "../../contractUrl";
const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(true);
  const isAndroid = /android/i.test(navigator.userAgent);
  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const contract = new web3.eth.Contract(
        ABI,
        CONTRACT_URL //contract address which we get after deploy the contract on the test net
      );
      const state = {
        web3,
        contract,
      };
      setConnected(false);
      saveState(state);
    } catch (err) {
      alert("*Please Install Metamask!");
    }
  };
  console.log(CONTRACT_URL);
  return (
    <>
      <div className="header">
        {isAndroid && (
          <button className="connectBTN">
            <a href="https://metamask.app.link/dapp/rupakportfoliodapp.netlify.app/">
              Click For Mobile
            </a>
          </button>
        )}
        <button className="connectBTN" onClick={init} disabled={!connected}>
          {connected ? (
            "Connect Metamask"
          ) : (
            <span style={{ color: "lightgreen" }}>Connected</span>
          )}
        </button>
      </div>
    </>
  );
};
export default Wallet;
