import Navbar from '@/components/navbar'
import {PropsWithChildren} from 'react'

export default function GuestLayout({children}: PropsWithChildren<{}>) {
	return (
		<div className={'page-wrapper p-0 m-0'}>
			<Navbar/>
			{children}
		</div>
	)
}
