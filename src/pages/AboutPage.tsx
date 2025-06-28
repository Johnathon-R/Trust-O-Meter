import React, { useEffect, useState } from 'react';
import { Shield, BarChart3, Lock, Zap, Sparkles } from 'lucide-react';
import { useTranslation } from '../backend/useTranslation.ts';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-4 relative overflow-hidden transition-all duration-500">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full opacity-30"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
          <h1 className="font-inter font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            {t.about.title}
          </h1>
          <p className="font-inter text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Mission Section */}
        <div className={`group relative mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="font-inter font-bold text-2xl text-white dark:text-gray-100 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              {t.about.mission.title}
            </h2>
            <p className="font-inter text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
              {t.about.mission.description1}
            </p>
            <p className="font-inter text-gray-300 dark:text-gray-400 leading-relaxed">
              {t.about.mission.description2}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-2 gap-6 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-white dark:text-gray-100 mb-2">{t.about.features.anonymity.title}</h3>
              <p className="font-inter text-gray-300 dark:text-gray-400">
                {t.about.features.anonymity.description}
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-white dark:text-gray-100 mb-2">{t.about.features.immutable.title}</h3>
              <p className="font-inter text-gray-300 dark:text-gray-400">
                {t.about.features.immutable.description}
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-white dark:text-gray-100 mb-2">{t.about.features.instantVerification.title}</h3>
              <p className="font-inter text-gray-300 dark:text-gray-400">
                {t.about.features.instantVerification.description}
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-white dark:text-gray-100 mb-2">{t.about.features.realTimeAnalytics.title}</h3>
              <p className="font-inter text-gray-300 dark:text-gray-400">
                {t.about.features.realTimeAnalytics.description}
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className={`group relative mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="font-inter font-bold text-2xl text-white dark:text-gray-100 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-purple-400" />
              {t.about.howItWorks.title}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group/step hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover/step:rotate-12 transition-transform duration-300">
                  <span className="font-inter font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-white dark:text-gray-100 mb-1">{t.about.howItWorks.steps.submit.title}</h3>
                  <p className="font-inter text-gray-300 dark:text-gray-400">{t.about.howItWorks.steps.submit.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group/step hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover/step:rotate-12 transition-transform duration-300">
                  <span className="font-inter font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-white dark:text-gray-100 mb-1">{t.about.howItWorks.steps.process.title}</h3>
                  <p className="font-inter text-gray-300 dark:text-gray-400">{t.about.howItWorks.steps.process.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group/step hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover/step:rotate-12 transition-transform duration-300">
                  <span className="font-inter font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-white dark:text-gray-100 mb-1">{t.about.howItWorks.steps.record.title}</h3>
                  <p className="font-inter text-gray-300 dark:text-gray-400">{t.about.howItWorks.steps.record.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group/step hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover/step:rotate-12 transition-transform duration-300">
                  <span className="font-inter font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-white dark:text-gray-100 mb-1">{t.about.howItWorks.steps.view.title}</h3>
                  <p className="font-inter text-gray-300 dark:text-gray-400">{t.about.howItWorks.steps.view.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className={`group relative transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="font-inter font-bold text-2xl text-white dark:text-gray-100 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-400" />
              {t.about.technology.title}
            </h2>
            <p className="font-inter text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
              {t.about.technology.description}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="font-inter text-gray-300 dark:text-gray-400">{t.about.technology.features.instant}</span>
              </li>
              <li className="flex items-center space-x-3 group/item hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="font-inter text-gray-300 dark:text-gray-400">{t.about.technology.features.minimal}</span>
              </li>
              <li className="flex items-center space-x-3 group/item hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="font-inter text-gray-300 dark:text-gray-400">{t.about.technology.features.carbon}</span>
              </li>
              <li className="flex items-center space-x-3 group/item hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="font-inter text-gray-300 dark:text-gray-400">{t.about.technology.features.security}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;