import React from "react";

export default function FooterComponent() {
  return (
    <footer class="min-h-screen w-full max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 flex flex-col items-center lg:items-start">
      <div class="footer max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 flex flex-col items-center lg:items-start">
        <div className="footer xl:grid xl:grid-cols-3 xl:gap-8">
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
                <p className="footer footerText">
                  Somos una plataforma de streaming que ofrece una amplia
                  variedad de repeticiones, películas y series.
                </p>
              </div>
              <div className="footer md:ml-auto">
                <h4 className="footer footerText uppercase tracking-wide font-semibold mb-4">
                  Contacto
                </h4>
                <div className="footer flex flex-col">
                  <a
                    href="https://discord.com/channels/@me/977975337424150610"
                    className="footer footerText hover:text-gray-900 dark:hover:text-white"
                  >
                    <span className="sr-only">Discord</span>
                    elpepesito3345#7224
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
