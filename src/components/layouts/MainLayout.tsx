import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

const Main = () => {
	return (
		<>
			<main>
				<Suspense fallback='loading'>
					<Outlet />
				</Suspense>
			</main>
		</>
	)
}
const MainLayout = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

export default MainLayout
