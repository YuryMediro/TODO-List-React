import React from 'react'
import '../index.css'
import ReactDOM from 'react-dom/client'
import { BaseLayout } from './layouts/BaseLayout'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BaseLayout />
	</React.StrictMode>
)
