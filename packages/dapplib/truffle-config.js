require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name random rural history just private slot gentle'; 
let testAccounts = [
"0x5fc7eeca612dd261ad969788099fcfa4a8a8158194d569eb502838d9a44753ca",
"0x780d6986e62f10854e0b00846f27c96957e457c6a478f1fbaa8c6889b222449e",
"0xade86828d7daa9c352e154edced181619660b38105083bfc0972da8405ac40da",
"0x341910e64213d1b7998b2c9d76e26d33c84882e7bc1124fba5eee4a354f9df92",
"0xc3d3a309d6f09c05ce330f38005bae67471f54763c4e6b02fc92ef0420de46bd",
"0x835f8b6117905735d0e86e6a791957c21024feaeb41bda0e3735b988e72bcbcb",
"0x674f6e9e341fa5ed67cad5983e9cac5e37b3a57a24bc03b6e632bfcab4ec32a5",
"0xa6f99a07465e063ab3d052ca98117a1c0f303ca88a6a85f0656b67c47c151ca8",
"0xa1c6bd5dc4b42b0c7fc3e116fd0213d2084d346205293c874e009b8d1a0c514c",
"0x8f6ae8d93bde508f561ff9329caaaf00471faa8358dac7bed6a7899af4671f82"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


