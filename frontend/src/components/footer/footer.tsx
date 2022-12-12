import React from 'react'
import './footer.scss'
import footerLogo from '../../assets/interface_elements/footer/footer_logo.png'
import instaIcon from '../../assets/social_icons/instagram_icon.png'
import twitterIcon from '../../assets/social_icons/twitter_icon.png'
import faceIcon from '../../assets/social_icons/facebook_icon.png'
import tiktokIcon from '../../assets/social_icons/titktok_icon.png'

function FooterComponent() {
  return (
    <div className='footer'>
      <div className='footer__section__top'>
        <img className='footer__section__top__logo' src={footerLogo} alt='game-logo' />
        <div className='footer__section__top__group'>
          <ul className='footer__section__top__group__list'>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
        <div className='footer__section__top__group'>
          <ul className='footer__section__top__group__list'>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
        <div className='footer__section__top__group'>
          <ul className='footer__section__top__group__list'>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
      </div>
      <div className='footer__section__bottom'>
        <h4>Connect with us on social media:</h4>
        <div className='footer__section__bottom__group'>
          <img
            className='footer__section__bottom__group__icon'
            src={instaIcon}
            alt='intagram_icon'
          />
          <img
            className='footer__section__bottom__group__icon'
            src={twitterIcon}
            alt='twitter_icon'
          />
          <img
            className='footer__section__bottom__group__icon'
            src={faceIcon}
            alt='facebook_icon'
          />
          <img
            className='footer__section__bottom__group__icon'
            src={tiktokIcon}
            alt='tiktok_icon'
          />
        </div>
        <div className='footer__section__bottom__end'>
          <p className='footer__section__bottom__group__text'>Copyright whatever you want</p>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent
