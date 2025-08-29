import { Award, Globe, Users, Target } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Investment opportunities across developed and emerging markets worldwide.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Consistent outperformance with rigorous risk management since 2008.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with decades of institutional investment experience.'
    },
    {
      icon: Target,
      title: 'Focused Strategy',
      description: 'Disciplined approach targeting absolute returns with controlled downside risk.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            About Global Market Consulting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2008, we are a premier institutional investment management firm 
            dedicated to delivering exceptional risk-adjusted returns through disciplined 
            global market strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-100 rounded-full mb-4 group-hover:bg-navy-200 transition-colors duration-200">
                <feature.icon className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-6">
                Our Investment Philosophy
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  We believe that superior investment returns are achieved through rigorous 
                  fundamental analysis, disciplined risk management, and a long-term perspective 
                  that transcends market cycles.
                </p>
                <p>
                  Our approach combines quantitative models with qualitative insights, 
                  enabling us to identify asymmetric risk-reward opportunities across 
                  global markets while maintaining strict downside protection.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-navy-900 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-gold-600 mb-2">AAA</div>
                <div className="text-gray-600">Credit Rating</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-navy-900 mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-gold-600 mb-2">24/7</div>
                <div className="text-gray-600">Global Trading</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}