import React, { Component } from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

class Signup extends Component {
	render () {
		return (
			<DocumentTitle title="注册">
				<form className="sign-form">
					<div className="form-group">
						<label for="username">用户名</label>
						<input type="text" className="form-control" ref="username" />
					</div>
					<div className="form-group">
						<label for="email">邮箱</label>
						<input type="email" className="form-control" ref="email" />
					</div>
					<div className="form-group">
						<label for="password">密码</label>
						<input type="password" className="form-control" ref="password" />
					</div>
					<button className="btn btn-primary">注册</button>
				</form>
			</DocumentTitle>
		)
	}
}

export default Signup