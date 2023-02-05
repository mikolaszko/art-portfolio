import type { Component } from "solid-js"
import { Navbar } from "./components"
import { Routes, Route } from "@solidjs/router"
import ArtPage from "./routes/art/ArtPage"
import { Home } from "./routes"

const App: Component = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/art/:slug" component={ArtPage} />
				<Route path="/work" element={<div>Eyooo</div>} />
				<Route path="/" component={Home} />
				<Route
					path="/about"
					element={<div>This site was made with Solid</div>}
				/>
			</Routes>
		</div>
	)
}

export default App
