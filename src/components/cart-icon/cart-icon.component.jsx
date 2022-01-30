import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping_cart.svg';
import {Wrapper} from "./cart-icon.styles";
import {connect} from 'react-redux';
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({itemCount, toggleCartHidden}) => (
  <Wrapper>
    <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
    <div className='item-count'>{itemCount}</div>
  </Wrapper>
)


const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);