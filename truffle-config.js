require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note rifle coconut gesture person bottom slab'; 
let testAccounts = [
"0xad535cc84bb90919764cfded5505904c86ffc8fd52dc2a5ac593f73938d63d17",
"0x596c5b9ebc99baecf8d1fb11984a0f1fdf9846a7ccf1360d907762cd2170d667",
"0xe91bd2670c501aa5a0564eed850560eb071dd2f62105c00602d555427c6950eb",
"0xf0ac603c8012cd32bfdb25b27c28999c39f7749553866dd8aa2d28757677c568",
"0x0f75ec7fc7356043fe8845ce5607b0896eea6307e8171968b52be794f0ddc903",
"0xf8c89c552f88c51da7243a96e8dc683f87cbb67853d19ec0c7271e594bec96ac",
"0x1fa4fc6be7c91b5b9da94894b04b763a646f72114b1513bfc506b9de9a103af3",
"0xa49a86fd2de449529887d190db4ad3df31ea537fbcc590b1bfa23ec0aae07966",
"0xe382aa3d2f85da05478d023b1c07a81ee7f40cfd6b08cf37a42003f9db169777",
"0x7f169e10ca4fd7a8583c956b2c2cc316258a18e430a021e14a1dfe3e9b44a1a4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
