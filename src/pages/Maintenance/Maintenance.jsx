const Maintenance = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex h-full w-full flex-col lg:flex-row">
        {/* Left panel */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="px-10 pt-10">
            <img src="logo.png" alt="TransitVox" className="h-30 w-auto" />
          </div>

          <div className="flex flex-1 items-center px-10 pb-12">
            <div className="max-w-xl">
              <p className="text-xl font-semibold text-tv-indigo">Maintenance</p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-tv-navy sm:text-5xl">
                TransitVox is down for maintenance
              </h1>

              <p className="mt-6 text-lg text-tv-slate">
                We expect to be back shortly.
              </p>

              <p className="mt-4 text-base text-tv-slate">
                For more information, please contact the support team.
              </p>

              <p className="mt-10 text-lg font-semibold text-tv-teal">
                Thank you for your patience.
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative hidden lg:block lg:w-1/2">
          <img
            src="desert.avif"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {/* subtle brand overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-tv-navy/20 via-transparent to-tv-teal/20" />
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
