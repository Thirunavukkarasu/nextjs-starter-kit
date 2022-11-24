import { features } from "../constants";

const FeatureCard = ({ title, description, icon }: any) => {
  return (
    <div className="w-full md:w-8/12 lg:w-4/12">
      <div className="text-center px-3 2xl:px-10 py-8">
        <div className="feature-icon">{icon}</div>
        <div className="content">
          <h3 className="mb-5">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function FeatureSection() {
  return (
    <section id="features" className="feature-section pt-120">
      <div className="container">
        <div className="row flex justify-center">
          {features.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
