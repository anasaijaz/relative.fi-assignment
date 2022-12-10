import trendingAssetIcon from '../../assets/svg/trendingAssetIndicator.svg'
import ethereum from '../../assets/svg/coins/ethereum.svg'
import bitcoin from '../../assets/svg/coins/bitcoin.svg'
import binance from '../../assets/svg/coins/binance.svg'
import shiba from '../../assets/svg/coins/shiba.svg'
import solana from '../../assets/svg/coins/solana.svg'
import './index.css'

const COINS_DATA = [
    {
        name: 'Bitcoin (BTC)',
        image: bitcoin,
        price: '$31,812.80',
        change: 10,
        tvl: '$60,000',
        pairs: [
            solana,
            ethereum,
            binance
        ]
    },
    {
        name: 'Solana (SOL)',
        image: solana,
        price: '$32.83',
        change: -12.32,
        tvl: '$60,000',
        pairs: [
            binance,
            ethereum,
            bitcoin
        ]
    },
    {
        name: 'Ethereum (ETH)',
        image: ethereum,
        price: '$1,466.45',
        change: -11.93,
        tvl: '$60,000',
        pairs: [
            solana,
            bitcoin,
            binance
        ]
    },
    {
        name: 'Binance (BUSD)',
        image: binance,
        price: '$1.00',
        change: 0.26,
        tvl: '$60,000',
        pairs: [
            solana,
            ethereum,
            binance
        ]
    },
    {
        name: 'Shiba Inu (SHIB)',
        image: shiba,
        price: '$0.00001948',
        change: -8.1,
        tvl: '$60,000',
        pairs: [
            solana,
            ethereum,
            binance
        ]
    }
]

function Index() {
    return (
        <div className="App">
            <Headline/>
            <div className='grid-container flex gap-5 flex-wrap justify-center'>
                {
                    COINS_DATA.map(COIN => (
                        <GridItem
                           coin={COIN}
                        />
                    ))
                }
            </div>

        </div>
    )
}



const GridItem = ({coin} : {coin: any}) => (
    <div className='wrap rounded-xl mb-10 w-64'>
        <div className='item  rounded-xl'>
            <div className='absolute -top-12 left-1/2 -translate-x-1/2'>
                <div className='coin wrap rounded-full'>
                    <div className='content rounded-full'>
                        <img src={coin.image}/>
                    </div>
                </div>
            </div>

        <div className='mt-7'>
            <p className='text-center leading-3 text-xs text-[#737BAE]'>{coin.name}</p>
        </div>

        <div className='mt-1'>
            <div className='flex  bg-[#14172B] gap-3 p-1 px-8 rounded-full my-2 justify-center'>
                <p className='text-center text-sm text-white'>
                    {coin.price}
                </p>
                <p className={`text-xs text-[${coin.change > 0 ? '#00FFA3' : '#FF4D4D'}]  text-right`}>
                    {coin.change > 0 ? '+' : '-'} { Math.abs(coin.change) }
                </p>
            </div>
            <p className='text-center leading-3 text-xs text-[#737BAE]'>Price</p>
        </div>

        <div className='mt-1'>
            <div className='bg-[#14172B] gap-3 p-1 px-6 rounded-full my-2'>
                <p className='text-center text-xs text-white'>
                    {coin.tvl}
                </p>
            </div>
            <p className='text-center leading-3 text-xs text-[#737BAE]'>TVL</p>
        </div>

        <div className='mt-1'>
            <div className='bg-[#14172B] justify-center inline-block p-2 rounded-full my-2'>
                <div className='flex gap-3'>
                    {
                        coin.pairs.map((pair: string | undefined) => <img width='22px' src={pair}/>)
                    }
                </div>
            </div>
            <p className='text-center leading-3 text-xs text-[#737BAE]'>Popular pairs</p>
        </div>
        </div>
    </div>
)


const Headline = () => (<div className='flex flex-1 gap-3 pb-20'>
    <img src={trendingAssetIcon}/>
    <p className='text-white'>
        Trending Assets
    </p>
</div>)

export default Index
