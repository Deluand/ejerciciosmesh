import { BlockfrostProvider, MeshWallet, Transaction } from "@meshsdk/core";

const proveedor = new BlockfrostProvider('preprod9lVI9zzYnSZn9AwCaJAqSAEuC3jAaEYA'); // el proveedor de nuestra wallet, en este caso blockfrost

const wallet1 = new MeshWallet({
    networkId:0,
    fetcher: proveedor,
    submitter: proveedor,
    key: {
        type: "root",
        bech32: "xprv15z2jej5l93rgr03ncj70qx3sl6tan73tsj4nv4e6jaha88kx44qyz6eedug4yd0xd2tq2fndyd9kcr250qujf5thqwahgr8vja0mrpwtqxld6yt5sf4etyf5vgancsj0j4fhrxn8n3zl2ghf5e8x3y6la5qdvj3k"
    
    }
})
 
const wAddr1 = "addr_test1qpjutxa9g5xwrn2r8ddtegskesjqsxf374jeykgq5a7n83zd87pykvmzr9z4eg5s9uwnfppfhe9lulujeq36dzg6gm7quacdgg";
// const address = wallet.getChangeAddress();

// async function obtenerBalance() {
//     const balance = await wallet1.getBalance();
//     console.log(balance);
// }

const tx = new Transaction({initiator:wallet1}).sendLovelace("addr_test1qrttv77v7rjmye7yqn4t8t47w3phxcln8lsvq2328vlf2rgvrnv2cvtr7tv8rm0ycqu068he59ee3yd332fak6rdyslqey9d9t", "1500000");

async function ejecutarTransaccion() {
    const txCruda = await tx.build(); 
    const txFirmada = await wallet1.signTx(txCruda);
    const txHash = await wallet1.submitTx(txFirmada);
}

ejecutarTransaccion();

// obtenerBalance();

