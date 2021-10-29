import Head from 'next/head'
import Aside from './components/aside'
import Language from './components/progressBar'
import PageName from './components/pageName'
import Personal from './components/personal'
import { Timeline } from './components/timeline'

function About() {
  return (
    <div className="flex flex-row min-h-screen overflow-x-hidden">
    <Head>
        <title>About | João Paulo</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Aside />  
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-5'>
        <PageName name="About Me" /> 
        <div>
          <h3 className='mt-8 text-xl font-semibold'>Eu sou João Paulo Miranda Matias e sou <span className='text-indigo-600'>Desenvolvedor Web e Mobile</span>.</h3>
          <p className='mt-4 text-sm  text-justify sm:mr-20'>Olá! Meu nome é João Paulo Miranda Matias, eu sou desenvolvedor web e mobile, e gosto muito do meu trabalho. trabalho com desenvolvimento de software a 3 anos na Polícia Militar do Amapá. Mas sempre no meu tempo livre estou programando alguma coisa ou estudando novas tecnologias.</p>
        </div>
        <div className='mt-10'>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">            
              <div className='text-base  lg:px-20 sm:px-5'>
                <Personal title="Birthday" description="21 May 1991" />
                <Personal title="Website" description="ticontigo.com.br" />
                <Personal title="Degree" description="Polícia Militar do Amapá" />
                <Personal title="City" description="Macapá-AP" />
              </div>
              <div className='text-base lg:px-20 sm:px-5'>
                <Personal title="Age" description="30" />
                <Personal title="Email" description=" joaopaulomirandamatias@hotmail.com" />
                <Personal title="Phone" description="+55 96 98139 2361" />
                <Personal title="Freelance" description="Available" />
              </div>             
          </div>
        </div>
      </div>
      <div>
      <div className='grid justify-items-center col-span-2'>
       <button class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-indigo-700">Download Resume</button>
      </div>
      </div>
      <div className='mt-10 mb-10'>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2"> 
          <div className='text-base px-4 lg:px-20 sm:px-5'>
            <h2 className='text-2xl font-bold text-center text-indigo-700'>Languages</h2>
            <Language language="HTML" width="width:95%" percent="95"/>
            <Language language="CSS" width="width:85%" percent="85" />
            <Language language="Javascript" width="width:75%" percent="75" />
            <Language language="PHP" width="width:80%" percent="80" />              
            <Language language="Dart" width="width:65%" percent="65"/>              
          </div>
          <div className='text-base px-4 lg:px-20 sm:px-5'>
            <h2 className='text-2xl font-bold text-center text-indigo-700'>Frameworks</h2>
            <Language language="Reactjs" width="width:80%" percent="80"/>
            <Language language="Nextjs" width="width:80%" percent="80" />
            <Language language="Flutter" width="width:60%" percent="75" />
            <Language language="Express" width="width:55.00%" percent="55" />              
            <Language language="Adianti Framework" width="width:95%" percent="95"/>              
          </div>
        </div>  
      </div>
      <div className='mt-10 mb-10'>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
        <div className='text-base px-4 px-3 sm:px-1 lg:px-12'>
            <h2 className='text-2xl font-bold text-center text-indigo-700 mb-4'>Education</h2>
            <div className='bg-white rounded shadow  py-1'>
                <div class="relative w-1/2 m-8">
                <div class="border-r-2 border-indigo-500 absolute h-full top-0"></div>
                  <ul class="list-none m-0 p-0">
                    <Timeline ano="2007 - 2009" title="Curso de PHP7" description="Lorem ipsum aaa" />      
                    <Timeline ano="2007 - 2009" title="Curso de PHP7" description="Lorem ipsum aaa" />      
                    <Timeline ano="2007 - 2009" title="Curso de PHP7" description="Lorem ipsum aaa" />      
                  </ul>
                </div>
              </div>
            </div>
            <div className='text-base px-3 sm:px-1 lg:px-12'>
            <h2 className='text-2xl font-bold text-center text-indigo-700 mb-4'>Experience</h2>
            <div className='bg-white rounded shadow  py-1'>
                <div class="relative w-1/2 m-8">
                <div class="border-r-2 border-indigo-500 absolute h-full top-0"></div>
                  <ul class="list-none m-0 p-0">
                    <Timeline ano="2007 - 2009" title="Curso de PHP7" description="Lorem ipsum aaa" />      
                    <Timeline ano="2007 - 2009" title="Curso de PHP7" description="Lorem ipsum aaa" />      
                    <Timeline ano="2007 - 2009" title="Curso de PHP7" description="Lorem ipsum aaa" />      
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
