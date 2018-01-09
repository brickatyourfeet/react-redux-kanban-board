import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { moveToDone } from '../actions'

function DoingList({items, moveToDone}){
    console.log(items)
    return (
        <div className="container">
        <ul className="list-group">
        { items.map((el,i) =>(
            <li key={i}  className="list-group-item">{el.task}
            <button className="text-right" onClick={() => moveToDone(el)}>
                Move to done.
            </button>
            </li>
        ))}
        </ul>
        </div>
    )
}

function mapStateToProps(state){
    return { items: state.doing } //items needs to match the arg passed in up top
}

const mapDispatchToProps = dispatch => bindActionCreators({moveToDone}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(DoingList)