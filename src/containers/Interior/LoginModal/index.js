import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Box from '../../../common/src/components/Box';
import Heading from '../../../common/src/components/Heading';
import Input from '../../../common/src/components/Input';
import CheckBox from '../../../common/src/components/Checkbox/index';
import Button from '../../../common/src/components/Button';
import Image from '../../../common/src/components/Image';
import LoginModalWrapper from './loginModal.style';
import 'rc-tabs/assets/index.css';
import LogoImage from '../../../common/src/assets/image/agency/logo.png';
import LoginImage from '../../../common/src/assets/image/agency/login-bg.jpg';
import firebase from 'firebase/app';
import 'firebase/auth';



const LoginModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle,
}) => {
  const LoginButtonGroup = () => (
    
    <Fragment>
      <Button className="default" title="LOGIN" {...btnStyle} />
      <Button
        onClick={login}
        title="Forget Password"
        variant="textButton"
        {...outlineBtnStyle}
      />
    </Fragment>
  );

  const SignupButtonGroup = () => (
    <Fragment>
      <Button className="default" title="REGISTER" {...btnStyle} onClick={onRegister}/>
    </Fragment>
  );
  const [nameR, setNameR] = useState('');
  const [emailR, setEmailR] = useState('');
  const [passwordR, setPasswordR] = useState('');

  const [registered, setRegistered] = useState(false);

  const [firstGen, setFirstGen] = useState(false);
  const [lowIncome, setLowIncome] = useState(false);
  const [undoc, setUndoc] = useState(false);
  const [studentOfColor, setStudentOfColor] = useState(false);
  const [immigrant, setImmigrant] = useState(false);

  const [emailL, setEmailL] = useState('');
  const [passwordL, setPasswordL] = useState('');

  async function login() {
    try {
      await firebase.login(emailL, passwordL)
    } catch(error) {
      alert(error.message)
    }
  }

  async function onRegister() {

    setRegistered(true);

   firebase.auth().createUserWithEmailAndPassword(emailR, passwordR)
    .then((userCredentials) => {
      let user = userCredentials.user;
      console.log(JSON.stringify(user));
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  const registration = (
    <div>
      <Heading content="Please create an account" {...titleStyle} />
      <Input label="Full Name" value={nameR} onChange={e => setNameR(e.target.value)}/>
      <Input inputType="email"  label="Email Address" value={emailR} onChange={e => setEmailR(e.target.value)}/>
      <Input inputType="password"  label="Password" value={passwordR} onChange={e => setPasswordR(e.target.value)}/>
      <div>
        <SignupButtonGroup />
      </div>
    </div>);
  
  const furtherRegistration = (
    <div>
      <Heading content="Fill out further details to tailor your experience" {...titleStyle}/>
      <form>
        <label>
          First-Generation Student
          <input 
            name="isFirstGen" 
            type="checkbox" 
            checked={firstGen} 
            onChange={e => setFirstGen(!firstGen)}
          />
        </label>
        
        <label>
          Low-Income
          <input 
            name="isLowIncome" 
            type="checkbox" 
            checked={lowIncome} 
            onChange={e => setLowIncome(!lowIncome)}
          />
        </label>
        
        <label>
          Undocumented
          <input 
            name="isUndoc" 
            type="checkbox" 
            checked={undoc} 
            onChange={e => setUndoc(!undoc)}
          />
        </label>
        
        <label>
          Student of Color
          <input 
            name="isStudentOfColor" 
            type="checkbox" 
            checked={studentOfColor} 
            onChange={e => setStudentOfColor(!studentOfColor)}          
          />
        </label>
        
        <label>
          Immigrant
          <input 
            name="isImmigrant" 
            type="checkbox" 
            checked={immigrant} 
            onChange={e => setImmigrant(!immigrant)}
          />
        </label>
      </form>
    </div>
  )

  return (
    <LoginModalWrapper>
      <Box className="row" {...row}>
        <Box className="col imageCol" {...col}>
          <Image className="patternImage" src={LoginImage} alt="Login Banner" />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            <Image src={LogoImage} {...logoStyle} alt="Logo" />
            <Tabs
              defaultActiveKey="loginForm"
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab="LOGIN" key="loginForm">
                <Heading content="Please login to your account" {...titleStyle} />
                <Input inputType="email"  label="Email Address" value={emailL} onChange={e => setEmailL(e.target.value)}/>
                <Input inputType="password"  label="Password" value={passwordL} onChange={e => setPasswordL(e.target.value)}/>
                <CheckBox
                  id="remember"
                  htmlFor="remember"
                  labelText="Remember Me"
                />
                <div>
                  <LoginButtonGroup />
                </div>
              </TabPane>
              <TabPane tab="REGISTER" key="registerForm">
                {registered ? furtherRegistration : registration}
              </TabPane>
            </Tabs>            
          </Box>
        </Box>
      </Box>
    </LoginModalWrapper>
  );
};

// LoginModal style props
LoginModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px',
  },
  // Title default style
  titleStyle: {
    fontSize: ['22px', '36px', '50px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '10px',
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px',
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['17px', '32px', '38px', '40px', '56px'],
    pr: '32px',
    pb: ['32px', '56px'],
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#10ac84',
  },
  // Google button style
  googleButtonStyle: {
    bg: '#ffffff',
    color: '#343D48',
  },
};

export default LoginModal;
