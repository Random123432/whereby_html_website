import React from 'react'
import "../styles/container.css"
import A from "./Images/A.png"
import B from "./Images/B.png"
import C from "./Images/C.png"
import D from "./Images/D.png"
import E from "./Images/E.png"
import F from "./Images/F.png"
import G from "./Images/G.png"
import H from "./Images/H.png"
import I from "./Images/I.png"
import j from "./Images/j.jpg"
import K from "./Images/K.png"
import L from "./Images/L.png"
import M from "./Images/M.webp"
import N from "./Images/N.png"
import O from "./Images/O.png"
import P from "./Images/P.png"
import Q from "./Images/Q.png"
import R from "./Images/R.png"
import S from "./Images/S.png"
import T from "./Images/T.png"
import U from "./Images/U.png"
import V from "./Images/V.png"
import W from "./Images/W.png"
import X from "./Images/X.png"
import Y from "./Images/Y.webp"
import ZA from "./Images/ZA.png"
import ZB from "./Images/ZB.png"
import ZC from "./Images/ZC.png"
import ZD from "./Images/ZD.png"
import ZE from "./Images/ZE.png"
import ZF from "./Images/ZF.png"
import ZG from "./Images/ZG.webp"
import ZH from "./Images/ZH.webp"
import ZI from "./Images/ZI.png"
import ZK from "./Images/ZK.svg"
import ZL from "./Images/ZL.svg"
import ZM from "./Images/ZM.svg"
import ZN from "./Images/ZN.svg"
import ZO from "./Images/ZO.svg"
import ZP from "./Images/ZP.svg"
import ZQ from "./Images/ZQ.svg"
import z from "./Images/z.png"
import ZR from "./Images/ZR.mp4"

const container = () => {
  return (
    <div className="all">
      <div className='head'>
        <div className='texth'>
          <h1 className='a'>Build your dream video call solution</h1>
          <p className='ab'>Ditch corporate-looking video calls for a calm, user-friendly option, integrated directly into your platform using our API or SDK. Optimized for Digital Mental Health, Telehealth, eLearning & more...</p>
        </div>
        <img src={z} alt='uigugu' className='zimg'/>
      </div>
      <div className='headsecond'>
        
        <div className='abc'>
        {/* <video><source src={ZR.mp4}  type="video/mp4" className='video' /></video> */}
          <h2 className='abcd'>The easiest way to add video calls into your platform</h2>
          <p className='abcde'>Get started in minutes with just a few lines of code. Fully branded, customizable and seamlessly integrated into your platform using our API or SDK.</p>
          <a href="">Discover more</a>
          <div className='firstbuttonposition'><a href=''><button className='firstbutton'><p>Try for free</p></button></a></div>
        </div>
      </div>
      <div className='abcdef'>
        <h2 className='abcdefg'>Trusted by 5+ million people at companies like</h2>
        <div className='picturessectionone'>
          <img src={ZN} className='ZN'/>
          <img src={ZQ} className='ZQ'/>
          <img src={ZP} className='ZP'/>
          <img src={R} className='R'/>
          <img src={ZO} className='ZO'/>
          <img src={ZE} className='ZE'/>
        </div>
      </div>
      <div className='abcdefgh'>
        <h2 className='abcdefghij'>Industries thriving with embedded video calls</h2>
        <div className='abcdefghi'>
          <div className='abz'>
            <img src={ZH} className="ZH" />
            <div>
              <h3 id='wer' className='one'>Telehealth</h3>
              <p id='rew' className='four'>Offer secure, reliable integrated video calls to connect practitioners and patients anywhere, anytime.</p>
              <a href='https://whereby.com/information/embedded/healthcare'>Read more</a>
            </div>
          </div>
          <div className='aby'>
          <img src={ZG} className='ZG'/>
            <div>
              <h3 id='wer' className='two'>eLearning</h3>
              <p id='rew' className='five'>Integrate engaging and fun virtual classroom experiences for students and teachers.</p>
              <a href='https://whereby.com/information/embedded/elearning'>Read more</a>
            </div>
          </div>
          <div className='abx'>
          <img src={E} className='E'/>
            <div>
              <h3 id='wer' className='three'>Virtual Events</h3>
              <p id='rew' className='six'>Boost engagement and attendance with customizable video conferencing for webinars and events.</p>
              <a href='https://whereby.com/information/embedded/events'>Read more</a>
            </div>
          </div>
        </div>
      </div>
      <div className='pinksection'>
      <div className='abcdefghijk'>
        <div className='bc'>
          <h2 className='bcd'>Looking for simple video meetings?</h2>
          <p className='bcde'>If you want to host video calls in your browser with no downloads, check out Whereby Meetings.</p>
          <a href='https://whereby.com/information/meetings' className='discovermore'>Discover more</a>
          <div className='bcdef'><a href='https://whereby.com/user/signup?ref=homepage-meetings-block'><button className='bcdefg'>Try or free</button></a></div>
        </div>
        <div className='cd'><img src={W} className='W'/></div>
      </div>
      </div>
      <div className='fourpicsection'>
        <div className='sec'><h2 className='delight'>Delightful video calls</h2>
        <p className='delightpara'>Increase customer trust and confidence by embedding secure video calls inside your service.</p></div>
        <div>
          <div>
            <img src={K} className='K' id="fourpictures"/>
            <div>
              <h3 className='hthree'>Security and privacy focused</h3>
              <p className='paragraph'>All content is encrypted, we're GDPR and ISO27001 certified and can be implemented with HIPAA compliance.</p>
            </div>
          </div>
          <div className='second'>
            <img src={Q} id="fourpictures"/>
            <div>
              <h3 className='hthree'>Superior Reliability</h3>
              <p className='paragraph'>Our infrastructure is scalable to support you as you grow with a consistently high quality video call experience.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={I} className='I' id="fourpictures"/>
            <div>
              <h3 className='hthree'>User-friendly</h3>
              <p className='paragraph'>Provide a calm, easy-to-use experience packed with features and fully customizable to fit your brand and needs.</p>
            </div>
          </div>
          <div className='secondtwo'>
            <img src={ZF} id="fourpictures"/>
            <div>
              <h3 className='hthree'>Friendly & helpful team</h3>
              <p className='paragraph'>We want to help you grow! We offer resources to ensure you get started quickly, build successfully and in turn support your users.</p>
            </div>
          </div>
        </div>
        <div className='hefra'><a href=''><button className='hefr'><p>Try for free</p></button></a></div>
      </div>
      <div className='fullsection'>
        <div className='fullpinksection'>

        </div>
      </div>
      <div className='vbs'>
        <div className='sbv'>
          <h2 className='lj'>Get started today</h2>
          <div className='jl'>
            <a href='https://whereby.com/information/select-product?ref=home-footer'><button className='jla'><p className='jlab'>Try for free</p></button></a>
          </div>
        </div>
        <img src={ZI} className='ZI'/>
        <img src={F} className='F'/>
      </div>
    </div>
  )
}

export default container