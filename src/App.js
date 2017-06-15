import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import todoActions from './actions'
import Header from './components/Header'
import MainSection from './components/MainSection'

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(todoActions, dispatch) })

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  }
    
　　　　constructor(props) {
    super(props)
  }
  
  render () {
    const { todos, actions } = this.props

    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }

export default App;
