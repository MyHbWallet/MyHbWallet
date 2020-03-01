const { Muta, AssetService } = require('muta-sdk')
const Wallet = Muta.hdWallet;

const muta = new Muta({
  /**
   * 通常是在genesis.toml里包含有默认的chain_id
   * 在这个例子中我们假设0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036是你要访问的链的ChainId
   */
  chainId:
    '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',

  /**
   *  接下来我们给出 GraphQL API uri. endpoint 是用来和链进行 RPC 交互的 URI,
   *  http://127.0.0.1:8000/graphql 是默认的 endpoint 是用来和链进行 RPC 交互的 URI,
   *  你可以在 config.toml 文件下的 [graphql] 部分找到 endpoint 的配置
   */
  endpoint: 'http://192.168.31.94:8000/graphql',

  /**
   * timeout_gap 表示一笔交易发出后，最多允许几个块的延迟.如果随着链的进行, block 超出了
   * timeout_gap 的设置但是交易仍然没有上链,那么这笔交易就被认为无效了.
   * 比起以太坊的 txpool 的不确定性,Huobi-chain提供了tx及时性的检测和保障.
   * timeoutGap 并没有默认值,但是 js-sdk 预设为20,你可以所以更改
   */
  timeoutGap: 20,
});
const client = muta.client();
const account = Muta.accountFromPrivateKey(
  '0x1000000000000000000000000000000000000000000000000000000000000000',
);

async function main() {
  const rawTransaction = await client.composeTransaction({
    serviceName: 'asset',
    method: 'create_asset',
    payload: {
      supply: 1000000,
      name: 'LOVE_COIN',
      symbol: 'LUV',
    },
  });
  const signedTransaction = account.signTransaction(rawTransaction);
  const txHash = await client.sendTransaction(signedTransaction);
  const receipt = await client.getReceipt(txHash);
  console.log(receipt)
  return receipt;
  
}

console.log(main())