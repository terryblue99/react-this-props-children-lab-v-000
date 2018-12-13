import React from 'react'

export default class Invitation extends React.Component {
	render() {
	    return (
	      <div className="invitation">
	        <h1>You&#x27;ve been invited!</h1>
	        <div className="class-body">
	        	{this.props.children}
	        </div>
	      </div>
	    )
  	}
}

