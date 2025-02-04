/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Aurelion, AurelionInterface } from "../../contracts/Aurelion";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_sol_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc_token_addrress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_min_wishes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_flee_time",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "flee_time",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "followers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "grantum_ceremony",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "great_depart",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "min_wishes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sol_adress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc_token_address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dream_powder",
        type: "uint256",
      },
    ],
    name: "wish",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "wishes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106fa3803806106fa83398181016040528101906100329190610164565b83600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816001819055508060028190555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506101cb565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100fb826100d0565b9050919050565b61010b816100f0565b811461011657600080fd5b50565b60008151905061012881610102565b92915050565b6000819050919050565b6101418161012e565b811461014c57600080fd5b50565b60008151905061015e81610138565b92915050565b6000806000806080858703121561017e5761017d6100cb565b5b600061018c87828801610119565b945050602061019d87828801610119565b93505060406101ae8782880161014f565b92505060606101bf8782880161014f565b91505092959194509250565b610520806101da6000396000f3fe6080604052600436106100865760003560e01c806381a5f21c1161005957806381a5f21c14610128578063ac3e3d8d1461013f578063acd6fb6a1461016a578063b6fc12c914610181578063d5af4471146101ac57610086565b8063173688951461008b578063229fe0d4146100b657806337f50f57146100d2578063704ad0de146100fd575b600080fd5b34801561009757600080fd5b506100a06101d7565b6040516100ad919061033e565b60405180910390f35b6100d060048036038101906100cb9190610394565b6101fd565b005b3480156100de57600080fd5b506100e76102bb565b6040516100f491906103d0565b60405180910390f35b34801561010957600080fd5b506101126102c1565b60405161011f91906103d0565b60405180910390f35b34801561013457600080fd5b5061013d6102c7565b005b34801561014b57600080fd5b506101546102c9565b60405161016191906103d0565b60405180910390f35b34801561017657600080fd5b5061017f6102cf565b005b34801561018d57600080fd5b506101966102d1565b6040516101a391906103d0565b60405180910390f35b3480156101b857600080fd5b506101c16102d7565b6040516101ce919061033e565b60405180910390f35b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161025c939291906103eb565b6020604051808303816000875af115801561027b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029f919061045a565b50806000808282546102b191906104b6565b9250508190555050565b60005481565b60015481565b565b60035481565b565b60025481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610328826102fd565b9050919050565b6103388161031d565b82525050565b6000602082019050610353600083018461032f565b92915050565b600080fd5b6000819050919050565b6103718161035e565b811461037c57600080fd5b50565b60008135905061038e81610368565b92915050565b6000602082840312156103aa576103a9610359565b5b60006103b88482850161037f565b91505092915050565b6103ca8161035e565b82525050565b60006020820190506103e560008301846103c1565b92915050565b6000606082019050610400600083018661032f565b61040d602083018561032f565b61041a60408301846103c1565b949350505050565b60008115159050919050565b61043781610422565b811461044257600080fd5b50565b6000815190506104548161042e565b92915050565b6000602082840312156104705761046f610359565b5b600061047e84828501610445565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006104c18261035e565b91506104cc8361035e565b92508282019050808211156104e4576104e3610487565b5b9291505056fea2646970667358221220d0fa4189aa3328e7c31e07c4e8b4b0f00c2df04a8932d6c4867c6b77d76632c364736f6c634300081c0033";

type AurelionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AurelionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Aurelion__factory extends ContractFactory {
  constructor(...args: AurelionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _sol_address: AddressLike,
    _usdc_token_addrress: AddressLike,
    _min_wishes: BigNumberish,
    _flee_time: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _sol_address,
      _usdc_token_addrress,
      _min_wishes,
      _flee_time,
      overrides || {}
    );
  }
  override deploy(
    _sol_address: AddressLike,
    _usdc_token_addrress: AddressLike,
    _min_wishes: BigNumberish,
    _flee_time: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _sol_address,
      _usdc_token_addrress,
      _min_wishes,
      _flee_time,
      overrides || {}
    ) as Promise<
      Aurelion & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Aurelion__factory {
    return super.connect(runner) as Aurelion__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AurelionInterface {
    return new Interface(_abi) as AurelionInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Aurelion {
    return new Contract(address, _abi, runner) as unknown as Aurelion;
  }
}
