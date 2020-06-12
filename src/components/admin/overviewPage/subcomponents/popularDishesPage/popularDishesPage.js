import React, { Component } from 'react'
import { connect } from 'react-redux'
import './popularDishesPage.css'
import { changePage } from '../../../../../actions'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'

class PopularDishesPage extends Component {
  render() {
    return (
      <div className='popularDishesPageContainer'>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, { changePage })(PopularDishesPage)
