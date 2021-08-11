'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

import * as bitcoin from 'bitcoinjs-lib';

const COUNOSH = {
    messagePrefix: '\x19CounosH Signed Message:\n',
    bech32: 'cch',
    bip32: {
        public: 0x1588b21e,
        private: 0x1588ade4,
    },
    pubKeyHash: 0x28,
    scriptHash: 0x64,
    wif: 0x6c,
};
const keyPair = bitcoin.ECPair.makeRandom({network: COUNOSH});
const {address} = bitcoin.payments.p2sh({
    redeem: bitcoin.payments.p2wpkh({pubkey: keyPair.publicKey, network: COUNOSH}),
    network: COUNOSH,
});
console.log(address)
const address2 = bitcoin.payments.p2wpkh({pubkey: keyPair.publicKey, network: COUNOSH});
console.log(address2.address)
