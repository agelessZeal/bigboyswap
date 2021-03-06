import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.bbc,
    earningToken: serializedTokens.bbc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x739B5bD90555699A9e06d4b44937df89169B2D79',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 221,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.nft,
  //   contractAddress: {
  //     97: '',
  //     56: '0x8d018823d13c56d62ffb795151a9e629c21e047b',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '173727',
  // },
  ]

export default pools
