import React from 'react';
import CustomButton from "../custom-button/custom-button.compnent";
import './cart-dropdown.styles'
import {CartItems, EmptyMessage, Wrapper} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <Wrapper>
      <CartItems>
        {
          cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>) :
            <EmptyMessage>Your Cart is empty</EmptyMessage>
        }
      </CartItems>
      <CustomButton inverted onClick={
        () => {
          history.push(`/checkout`)
          dispatch(toggleCartHidden())
        }
      }>GO TO CHECKOUT</CustomButton>
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
