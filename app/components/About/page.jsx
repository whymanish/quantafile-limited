import React from 'react'

const page = () => {
  return (
    <div>
    <section>
    <div className="px-8 py-12 mx-auto space-y-24 md:px-12 lg:px-32 max-w-7xl">
    <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
            <h2 className="text-3xl   tracking-tighter font-bold text-gray-800 md:text-5xl">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
               Us
              </span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Simple &amp; fixed pricing. 30 days money-back guarantee
            </p>
          </div>
      <div className="grid items-center grid-cols-1 gap-4 mt-6 list-none lg:grid-cols-2 lg:gap-24">
        <div>
          <span className="text-xs font-bold tracking-wide text-gray-500 uppercase"> Where are we based from ? </span>
          <p className="mt-8 text-4xl font-semibold tracking-tight text-gray-900">
           We are{' '}<span className='text-transparent tracking-tighter font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600' >PUNE</span>{' '}based<br/>startup
            
          </p>
          <p className="mt-4 text-base text-gray-500">
            Control and added security. With decentralization, users have more
            control over their data and transactions, and the platform is less
            susceptible to malicious attacks.
          </p>
        </div>
        <div className="p-2 border bg-gray-50 rounded-3xl">
          <div className="h-full overflow-hidden bg-white border shadow-lg rounded-3xl">
            <img alt="Lexingtøn thumbnail" className="relative w-full object-cover rounded-2xl drop-shadow-2xl" src="https://i.ibb.co/mFBp87b/map.png"/>
          </div>
        </div>
      </div>
      <div className="grid items-center grid-cols-1 gap-4 mt-6 list-none lg:grid-cols-2 lg:gap-24">
        <div>
          <span className="text-xs font-bold tracking-wide text-gray-500 uppercase">data</span>
          <p className="mt-8 text-4xl font-semibold tracking-tight text-gray-900">
            Empowering users
            <span className="lg:block lg:text-gray-600">with data control</span>
          </p>
          <p className="mt-4 text-base text-gray-500">
            Control and added security. With decentralization, users have more
            control over their data and transactions, and the platform is less
            susceptible to malicious attacks.
          </p>
        </div>
        <div className="p-2 border bg-gray-50 rounded-3xl lg:order-first">
          <div className="h-full overflow-hidden bg-white border shadow-lg rounded-3xl">
            <img alt="Lexingtøn thumbnail" className="relative w-full rounded-2xl drop-shadow-2xl" src="https://i.ibb.co/mFBp87b/map.png"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div>
        <p className="mt-12 text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
          Meet our team
          
        </p>
      </div>
      <ul role="list" className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-12 sm:gap-4 lg:max-w-none lg:grid-cols-3">
        <li className="p-2 border bg-gray-50 rounded-3xl">
          <figure className="relative flex flex-col justify-between h-full p-6 bg-white border shadow-lg rounded-2xl">
            <blockquote className="relative">
              <p className="text-base text-gray-500">
                Being in the financial industry, we were always looking for ways
                to enhance our transactions' security and efficiency.
              </p>
            </blockquote>
            <figcaption className="relative flex items-center justify-between pt-6 mt-6">
              <div>
                <div className="font-medium text-gray-900">Annur Flint</div>
                <div className="mt-1 text-sm text-gray-500">CEO at Flint LLC</div>
              </div>
              <div className="overflow-hidden rounded-full bg-gray-50">
                <img alt="" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" decoding="async" data-nimg="future" className="object-cover h-14 w-14 grayscale" loading="lazy" style={{color: "transparent"}} width="56" height="56"/>
              </div>
            </figcaption>
          </figure>
        </li>
        <li className="p-2 border bg-gray-50 rounded-3xl">
          <figure className="relative flex flex-col justify-between h-full p-6 bg-white border shadow-lg rounded-2xl">
            <blockquote className="relative">
              <p className="text-base text-gray-500">
                Implementing Semplice's blockchain technology has been a
                game-changer for our supply chain management.
              </p>
            </blockquote>
            <figcaption className="relative flex items-center justify-between pt-6 mt-6">
              <div>
                <div className="font-medium text-gray-900">Jordan Pettersson</div>
                <div className="mt-1 text-sm text-gray-500">
                  Director at P Industries
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-gray-50">
                <img alt="" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" decoding="async" data-nimg="future" className="object-cover h-14 w-14 grayscale" loading="lazy" style={{color: "transparent"}} width="56" height="56"/>
              </div>
            </figcaption>
          </figure>
        </li>
        <li className="p-2 border bg-gray-50 rounded-3xl">
          <figure className="relative flex flex-col justify-between h-full p-6 bg-white border shadow-lg rounded-2xl">
            <blockquote className="relative">
              <p className="text-base text-gray-500">
                We were initially hesitant about integrating blockchain
                technology into our existing systems, fearing the complexity of
                the process.
              </p>
            </blockquote>
            <figcaption className="relative flex items-center justify-between pt-6 mt-6">
              <div>
                <div className="font-medium text-gray-900">Oliver Benji</div>
                <div className="mt-1 text-sm text-gray-500">
                  Founder of Benji and Tom
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-gray-50">
                <img alt="" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" decoding="async" data-nimg="future" className="object-cover h-14 w-14 grayscale" loading="lazy" sstyle={{color: "transparent"}} width="56" height="56"/>
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div className="p-2 border bg-gray-50 rounded-3xl">
        <div className="p-10 text-center bg-white border shadow-lg md:p-20 rounded-3xl">
          <p className="text-4xl font-semibold tracking-tighter text-black">
            Download our app today
          </p>
          <p className="mt-4 text-base text-gray-500">
            The fastest method for working together
            <span className="md:block">
              on staging and temporary environments.</span>
          </p>
          <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
            <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 512 512">
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path></svg><span className="text-xs text-gray-600">Download on Goolle Play</span></button><button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 305 305">
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path></svg><span className="text-xs text-gray-600">Download on App Store</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default page
