import { Protocol } from "../types/adapters";
import { manualCliff, manualStep } from "../adapters/manual";
import { periodToSeconds } from "../utils/time";
import { balance, latest } from "../adapters/balance";

const totalQty = 1000000000;
const start = 1647475200;
const token = "0x4d224452801aced8b2f0aebe155379bb5d594381";
const chain = "ethereum";
const steps = (percentage: number) =>
  manualStep(
    start + periodToSeconds.year,
    periodToSeconds.month,
    36,
    (totalQty * percentage) / 36,
  );
const treasuryContracts = [
  "0x93F91d1B3ACDf78894e99930eEE6C07326992434",
  "0x5b53Ef8F2Bc6315eBedD8c536498C76773404Fd8",
  "0xd3E14f2C63110B2068e912b1b34028025CD9c5A3",
  "0x20FaCCBecf9CbEd05A56aF16fa8EE729dCb53DCa",
  "0xB436b866246F6917ACF4E32999F8710759584ce3",
  "0xf9f4fD27b9711d4558092954379D6d6625ccbcd5",
  "0xDf1925127bd2c58cC76672679cA64da1Ea058942",
  "0x2b27d10c7764675466f0fcBC575fc241fac0d2af",
  "0xbBBe1442975FB8611449e1049A234aaCC07bA685",
  "0x0939444549E4CCc0c045bfDF5E7d7d29C66923BA",
  "0xF4dBa63012f0ef4908B6fe000962620Cf9E85835",
  "0x878c760925E369722DAF83B7EA25FA95e9D5E1C0",
  "0x080C19E8343E3cc906a0008D99B502b61490F44d",
  "0x04A7d5a4F4CB63b78DBB8C4Fa7957dEDBce137b2",
  "0xCa800A780ac0a630cb88C94EE128826e52a6e186",
  "0x65E1D755B08A99057d5DCC05c8C974F65A06c6F5",
  "0xb1703A3D3abf580fDd6943F3d82cAC89e60F1Bea",
  "0x573FABB99F0d8e13e64952F845C2F7aD26b6Ed36",
  "0xd4E518E242499AE7D228f7E8c8414d30694aF7D4",
  "0x8cf0c3C45a78Ac181486F26C5C4EBBa2dBeDF9e7",
  "0x64e252a4034c3524A052B2Cc4Febaf23f03b93e3",
  "0x42e0346C698Ae7e9f1E3d37610BF7445be35C92a",
  "0x29068ac68645FfeB0303BD2112fa85dEacC5B559",
  "0xED491A66de351c1A86fF209E2A3D205854e36712",
  "0xeBa8643fA21C1b010C830cF0d722091f8Fd7cf61",
  "0x2e25C263820bb061377F8838774644F50BC2fee8",
  "0x8290332ae839F998E2d125e53b9C06B77F8Da2C6",
  "0x49501183D1038825c22a18Af76736e6c62eC29de",
  "0x9CDaB911d364FfD165bdA26C70f7E2A7E0a8dD90",
  "0x2e044fED0291F1bBF306C64A356a121Ca1786dbd",
  "0x570E85226480Ed2e03EE3e7d1971504F3aC6f0eb",
  "0x4cE5CED89eAFf7962E8723F7cf54Aa01ca7e9147",
  "0x34C49388D00a5839405bC433579DBd8571290E31",
  "0xd449f90a29FB25eA37177dd9e65f67a2F5621D58",
  "0x82e57DdD56124841190E82117f3B7F49D3FF9758",
  "0x7E185Fb9Ad7EF79ba359956Dd7D73a1595f65524",
  "0xCF4a941D81B394D52f2aEC8C6765CCB48E736D50",
  "0xb269F4f01174b04918dF9619fD9613E6c41d1800",
  "0x995348aEdDF842B88772E7D35858fc2D88A9Ba23",
  "0x4f4C4F48a5c5B179b8FABAf200F24142CdF68bdB",
  "0xC68709b676bA479E68e356ca4eC087a83198ec07",
  "0x8f225Dc9a2A4C361FEd5D91EBaECa1173FdaA9D4",
  "0xf9e916b9Ef59D14869a402eBF93Dd933c4200555",
  "0xc21b5cFD7BB9076Bb90BEE2D0405f117658F5EFe",
  "0xeb95385C0ABc39967130abe0B4d307722b9741e6",
  "0x899FaDc2bff5cd2A36162d4f30BD01B61e292017",
  "0x7C35EA45dDc392F1d15e7b7D96510b49B118c915",
  "0x767196B10Be078A36831c3b19A2DCCCefc378ADF",
  "0x9F4bb0c99EDFDCdac75E2D0BA9a3a3fc51D30403",
  "0xdc466CF79809eD5FD049C56C7E378bFFD195A0Ce",
  "0x1f0e667A6e893D88D8177A9d6307E34F8Aa495a1",
  "0xE0B3a77693191a69A4b157bFCf721cCf7308249a",
  "0xfA17A73b83539b8A127444516FCbc6071018761b",
  "0x329E2443009046Ee787FBFebE98985db8566892E",
  "0x92bf0980292a28c3E892F9954a261DDC99E0bd1E",
  "0x95A4a2a314681Fbfa5DB40E7d70F3f78556fa935",
  "0x3a47ABF085cD75156E38EdAAABD12Bbdda84109f",
  "0xa5867fbAf0460b84E5d0b4230BBA81F8e18Ab45f",
  "0xA89bBC5231f0C793181180CfB148A29aC87Ae6D7",
  "0xB14D61d21aeB0D60A877ecD31d507f6914f62075",
  "0x58b99E549b46FE8703dB8d9Cd7873484e2aA0761",
  "0xA8D203924B908be655b2CEEBA78DF4929880e9Dc",
  "0xD1DAE15d953B0d644B5A078ad9619AceAD3d3328",
  "0x340ec0453c99342B96E0e4FcC32cA82093A262cA",
  "0xE6e7C90566A80acC801E643E20C17d2D98C2B0E7",
  "0x9b645E4C288989eDfD644caAE5610E0CdE508392",
  "0x33f662b9665C1A59b937BeB803c30f6274c956F6",
  "0x2278879C60fAF01cb5Af93ea2d6d7396812Dc068",
  "0xA3952e06bE81392c2f474A4414026ec2bd22BAFc",
  "0xD456077b0968B176330CFb6dcf830352cAa98B3f",
  "0xe3e5e311467D056CA183EA60a301a00Da862C9A6",
  "0x9c0499542Bd582DbCBD0e0B121312d4B887ceBBe",
  "0xCC8738f4Aea5149fDA2dCF01dB217212A61EeEBE",
  "0xEf1A56Cd0A028A2c91662D79aB98C03876C756E1",
  "0x9fe83EDC069Ad74823fAB0cEb2Ce3Be7734781f9",
  "0x132c117D4a190d79728F520F5EAde2D28E57e885",
  "0x76Fd93fDc41cD798F020f6b4567e6A6Aeb0e37F6",
  "0x9b154d11D7AFB370A48e52a014EC1E2Eb452C96F",
  "0x1ad2C332259a89a0082925F3a80fD9934d604284",
  "0x3a04c799D5c90d9d50b97Dadc66A24316BFCca21",
  "0x5f36E3B9b74bAcA7447eDc814d2DB961C355Ccaf",
  "0x06C76E90dBA43b8860689A54367C976FFAFF4aee",
  "0x27E3B2756595995FB9116050154F477aab7Ec4Bb",
  "0xC1452254a7294eFE71Ae8F97b185A7BeaA99a5Ff",
  "0xbC559Fc66ee576A8d134E3C1D6e5D2627dd92c07",
  "0x51c5ADDA787DD02Ba2deC58b66bbfE5158Fe81B6",
  "0xA91D3C320e26e46b38fAF6F5FD01E75749cB5c68",
  "0x01d540399ca56038E166C5EAE93eA133D8008A16",
  "0xd117960266c3Dd4FCb737E3FFb43eb21a1eCC1F3",
  "0xccCb6ce4fb2269C8f7934b8fD8e93E9eE3237a77",
  "0x28Ac4FcC5C9a44b518Ac9185BaA1294c7B60d124",
  "0xdF3A0486dE04b167fc1a99b9f48150c326CBcAFE",
  "0xa9F2496d896E00084B5cb6A13A4Cf640E049c514",
  "0x4618bA0e185Cc56AC8249e125a41c1B57A4df40e",
  "0x9Ee13bc51F13Ee053A54026Abb9AB4Fa6127b9EC",
  "0xB163DfB6601fe634c12DfCe6800aacAFc808F159",
  "0xe3f382C2F0291c66EAb2E73E1dF3b917eAa1cEA6",
  "0x20aF944Dbe8679Ed0DB83BacA6e8CFF175462dc9",
  "0x780CBBe425E3A91f7305B427C8D440f34e745198",
  "0xc139325d782e96A028217739557FF7aA898dE44d",
];

const apecoin: Protocol = {
  // "ecosystem fund": () =>
  //   balance(treasuryContracts, token, chain, "apecoin", 1644883200),
  "yuga labs": steps(0.15),
  "Jane Goodall Legacy Foundation": steps(0.01),
  "launch contributors": [
    manualCliff(start, totalQty * 0.01),
    manualCliff(start + periodToSeconds.month * 6, totalQty * 0.025),
    manualCliff(start + periodToSeconds.month * 12, totalQty * 0.025),
    manualCliff(start + periodToSeconds.month * 18, totalQty * 0.025),
    steps(0.03),
    manualStep(
      start + periodToSeconds.year,
      periodToSeconds.month,
      33,
      (totalQty * 0.025) / 33,
    ),
  ],
  founders: steps(0.08),
  // documented: {
  // replaces: ["ecosystem fund"],
  "ecosystem fund": [
    manualCliff(start, totalQty * 0.2675),
    manualStep(start, periodToSeconds.month, 48, (totalQty * 0.3525) / 48),
  ],
  // },
  meta: {
    sources: ["https://apecoin.com/about"],
    token: `${chain}:${token}`,
    protocolIds: ["2665"],
    total: totalQty,
    // incompleteSections: [
    //   {
    //     key: "ecosystem fund",
    //     allocation: totalQty * 0.62,
    //     lastRecord: () => latest("apecoin", 1644883200),
    //   },
    // ],
  },
  categories: {
    noncirculating: ["ecosystem fund"],
    insiders: [
      "yuga labs",
      "Jane Goodall Legacy Foundation",
      "launch contributors",
      "founders",
    ],
  },
};
export default apecoin;
