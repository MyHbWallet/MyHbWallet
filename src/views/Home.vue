<template>
  <div class="home">
    <div class="header">
      <img src="./../assets/huobi.svg" />
      <span>MyHbWallet</span>
    </div>
    <div class="des">
      <el-row>
        <el-col :offset="2" :span="12">
          <h1 class="d1">Huobi Chain's</h1>
          <h1 class="d1">Original Wallet</h1>
          <p class="content">
            MyHbWallet is a free,
            client-side interface helping you interact with the Huobi blockchain. Our easy-to-use, open-source platform allows you to generate wallets, interact with smart contracts, and so much more.
          </p>
        </el-col>
        <el-col :span="10" style="text-align:center">
          <img src="./../assets/huobi.svg" />
        </el-col>
      </el-row>
    </div>
    <!-- <el-divider></el-divider> -->
    <el-row style="padding-top:100px;padding-bottom:100px;background-color: whitesmoke;">
      <el-col :offset="2" :span="8">
        <el-card class="create" :body-style="{ backgroundColor:'#ff0000',height:'250px'}">
          <h3>Create A New Wallet</h3>
          <p>
           Generate your own unique Huobi chain wallet. Receive a public address (0x...) and choose a method for access and recovery.
          </p>
          <div>
            <el-button>Get Started <i class="el-icon-right"></i></el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :offset="4" :span="8">
         <el-card class="create" :body-style="{ backgroundColor:'#ff7000',height:'250px'}">
          <h3>Access My Wallet</h3>
          <p>
            Connect to the blockchain using the wallet of your choice.
          </p>
          <div>
            <el-button>Access Now <i class="el-icon-right"></i></el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- <el-divider></el-divider> -->
    <!-- <iframe src="https://ghbtns.com/github-btn.html?user=MyHbWallet&repo=MyHbWallet&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe> -->
    <div class="contract">
      <h1> RISC-V VM Contracts </h1>
      <p>Users can issue their own tokens or develop decentralized applications through contracts on the current testnet.
        Contracts can be written in C language, and would be compiled into RISC-V code and dynamically deployed on the chain.
        Huobi Chain will support more contract programming languages in the future to further improve the developer experience.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style>
.contract{
  width: 100%;
  height: 300px;
  text-align: left;
}
.contract h1{
  color: black;
  font-size:32px;
  font-weight: 700;
  line-height: 47px;
  padding: 50px;
  display: block;
}
.contract p{
      font-size: 16px;
      line-height: 1.5;
      text-align: left;
      margin-left: 50px;
      margin-right: 50px;
      border-radius: 20px;
}
.create h3{
      font-size: 25px;
      color: white;
}
.create p{
      font-size: 16px;
      line-height: 1.5;
      color: white;
}
.create button{
  position:absolute;
  bottom: 120px;
}
.header {
  width: 100%;
  height: 50px;
  background-color: whitesmoke;
  position: relative;
}
.header img {
  height: 30px;
  padding: 10px;
}
.header span {
  font-size: 24px;
  font-weight: 700;
  color: black;
  position: absolute;
  top: 20%;
}
.des{
  margin-top:100px;
  margin-bottom: 100px;
}
.d1 {
  color: red;
  font-size: 45px;
  font-weight: 700;
  line-height: 47px;
  margin-bottom: 8px;
  letter-spacing: -1px;
  margin: 0;
  padding: 0;
}
.content{
  line-height: 21px;
    margin-bottom: 0!important;
    font-weight: 400;
    text-align: left;
    color: #FF7000;
    /* width: 400px; */
}
.des img{
  height: 200px;
  padding: -10px;
}
.home{
  font-family: Montserrat, sans-serif;
}
</style>
