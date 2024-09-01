import { useReducer } from 'react'
import './style.css'

const action = {
  adddigit: 'add-digit',
  clear: 'clear',
  deletedigit: 'delete-digit',
  operation: 'choose-operation',
  evaluate: 'evaluate'
}
function reducer(state, {type, payload}){
  switch(type){
    case action.adddigit:
      return {
        ...state,
        CurrentOperand: `${currentOperand}${payload}`
      }
  }

}

export default function App(){
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer)
  return(
  <div className="calculator-grid">
    <div className="output">
      <div className="previous-operand">{previousOperand} {operation}</div>
      <div className="current-operand">{currentOperand}</div>
    </div>
    <button className="span-two">AC</button>
    <button>DEL</button>
    <button>/</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>X</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <button>.</button>
    <button>0</button>
    <button className="span-two">=</button>
  </div>
  )
}