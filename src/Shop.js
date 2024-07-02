import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from "./state/index";
import { bindActionCreators } from 'redux';

const Shop = () => {
  const balance = useSelector(state=>state.amount);
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreators,dispatch);
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div className='my-3'>
      <h4>Deposit/Withdraw</h4>

      {/* without using bindActionCreators */}

      {/* <button className="btn btn-primary mx-2 my-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}} >-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}

      {/* using bindActionCreators */}

      {/* <button className="btn btn-primary mx-2 my-3" onClick={()=>{actions.withdrawMoney(100)}} >-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</button> */}

      <button className="btn btn-primary mx-2 my-3" onClick={()=>{withdrawMoney(100)}} >-</button>
      Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop;
