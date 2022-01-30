import React from 'react';
import {HeaderWrapper, LogoWrapper, OptionsWrapper, OptionLink, LogoDiv} from "./header.style";
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {auth} from "../../firebase/firebase.utils";
import {Logo} from "./logo";
import {useWindowSize} from "../hooks/useWindowSize";

const Header = ({currentUser, hidden}) => {
  const {width} = useWindowSize()

  return (
    <HeaderWrapper>
      <LogoWrapper to='/'>
        <LogoDiv>
          <Logo className='logo'/>
        </LogoDiv>
      </LogoWrapper>
      <OptionsWrapper>
        {
          width <= 600 ? '' :
            (<p> {currentUser ? (`Welcome,${currentUser.displayName}`) : ''}</p>)
        }
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        {
          width <= 600 ? '' :
            (<OptionLink to='/contactUs'>
              CONTACT
            </OptionLink>)
        }
        {
          currentUser ?
            <div onClick={() => auth.signOut()}>SIGN OUT</div> :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon/>
      </OptionsWrapper>
      {hidden ? null : <CartDropdown/>}
    </HeaderWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
