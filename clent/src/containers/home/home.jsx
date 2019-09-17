import React, { Component } from 'react'
import RouterView from '@/router'
 class Home extends Component {
  render() {
    return (
      <div>
          22
        <RouterView routes={this.props.routes} history={this.props.history}></RouterView>
      </div>
    )
  }
}
export default Home