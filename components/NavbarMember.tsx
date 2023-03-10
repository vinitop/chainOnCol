import { WalletMultiButton } from '@fantom/wallet-adapter-react-ui'

require('@fantom/wallet-adapter-react-ui/styles.css')
export const NavbarMember = () => {
	return (
		<>
			<div className='flex justify-between px-10 h-20 items-center border-b border-[#8BD1D2] '>
				<h1 className='uppercase super text-3xl font-Lexend font-extrabold tracking-tight '>
					Collabs-On-Chain
				</h1>
				<WalletMultiButton />
			</div>
		</>
	)
}