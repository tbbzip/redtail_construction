import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h3 className="mt-2 text-3xl font-semibold text-gray-900 md:text-4xl">
            We&apos;d Love to Hear from You
          </h3>
          <p className="mt-3 text-gray-600">
            Chat with our friendly team today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
          <div className="p-6 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <span className="inline-block p-3 text-blue-600 bg-blue-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
                aria-label="Email Icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-xl font-medium text-gray-900">
              Chat to Sales
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Speak to our friendly sales team.
            </p>
            <a
              href="mailto:sales@redtailtelematics.com"
              className="mt-2 text-sm font-bold text-blue-600 underline"
            >
              sales@redtailtelematics.com
            </a>
          </div>

          <div className="p-6 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <span className="inline-block p-3 text-blue-600 bg-blue-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
                aria-label="Location Icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-xl font-medium text-gray-900">Visit Us</h2>
            <p className="mt-2 text-sm text-gray-600">Stop by our office.</p>
            <p className="mt-2 text-sm font-bold text-gray-900">
              1420 Kettner Blvd, San Diego, CA 92101
            </p>
          </div>

          <div className="p-6 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <span className="inline-block p-3 text-blue-600 bg-blue-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
                aria-label="Phone Icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-xl font-medium text-gray-900">Call Us</h2>
            <p className="mt-2 text-sm text-gray-600">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-2 text-sm font-bold text-gray-900">+1 866 711 4880</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
