import React from 'react';
import './App.css';
import styles from './Styles.js';
import ClockLifecycle from './ClockLifecycle.js';
import ClockHook from './ClockHook.js';

export default class Header extends React.Component {
  constructor() {
    super();
    this.title= 'Shoppie Mart';
    this.offerDesc= 'Exclusive Offer : 10% Discount on minimum purchase of ₹2000.. Limited Period Only!!';
    this.logoUrl= 'https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/125317852_3620910087970109_1341216969570084110_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=R_bFqNgHsjIAX_JZRHe&_nc_ht=scontent-maa2-1.xx&oh=13943afc1288de5f327d0cfab9e08e59&oe=602C3E34';
    this.cartUrl= 'https://www.flaticon.com/svg/vstatic/svg/263/263142.svg?token=exp=1611064864~hmac=2d2a4507a33d0e51fc2c98eeae726661';
    this.userUrl= 'https://www.flaticon.com/svg/vstatic/svg/1077/1077114.svg?token=exp=1611064942~hmac=8d77291599f8fc6e308d07d20fbdafdd';
  }


  render() {
    return (
      <>
        <img style={styles.logoImage} src={this.logoUrl} />
        <h1 style={styles.title}>Welcome to {this.title}</h1>
        <img style={styles.icons} src={this.userUrl} />
        <div className="container"><img style={styles.icons} src={this.cartUrl} /><div className="top-right coin">12</div></div>
        <ClockLifecycle></ClockLifecycle>
        <ClockHook></ClockHook>
        <marquee style={styles.discount}>{this.offerDesc}</marquee>
        <hr />
      </>
    );
  }
}