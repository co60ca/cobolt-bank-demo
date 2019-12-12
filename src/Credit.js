
import React from 'react';
import {Header} from './Common.js';
import FormContainer from './FormContainer.js';
import {EnterYourDetails, EnterYourWorkHomeDetails, ThanksForYourOrder} from './CommonForms';
import './App.css';

export default class Credit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: "flow1"
    }
    this.setPage = this.setPage.bind(this);

  }

	setPage(pagename, type) {
		this.setState({currentPage: pagename});
    if (type) {
      this.setState({currentPage: pagename, type: type});
    }
	}

  render() {
    var page = null;
    switch (this.state.currentPage) {
      case 'flow1': page = <CreditStart pager={this.setPage}/>; break;
      case 'flow2': page = <EnterYourDetails pager={this.setPage}/>; break;
      case 'flow3': page = <EnterYourWorkHomeDetails pager={this.setPage}/>; break;
      case 'flow4': page = <UpsellCredit pager={this.setPage}/>; break;
      case 'flow5': page = <ConfirmCredit pager={this.setPage}/>; break;
      case 'flow6': page = <ThanksForYourOrder pager={this.setPage}/>; break;
      default: ;
    }
    return (
      <>
      <Header pageHandler={(page) => {this.props.pageHandler(page); this.setPage("flow1")}}  />
      <div className="cblt-outer-container cblt-outer-container-bottom">
          {page}
      </div>
      </>
      
    )
  }
}

function Features(props) {
  return (
    <div className="card-features" style={{marginBottom: "1rem"}}>
      <div>
        <label>Annual Fee: </label>
        <b>${props.fee}</b>
      </div>
      <div>
        <label>Rate: </label>
        <b>{props.rate}%</b>
      </div>
      <div>
        <label>Rewards: </label>
        <b>{props.cb}% Cashback</b>
      </div>
    </div>
  )
}

function Card(props) {
  return ( 
    <FormContainer onClick={props.onClick} {...props}>
      <div className="cblt-product-title">{props.title}</div>
      <div className="cblt-image-box">
        <img alt={"props.title"} src={props.img}/>
      </div>
      <p>{props.children}</p>
      <Features {...props}/>
    </FormContainer>
  );
}

class CreditStart extends React.Component {
  
  render() {
    return (
      <>
        <img alt="person tapping card against mobile scanner from another person"
        className="cblt-banner-image" src="imgs/card-hand.jpg"/>
        <div className="cblt-inner-container">
          <div className="cblt-section-title">Credit products at Cobolt</div>
        </div>
          <div className="cblt-feature-text-box-center">
            Get the credit card that works for you!
          </div>
        <div className="cblt-inner-container">
        <p>
       It's convenient, convenient! With the choice to complete your payment online or on the day of your order, you'll save money by not needing to worry about incoming bills or coordinating all your payments. Cobalt will automatically bill you for the fees, if any, associated with your order, plus you'll qualify for the Cobalt Cash back on your purchases in the meantime. 
        </p>
        <div className="cblt-feature-container-3">
          <Card title="Bronze Card" img="imgs/bronze-card.jpg" fee="0" rate="21.0" cb="0"
          onClick={() => this.props.pager("flow2")}>
            Limited Starbucks® travel. Also, call our Travelers Assistance Line at 800-555-2077 Monday-Friday between 8:00 AM to 6:00 PM PST. We are happy to help our customers find the appropriate travel credit to meet their needs.  To schedule an appointment, please call our telephone number (800-555-2077) or complete the Online Request for Referral form and send it to...
          </Card>
          <Card title="Black Card" img="imgs/black-card.jpg" fee="210" rate="19.90" cb="3" 
          onClick={() => this.props.pager("flow2")}>
            Choose a card that offers travel points that go up significantly as the price of your trips go up. Travel a lot? Get a card that rewards you with travel points you can redeem!
          </Card>
          <Card title="Silver Card" img="imgs/silver-card.jpg" fee="60" rate="20.00" cb="1"
          onClick={() => this.props.pager("flow2")}>
            Silver mastercard credit card, even in cash.  Hello, you've reached the hidden page that guarantees your precious wallet may never get lost again! All the cards have been marked with the letter "e" inside the card, to reflect the hidden line.  Discovering a £10 Super Deluxe Deed Card You really need to read this one, as it completely changes the direction of these credit cards.
          </Card>
        </div>
        </div>
      </> 
    );
  }
}

class UpsellCredit extends React.Component {
	render() {
		return (
		<div className="cblt-inner-container">
      <div className="cblt-feature-container-solo">
        <Card title="Black Card" img="imgs/black-card.jpg" fee="210" rate="19.90" cb="3"
        onClick={() => this.props.pager('flow5')}
        solo={true}
        buttonText="Yes, accept the new offer"
        buttonTextFail="No, stick with my previous offer"
        onClickFail={() => this.props.pager('flow5')}>
          You qualify for the Black Card, would you like to apply to this card instead?
        </Card>
      </div>
		</div>
		);
	}
}

class ConfirmCredit extends React.Component {
	render() {
		return (
		<div className="cblt-inner-container">
      <div className="cblt-feature-container-solo">
        <div className="cblt-box-solo">
          <div className="cblt-section-title">
            You're almost done
          </div>
          <p>Confirm your application below</p>
          <button className="button-success" onClick={() => this.props.pager('flow6')}>Confirm Application</button>
        </div>
      </div>
		</div>
		);
	}
}

