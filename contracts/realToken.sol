//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.0;


// This is the main building block for smart contracts.
contract realToken {
	// Some string type variables to identify the token.
	string public name = "My Hardhat Token";
	string public symbol = "MHT";

	// The fixed amount of tokens, stored in an unsigned integer type variable.
	uint256 public totalSupply = 1000000;

	// The exchange rate: number of tokens per ETH
    uint256 public rate = 1000; // 1 ETH = 1000 tokens

	// An address type variable is used to store ethereum accounts.
	address public owner;

	// A mapping is a key/value map. Here we store each account's balance.
	mapping(address => uint256) balances;

	// The Transfer event helps off-chain applications understand
	// what happens within your contract.
	event Transfer(address indexed _from, address indexed _to, uint256 _value);
	event TokensPurchased(address indexed _buyer, uint256 _ethAmount, uint256 _tokenAmount);

	/**
	 * Contract initialization.
	 */
	constructor() {
		// The totalSupply is assigned to the transaction sender, which is the
		// account that is deploying the contract.
		balances[msg.sender] = totalSupply;
		owner = msg.sender;
	}

	/**
	 * Payable function to allow users to buy tokens by sending ETH.
	 * The function will transfer tokens to the buyer in exchange for ETH.
	 * The number of tokens received depends on the exchange rate (tokens per ETH).
	 */
	function buyTokens() external payable {
		// Calculate the number of tokens to send
		uint256 tokenAmount = msg.value * rate;

		// Ensure the contract has enough tokens to transfer
		require(balances[owner] >= tokenAmount, "Not enough tokens in contract");

		// Transfer the tokens to the buyer
		balances[owner] -= tokenAmount;
		balances[msg.sender] += tokenAmount;

		// Emit the transfer event
		emit Transfer(owner, msg.sender, tokenAmount);

		// Emit the purchase event
		emit TokensPurchased(msg.sender, msg.value, tokenAmount);
	}

	/**
	 * A function to transfer tokens.
	 *
	 * The `external` modifier makes a function *only* callable from *outside*
	 * the contract.
	 */
	function transfer(address to, uint256 amount) external {
		// Check if the transaction sender has enough tokens.
		// If `require`'s first argument evaluates to `false`, the
		// transaction will revert.
		require(balances[msg.sender] >= amount, "Not enough tokens");

		// Transfer the amount.
		balances[msg.sender] -= amount;
		balances[to] += amount;

		// Notify off-chain applications of the transfer.
		emit Transfer(msg.sender, to, amount);
	}

	/**
	 * Function to withdraw ETH from the contract.
	 * Only the owner of the contract can withdraw.
	 */
	function withdraw(uint256 amount) external {
		require(msg.sender == owner, "Only the owner can withdraw");
		payable(owner).transfer(amount);
	}

	/**
	 * Read only function to get the contract's balance of ETH.
	 *
	 * The `view` modifier indicates that it doesn't modify the contract's
	 * state, which allows us to call it without executing a transaction.
	 */
	function contractBalance() external view returns (uint256) {
		return address(this).balance;
	}

	/**
	 * Read only function to retrieve the token balance of a given account.
	 */
	function balanceOf(address account) external view returns (uint256) {
		return balances[account];
	}
}