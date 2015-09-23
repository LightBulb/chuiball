import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
	render () {
		return (
			<header className="header">
				<div className="container">
					<h1 className="sitename">
						<Link to="/">足球各种吹</Link>
					</h1>
					<nav className="header-right-nav">
						<ul>
							<li>
								<Link className="btn btn-signin" to="/signin">登录</Link>
							</li>
							<li>
								<Link className="btn btn-signup" to="/signup">注册</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header