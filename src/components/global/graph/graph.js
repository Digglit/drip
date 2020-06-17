import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'

class Graph extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart = () => {

    const margin = {
      top: 20,
      right: 30,
      bottom: 30,
      left: 40,
    }

    const width = 980
    const height = 380
    const data = [[250, 100, 180, 210, 140, 330, 310], [180, 145, 100, 120, 160, 160, 180]]

    const accessToRef = d3.select(this.myRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background-color', 'rgb(235, 235, 235)')
      .style('padding', 10)


    // Y-axis
    const scaleY = d3.scaleLinear()
      .domain([0, d3.max(data[0])])
      .range([height - margin.bottom, margin.top])

    let yAxisTickLabels = []

    const createYAxisTicks = () => {
      let maximumValue = d3.max(data[0])
      for (let i = 0; i <= 3; ++i) {
        yAxisTickLabels.push(`$${Math.floor((maximumValue / 4) * i)}`)
      }
    }

    createYAxisTicks()

    const y_axis = d3.axisLeft(scaleY)
      .ticks(4)
      .tickFormat((value, index) => yAxisTickLabels[index])

    accessToRef.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(y_axis)
      .attr('font-size', 14)

    // X-axis
    const scaleX = d3.scaleLinear()
      .domain([0, 6])
      .range([margin.left, width - margin.right - margin.left - 20])

    const xAxisTickLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const x_axis = d3.axisBottom(scaleX)
      .ticks(7)
      .tickFormat((value, index) => xAxisTickLabels[index])

    accessToRef.append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(x_axis)
      .attr('font-size', 14)

    //Draw datapoint circles
    for (let i = 0; i < 7; ++i) {
      accessToRef.append('circle')
        .attr('transform', `translate(${margin.left}, 0)`)
        .attr('cx', i * (width / 7) + i * 1) //sets x position of data point circle center
        .attr('cy', height - data[0][i]) //sets y position of circle center
        .attr('r', 7) //sets the radius of a circle
        .attr('fill', '#BE2525')
        .style('cursor', 'pointer')
    }

    //Draw Lines Between Circles
    for (let i = 0; i < 6; ++i) {
      accessToRef.append('line')
        .attr('x1', -7 + i * (width / 7) + i * 1)
        .attr('x2', -7 + (i + 1) * (width / 7) + i * 1)
        .attr('y1', height - data[0][i])
        .attr('y2', height - data[0][i + 1])
        .attr('transform', `translate(${margin.left + 7}, 0)`)
        .attr('stroke-width', 1)
        .attr('stroke', '#BE2525')
    }

    //Draw datapoint circles
    for (let i = 0; i < 7; ++i) {
      accessToRef.append('circle')
        .attr('transform', `translate(${margin.left}, 0)`)
        .attr('cx', i * (width / 7) + i * 1) //sets x position of data point circle center
        .attr('cy', height - data[1][i]) //sets y position of circle center
        .attr('r', 7) //sets the radius of a circle
        .attr('fill', '#FF6B6B')
        .style('cursor', 'pointer')
    }

    //Draw Lines Between Circles
    for (let i = 0; i < 6; ++i) {
      accessToRef.append('line')
        .attr('x1', -7 + i * (width / 7) + i * 1)
        .attr('x2', -7 + (i + 1) * (width / 7) + i * 1)
        .attr('y1', height - data[1][i])
        .attr('y2', height - data[1][i + 1])
        .attr('transform', `translate(${margin.left + 7}, 0)`)
        .attr('stroke-width', 1)
        .attr('stroke', '#FF6B6B')
    }
  }

  render() {
    return (
      <div ref={this.myRef}>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Graph)
