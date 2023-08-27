/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AccessController,
  AccessControllerInterface,
} from "../../../contracts/accessControl/AccessController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_password",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ACCESS_LEVEL_1",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACCESS_LEVEL_2",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPassword",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantLevel1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantLevel2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isLevel1",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isLevel2",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isWhiteList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeLevel1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeLevel2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001c4738038062001c478339818101604052810190620000379190620002e3565b620000576200004b6200007b60201b60201c565b6200008360201b60201c565b6200006c6000801b336200014760201b60201c565b80608081815250505062000315565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6200015982826200023860201b60201c565b6200023457600180600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001d96200007b60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080fd5b6000819050919050565b620002bd81620002a8565b8114620002c957600080fd5b50565b600081519050620002dd81620002b2565b92915050565b600060208284031215620002fc57620002fb620002a3565b5b60006200030c84828501620002cc565b91505092915050565b6080516119166200033160003960006107d801526119166000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638d14e127116100b8578063cc8e23941161007c578063cc8e23941461033a578063d547741f14610358578063e43d9a3614610374578063ea56042214610390578063f2fde38b146103ac578063f99031a7146103c857610137565b80638d14e127146102945780638da5cb5b146102b057806391d14854146102ce578063a217fddf146102fe578063a38b5b441461031c57610137565b806336568abe116100ff57806336568abe146101f05780635b432ba91461020c578063635ef2851461023c578063715018a61461026c5780638b2ec6e41461027657610137565b806301ffc9a71461013c5780630652cebb1461016c57806317b53ea414610188578063248a9ca3146101a45780632f2ff15d146101d4575b600080fd5b6101566004803603810190610151919061106d565b6103f8565b60405161016391906110b5565b60405180910390f35b6101866004803603810190610181919061112e565b610472565b005b6101a2600480360381019061019d919061112e565b6104d9565b005b6101be60048036038101906101b99190611191565b610512565b6040516101cb91906111cd565b60405180910390f35b6101ee60048036038101906101e991906111e8565b610532565b005b61020a600480360381019061020591906111e8565b610553565b005b6102266004803603810190610221919061112e565b6105d6565b60405161023391906110b5565b60405180910390f35b6102566004803603810190610251919061112e565b61060d565b60405161026391906110b5565b60405180910390f35b610274610644565b005b61027e610658565b60405161028b91906111cd565b60405180910390f35b6102ae60048036038101906102a99190611254565b610680565b005b6102b86106e3565b6040516102c591906112a3565b60405180910390f35b6102e860048036038101906102e391906111e8565b61070c565b6040516102f591906110b5565b60405180910390f35b610306610777565b60405161031391906111cd565b60405180910390f35b61032461077e565b60405161033191906111cd565b60405180910390f35b6103426107a6565b60405161034f91906112d7565b60405180910390f35b610372600480360381019061036d91906111e8565b6107fd565b005b61038e6004803603810190610389919061112e565b61081e565b005b6103aa60048036038101906103a5919061112e565b610857565b005b6103c660048036038101906103c1919061112e565b6108be565b005b6103e260048036038101906103dd919061112e565b610942565b6040516103ef91906110b5565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046b575061046a82610998565b5b9050919050565b61047a610a02565b6104a860405160200161048c90611349565b60405160208183030381529060405280519060200120826107fd565b6104d66040516020016104ba906113aa565b60405160208183030381529060405280519060200120826107fd565b50565b6104e1610a02565b61050f6040516020016104f390611349565b60405160208183030381529060405280519060200120826107fd565b50565b600060016000838152602001908152602001600020600101549050919050565b61053b82610512565b61054481610a80565b61054e8383610a94565b505050565b61055b610b74565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bf90611442565b60405180910390fd5b6105d28282610b7c565b5050565b60006106066040516020016105ea906113aa565b604051602081830303815290604052805190602001208361070c565b9050919050565b600061063d60405160200161062190611349565b604051602081830303815290604052805190602001208361070c565b9050919050565b61064c610a02565b6106566000610c5e565b565b60405160200161066790611349565b6040516020818303038152906040528051906020012081565b610688610a02565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b60405160200161078d906113aa565b6040516020818303038152906040528051906020012081565b60006040516020016107b7906113aa565b604051602081830303815290604052805190602001206107d681610a80565b7f000000000000000000000000000000000000000000000000000000000000000091505090565b61080682610512565b61080f81610a80565b6108198383610b7c565b505050565b610826610a02565b61085460405160200161083890611349565b6040516020818303038152906040528051906020012082610532565b50565b61085f610a02565b61088d60405160200161087190611349565b6040516020818303038152906040528051906020012082610532565b6108bb60405160200161089f906113aa565b6040516020818303038152906040528051906020012082610532565b50565b6108c6610a02565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092d906114d4565b60405180910390fd5b61093f81610c5e565b50565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610a0a610b74565b73ffffffffffffffffffffffffffffffffffffffff16610a286106e3565b73ffffffffffffffffffffffffffffffffffffffff1614610a7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7590611540565b60405180910390fd5b565b610a9181610a8c610b74565b610d22565b50565b610a9e828261070c565b610b7057600180600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610b15610b74565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b610b86828261070c565b15610c5a5760006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610bff610b74565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610d2c828261070c565b610da357610d3981610da7565b610d478360001c6020610dd4565b604051602001610d58929190611667565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9a91906116eb565b60405180910390fd5b5050565b6060610dcd8273ffffffffffffffffffffffffffffffffffffffff16601460ff16610dd4565b9050919050565b606060006002836002610de7919061173c565b610df19190611796565b67ffffffffffffffff811115610e0a57610e096117ec565b5b6040519080825280601f01601f191660200182016040528015610e3c5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610e7457610e7361181b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610ed857610ed761181b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610f18919061173c565b610f229190611796565b90505b6001811115610fc2577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610f6457610f6361181b565b5b1a60f81b828281518110610f7b57610f7a61181b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610fbb9061184a565b9050610f25565b5060008414611006576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffd906118c0565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61104a81611015565b811461105557600080fd5b50565b60008135905061106781611041565b92915050565b60006020828403121561108357611082611010565b5b600061109184828501611058565b91505092915050565b60008115159050919050565b6110af8161109a565b82525050565b60006020820190506110ca60008301846110a6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110fb826110d0565b9050919050565b61110b816110f0565b811461111657600080fd5b50565b60008135905061112881611102565b92915050565b60006020828403121561114457611143611010565b5b600061115284828501611119565b91505092915050565b6000819050919050565b61116e8161115b565b811461117957600080fd5b50565b60008135905061118b81611165565b92915050565b6000602082840312156111a7576111a6611010565b5b60006111b58482850161117c565b91505092915050565b6111c78161115b565b82525050565b60006020820190506111e260008301846111be565b92915050565b600080604083850312156111ff576111fe611010565b5b600061120d8582860161117c565b925050602061121e85828601611119565b9150509250929050565b6112318161109a565b811461123c57600080fd5b50565b60008135905061124e81611228565b92915050565b6000806040838503121561126b5761126a611010565b5b600061127985828601611119565b925050602061128a8582860161123f565b9150509250929050565b61129d816110f0565b82525050565b60006020820190506112b86000830184611294565b92915050565b6000819050919050565b6112d1816112be565b82525050565b60006020820190506112ec60008301846112c8565b92915050565b600081905092915050565b7f4143434553535f4c4556454c5f31000000000000000000000000000000000000600082015250565b6000611333600e836112f2565b915061133e826112fd565b600e82019050919050565b600061135482611326565b9150819050919050565b7f4143434553535f4c4556454c5f32000000000000000000000000000000000000600082015250565b6000611394600e836112f2565b915061139f8261135e565b600e82019050919050565b60006113b582611387565b9150819050919050565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b600061142c602f836113bf565b9150611437826113d0565b604082019050919050565b6000602082019050818103600083015261145b8161141f565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006114be6026836113bf565b91506114c982611462565b604082019050919050565b600060208201905081810360008301526114ed816114b1565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061152a6020836113bf565b9150611535826114f4565b602082019050919050565b600060208201905081810360008301526115598161151d565b9050919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b60006115966017836112f2565b91506115a182611560565b601782019050919050565b600081519050919050565b60005b838110156115d55780820151818401526020810190506115ba565b838111156115e4576000848401525b50505050565b60006115f5826115ac565b6115ff81856112f2565b935061160f8185602086016115b7565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006116516011836112f2565b915061165c8261161b565b601182019050919050565b600061167282611589565b915061167e82856115ea565b915061168982611644565b915061169582846115ea565b91508190509392505050565b6000601f19601f8301169050919050565b60006116bd826115ac565b6116c781856113bf565b93506116d78185602086016115b7565b6116e0816116a1565b840191505092915050565b6000602082019050818103600083015261170581846116b2565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611747826112be565b9150611752836112be565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561178b5761178a61170d565b5b828202905092915050565b60006117a1826112be565b91506117ac836112be565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156117e1576117e061170d565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611855826112be565b915060008214156118695761186861170d565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b60006118aa6020836113bf565b91506118b582611874565b602082019050919050565b600060208201905081810360008301526118d98161189d565b905091905056fea2646970667358221220bc5df0dcb7401de6b3c7bf480438f5f424aa2b367c05d95cd88f056b3a8552ae64736f6c63430008090033";

type AccessControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccessControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccessController__factory extends ContractFactory {
  constructor(...args: AccessControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _password: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AccessController> {
    return super.deploy(
      _password,
      overrides || {}
    ) as Promise<AccessController>;
  }
  override getDeployTransaction(
    _password: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_password, overrides || {});
  }
  override attach(address: string): AccessController {
    return super.attach(address) as AccessController;
  }
  override connect(signer: Signer): AccessController__factory {
    return super.connect(signer) as AccessController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControllerInterface {
    return new utils.Interface(_abi) as AccessControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessController {
    return new Contract(address, _abi, signerOrProvider) as AccessController;
  }
}