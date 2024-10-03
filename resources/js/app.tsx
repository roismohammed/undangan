import './bootstrap'
import '../css/app.css'

import {createRoot} from 'react-dom/client'
import {createInertiaApp} from '@inertiajs/react'
import React from "react";
import Authenticated from "@/layouts/authenticated";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
	title: title => `${title} - ${appName}`,
	resolve: async name => {
		const pages = await import.meta.glob('./pages/**/*.tsx', {eager: true})
		let page: any = await pages[`./pages/${name}.tsx`]
		page.default.layout = await page.default.layout || ((page: React.ReactNode) =>
			<Authenticated children={page} />)
		return page
	},
	setup({el, App, props}) {
		const root = createRoot(el)
		root.render(<App {...props} />)
	},
	progress: {
		delay: 250,
		color: 'var(--color-primary)',
		includeCSS: true,
		showSpinner: true,
	},
})
