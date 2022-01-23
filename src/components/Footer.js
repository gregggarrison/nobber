import '../App.css';
const Footer = () => {
  return (
    <footer className='sc-kNzDjo bNvqs footer' role='contentinfo'>
      <div className='sc-hWBuOZ hqPEKw'>
        <div className='sc-kLnunm MNndg'>
          <a
            className='footer__link'
            href='https://www.noblr.com/privacy-policy'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Opens Privacy Policy in new window'
          >
            Privacy Policy
          </a>
          <span className='sc-hUplSX usDEI'>|</span>
          <a
            className='footer__link'
            href='https://www.noblr.com/terms-and-conditions'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Opens Terms and Conditions in new window'
          >
            Terms and Conditions
          </a>
          <span className='sc-hUplSX usDEI'>|</span>
          <span className='sc-eJwWfJ hOZTSy'>
            <span role='button' tabIndex={0}>
              <p className='footer__link' aria-label='Opens Licenses Modal'>
                Licenses
              </p>
            </span>
          </span>
        </div>
        <div className='sc-fIITEw fTGvem'>
          <p className='sc-bdvvtL eZPTBo copyright'>© 2022 Noblr, Inc.</p>
          <span className='sc-hUplSX usDEI'>|</span>
          <p className='sc-cRKLkh lnRYSx'>
            NOBLR™ is a trademark of Noblr, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
