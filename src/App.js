import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './App.css';

import Hero from './hero.js'

const inquiryImages = [
  'alibabasearch.jpg',
  'alibaba1.jpg',
  'alibaba2.jpg'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <section>
          <p>Underwear roughly designed.</p>
          <div className='illo'>
            <div className='vid-wrapper'>
              <video src='illo.mp4' autoPlay loop />
            </div>
          </div>
        </section>
        <section>
          <div className='illo'>
            <div className='inquiry'>
              <Slide images={inquiryImages} duration={5000} transitionDuration={1000} />
            </div>
          </div>
          <p>Enquires sent to various factories through Alibaba's portal.</p>
        </section>
        <section>
          <p>Discussion of sample terms with <a href='https://rubylg.en.alibaba.com/' target='_blank'>Ruby Fashion</a>, sample payment sent through paypal.</p>
          <div className='illo large'>
            <div className='wrapper'>
              <img src='money.png' />
            </div>
          </div>
        </section>
        <section>
          <div className='illo'>
            <div className='wrapper left phone'>
              <img src='phone.png' />
              <div className='convo-wrapper'>
                <img className='convo' src='convo.jpg' />
              </div>
            </div>
          </div>
          <p>Step by step sample approval takes place on Whatsapp.</p>
        </section>
        <section>
          <p>Sample received for final approval</p>
          <div className='illo'>
            <div className='wrapper package'>
              <img src='package.jpg' />
              <img src='DHL_logo.png' className='dhl' />
            </div>
          </div>
        </section>
        <div className='past-separator'>
          THIS IS THE PRESENT MOMENT. ABOVE WAS THE PAST, BELOW IS THE FUTURE.
        </div>
        <section className='past-next'>
          <div className='illo'>
            <div className='wrapper left overflow'>
              <img src='sizing.png' />
              <img src='closeup.jpg' className='closeup' />
            </div>
          </div>
          <p>Production run finalized with sizes and shrink-wrapping</p>
        </section>
        <section>
          <p>International shipment from factory to Amazon wearhouses coordinated by <a href='https://www.flexport.com/' target='_blank'>Flexport</a>, who handles tracking, customs and re-palletization domestically.</p>
        </section>
        <section>
          <p>Underwear stock stored at <a href='https://services.amazon.com/fulfillment-by-amazon/pricing.html' target='_blank'>Amazon</a> wearhouses for a fee.</p>
        </section>
        <section>
          <p>Amazon product page launced for item.</p>
        </section>
        <section>
          <p>Charging a fulfillment fee, Amazon ships stock directly to customer.</p>
        </section>
      </div>
    );
  }
}

export default App;
