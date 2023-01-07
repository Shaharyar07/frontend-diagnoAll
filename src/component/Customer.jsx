import React from "react";
import consult from "../assets/consult.png";
const Customer = () => {
  return (
    <div className='container px-6 mx-auto max-w-[1268px]'>
      <section className='text-center'>
        <div className='px-6 py-12 md:px-12'>
          <div className='container mx-auto xl:px-32'>
            <div className='lg:grid-cols-2 flex items-center'>
              <div className='md:mt-12 lg:mt-0 mb-12 lg:mb-0'>
                <div
                  className='block rounded-lg shadow-lg border-2 border-rose-50 px-6 py-12 md:px-12 lg:-mr-14'
                  style={{
                    background: "#651107 1.94% 0% no-repeat padding-box",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <h2 className='text-3xl font-bold mb-12'>
                    Trusted by the best companies <br />
                    <span className>around the world</span>
                  </h2>
                  <div className='grid md:grid-cols-2 gap-x-6'>
                    <div className='mb-12'>
                      <img
                        src='https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo6-1.png'
                        className='px-6'
                        alt='Nasa - logo'
                      />
                    </div>
                    <div className='mb-12'>
                      <img
                        src='https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo5-1.png'
                        className='px-6'
                        alt='Amazon - logo'
                      />
                    </div>
                    <div className='mb-12 md:mb-0'>
                      <img
                        src='https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo3-1.png'
                        className='px-6'
                        alt='Nike - logo'
                      />
                    </div>
                    <div className>
                      <img
                        src='https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo4-1.png'
                        className='px-6'
                        alt='Ikea - logo'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:mb-12 lg:mb-0'>
                <img
                  src={consult}
                  className='w-full rounded-lg shadow-lg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;
