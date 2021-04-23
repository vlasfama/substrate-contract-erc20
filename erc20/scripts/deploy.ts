import { network, patract } from "redspot";

const { getContractFactory } = patract;
const { getSigners, api } = network;

async function run() {
    console.log("deploy erc20");

    await api.isReady;

    console.log("deploy erc201");

    const signers = await getSigners();
    const signer = signers[0];

    const contractFactory = await getContractFactory("erc20", signer);

    const contract = await contractFactory.deploy("new", "1000000", {
        gasLimit: "200000000000",
        value: "10000000000000000",
    });

    console.log(
        "Deploy successfully. The contract address: ",
        contract.address.toString()
    );

    api.disconnect();
}

run().catch((err) => {
    console.log(err);
});
