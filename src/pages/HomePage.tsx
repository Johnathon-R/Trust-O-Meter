import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Star } from 'lucide-react';

import { getRatings } from '../utils/storage';
import { arrayEqual } from 'algosdk/dist/types/utils/utils';

const HomePage: React.FC = () => {
  return (
   <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-tech.jpg')" }}>
        <div className="absolute inset-0 bg-charcoal bg-opacity-75"></div>
        <div className="relative text-center max-w-3xl text-black px-6">
          <h1 className="text-6xl font-extrabold mb-4">Trust‑O‑Meter</h1>
          <p className="text-xl mb-8">Real‑time trust built on blockchain transparency.</p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-white text-charcoal px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Why Trust‑O‑Meter?</h2>
          <p className="text-gray-500 mt-4">Secure, verifiable trust built on honesty and tech.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: 'Immutable Ratings', desc: 'Blockchain‑stored scores you can’t tamper.' },
            { title: 'Visible Experience', desc: 'See real reviews from verified users.' },
            { title: 'Empower Decisions', desc: 'Know who to trust before interacting.' },
          ].map(i => (
            <div key={i.title} className="p-8 bg-slate-50 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{i.title}</h3>
              <p className="text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Ratings Section */}
      <section className="py-20 bg-gray-50 text-charcoal px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Ratings</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {getRatings().map(r => (
            <div key={r.id} className="bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-2">{r.eventName}</h4>
                <p className="text-gray-600 mb-4">{r.rating}</p>
              </div>
              <div className="" style={{width: `${r.rating}%`}}>
                {[...Array(5)].map((_, i) => {
                  const fill = Math.min(Math.max(r.rating - i, 0), 1) * 100;
                  return (
                    <div key={i} className= "relative w-6 h-6">
                      {/* Filled star (foreground mask) */}
                      <div className="absolute top-0 left-0 h-full overflow-hidden text-yellow-400" 
                        style={{ width: `${fill}%` }}
                      >
                        <Star className={`w-6 h-6 fill-yellow-400`}/>
                      </div>
                  </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-charcoal text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Start Building Trust</h2>
        <p className="text-lg mb-8">Rate your experiences—help everyone make smarter choices.</p>
        <Button className="bg-electric-blue text-white text-lg px-8 py-4 rounded-xl hover:bg-indigo-700">
          Get Started
        </Button>
      </section>

      
    </div>
  );
};

export default HomePage;