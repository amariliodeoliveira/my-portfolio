export default function Loading() {
  return (
    <section className="hero bg-base-200 min-h-screen justify-center pt-28">
      <div className="hero-content max-w-4xl flex-col items-start gap-20">
        <div className="flex flex-col gap-4">
          <div className="skeleton h-12 w-72" />
          <div className="flex flex-wrap gap-8 md:flex-nowrap lg:gap-16">
            <div className="skeleton h-64 w-80 shrink-0" />
            <div className="flex w-full flex-col gap-3">
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-2/3" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="skeleton mb-5 h-8 w-40" />
          <div className="flex flex-col gap-6">
            <div className="skeleton h-24 w-full" />
            <div className="skeleton h-24 w-full" />
            <div className="skeleton h-24 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
