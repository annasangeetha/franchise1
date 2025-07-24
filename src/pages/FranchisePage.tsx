import React from 'react';
import { Users, Award, TrendingUp, MapPin, Phone, Mail, Star } from 'lucide-react';

const FranchisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Franchise Opportunities</h1>
          <p className="text-lg text-gray-600 mb-6">
            Join our growing network of successful franchise partners
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
            <Award size={16} />
            Proven Business Model
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="text-blue-600" size={24} />
              Why Choose PRNV Services Franchise?
            </h2>
            <p className="mb-4">
              PRNV Services offers an exciting franchise opportunity for entrepreneurs looking to enter 
              the rapidly growing home services market. Our proven business model eliminates middlemen 
              and creates direct connections between service providers and customers.
            </p>
            <p className="mb-4">
              As a franchise partner, you'll benefit from our established brand, comprehensive training, 
              ongoing support, and innovative technology platform that sets us apart from competitors.
            </p>
          </div>

          {/* Franchise Benefits */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Star className="text-blue-600" size={24} />
              Franchise Benefits
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Established Brand:</strong> Leverage our growing reputation and market presence</li>
              <li><strong>Proven Business Model:</strong> No middlemen, direct connections, higher profits</li>
              <li><strong>Comprehensive Training:</strong> Complete business and operational training</li>
              <li><strong>Technology Platform:</strong> Advanced app and web platform for seamless operations</li>
              <li><strong>Marketing Support:</strong> National and local marketing campaigns</li>
              <li><strong>Ongoing Support:</strong> Continuous business development assistance</li>
              <li><strong>Protected Territory:</strong> Exclusive operating area rights</li>
              <li><strong>Multiple Revenue Streams:</strong> Subscription fees, advertising, and premium services</li>
            </ul>
          </div>

          {/* Investment Details */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="text-blue-600" size={24} />
              Investment & Requirements
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Investment Range</h3>
              <p className="mb-2"><strong>Initial Franchise Fee:</strong> ₹2,00,000 - ₹5,00,000</p>
              <p className="mb-2"><strong>Total Investment:</strong> ₹5,00,000 - ₹15,00,000</p>
              <p className="mb-2"><strong>Working Capital:</strong> ₹2,00,000 - ₹5,00,000</p>
              <p className="text-sm text-gray-600">*Investment varies based on city tier and territory size</p>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Ideal Candidate Profile</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Business experience or entrepreneurial mindset</li>
              <li>Strong local network and community connections</li>
              <li>Commitment to quality service and customer satisfaction</li>
              <li>Financial capability to sustain operations</li>
              <li>Willingness to follow proven systems and processes</li>
            </ul>
          </div>

          {/* Support & Training */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Support & Training Program</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Initial Training</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>2-week comprehensive training program</li>
                  <li>Business operations and management</li>
                  <li>Technology platform training</li>
                  <li>Marketing and customer acquisition</li>
                  <li>Financial management and reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ongoing Support</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Regular business reviews and guidance</li>
                  <li>Marketing campaign support</li>
                  <li>Technology updates and enhancements</li>
                  <li>Performance monitoring and optimization</li>
                  <li>24/7 technical support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Initial Inquiry</h4>
                <p className="text-xs text-gray-600 mt-1">Submit application form</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Evaluation</h4>
                <p className="text-xs text-gray-600 mt-1">Profile assessment & interview</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Agreement</h4>
                <p className="text-xs text-gray-600 mt-1">Sign franchise agreement</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Launch</h4>
                <p className="text-xs text-gray-600 mt-1">Training & business launch</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Phone className="text-blue-600" size={24} />
              Get Started Today
            </h2>
            <p className="mb-4">
              Ready to join our franchise network? Contact our franchise development team to learn more 
              about this exciting opportunity.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="text-blue-600" size={20} />
                <span className="text-sm font-medium">Franchise Hotline</span>
                <span className="text-sm text-gray-600">+91 98765 43210</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="text-blue-600" size={20} />
                <span className="text-sm font-medium">Email</span>
                <span className="text-sm text-gray-600">franchise@prnvservices.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-sm font-medium">Head Office</span>
                <span className="text-sm text-gray-600">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Join the PRNV Services Family Today!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Apply for Franchise
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FranchisePage;