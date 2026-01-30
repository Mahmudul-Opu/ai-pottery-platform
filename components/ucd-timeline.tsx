'use client';

import { CheckCircle, Eye, Lightbulb, RefreshCw } from 'lucide-react';

interface UCDTimelineProps {
  className?: string;
}

export default function UCDTimeline({ className = '' }: UCDTimelineProps) {
  const stages = [
    {
      id: 1,
      title: 'Contextual Inquiry',
      icon: Eye,
      color: 'emerald',
      activities: [
        'Semi-structured interviews with artisans',
        'Direct observation of work practices',
        'Understanding digital literacy levels',
        'Identifying cultural context and constraints',
        'Documenting current marketing approaches'
      ],
      outcome: 'Identified mobile-first usage, visual communication preferences, and accessibility needs'
    },
    {
      id: 2,
      title: 'Design and Development',
      icon: Lightbulb,
      color: 'amber',
      activities: [
        'Mobile-first responsive architecture',
        'Icon-based navigation system',
        'Minimal text input requirements',
        'Culturally-embedded visual design',
        'Lightweight AI integration with artisan control'
      ],
      outcome: 'Prototype platform optimized for low-literacy users with ethical AI assistance'
    },
    {
      id: 3,
      title: 'Evaluation and Iteration',
      icon: RefreshCw,
      color: 'emerald',
      activities: [
        'Controlled usability testing (n=35)',
        'Task success rate measurement',
        'Trust and transparency evaluation',
        'Iterative refinement cycles',
        'Validation of personalization features'
      ],
      outcome: 'Validated design decisions and identified areas for continuous improvement'
    }
  ];

  const getColorClasses = (color: string) => {
    if (color === 'emerald') {
      return {
        bg: 'bg-emerald-100',
        darkBg: 'dark:bg-emerald-900',
        icon: 'text-emerald-700',
        darkIcon: 'dark:text-emerald-400',
        border: 'border-emerald-700',
        darkBorder: 'dark:border-emerald-400',
        line: 'bg-emerald-300',
        darkLine: 'dark:bg-emerald-700'
      };
    }
    return {
      bg: 'bg-amber-100',
      darkBg: 'dark:bg-amber-900',
      icon: 'text-amber-700',
      darkIcon: 'dark:text-amber-400',
      border: 'border-amber-700',
      darkBorder: 'dark:border-amber-400',
      line: 'bg-amber-300',
      darkLine: 'dark:bg-amber-700'
    };
  };

  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            User-Centered Design Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our iterative three-stage methodology grounded in Human-Computer Interaction best practices
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-300 dark:from-emerald-700 dark:via-amber-700 dark:to-emerald-700" 
                 style={{ top: '4rem' }} />

            {/* Stages */}
            <div className="grid grid-cols-3 gap-8 relative">
              {stages.map((stage, index) => {
                const colors = getColorClasses(stage.color);
                const Icon = stage.icon;

                return (
                  <div key={stage.id} className="relative">
                    {/* Icon Circle */}
                    <div className="flex justify-center mb-6">
                      <div 
                        className={`w-16 h-16 rounded-full ${colors.bg} ${colors.darkBg} flex items-center justify-center border-4 ${colors.border} ${colors.darkBorder} bg-white dark:bg-gray-900 relative z-10 shadow-lg transition-transform hover:scale-110`}
                      >
                        <Icon className={`h-8 w-8 ${colors.icon} ${colors.darkIcon}`} />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-2xl font-bold ${colors.icon} ${colors.darkIcon}`}>
                          {stage.id}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {stage.title}
                        </h3>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Activities:
                        </h4>
                        <ul className="space-y-1">
                          {stage.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`pt-4 border-t ${colors.border} ${colors.darkBorder} border-opacity-30`}>
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Outcome:
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          {stage.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 via-amber-300 to-emerald-300 dark:from-emerald-700 dark:via-amber-700 dark:to-emerald-700" />

            {/* Stages */}
            <div className="space-y-8 relative">
              {stages.map((stage) => {
                const colors = getColorClasses(stage.color);
                const Icon = stage.icon;

                return (
                  <div key={stage.id} className="relative pl-20">
                    {/* Icon Circle */}
                    <div className="absolute left-0 top-0">
                      <div 
                        className={`w-16 h-16 rounded-full ${colors.bg} ${colors.darkBg} flex items-center justify-center border-4 ${colors.border} ${colors.darkBorder} bg-white dark:bg-gray-900 shadow-lg transition-transform hover:scale-110`}
                      >
                        <Icon className={`h-8 w-8 ${colors.icon} ${colors.darkIcon}`} />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-2xl font-bold ${colors.icon} ${colors.darkIcon}`}>
                          {stage.id}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {stage.title}
                        </h3>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Activities:
                        </h4>
                        <ul className="space-y-1">
                          {stage.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`pt-4 border-t ${colors.border} ${colors.darkBorder} border-opacity-30`}>
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Outcome:
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          {stage.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            This iterative process emphasized continuous user involvement, with artisans participating as 
            co-designers rather than passive research subjects. Each stage informed the next, with findings 
            and feedback directly shaping design decisions and technical implementation.
          </p>
        </div>
      </div>
    </div>
  );
}
