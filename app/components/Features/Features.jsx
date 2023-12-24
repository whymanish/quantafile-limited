import React from 'react'

const Features = () => {
    return (
        <div>

            <section>
                <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 ">
                    <div className="mx-auto mb-12  lg:mt-0  max-w-3xl text-center md:mb-12">
                        <h2 className="text-3xl  font-bold text-gray-800 md:text-5xl">
                            Smooth{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                               Process
                            </span>{' '}
                            
                        </h2>
                        <p className="mt-4 text-sm text-gray-600 sm:text-base">
                            Simple &amp; fixed pricing. 30 days money-back guarantee
                        </p>
                    </div>  <div class="flex flex-col items-center justify-center bg-contain bg-center pt-10" style={{ backgroundImage: " url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png')" }}>
                        <div class="flex flex-col justify-around gap-4 sm:flex-row">
                            <a class="rounded-md border border-solid border-[#d9d9d9] bg-[#c8c8c8] p-6 text-[#222222]" href="#w-tabs-2-data-w-pane-0">
                                <h5 class="mb-2 text-xl font-bold">Personalized Consultation</h5>
                                <p class="text-sm">We start by understanding your unique goals and challenges, laying the foundation for a tailored strategy.</p>
                            </a>
                            <a class="rounded-md border border-solid border-[#d9d9d9] bg-white p-6 text-[#222222]" tabindex="-1" href="#w-tabs-2-data-w-pane-1">
                                <h5 class="mb-2 text-xl font-bold">Strategy Development</h5>
                                <p class="text-sm">We start by understanding your unique goals and challenges, laying the foundation for a tailored strategy.</p>
                            </a>
                            <a class="rounded-md border border-solid border-[#d9d9d9] bg-white p-6 text-[#222222]">
                                <h5 class="mb-2 text-xl font-bold">Analysis and Reporting</h5>
                                <p class="text-sm">We start by understanding your unique goals and challenges, laying the foundation for a tailored strategy.</p>
                            </a>
                        </div>
                        <div class="max-w-5xl">
                            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6488257b75d6a7b950248536_Group%2048113.svg" alt="" class="mt-16 inline-block" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
