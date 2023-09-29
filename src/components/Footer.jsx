import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footerall' id='pony'>
      <div className='about' id="pone">
        <h3 id='foothead'>About</h3>
        <p id='pc'><a href=''>About us</a></p>
        <p id='pc'><a href=''>Our vision</a></p>
        <p id='pc'><a href=''>Careers</a></p>
        <p id='pc'><a href=''>Press</a></p>
      </div>
      <div className='product' id='po'> 
        <h3 id='foothead'>Product</h3>
        <p id='pc'><a href=''>Embedded</a></p>
        <p id='pc'><a href=''>Meetings</a></p>
        <p id='pc'><a href=''>What's New</a></p>
        <p id='pc'><a href=''>Status</a></p>
        <p id='pc'><a href=''>Reference Docs</a></p>
      </div>
      <div className='pricing' id='po'>
        <h3 id='foothead'>Pricing</h3>
        <p id='pc'><a href=''>For Embedded</a></p>
        <p id='pc'><a href=''> For Meetings</a></p>
      </div>
      <div className='social' id='po'>
        <h3 id='foothead'>Social</h3>
        <p id='pc'><a href=''>Blog</a></p>
        <p id='pc'><a href=''>Twitter</a></p>
        <p id='pc'><a href=''>LinkedIn</a></p>
        <p id='pc'><a href=''>Instagram</a></p>
        <p id='pc'><a href=''>Facebook</a></p>
      </div>
      <div className='support' id='po'>
        <h3 id='foothead'>Support</h3>
        <p id='pc'><a href=''>Support Center</a></p>
        <p id='pc'><a href=''>Privacy Policy</a></p>
        <p id='pc'><a href=''>Terms of Service</a></p>
        <p id='pc'><a href=''>Cookie Policy</a></p>
        <p id='pc'><a href=''>Cookie Settings</a></p>
        <p id='pc'><a href=''>GDPR Statement</a></p>
        <p id='pc'><a href=''>Security</a></p>
        <p id='pc'><a href=''>Sitemap</a></p>
      </div>
      <div className='Getintouch' id='po'>
        <h3 id='foothead'>Get in touch</h3>
        <p id='pc'><a href=''>Contact Support</a></p>
      </div>
    </div>
  )
}

export default Footer