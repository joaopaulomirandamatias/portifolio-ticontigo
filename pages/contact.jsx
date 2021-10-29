import Head from 'next/head'
import Aside from './components/aside'
import PageName from './components/pageName'

function Contact() {
  return (
    <div className="flex flex-row min-h-screen ">
    <Head>
        <title>Contact | João Paulo</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Aside />  
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-5'>
        <PageName name="Contact" />
      </div>
    </div>
  </div>
  )
}

export default Contact