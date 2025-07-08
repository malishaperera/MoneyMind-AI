import HeroSection from "@/components/hero";
import {featuresData, howItWorksData, statsData, testimonialsData} from "@/data/landing";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <div className="mt-20 min-h-screen bg-[#f9fafb] text-[#1e293b] font-sans">
          <HeroSection />

          {/* Stats Section */}
          <section className="py-24 bg-white shadow-md rounded-lg">
              <div className="container mx-auto px-6 max-w-6xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                      {statsData.map((stat, index) => (
                          <div key={index} className="transform transition-transform hover:scale-105">
                              <div className="text-6xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-400 mb-2">
                                  {stat.value}
                              </div>
                              <div className="uppercase tracking-widest text-sm text-gray-500">{stat.label}</div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* Features Section */}
          <section className="py-24 bg-[#e0f2f1]">
              <div className="container mx-auto px-6 max-w-7xl">
                  <h2 className="text-5xl font-extrabold text-center text-[#134e4a] mb-16 drop-shadow-sm">
                      Discover Smart Financial Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                      {featuresData.map((feature, index) => (
                          <Card
                              key={index}
                              className="bg-white border border-teal-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 rounded-xl"
                          >
                              <CardContent className="space-y-6 pt-10 pb-10 px-10 text-center text-[#134e4a]">
                                  <div className="flex justify-center text-gradient text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-400">
                                      {feature.icon}
                                  </div>
                                  <h3 className="text-3xl font-semibold">{feature.title}</h3>
                                  <p className="text-teal-700 text-lg">{feature.description}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </div>
          </section>

          {/* How It Works Section */}
          <section className="py-24 bg-white shadow-md rounded-lg">
              <div className="container mx-auto px-6 max-w-6xl">
                  <h2 className="text-5xl font-extrabold text-center text-[#134e4a] mb-20 drop-shadow-sm">
                      How Finance Wealth IQ Works
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      {howItWorksData.map((step, index) => (
                          <div
                              key={index}
                              className="text-center px-8 text-[#134e4a] hover:text-teal-700 transition-colors duration-300"
                          >
                              <div className="w-24 h-24 bg-gradient-to-tr from-teal-600 via-cyan-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-5xl shadow-md">
                                  {step.icon}
                              </div>
                              <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                              <p className="text-teal-700 text-lg leading-relaxed">{step.description}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 bg-[#e0f2f1]">
              <div className="container mx-auto px-6 max-w-7xl">
                  <h2 className="text-5xl font-extrabold text-center text-[#134e4a] mb-20 drop-shadow-sm">
                      What Our Users Say
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                      {testimonialsData.map((testimonial, index) => (
                          <Card
                              key={index}
                              className="p-8 bg-white border border-teal-300 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-xl"
                          >
                              <CardContent className="pt-4 flex flex-col items-center space-y-6 text-[#134e4a]">
                                  {/*<Image*/}
                                  {/*    src={testimonial.image}*/}
                                  {/*    alt={testimonial.name}*/}
                                  {/*    width={72}*/}
                                  {/*    height={72}*/}
                                  {/*    className="rounded-full object-cover border-4 border-gradient-to-r from-teal-600 via-cyan-500 to-teal-400 shadow-sm"*/}
                                  {/*/>*/}
                                  <div className="text-center">
                                      <div className="font-semibold text-xl">{testimonial.name}</div>
                                      <div className="text-sm text-yellow-500 mb-3">{testimonial.role}</div>
                                      <p className="italic text-teal-700 text-lg">"{testimonial.quote}"</p>
                                  </div>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-32 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-400 shadow-md rounded-t-2xl ">
              <div className="container mx-auto px-6 max-w-3xl text-center text-white drop-shadow-md">
                  <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
                      Ready to Take Control of Your Financial Future?
                  </h2>
                  <p className="mb-14 text-xl font-light max-w-xl mx-auto leading-relaxed">
                      Join thousands of users who trust Finance Wealth IQ to grow and manage their wealth effortlessly.
                  </p>
                  <Link href="/dashboard" passHref>
                      <Button
                          size="lg"
                          className="bg-yellow-400 text-teal-900 font-bold hover:bg-yellow-300 shadow-lg transition-transform transform hover:scale-105"
                      >
                          Start Your Free Trial
                      </Button>
                  </Link>
              </div>
          </section>
      </div>
  );
}