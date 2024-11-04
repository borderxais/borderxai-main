import React, { useState } from 'react';
import { Brain, Sparkles, Target, Users, AlertCircle, Loader2, Hash, Calendar } from 'lucide-react';

export function IdeationEngine() {
  const [formData, setFormData] = useState({
    productUrl: '',
    targetAudience: '',
    contentGoals: '',
    brandTone: 'casual',
    contentTypes: [] as string[],
    preferredLength: '15',
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedIdeas({
        contentBriefs: [
          {
            title: "Morning Skincare Routine",
            hook: "Get ready with me using our new facial cleanser",
            keyPoints: [
              "Show product application technique",
              "Highlight instant glow effect",
              "Share user testimonials"
            ],
            estimatedEngagement: "High",
            recommendedHashtags: ["#skincare", "#morningroutine", "#glowup"],
            suggestedSound: "Trending Morning Routine Sound",
            visualStyle: "Bright, clean aesthetic with close-up shots"
          },
          {
            title: "Product Benefits Showcase",
            hook: "3 reasons why this cleanser is different",
            keyPoints: [
              "Natural ingredients spotlight",
              "Before/after results",
              "Expert dermatologist quote"
            ],
            estimatedEngagement: "Medium-High",
            recommendedHashtags: ["#skincaretips", "#beautyhacks", "#skincareproducts"],
            suggestedSound: "Upbeat Tutorial Music",
            visualStyle: "Split-screen comparisons with text overlays"
          }
        ],
        recommendedTimes: {
          bestDays: ["Wednesday", "Sunday"],
          bestHours: ["9:00 AM", "7:00 PM"]
        },
        trendAlignment: {
          relevantTrends: ["Clean Beauty", "Sustainable Packaging"],
          recommendedAngles: ["Eco-friendly focus", "Transparent ingredients"]
        }
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Generate Content Ideas</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product/Service URL
              </label>
              <input
                type="text"
                value={formData.productUrl}
                onChange={(e) => setFormData({ ...formData, productUrl: e.target.value })}
                placeholder="Enter product page URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience
              </label>
              <input
                type="text"
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                placeholder="e.g., Women 25-34 interested in skincare"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Goals
              </label>
              <textarea
                value={formData.contentGoals}
                onChange={(e) => setFormData({ ...formData, contentGoals: e.target.value })}
                placeholder="What do you want to achieve with this content?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Tone
                </label>
                <select
                  value={formData.brandTone}
                  onChange={(e) => setFormData({ ...formData, brandTone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="casual">Casual & Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="luxury">Luxury & Sophisticated</option>
                  <option value="playful">Playful & Fun</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Length
                </label>
                <select
                  value={formData.preferredLength}
                  onChange={(e) => setFormData({ ...formData, preferredLength: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="15">15 seconds</option>
                  <option value="30">30 seconds</option>
                  <option value="60">60 seconds</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Types
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Tutorial', 'Review', 'Behind the Scenes', 'Tips & Tricks'].map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.contentTypes.includes(type)}
                      onChange={(e) => {
                        const types = e.target.checked
                          ? [...formData.contentTypes, type]
                          : formData.contentTypes.filter(t => t !== type);
                        setFormData({ ...formData, contentTypes: types });
                      }}
                      className="rounded text-indigo-600"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate Ideas
                </>
              )}
            </button>
          </form>
        </div>

        {/* Generated Ideas */}
        {generatedIdeas && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Content Recommendations</h2>
            
            {generatedIdeas.contentBriefs.map((brief: any, index: number) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4">{brief.title}</h3>
                <p className="text-gray-600 mb-4">{brief.hook}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Points</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {brief.keyPoints.map((point: string, i: number) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {brief.recommendedHashtags.map((tag: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-500">Suggested Sound</span>
                      <p className="font-medium">{brief.suggestedSound}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Est. Engagement</span>
                      <p className="font-medium text-green-600">{brief.estimatedEngagement}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-sm text-gray-500">Visual Style</span>
                    <p className="text-gray-700">{brief.visualStyle}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Posting Schedule */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <h3 className="text-lg font-semibold">Recommended Posting Schedule</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Best Days to Post</h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedIdeas.recommendedTimes.bestDays.map((day: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Best Times</h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedIdeas.recommendedTimes.bestHours.map((time: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}