import Image from 'next/image'
import Listings from './nav/auctions/Listings'

export default function Home() {
  console.log('server component')
  return (
    <div>
      <Listings />
    </div>
  )
}
