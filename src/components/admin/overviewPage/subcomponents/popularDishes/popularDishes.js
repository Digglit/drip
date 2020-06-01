import React, { Component } from 'react'
import './popularDishes.css'
import popularFoodImage from '../../../../../assets/wings.jpg'

export default class PopularDishes extends Component {
    render() {
        return (
            <div className='popularDishesContainer'>
                <div className='foodImageContainer'>
                    <div className='foodImageAccent1'></div>
                    <div className='foodImageAccent2'></div>
                    <img src={popularFoodImage} className='popularFoodImage' />
                </div>
                <div className='textContainer' style={{height: '70%'}}>
                    <h1 className='overviewPageHeader'>Popular Dishes</h1>
                    <p className='overviewPageBody'>People are loving your wings! This week's sales of Wings have increased from 13 orders to 22 orders. People most frequently choose to modify with <strong>Garlic Parmesan</strong>, <strong>Celery and Ranch</strong>, and <strong>6 Piece</strong>.</p>
                    <button className='salesOverviewButton primaryButton'>View More</button>
                </div>
            </div>
        )
    }
}
