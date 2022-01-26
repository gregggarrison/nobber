import '../App.css';

const Name = () => {
  return (
    // <main className='sc-leSONj cXhdTX'>
    //   <div className='sc-llYSUQ eYMoPz'>
    <div>
      <div className='sc-hcupDf gatGUj'>
        <div
          name='back-button'
          tabIndex={0}
          role='button'
          id='back-button'
          aria-label='Go back to previous page'
          className='sc-oXPCX hjBbeI'
        />
        <div className='sc-hLVXRe hUZzII'>
          <h1 className='sc-cQMzAB kwccoB'>Start your quote</h1>
        </div>
      </div>
      <div className='sc-hiCibw goOnim'>
        <div
          className='sc-lkgTHX ddGsFF form'
          data-gtm-vis-recent-on-screen-11879414_5={385}
          data-gtm-vis-first-on-screen-11879414_5={385}
          data-gtm-vis-total-visible-time-11879414_5={2000}
          data-gtm-vis-has-fired-11879414_5={1}
        >
          <form className='formik-form'>
            <h2 className='sc-dlVxhl lndXoS'>
              First, let’s get the basics.
              <br></br>
              What’s your name?
            </h2>
            <div className='sc-eFegNN enaKKw' />
            <div className='sc-jlRLRk bCbPAT'>
              <div
                className='sc-fXEqDS djQRmH text'
                aria-hidden='true'
                tabIndex={-1}
              >
                <div
                  className='MuiFormControl-root MuiTextField-root'
                  maxLength={524288}
                  invalid='false'
                >
                  <label
                    className='MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined'
                    data-shrink='false'
                    htmlFor='firstName'
                    id='firstName-label'
                  >
                    First Name
                  </label>
                  <div className='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl'>
                    <input
                      aria-invalid='false'
                      autoComplete='given-name'
                      id='firstName'
                      name='firstName'
                      type='text'
                      aria-label='firstName'
                      aria-required='true'
                      aria-hidden='false'
                      className='MuiInputBase-input MuiOutlinedInput-input'
                      // defaultValue
                    />
                    <fieldset
                      aria-hidden='true'
                      className='jss1 MuiOutlinedInput-notchedOutline'
                    >
                      <legend className='jss3'>
                        <span>First Name</span>
                      </legend>
                    </fieldset>
                  </div>
                </div>
                <div
                  id='firstName_error'
                  type='error'
                  aria-live='assertive'
                  className='sc-fHeRUh iKWFGg'
                >
                  <img
                    src='https://ddzngkurla06a.cloudfront.net/icons/rebrand/error_icon.svg'
                    alt='Error'
                  />
                  <p type='error' className='sc-dtDOqo dElMPO'>
                    Required
                  </p>
                </div>
              </div>
              <div
                className='sc-fXEqDS djQRmH text'
                // aria-hidden='true'
                tabIndex={-1}
              >
                <div
                  className='MuiFormControl-root MuiTextField-root'
                  maxLength={524288}
                  invalid='false'
                >
                  <label
                    className='MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined'
                    data-shrink='false'
                    htmlFor='lastName'
                    id='lastName-label'
                  >
                    Last Name
                  </label>
                  <div className='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl'>
                    <input
                      aria-invalid='false'
                      autoComplete='family-name'
                      id='lastName'
                      name='lastName'
                      type='text'
                      aria-label='lastName'
                      aria-required='true'
                      aria-hidden='false'
                      className='MuiInputBase-input MuiOutlinedInput-input'
                      // defaultValue=''
                    />
                    <fieldset
                      // aria-hidden='true'
                      className='jss1 MuiOutlinedInput-notchedOutline'
                    >
                      <legend className='jss3'>
                        <span>Last Name</span>
                      </legend>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className='sc-dUbtfd ggyMqm' />
              <div className='sc-cbTzjv hiWTAX' />
              <div className='sc-dVNjXY lkkBAB'>
                <div className='sc-jHkVzv fAXMkB'>
                  <button disabled className='sc-dJjYzT gLTjyk'>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <span className='sc-eJwWfJ hOZTSy'>
          <span role='button' tabIndex={0}>
            <span className='sc-AjmGg gnyAnU'>Or Start Over</span>
          </span>
        </span>
      </div>
    </div>
    //   </div>
    // </main>
  );
};

export default Name;
