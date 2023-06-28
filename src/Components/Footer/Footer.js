import React, { Component } from 'react'

import logoFooter from '../../img/footer/logo__footer.svg'
import Logo from '../Logo'
import FooterNav from './FooterNav'
import FooterSoc from './FooterSoc'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer__cont cont'>
                    <Logo logo={logoFooter} />
                    <hr className='footer__line'/>
                    <FooterNav navigation={this.props.navigation} />
                    <FooterSoc soc={this.props.soc} />
                    <hr className='footer__line'/>
                    <p className='footer__copy'>Copyright © 2023 DiaCalculator, All rights reserved. Present by RomC0la.</p>
                </div>
            </footer>
        )
    }
}
