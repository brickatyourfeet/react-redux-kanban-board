import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { startDoing } from '../actions'

function TodoList({items, startDoing}){
    console.log(items)
    return (
        <div className="container">
        <ul className="list-group">
        { items.map((el,i) =>(
            <li key={i}  className="list-group-item">{el.task}
            <button className="text-right" onClick={() => startDoing(el)}>
                Start doing.
            </button>
            </li>
        ))}
      </ul>
        </div>
    )
}

function mapStateToProps(state){
    return { items: state.todo } //items needs to match the arg passed in up top
}

const mapDispatchToProps = dispatch => bindActionCreators({startDoing}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)