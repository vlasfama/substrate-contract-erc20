# substrate-contract-erc20

This repository contains substrate blockchain with contract pallet added. Its also contains Erc20 smart contract which is complied to wasm and deployed to substrate using redspot.

## Deploying the Erc20 into Substrate chain.

- Git clone project folder using below.

```bash
git clone https://github.com/nagarajmanjunath/substrate-contract-erc20.git

cd substrate-contract-erc20/substrate-node-template
```

- Build the substrate in release mode.

```bash
cargo build --release
```

- Start the substrate node in development mode.

```bash
./target/release/node-template --dev
```

## Complie Erc20 using RedSpot.

```bash
cd erc20
```

- Install npm

```bash
yarn or npm install
```

- Compile the Erc 20 contract.

```bash
npx redspot compile ./contracts
```

- Deploy Contract to Substrate

```bash
npx redspot run . ./scripts/deploy.ts --no-compile
```
