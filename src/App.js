
import './App.css';
import React from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
import { useWeb3Modal } from '@web3modal/ethers5/react'


function App() {

  // const chains = [mainnet, polygon, arbitrum]
  const projectId = '53a58e69b07b6ceb3896491eb5bcdfd9'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})

const { open } = useWeb3Modal()
const handleButtonClick = () => {
  open()
}
// open()



  return (
    <>

{/* <WagmiConfig config={wagmiConfig}>
   <h1>hh</h1>
    </WagmiConfig> */}

    {/* <w3m-button /> */}
    <button onClick={handleButtonClick} style={{background: "#0000FF", borderRadius: "5px", color: "#fff", border: "none", padding: "1rem", margin: "1rem"}}>
      Connect Wallet
    </button>
  </>
  );
}

export default App;

