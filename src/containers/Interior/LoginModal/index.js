import React, { Fragment, useState } from 'react';
import { Redirect } from "react-router-dom";
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
import firebase from "firebase"
import "firebase/database"


import {useAuth} from "../../../common/src/hooks/use-auth.js"

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
  firebase
}) => {

  const auth = useAuth();

  const LoginButtonGroup = () => (
    
    <Fragment>
      <Button className="default" title="LOGIN" onClick={() => auth.logIn(emailL, passwordL)} {...btnStyle} />
      <Button
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

  const [register, setRegister] = useState(0);
  const [errorRegistering, setErrorRegistering] = useState();
  const [errorStatus, setErrorStatus] = useState();
  const [errorPronouns, setErrorPronouns] = useState();
  const [errorStudy, setErrorStudy] = useState();

  const [firstGen, setFirstGen] = useState(false);
  const [lowIncome, setLowIncome] = useState(false);
  const [undoc, setUndoc] = useState(false);
  const [studentOfColor, setStudentOfColor] = useState(false);
  const [immigrant, setImmigrant] = useState(false);
  const [pronouns, setPronouns] = useState("");
  const [education, setEducation] = useState("")

  const [emailL, setEmailL] = useState('');
  const [passwordL, setPasswordL] = useState('');
  const [errorLogIn, setErrorLogIn] = useState();

  const [toDash, setToDash] = useState(false);

  async function onRegister() {

    let userRef = firebase.database().ref('users/' + nameR);
    userRef.transaction(function(currentData){

      if (currentData === null){
        return {
          username: nameR,
          email: emailR
        }
      } else {
        return;
      }
    }, function(error, commited){
        if(error){
          console.log("transaction failed")
        } else if(!commited){
          setErrorRegistering(<Heading color="RED" as="h3" content="Display Name already in use, please choose another or LOG IN" />);
        } else{
          
          let user = auth.signUp(emailR, passwordR)
          
          user.updateProfile({
            displayName:nameR
          })
          setRegister(1)


          // })
          // .catch((error) => {
          //   if(error.message === "The email address is already in use by another account."){
          //     setErrorRegistering(<Heading color="RED" as="h3" content="Email already in use, please LOG IN" />);
          //   }
          // });
        }
      });
  }

  function submitRegistration(){
    firebase.database().ref("users/" + nameR).set({
      username: nameR,
      email: emailR,
      pronoun: pronouns,
      education: education,
      firstGenStatus: firstGen,
      lowIncomeStatus: lowIncome,
      undocStatus: undoc,
      studentOfColorStatus: studentOfColor,
      immigrantStatus: immigrant,
    });
    setToDash(true);
  }

  let registrationStage = <div></div>;

  const registration = (
    <div>
      <Heading content="Please create an account" {...titleStyle} />
      {errorRegistering}
      <Input label="Display Name" value={nameR} onChange={e => setNameR(e.target.value)}/>
      <Input inputType="email"  label="Email Address" value={emailR} onChange={e => setEmailR(e.target.value)}/>
      <Input inputType="password"  label="Password" value={passwordR} onChange={e => setPasswordR(e.target.value)}/>
      <div>
        <SignupButtonGroup />
      </div>
    </div>);
  
  function requireStatus() {
    if(firstGen === false && lowIncome === false && undoc === false && studentOfColor === false && immigrant === false){
      setErrorStatus(
        <Heading color="RED" as="h3" content={"Please select one of the following identifiers to provide you your resources"}/>
      )
    }
    else{
      setRegister(2);
    }
  }

  const underPrivilegedBackground = (
    <div>
      <Heading content={"Hello " + nameR + ", please fill out further details to tailor this platform to you."} {...titleStyle}/>
      {errorStatus}
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
        <br/>
        <label>
          Low-Income
          <input 
            name="isLowIncome" 
            type="checkbox" 
            checked={lowIncome} 
            onChange={e => setLowIncome(!lowIncome)}
          />
        </label>
        <br/>
        <label>
          Undocumented
          <input 
            name="isUndoc" 
            type="checkbox" 
            checked={undoc} 
            onChange={e => setUndoc(!undoc)}
          />
        </label>
        <br/>
        <label>
          Student of Color
          <input 
            name="isStudentOfColor" 
            type="checkbox" 
            checked={studentOfColor} 
            onChange={e => setStudentOfColor(!studentOfColor)}          
          />
        </label>
        <br/>
        <label>
          Immigrant
          <input 
            name="isImmigrant" 
            type="checkbox" 
            checked={immigrant} 
            onChange={e => setImmigrant(!immigrant)}
          />
        </label>
        <br/>
        <Button className="default" title="Continue Registration" onClick={e => requireStatus()} {...btnStyle}/>
      </form>
    </div>
  )
  
  function requirePronoun(){
    if(pronouns === ""){
      setErrorPronouns(
        <Heading color="RED" as="h3" content={"Please set your pronouns"}/>
      )
    }
    else{
      setRegister(3);
    }
  }

  const pronounRegistration = (
    <div>
      <Heading content={"What are your prefered pronouns?"} {...titleStyle}/>
      {errorPronouns}
      <form>
        <input 
          type="radio" 
          id="he/him" 
          name="pronoun" 
          value="he/him"
          onChange={e => setPronouns("He/Him")}/>
        <label for="he/him">He/Him</label>
        <br/>

        <input 
          type="radio" 
          id="she/her" 
          name="pronoun" 
          value="she/her"
          onChange={e => setPronouns("She/Her")}/>
        <label for="She/Her">She/Her</label>
        <br/>

        <input 
          type="radio" 
          id="they/them" 
          name="pronoun" 
          value="they/them"
          onChange={e => setPronouns("He/Him")}/>
        <label for="they/them">They/Them</label>
        <br/>
      </form>
      <br/>
      <Button className="default" title="Continue Registration" onClick={e => requirePronoun()} {...btnStyle}/>
    </div>
  )

  function requireEducation(){
    if(education === ""){
      setErrorStudy(
        <Heading color="RED" as="h3" content={"Please enter the field of study you are interested in"}/>
      )
    }
    else{
      submitRegistration();
    }
  }

  const educationRegistration = (
    <div>
      <Heading content={"What field of study are you interested in?"} {...titleStyle}/>
      {errorStudy}
      <form  onSubmit={e => submitRegistration()}>
        <input
          type="text"
          id="education"
          name="education"
          value={education}
          onChange={e => setEducation(e.target.value)}/>
      </form>
      <br/>
      <Button className="default" title="Submit Registration" onClick={e => requireEducation()} {...btnStyle}/>
    </div>
  )

  if(register === 0) {
    registrationStage = registration;
  } else if (register === 1){
    registrationStage = underPrivilegedBackground;
  } else if (register === 2){
    registrationStage = pronounRegistration;
  } else if (register === 3){
    registrationStage = educationRegistration;
  } 

  let pathnameRedirect = "/dashboard/" + auth.user.displayName

  return (
    <LoginModalWrapper>
      {auth.user ? (
        <Redirect to={{
          pathname: pathnameRedirect,
        }}/>) : null}
      <Box className="row" {...row}>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            {//add image banner
            }
            <Tabs
              defaultActiveKey="loginForm"
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab="LOGIN" key="loginForm">
              <Heading content="Please login to your account" {...titleStyle} />
                {errorLogIn}
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
                {registrationStage}
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
