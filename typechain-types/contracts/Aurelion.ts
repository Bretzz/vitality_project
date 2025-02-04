/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface AurelionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "flee_time"
      | "followers"
      | "grantum_ceremony"
      | "great_depart"
      | "min_wishes"
      | "sol_adress"
      | "usdc_token_address"
      | "wish"
      | "wishes"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "flee_time", values?: undefined): string;
  encodeFunctionData(functionFragment: "followers", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "grantum_ceremony",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "great_depart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "min_wishes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sol_adress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usdc_token_address",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wish", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "wishes", values?: undefined): string;

  decodeFunctionResult(functionFragment: "flee_time", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "followers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "grantum_ceremony",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "great_depart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "min_wishes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sol_adress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "usdc_token_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wish", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wishes", data: BytesLike): Result;
}

export interface Aurelion extends BaseContract {
  connect(runner?: ContractRunner | null): Aurelion;
  waitForDeployment(): Promise<this>;

  interface: AurelionInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  flee_time: TypedContractMethod<[], [bigint], "view">;

  followers: TypedContractMethod<[], [bigint], "view">;

  grantum_ceremony: TypedContractMethod<[], [void], "nonpayable">;

  great_depart: TypedContractMethod<[], [void], "nonpayable">;

  min_wishes: TypedContractMethod<[], [bigint], "view">;

  sol_adress: TypedContractMethod<[], [string], "view">;

  usdc_token_address: TypedContractMethod<[], [string], "view">;

  wish: TypedContractMethod<[dream_powder: BigNumberish], [void], "payable">;

  wishes: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "flee_time"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "followers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "grantum_ceremony"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "great_depart"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "min_wishes"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sol_adress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "usdc_token_address"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wish"
  ): TypedContractMethod<[dream_powder: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "wishes"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
