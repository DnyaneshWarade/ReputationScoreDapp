const ethers = require("ethers");
async function fetchNFTs() {
    const provider = new ethers.providers.JsonRpcProvider(
        "https://billowing-compatible-sanctuary.discover.quiknode.pro/f12258ee88e8c18504595b110246a37a932f1cb8/"
    );
    provider.connection.headers = { "x-qn-api-version": 1 };
    const heads = await provider.send("qn_fetchNFTs", {
        wallet: "0x67DD32cFb3DdEb19De106e1B8CA308044d391f24",
        omitFields: ["provenance", "traits"],
        page: 1,
        perPage: 10,
    });
    console.log(heads);
}

async function fetchNFTCollectionDetails() {
    const provider = new ethers.providers.JsonRpcProvider(
        "https://billowing-compatible-sanctuary.discover.quiknode.pro/f12258ee88e8c18504595b110246a37a932f1cb8/"
    );
    provider.connection.headers = { "x-qn-api-version": 1 };
    const collection = await provider.send("qn_fetchNFTCollectionDetails", {
        contracts: ["0x77372a4cc66063575b05b44481F059BE356964A4"],
    });
    console.log(collection);
}

async function fetchNFTsByCollection() {
    const provider = new ethers.providers.JsonRpcProvider(
        "https://billowing-compatible-sanctuary.discover.quiknode.pro/f12258ee88e8c18504595b110246a37a932f1cb8/"
    );
    provider.connection.headers = { "x-qn-api-version": 1 };
    const byCollection = await provider.send("qn_fetchNFTsByCollection", {
        collection: "0x77372a4cc66063575b05b44481F059BE356964A4",
        omitFields: ["imageUrl", "traits"],
        page: 1,
        perPage: 10,
    });
    console.log(byCollection);
}

async function getTransfersByNFT() {
    const provider = new ethers.providers.JsonRpcProvider(
        "https://billowing-compatible-sanctuary.discover.quiknode.pro/f12258ee88e8c18504595b110246a37a932f1cb8/"
    );
    provider.connection.headers = { "x-qn-api-version": 1 };
    const nft = await provider.send("qn_getTransfersByNFT", {
        collection: "0x77372a4cc66063575b05b44481F059BE356964A4",
        collectionTokenId: "4998",
        page: 1,
        perPage: 10,
    });
    console.log(nft);
}

async function verifyNFTsOwner() {
    const provider = new ethers.providers.JsonRpcProvider(
        "https://billowing-compatible-sanctuary.discover.quiknode.pro/f12258ee88e8c18504595b110246a37a932f1cb8/"
    );
    provider.connection.headers = { "x-qn-api-version": 1 };
    const NFTowner = await provider.send("qn_verifyNFTsOwner", [
        "0x67DD32cFb3DdEb19De106e1B8CA308044d391f24",
        ["0x9674739124d69d555712a30e0a44de648f494219:2440"],
    ]);
    console.log(NFTowner);
}

fetchNFTs();
fetchNFTCollectionDetails();
fetchNFTsByCollection();
getTransfersByNFT();
verifyNFTsOwner();