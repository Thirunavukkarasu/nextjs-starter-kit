import { whyFeatures } from "../constants";

function WhyCard({ icon, title, description }: any) {
  return (
    <div className="w-full md:w-1/2 lg:w-4/12">
      <div className="p-8 lg:px-3">
        <div className="feature-icon-2 mb-8 text-theme-color leading-none">
          {icon}
        </div>
        <div className="content">
          <h3 className="mb-5">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhySection() {
  return (
    <section id="why" className="feature-extended-section pt-25">
      <div className="feature-extended-wrapper py-18 bg-theme-color bg-opacity-10">
        <div className="container">
          <div className="row flex justify-center">
            <div className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12">
              <div className="section-title text-center mb-15">
                <h1 className="mb-6">Why Choose BeanHQ</h1>
                <p className="text-lg">
                  {`Because we've been there and done it.
                  When you choose us, you’ll feel the benefit of 15 years’ experience 
                  of recuritment and selection.`}
                </p>
              </div>
            </div>
          </div>

          <div className="row flex flex-wrap">
            {whyFeatures.map((whyFeature, idx) => (
              <WhyCard {...whyFeature} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
