import '../App.css';

const NavBar = () => {
  return (
    <header role='banner' className='sc-jCHUfY hdmXKo'>
      <div className='sc-bLdqUH bVOXRs'>
        <div className='sc-emDsmM gWsmwY mobileArrow'>
          <div
            aria-hidden='true'
            tabIndex={-1}
            className='sc-gfXuXe jRFivz back-arrow visible'
          >
            <img
              loading='eager'
              height='11px'
              width='auto'
              src='https://ddzngkurla06a.cloudfront.net/icons/rebrand/back_chevron_gunmetal.svg'
              alt='Go Back'
            />
          </div>
        </div>
        <div className='sc-jibziO GwYGj'>
          <a className='header__link' href='https://www.noblr.com'>
            <picture>
              <source
                media='(min-width: 1px) and (max-width: 768px)'
                srcSet='https://ddzngkurla06a.cloudfront.net/images/header/NoblrUSAAV2.png'
              />
              <source
                media='(min-width: 1200px)'
                srcSet='https://ddzngkurla06a.cloudfront.net/images/header/NoblrUSAAV2@4x.png'
              />
              <img
                src='https://ddzngkurla06a.cloudfront.net/images/header/NoblrUSAAV2.png'
                alt='Noblr Homepage'
                className='sc-bvFjSx tQRlM'
              />
            </picture>
          </a>
        </div>
        <div className='sc-emDsmM gWsmwY link'>
          <a
            href='tel:+1-877-236-6257'
            aria-label='1. 8 7 7. 2 3 6. 6 2 5 7'
            className='sc-ekrjqK jNmgth'
          >
            <img
              src='https://ddzngkurla06a.cloudfront.net/icons/rebrand/phone_icon.svg'
              width='18px'
              height='18px'
              alt='Call 1. 8 7 7. 2 3 6. 6 2 5 7'
            />
            <p className='sc-bttaWv cCVMva'>(877) BE-NOBLR</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
