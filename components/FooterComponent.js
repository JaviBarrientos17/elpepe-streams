import React from "react";

export default function FooterComponent() {
  return (
    <footer className="min-h-screen w-full max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 flex flex-col justify-center items-center lg:items-start">
      <div className="footer max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 flex flex-col justify-center items-center lg:items-start">
        <div className="footer xl:grid xl:grid-cols-3 xl:gap-8 justify-center text-center">
          <div className="footer xl:col-span-1 flex justify-center xl:justify-start mb-4">
            <img
              src="https://i.imgur.com/Oz0IbSQ.png"
              className="h-8"
              alt="El Pepe Streams Logo"
            />
          </div>
          <div className="footer mt-16 max-w-screen-sm mx-auto sm:max-w-none md:mt-0 xl:col-span-2 xl:mt-0">
            <div className="footer md:grid md:grid-cols-2 md:gap-8">
              <div className="footer mb-8 md:mb-0">
                <h4 className="footer footerText uppercase tracking-wide font-semibold mb-4">
                  Sobre nosotros
                </h4>
                <p className="footer footerText text-center">
                  Somos una plataforma de streaming que ofrece una amplia
                  variedad de repeticiones, películas y series.
                </p>
              </div>
              <div className="footer md:ml-auto">
                <h4 className="footer footerText uppercase tracking-wide font-semibold mb-4">
                  Contacto
                </h4>
                <div className="footer flex flex-col justify-center md:flex-row md:justify-end md:items-center mt-8 mb-4">
                  <div className="md:ml-auto">
                    <div className="footer flex items-center justify-center md:justify-start">
                      <a
                        href="https://discord.com/channels/@me/977975337424150610"
                        className="text-white hover:text-gray-900 dark:hover:text-white text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          className="footer bi bi-discord"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
