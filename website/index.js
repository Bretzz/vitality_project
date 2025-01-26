// Variable to hold Web3 and contract
let web3;
let contract;
let isVisible = false;

// Fetch ABI and initialize contract after Web3 is ready
async function initialize() {
    try {
        // Check if MetaMask is available
        if (typeof window.ethereum === 'undefined') {
            console.log("MetaMask not installed.");
            return;
        }

        // Initialize Web3
        web3 = new Web3(window.ethereum);

        // Fetch ABI from the server
        const abi = await fetchABI();
        const contractAddress = '0xbcbf83e842D25Ac505Ad97707231d5A0D24cE775';

        // Initialize contract with ABI and address
        contract = new web3.eth.Contract(abi, contractAddress);
        console.log("Contract initialized successfully");
    } catch (error) {
        console.error("Error initializing Web3 or contract:", error);
    }
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

// Call the initialize function
initialize();

// Function to open popup
function openPopUp() {
    document.getElementById("pop-up").style.display = "block";
    isVisible = true;
}

// Function to close popup
function closePopUp() {
    document.getElementById("pop-up").style.display = "none";
    isVisible = false;
}

// Event listener for tracking button
document.getElementById("track-button").addEventListener("click", async function () {
    try {
        // Request user's wallet address from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // If no account is selected, log an error
        if (!accounts || !accounts.length) {
            console.log("No MetaMask account selected.");
            return;
        }

        const userAddress = accounts[0]; // The user's wallet address

        // Call the `balanceOf` function with the user's wallet address
        const ret = await contract.methods.balanceOf(userAddress).call();
        log(`Balance of ${userAddress}: ${ret}`);
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}, false);

// Event listener for plant button (toggle popup)
document.getElementById("plant-button").addEventListener("click", function () {
    isVisible ? closePopUp() : openPopUp();
}, false);

function log(msg) {
	const logDiv = document.getElementById("log2");
	logDiv.textContent += (msg + "\n");
}
