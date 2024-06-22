import React, { Component } from 'react'

export default class LowerNav extends Component {
    constructor(){
        super();
        this.state={
            cat1:'Daily',
            cat2:'Movies',
            cat3:'Sports',
            cat4:'Politics',
            cat5:'International'
        }
    }

  render() {
    return (
      <>
        <nav className="nav nav-pills flex-column flex-sm-row bg-dark my-1">
  <a className="flex-sm-fill text-sm-center nav-link text-warning" href="/">{this.state.cat1}</a>
  <a className="flex-sm-fill text-sm-center nav-link text-warning" href="/">{this.state.cat2}</a>
  <a className="flex-sm-fill text-sm-center nav-link text-warning" href="/">{this.state.cat3}</a>
  <a className="flex-sm-fill text-sm-center nav-link text-warning" href="/">{this.state.cat4}</a>
  <a className="flex-sm-fill text-sm-center nav-link text-warning" href="/">{this.state.cat5}</a>
</nav>
      </>
    )
  }
}
