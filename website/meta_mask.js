// Inserisci qui il tuo indirizzo di destinazione
const CONTRACT_ADDRESS = "0xbcbf83e842D25Ac505Ad97707231d5A0D24cE775";

// Al caricamento della pagina...
window.addEventListener('DOMContentLoaded', () => {
	const donationButton = document.getElementById("donation-button");
	donationButton.addEventListener("click", buyTokenWithMetaMask);
});

async function ensureArbitrumSepolia() {
	try {
	await window.ethereum.request({
		method: 'wallet_switchEthereumChain',
		params: [{ chainId: '0x66eee' }] // Arbitrum Sepolia Chain ID in hex
	});
	} catch (err) {
		if (err.code === 4902) {
			try {
				await window.ethereum.request({
					method: 'wallet_addEthereumChain',
					params: [{
					chainId: '0x66eee',
					chainName: 'Arbitrum Sepolia',
					nativeCurrency: {
						name: 'ETH',
						symbol: 'ETH',
						decimals: 18
					},
					rpcUrls: ['https://sepolia-rollup.arbitrum.io/rpc'],
					blockExplorerUrls: ['https://sepolia.arbiscan.io/']
					}]
				});
			} catch (addError) {
				console.error('Errore durante addEthereumChain', addError);
			}
		} else {
			console.error('Errore generico di switchEthereumChain', err);
		}
	}
}

async function buyTokenWithMetaMask() {
	if (typeof window.ethereum === 'undefined') {
		log("MetaMask non trovato. Installa l'estensione da https://metamask.io/");
		return;
	}
	try {
		await ensureArbitrumSepolia(); // Cambia o aggiungi la rete prima di inviare la transazione
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

		if (!accounts || !accounts.length) {
			log("Nessun account selezionato su MetaMask.");
			return;
		}

		const fromAccount = accounts[0];
		log("Account selezionato: " + fromAccount);

		const amountInput = document.getElementById("donation-amount").value.trim();
		if (!amountInput || isNaN(Number(amountInput))) {
			log("Inserisci un valore numerico valido!");
			return;
		}

		const ethAsNumber = Number(amountInput);

		// Create a new instance of Web3
		const web3 = new Web3(window.ethereum);

		// Fetch ABI from the server
        const abi = await fetchABI();

		// Create a contract instance
		const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
		const weiValue = web3.utils.toWei(ethAsNumber.toString(), 'ether'); // Convert ETH to Wei

		// Send ETH to the buyTokens function in exchange for tokens
		const tx = await contract.methods.buyTokens().send({
			from: fromAccount,
			value: weiValue,
			gas: 200000,
		});

		log("Transazione inviata, hash: " + tx.transactionHash);
		log("Attendi la conferma sulla rete Arbitrum Sepolia...");
	} catch (err) {
		console.error(err);
		log("Errore: " + (err.message || err));
	}
}

function log(msg) {
	const logDiv = document.getElementById("log");
	logDiv.textContent += (msg + "\n");
}

// Function to fetch ABI
async function fetchABI() {
    const response = await fetch('/ABI.json');  // Using relative path, should work with https-server
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const abi = await response.json();
    return abi;
}
