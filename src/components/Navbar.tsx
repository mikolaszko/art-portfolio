import { Routes, Route, A } from "@solidjs/router"
import type { Component } from "solid-js"
import styles from "./Navbar.module.css"
import { Home } from "../routes"

export const Navbar: Component = () => {
	return (
		<div class={styles.navSection}>
			<A href="/" class="page-title">
				Pablo
			</A>
			<nav>
				<A href="/work">Work</A>
				<A href="/about"> About</A>
				<A href="/bullshit">Not yet</A>
			</nav>
		</div>
	)
}
