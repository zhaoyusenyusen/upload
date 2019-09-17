import React, { Component } from 'react'
import RouterView from '@/router'
 class Index extends Component {
  render() {
    return (
      <div>
    
         <RouterView routes={this.props.routes} history={this.props.history}></RouterView>
      </div>
    )
  }
}
export default Index