// Inserisci qui il tuo indirizzo di destinazione
const DONATION_ADDRESS = "0x8AC98aa00270Dcb0bE29354351b44c43E08e8114";

// Al caricamento della pagina...
window.addEventListener('DOMContentLoaded', () => {
	const donationButton = document.getElementById("donation-button");
	donationButton.addEventListener("click", donateWithMetaMask);
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


async function donateWithMetaMask() {
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
	const weiValue = (ethAsNumber * 1e18).toString(16);  // Converti in wei

	const txParams = {
		from: fromAccount,
		to: DONATION_ADDRESS,
		value: "0x" + weiValue, 
	};

	const txHash = await window.ethereum.request({
		method: 'eth_sendTransaction',
		params: [txParams],
	});
	
	log("Transazione inviata, hash: " + txHash);
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
