import { CheckCircle, Flame, TrendingUp, Target, Zap, AlertCircle, ArrowLeft } from 'lucide-react';

interface RedditAdsOTOProps {
  onBack: () => void;
}

export default function RedditAdsOTO({ onBack }: RedditAdsOTOProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white text-slate-800 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 opacity-10">
          <Flame className="w-96 h-96" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-yellow-300 text-red-600 px-6 py-2 rounded-full font-bold text-lg mb-6 animate-pulse">
            ONE-TIME OFFER
          </div>
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master Reddit Ads: The Deep Dive
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-50">
            The complete system for running profitable Reddit ad campaigns that drive qualified leads at a fraction of the cost of Facebook and Google.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block border-2 border-yellow-300">
            <p className="text-sm text-red-50 mb-2">Limited Time Price</p>
            <p className="text-6xl font-bold mb-2">$57</p>
            <p className="text-lg text-red-50 line-through">Originally $297</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <div className="flex items-start gap-4 mb-6">
            <Flame className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-montserrat text-3xl font-bold text-slate-800">
                Stop Fighting the Meta Algorithm
              </h2>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-slate-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Reddit's CPC is <span className="font-semibold">70% lower</span>, and the intent is <span className="font-semibold">10x higher</span>.
            </p>
            <p className="text-lg leading-relaxed">
              If you're not marketing on Reddit, you're making a <span className="font-bold text-red-600">COLOSSAL mistake</span>.
            </p>
            <p className="text-lg leading-relaxed">
              If you're still treating Reddit as an "experimental" channel, you're missing the most significant arbitrage opportunity in digital marketing right now.
            </p>
            <p className="text-lg leading-relaxed">
              While other platforms are getting crowded and more expensive, Reddit has quietly become the internet's Primary Trust Layer.
            </p>
          </div>
        </div>

        <div className="mb-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-8 text-center">
            Why the Reddit Ad Stack is Winning in 2026
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat text-xl font-bold text-slate-800 mb-3">Unrivaled Efficiency</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Reddit's average CPC remains <span className="font-semibold">50% to 70% lower</span> than Facebook and Instagram. You aren't just buying clicks; you're buying intent-driven traffic at a fraction of the cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat text-xl font-bold text-slate-800 mb-3">The "Search" Advantage</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    With Reddit's <span className="font-semibold">1,348% increase in Google visibility</span>, your ads often appear alongside the exact "authentic" conversations users are searching for.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat text-xl font-bold text-slate-800 mb-3">Intent vs. Interruption</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Unlike the "scroll-hole" of TikTok, Reddit users are <span className="font-semibold">22% more likely to be actively seeking information</span>. They aren't just passing time; they are looking for solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-8 text-center">
            The Numbers Don't Lie
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-600">
                <p className="text-2xl font-bold text-slate-800 mb-1">1.36B</p>
                <p className="text-slate-600">Monthly Active Users (and climbing)</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-600">
                <p className="text-2xl font-bold text-slate-800 mb-1">30 min</p>
                <p className="text-slate-600">U.S. Average Daily Engagement</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-600">
                <p className="text-2xl font-bold text-slate-800 mb-1">69%</p>
                <p className="text-slate-600">Incremental Reach (not on LinkedIn)</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-600">
                <p className="text-2xl font-bold text-slate-800 mb-1">74%</p>
                <p className="text-slate-600">Say Reddit Drives Buying Decisions</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-600">
                <p className="text-2xl font-bold text-slate-800 mb-1">90%</p>
                <p className="text-slate-600">Trust Reddit for Product Research</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-600">
                <p className="text-2xl font-bold text-slate-800 mb-1">116M</p>
                <p className="text-slate-600">Daily Active Users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-8 text-center">
            The "Hidden" Advantage
          </h2>
          <div className="max-w-3xl mx-auto text-slate-700 space-y-6">
            <p className="text-lg leading-relaxed">
              You don't need a <span className="font-bold">$10k creative budget</span>. Reddit thrives on "A-Level" text-based content. You don't need polished video or high-end photography to convert—you just need to provide value to the right community.
            </p>
            <p className="text-lg leading-relaxed">
              And this course teaches you exactly how to narrow in on your rabid target market for pennies on the dollar.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-600 mt-8">
              <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-4">Don't Just Join the Conversation—Own the Category</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Stop wasting your ad budget on saturated feeds where your brand is ignored. Leverage the platform that Google uses to train its AI and that 116 million people use every single day to decide what to buy.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-12 text-center">
            What You'll Learn in This Deep Dive
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Reddit Ads Fundamentals</h3>
                  <p className="text-slate-600">
                    Master the Reddit Ads platform from the ground up. Understand campaign types, ad formats, targeting options, and how Reddit's algorithm differs from Facebook and Google.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Setup Reddit Ad Campaigns</h3>
                  <p className="text-slate-600">
                    Learn the exact step-by-step process for setting up your first Reddit ad campaign. Avoid costly mistakes and get your ads live in minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Subreddit Targeting Mastery</h3>
                  <p className="text-slate-600">
                    Pinpoint your ideal audience using Reddit's unique targeting options. Learn how to research the obvious and not-so-obvious subreddits and find hidden gems to target.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Keyword & Interest Targeting</h3>
                  <p className="text-slate-600">
                    Go beyond subreddits. Learn advanced targeting by keywords, interests, and behaviors to reach your exact target market.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Budgeting & Bidding Strategies</h3>
                  <p className="text-slate-600">
                    Optimize your ad spend for maximum ROI. Learn about different bid types, when to use them, and how to scale profitably.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Ad Copy That Converts</h3>
                  <p className="text-slate-600">
                    Craft compelling Reddit ads that resonate with Redditors and move them to action. Learn the psychology and copywriting formulas that work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Analytics & Performance Tracking</h3>
                  <p className="text-slate-600">
                    Measure the performance of your campaigns and know how you can tweak and adapt performing ads for better results and more leads.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Real-World Case Studies</h3>
                  <p className="text-slate-600">
                    Analyze real-world examples of successful and failed Reddit ad campaigns. Learn one of the biggest (and easiest) ways to create compelling ads.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Comment Strategy & Engagement</h3>
                  <p className="text-slate-600">
                    Navigate the world of comments, upvotes, and downvotes to create positive brand sentiment and learn when to turn off comments on your ads.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Avoiding Common Pitfalls</h3>
                  <p className="text-slate-600">
                    Learn the common mistakes advertisers make on Reddit and how to avoid them. Don't be the cautionary tale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Advanced Spy Tools</h3>
                  <p className="text-slate-600">
                    Use tools like GummySearch and others to spy on your competitors and craft better content that outperforms the market.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Lead Generation Secrets</h3>
                  <p className="text-slate-600">
                    Learn how to generate leads for FREE on Reddit, plus how to leverage paid ads to scale your lead generation machine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-8 text-center">
            Who This Is For
          </h2>
          <div className="max-w-3xl mx-auto text-slate-700 space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Digital marketers looking to expand their advertising platforms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Small business owners seeking cost-effective advertising solutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Anyone struggling for leads and looking for a competitive advantage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-lg">People curious about the potential of Reddit as an advertising medium</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Anyone ready to reach their ideal customer at a low cost on a highly engaged platform</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-12 text-center shadow-2xl mb-16">
          <h2 className="font-montserrat text-4xl font-bold mb-4">
            This Offer Expires Soon
          </h2>
          <p className="text-xl mb-8 text-red-50 max-w-2xl mx-auto">
            Lock in this price before Reddit Ads become as expensive as Facebook. This is your chance to get in early.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 inline-block mb-8 border-2 border-yellow-300">
            <p className="text-sm text-red-50 mb-2">Your Investment</p>
            <p className="text-6xl font-bold mb-2">$57</p>
            <p className="text-lg text-red-50 line-through mb-3">Regularly $297</p>
            <p className="text-red-100">One-time payment • Lifetime access</p>
          </div>
          <div className="mb-8">
            <a href="https://digitalabc.lemonsqueezy.com/checkout/buy/5f0bfec7-3dc5-4cff-b4fc-1b169e8b0cb9" className="inline-block bg-yellow-300 text-red-600 px-16 py-6 rounded-lg text-2xl font-bold hover:bg-yellow-200 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Claim Your Spot Now
            </a>
          </div>
          <p className="text-red-50 text-lg">
            30-Day Money-Back Guarantee • No Questions Asked
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="font-montserrat text-3xl font-bold text-slate-800 mb-8 text-center">
            Why You Need This Now
          </h2>
          <div className="max-w-3xl mx-auto text-slate-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Look, you can make all the mistakes, OR you can save time and learn how to find the best subreddits and make the right kinds of ads that convert traffic to leads at a fraction of the cost.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-red-600">
              So get this course right now. It could change the trajectory of your entire business.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <a href="https://digitalabc.lemonsqueezy.com/checkout/buy/5f0bfec7-3dc5-4cff-b4fc-1b169e8b0cb9" className="inline-block bg-red-600 text-white px-16 py-6 rounded-lg text-2xl font-bold hover:bg-red-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
            Get Reddit Ads Mastery for $57
          </a>
          <p className="text-slate-600 mt-4 text-lg">
            Limited time offer • 30-day guarantee
          </p>
        </div>
      </div>

      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-bold mb-2">Reddit Ads Mastery</h3>
              <p className="text-sm text-slate-400">
                Master profitable Reddit advertising in 2026.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="https://www.andrewmurrayhq.com/support" className="hover:text-orange-400 transition-colors">Contact</a>
              <a href="https://www.andrewmurrayhq.com/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="https://www.andrewmurrayhq.com/terms" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Reddit Marketing Mastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
