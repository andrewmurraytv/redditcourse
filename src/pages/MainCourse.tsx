import { CheckCircle, Target, TrendingUp, Users, Zap, BookOpen, BarChart3, MessageSquare, Search, FolderPlus, Flame } from 'lucide-react';

interface MainCourseProps {
  onOTOClick: () => void;
}

export default function MainCourse({ onOTOClick }: MainCourseProps) {
  return (
    <>
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 px-6 relative overflow-hidden">
        <svg className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block" width="400" height="400" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="180" r="140" fill="white"/>
          <circle cx="260" cy="160" r="25" fill="#FF4500"/>
          <circle cx="340" cy="160" r="25" fill="#FF4500"/>
          <circle cx="260" cy="160" r="12" fill="white"/>
          <circle cx="340" cy="160" r="12" fill="white"/>
          <path d="M 250 210 Q 300 240 350 210" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <circle cx="180" cy="150" r="35" fill="white"/>
          <circle cx="420" cy="150" r="35" fill="white"/>
          <ellipse cx="300" cy="360" rx="100" ry="140" fill="white"/>
          <ellipse cx="240" cy="420" rx="40" ry="80" fill="white"/>
          <ellipse cx="360" cy="420" rx="40" ry="80" fill="white"/>
          <path d="M 300 100 L 280 40 L 320 50 Z" fill="white"/>
          <circle cx="280" cy="35" r="20" fill="white"/>
        </svg>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master Reddit Marketing: Turn Upvotes Into Revenue
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-50">
            The Complete Guide to Getting Traffic, Building Authority, and Scaling Your Business on Reddit as a Solopreneur
          </p>
          <a href="https://digitalabc.lemonsqueezy.com/checkout/buy/e8eeea29-238f-4251-a993-cae7a0dd74f9" className="inline-block bg-white text-orange-600 px-12 py-5 rounded-lg text-xl font-bold hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Enroll Now
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-8 text-center">
            Why Reddit is a Goldmine for Solopreneurs (That Most People Miss)
          </h2>
          <div className="max-w-4xl mx-auto text-slate-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Reddit isn't just another social media platform. With over 500 million monthly active users and 100,000+ active communities, it's the internet's largest collection of passionate, engaged audiences discussing every topic imaginable. But here's the catch: most marketers fail miserably on Reddit because they treat it like Facebook or Instagram.
            </p>
            <p className="text-lg leading-relaxed">
              Reddit users are notoriously anti-marketing. They can smell self-promotion from a mile away. Traditional marketing tactics that work elsewhere will get you downvoted into oblivion, shadowbanned, or worse—publicly called out and mocked. This has scared away most marketers, which means less competition for those who understand how Reddit really works.
            </p>
            <p className="text-lg leading-relaxed">
              The truth is, Reddit can be one of your most powerful traffic sources as a solopreneur. I've seen solopreneurs drive thousands of targeted visitors to their websites, build email lists of engaged subscribers, and generate consistent revenue—all from Reddit. The key is understanding Reddit's unique culture, following the unwritten rules, and providing genuine value before ever mentioning your product or service.
            </p>
            <p className="text-lg leading-relaxed">
              When done correctly, Reddit marketing allows you to tap into highly specific, passionate communities where your ideal customers already hang out. Whether you're a SaaS founder, course creator, freelancer, or selling physical products, there are subreddits filled with people actively looking for solutions you provide. The question isn't whether your audience is on Reddit—it's whether you know how to reach them effectively.
            </p>
          </div>
        </div>

        <div className="mb-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-8 text-center">
            So Why Reddit?
          </h2>
          <div className="max-w-4xl mx-auto text-slate-700 space-y-6 mb-8">
            <p className="text-lg leading-relaxed">
              Reddit has reached <span className="font-semibold">1.36 billion monthly active users</span> and <span className="font-semibold">116 million daily active users</span> as of 2025, representing massive year over year expansion. The platform now has <span className="font-semibold">443.8 million weekly active users</span>, up from 365.4 million in Q3 2024.
            </p>
            <p className="text-lg leading-relaxed">
              What makes these numbers particularly meaningful is the depth of engagement. Users spend an average of <span className="font-semibold">20 minutes per day</span> on the platform, and U.S. users specifically average about <span className="font-semibold">30 minutes daily</span>!
            </p>

            <h3 className="font-montserrat text-2xl font-bold text-slate-800 mt-8 mb-4">Why This Matters for YOU:</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-montserrat font-bold text-slate-800 mb-3 text-lg">Search Visibility</h4>
                <p className="text-lg leading-relaxed">
                  Reddit experienced a staggering <span className="font-semibold">1,348% increase in Google visibility in 2025</span>, becoming the internet's go-to source for authentic human perspectives and product recommendations.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Google made a <span className="font-semibold">$60 Million dollar annual deal</span> with Reddit to train on their platform. The deal allows Google to use Reddit's data to train its AI models and enhance search, specifically through enhanced crawling of content. This partnership significantly increased Reddit's visibility in search results and AI-driven answers. (Meaning you'll show up in ChatGPT results!)
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  When people search for reviews or recommendations, they're increasingly adding "reddit" to their Google queries.
                </p>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-slate-800 mb-3 text-lg">Trust & Purchase Intent</h4>
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">74% of Reddit users</span> say the platform influences their purchasing decisions, and <span className="font-semibold">90% of Reddit users</span> trust the platform to learn about new products. Reddit users are <span className="font-semibold">22% more likely</span> to intentionally seek content than users on other social platforms.
                </p>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-slate-800 mb-3 text-lg">B2B Growth</h4>
                <p className="text-lg leading-relaxed">
                  You're probably hearing about Reddit on LinkedIn and B2B platforms - it's no longer a secret.
                </p>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-slate-800 mb-3 text-lg">Cost Effectiveness</h4>
                <p className="text-lg leading-relaxed">
                  Reddit's CPC is <span className="font-semibold">50 to 70% lower</span> than Facebook and Instagram, making it an attractive option for brands looking to stretch their ad budgets.
                </p>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-slate-800 mb-3 text-lg">Unique Audience Reach</h4>
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">45% of Reddit users aren't on Instagram, 69% aren't on LinkedIn, and 58% aren't on TikTok</span>, meaning you can reach audiences that other platforms simply can't access.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-8">
              <p className="text-lg font-semibold text-slate-800 mb-4">But the best part is...</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span className="text-lg leading-relaxed">You don't need to work at constantly keeping up a social media following on Reddit. In fact, you don't need one at all.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span className="text-lg leading-relaxed">You don't need pretty images or polished videos to grab attention in the social media feed.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span className="text-lg leading-relaxed">You just need A-Level text-based content. So it's perfect for marketers - and easy to generate leads and traffic right away!</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed pt-6">
              Look, you can make all the mistakes, or save time and learn how to find the best subreddits and make the right kinds of posts that drive traffic and leads to your site by buying this course right now.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-12 text-center">
            What You'll Master in This Course
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <Target className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Reddit Fundamentals & Culture</h3>
                  <p className="text-slate-600">
                    Understand Reddit's unique ecosystem, karma system, subreddit hierarchies, and the unwritten rules that govern every community. Learn how to build credibility and avoid common mistakes that get beginners banned.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <Users className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Finding Your Target Subreddits</h3>
                  <p className="text-slate-600">
                    Discover the exact framework for identifying subreddits where your ideal customers congregate. Learn advanced research techniques to uncover hidden gem communities with engaged audiences and less competition.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <MessageSquare className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Creating Content That Gets Upvoted</h3>
                  <p className="text-slate-600">
                    Master the art of writing posts and comments that provide genuine value, spark discussions, and naturally attract attention to your expertise—without being salesy or promotional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <TrendingUp className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Driving Traffic Ethically</h3>
                  <p className="text-slate-600">
                    Learn proven strategies to direct Reddit traffic to your website, landing pages, or offers without violating subreddit rules. Discover when and how to subtly mention your business for maximum impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <BarChart3 className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Reddit Ads Mastery</h3>
                  <p className="text-slate-600">
                    Unlock the power of Reddit's advertising platform. Learn to create high-converting ad campaigns, target specific communities, optimize your ad spend, and scale profitable campaigns that actually work on Reddit's unique platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <Zap className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Advanced Growth Tactics</h3>
                  <p className="text-slate-600">
                    Discover advanced strategies including AMA (Ask Me Anything) campaigns, community building, leveraging Reddit trends, and creating viral content that positions you as an authority in your niche.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <Search className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Reddit for SEO</h3>
                  <p className="text-slate-600">
                    Learn how to leverage Reddit posts to rank in search engine results pages (SERPs) and use Reddit strategically to boost your own website's SEO. Discover how Reddit can become a powerful backlink and traffic source that improves your search visibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <FolderPlus className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Own Your Piece of Reddit</h3>
                  <p className="text-slate-600">
                    Master the art of starting and growing your own subreddit. Learn how to build a dedicated community around your niche, establish yourself as a leader, and create a sustainable long-term asset that drives consistent traffic and engagement to your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            The Reddit Marketing Approach That Actually Works
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">Value-First Mindset</h3>
                <p className="text-slate-300">
                  Learn how to give before you ask. Understand the 90/10 rule: 90% pure value, 10% subtle promotion. Build trust and credibility by genuinely helping people first.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">Strategic Timing & Consistency</h3>
                <p className="text-slate-300">
                  Discover the optimal posting times for maximum visibility, how to maintain consistent presence without burning out, and batching strategies for efficient Reddit marketing as a busy solopreneur.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">Community Integration</h3>
                <p className="text-slate-300">
                  Master the art of becoming a respected community member first, marketer second. Learn how to engage authentically, build relationships with moderators, and earn the right to promote.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">Data-Driven Optimization</h3>
                <p className="text-slate-300">
                  Track what works and double down. Learn which metrics matter, how to analyze your performance, and the iterative process for continuously improving your Reddit marketing results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-8 text-center">
            Why Reddit Ads Deserve Their Own Section
          </h2>
          <div className="max-w-4xl mx-auto text-slate-700 space-y-6 mb-8">
            <p className="text-lg leading-relaxed">
              While organic Reddit marketing is powerful, Reddit Ads open up an entirely different dimension of opportunity. Most marketers overlook Reddit Ads because they assume they won't work—but that's exactly why they're so effective for those who know how to use them.
            </p>
            <p className="text-lg leading-relaxed">
              Reddit's advertising platform allows you to target specific subreddits with laser precision. Imagine being able to advertise directly to r/entrepreneur, r/SaaS, or r/freelance—placing your message in front of thousands of people who are already interested in exactly what you offer. This level of targeting is almost impossible on other platforms.
            </p>
            <p className="text-lg leading-relaxed">
              The challenge with Reddit Ads is that traditional ad copy fails spectacularly. Reddit users are incredibly savvy and can spot typical marketing speak instantly. Your ads need to feel native to the platform—conversational, authentic, and genuinely helpful. That's exactly what you'll learn in the Reddit Ads section of this course.
            </p>
            <p className="text-lg leading-relaxed">
              I'll show you the exact frameworks for creating Reddit Ads that don't feel like ads, how to structure campaigns for maximum ROI, advanced targeting strategies beyond just subreddits, budget optimization techniques, and how to test and scale winning campaigns. You'll also learn how to avoid the common pitfalls that cause most advertisers to quit Reddit Ads before they see results.
            </p>
            <p className="text-lg leading-relaxed">
              Reddit Ads can be remarkably cost-effective compared to Google or Facebook ads, especially in niche markets. With lower competition and highly engaged audiences, your cost per click and cost per acquisition can be significantly better—if you approach it correctly.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 mt-8">
              <div className="flex items-start gap-4">
                <Flame className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat font-bold text-slate-800 mb-3 text-lg">Reddit Ads Getting too Competitive?</h3>
                  <p className="text-slate-700 mb-4">
                    As more marketers discover Reddit's potential, the costs are climbing fast. But there's a window right now where you can still dominate at a fraction of what Facebook and Google charge.
                  </p>
                  <button onClick={onOTOClick} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                    See Reddit Ads Deep Dive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-10 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold text-slate-800 mb-6 text-center">
              Bonus: Book a Reddit Marketing Consultation
            </h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Need personalized guidance for your specific business and niche? As a course student, you'll have the option to book a one-on-one consultation where we'll dive deep into your Reddit marketing strategy.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-4">What's Included in a Consultation:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Detailed analysis of your niche and identification of high-potential subreddits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Personalized content strategy tailored to your business and target audience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Review of your current Reddit presence and optimization recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Reddit Ads campaign planning and targeting strategy specific to your goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Q&A session to address your unique challenges and concerns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Action plan with prioritized next steps for immediate implementation</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-6 italic">
                Available as an add-on after enrollment. Perfect for solopreneurs who want accelerated results with expert guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-8 text-center">
            Common Reddit Marketing Mistakes (And How to Avoid Them)
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="font-montserrat font-bold text-slate-800 mb-2">Posting promotional content too early</h3>
              <p className="text-slate-600">Build karma and establish presence before ever mentioning your business.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="font-montserrat font-bold text-slate-800 mb-2">Ignoring subreddit rules</h3>
              <p className="text-slate-600">Each subreddit has unique rules. Read them carefully and follow them religiously.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="font-montserrat font-bold text-slate-800 mb-2">Using the same content across multiple subreddits</h3>
              <p className="text-slate-600">Tailor your content to each community's specific interests and culture.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="font-montserrat font-bold text-slate-800 mb-2">Being overly salesy in comments</h3>
              <p className="text-slate-600">Provide value first. Mention your product only when genuinely relevant.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="font-montserrat font-bold text-slate-800 mb-2">Abandoning threads after posting</h3>
              <p className="text-slate-600">Engage with comments, answer questions, and foster genuine discussions.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="font-montserrat font-bold text-slate-800 mb-2">Giving up too quickly</h3>
              <p className="text-slate-600">Reddit marketing requires consistency and patience. Results compound over time.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-12 mb-16">
          <h2 className="font-montserrat text-4xl font-bold mb-8 text-center">
            Who This Course Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">Solopreneurs & Indie Hackers</h3>
                <p className="text-slate-300">
                  Building a business solo and need cost-effective marketing channels that actually convert.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">SaaS Founders</h3>
                <p className="text-slate-300">
                  Looking to drive quality traffic and early adopters to your product from engaged communities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">Course Creators & Consultants</h3>
                <p className="text-slate-300">
                  Want to establish authority, build an audience, and attract clients without spending on expensive ads.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">Content Creators & Bloggers</h3>
                <p className="text-slate-300">
                  Need consistent traffic to your content and want to tap into passionate, engaged communities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">Freelancers</h3>
                <p className="text-slate-300">
                  Looking to find clients, showcase expertise, and build reputation in your service area.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-xl font-semibold mb-2">E-commerce Entrepreneurs</h3>
                <p className="text-slate-300">
                  Want to drive qualified traffic to your store and build a community around your products.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="font-montserrat text-3xl font-bold text-slate-800 mb-6 text-center">
            What Makes This Course Different
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              This isn't theory from someone who's never actually done Reddit marketing. Every strategy, tactic, and framework in this course comes from real-world experience driving actual traffic and revenue from Reddit. You'll get battle-tested approaches that work in 2025, not outdated tactics from years ago when Reddit was a different platform.
            </p>
            <p>
              Unlike generic social media courses that dedicate one chapter to Reddit, this course is laser-focused entirely on Reddit marketing. You'll dive deep into the nuances, psychology, and culture that make Reddit unique. From understanding Reddit's voting algorithm to crafting headlines that get upvoted, from navigating moderator relationships to scaling with paid ads—it's all here.
            </p>
            <p>
              Most importantly, this course is designed specifically for solopreneurs. You don't have a marketing team or unlimited budget. You need strategies that work with limited time and resources. Everything taught here is practical, actionable, and designed for solo operators who need to be efficient with their marketing efforts.
            </p>
            <p>
              You'll also get frameworks and templates you can adapt immediately—post templates, comment scripts, ad copy formulas, subreddit research worksheets, and tracking spreadsheets. No need to start from scratch or figure everything out on your own.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="font-montserrat text-4xl font-bold mb-6">
            Ready to Unlock Reddit's Traffic Potential?
          </h2>
          <p className="text-xl mb-8 text-orange-50 max-w-2xl mx-auto">
            Join hundreds of solopreneurs who are using Reddit to grow their businesses ethically and effectively.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 inline-block mb-8">
            <p className="text-5xl font-bold mb-2">$197</p>
            <p className="text-lg text-orange-50">Complete course + lifetime updates</p>
          </div>
          <div className="mb-8">
            <a href="https://digitalabc.lemonsqueezy.com/checkout/buy/e8eeea29-238f-4251-a993-cae7a0dd74f9" className="inline-block bg-white text-orange-600 px-16 py-6 rounded-lg text-2xl font-bold hover:bg-orange-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Enroll Now
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 text-orange-50 flex-wrap gap-4">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>All Future Updates</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Consultation Available</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-600">
          <p className="text-sm">
            Questions? Feel free to reach out before enrolling.
          </p>
        </div>
      </div>

      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-bold mb-2">Reddit Marketing Mastery</h3>
              <p className="text-sm text-slate-400">
                The complete guide to growing your business on Reddit.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="https://www.andrewmurrayhq.com/support" className="hover:text-orange-400 transition-colors">Contact</a>
              <a href="https://www.andrewmurrayhq.com/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="https://www.andrewmurrayhq.com/terms" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="https://digitalabc.lemonsqueezy.com/affiliates" className="hover:text-orange-400 transition-colors">Affiliate Program</a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Reddit Marketing Mastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
