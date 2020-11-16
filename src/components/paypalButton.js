import React from 'react';
import pic from '../images/qr paypal/QR Code.png'
import { useTranslation } from 'react-i18next';



const PaypalButton = () => {
    const { t, i18n } = useTranslation('global');

    return (
        < div className='paypal' >
            <div>
                <img className='qr' alt="qrcode" border="0" src={pic} width="50" height="50" />
            </div>
            <div>
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="contrerassenator@gmail.com" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                        border="0" name="submit" title={t('paypalButton.p1')}
                        alt="Donate with PayPal button" />
                    <img alt="" border="0"
                        src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div >

    )
}

export default PaypalButton