import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herobg from '../components/Herobg'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Herobg heading="CONTACT." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact