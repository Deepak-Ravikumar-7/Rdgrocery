import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Policy() {
  const navigate = useNavigate();
  const loghome = () => {
    navigate("/");
  }
  const Backtohome = () => {
    navigate('/');
  };
  return (
    <>
      <div >
        <div className="homepag">
          <div className="Header">
            <div className="logo-container">
              <img className="logo" src="/images/logo.png" alt="Logo" onClick={loghome} />
              <h1 className="store-name">Refresh Daily</h1>
            </div>
            <h1 className='ca'>Privacy Policy</h1>

            <button className="button" onClick={Backtohome}>Back To Home</button>
          </div>
        </div>
      </div>
      <div className='sen'>
        <div className='sec'>
          <strong>RD – Your Online Grocery Partner</strong>
          <p><br />  Refresh Daily Grocery Store: A Commitment to Data Privacy

            In the modern digital landscape, protecting personal information is critical. Refresh Daily Grocery Store (RDGS) is dedicated to safeguarding customer privacy through a comprehensive data privacy policy. This essay outlines RDGS's approach to data collection, usage, and sharing, underscoring its commitment to responsible data management.

            RDGS collects various types of data during customer interactions. This encompasses vital contact and financial information required for transactions. Additionally, technical data, such as IP addresses and browsing behavior via cookies, is gathered to optimize the user experience and improve website performance. RDGS also collects purchase history and, with explicit user consent, personal information to personalize offerings and enhance customer service. Moreover, reviews, feedback, and opinions are gathered to refine services.

            Data collection methods are diverse. Data is primarily obtained through information provided directly by customers, such as during account registration or purchases. RDGS utilizes automated technologies, including cookies and pixel tags, to monitor website activity and understand user preferences. Email communications are also used to gather information, such as feedback and survey responses. Furthermore, data may be received from trusted third-party sources to supplement existing information.

            The collected data serves multiple key purposes. Firstly, it enables RDGS to provide its core services, including processing orders, delivering products, and managing accounts. Secondly, this information is used to enhance operational efficiency and improve customer service. Data analysis provides insights into consumer behavior, informing product development and marketing strategies. Finally, RDGS uses this data to communicate with customers, providing updates, offers, and relevant information tailored to their preferences and purchase history.

            RDGS is firmly committed to data protection. Data is shared with partners to facilitate service delivery and with service providers who process data on RDGS's behalf. RDGS implements robust security measures to protect data from unauthorized access, alteration, or disclosure. The data is stored and protected according to regulatory standards. RDGS’s commitment includes transparently informing its customers about its data practices. Customers can access, modify, and delete their information, and RDGS provides a clear and accessible privacy policy.
            By prioritizing data privacy, RDGS strives to build trust and foster long-term customer relationships based on transparency and accountability.   </p>
        </div></div>
    </>
  )
}
