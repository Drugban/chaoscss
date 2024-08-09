import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import '/scss/chaos.scss'
import 'css/main.scss'

const MainLayout = lazy(() => import('../components/layout/MainLayout'))
const NotFoundPage = lazy(() => import('./NotFound/NotFoundPage'))
const Home = lazy(() => import('components/elements/Home'))
const Docs = lazy(() => import('pages/IsBeingDeveloped/IsBeginDeveloped'))
const Blog = lazy(() => import('pages/IsBeingDeveloped/IsBeginDeveloped'))
const Components = lazy(() => import('pages/IsBeingDeveloped/IsBeginDeveloped'))

export const App: FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index path="/" element={<Home />} />
					<Route path="/docs" element={<Docs />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/components" element={<Components />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	)
}
