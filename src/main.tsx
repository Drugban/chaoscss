import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './pages/App'
import { ThemeProvider } from './Theme'
import { SearchProvider } from 'components/ui/Search/Search'
// import { SearchProvider } from 'components/ui/Modal/SearchModal/SearchModal'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<SearchProvider>
					<App />
				</SearchProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
