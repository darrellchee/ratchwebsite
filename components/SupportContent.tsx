"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Collapsible Section Component
const CollapsibleSection = ({ 
  title, 
  children, 
  defaultOpen = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors"
      >
        <span className="font-medium text-bumble-black">{title}</span>
        <svg 
          className={`w-5 h-5 text-bumble-gray transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-4 text-bumble-gray text-sm leading-relaxed space-y-3"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ 
  id, 
  icon, 
  title, 
  description 
}: { 
  id: string; 
  icon: string; 
  title: string; 
  description: string;
}) => (
  <div id={id} className="scroll-mt-28 mb-6">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-bumble-black">{title}</h2>
    </div>
    <p className="text-bumble-gray">{description}</p>
  </div>
);

// List Item Component
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="text-bumble-yellow mt-1">•</span>
    <span>{children}</span>
  </li>
);

export default function SupportContent() {
  return (
    <div className="space-y-16">
      {/* Terms of Service */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
        <SectionHeader 
          id="terms-of-service"
          icon="📜"
          title="Terms of Service"
          description="By using MeetMatch, you agree to be bound by these terms."
        />
        
        <div className="space-y-0">
          <CollapsibleSection title="1. Agreement to Terms" defaultOpen>
            <p>By accessing or using MeetMatch (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these terms, please do not use the App.</p>
            <p>MeetMatch is a dating application that uses a profile comparison system with ELO ratings to help users find compatible matches. By creating an account, you confirm that you are at least 18 years of age and legally capable of entering into a binding agreement.</p>
          </CollapsibleSection>

          <CollapsibleSection title="2. Eligibility">
            <p>You must meet the following requirements to use MeetMatch:</p>
            <ul className="space-y-1 mt-2">
              <ListItem><strong>Age Requirement:</strong> You must be at least 18 years old</ListItem>
              <ListItem><strong>Legal Capacity:</strong> You must be legally permitted to form a binding contract</ListItem>
              <ListItem><strong>Prohibited Users:</strong> You must not be prohibited from using the App under applicable laws</ListItem>
              <ListItem><strong>Account Status:</strong> You must not have been previously banned or removed</ListItem>
              <ListItem><strong>Geographic Restrictions:</strong> You must be in a jurisdiction where the App is legally available</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="3. Account Registration">
            <p>When you create an account, you agree to:</p>
            <ul className="space-y-1 mt-2">
              <ListItem>Provide accurate, current, and complete information</ListItem>
              <ListItem>Maintain and update your information to keep it accurate</ListItem>
              <ListItem>Keep your login credentials secure and confidential</ListItem>
              <ListItem>Not share your account with any other person</ListItem>
              <ListItem>Notify us immediately of any unauthorized use</ListItem>
              <ListItem>Use only one account per person</ListItem>
            </ul>
            <p className="mt-3">You are responsible for all activity that occurs under your account. We reserve the right to suspend or terminate your account if any information is found to be inaccurate, false, or misleading.</p>
          </CollapsibleSection>

          <CollapsibleSection title="4. User Conduct">
            <p>You agree NOT to:</p>
            <ul className="space-y-1 mt-2">
              <ListItem>Use the App for any illegal or unauthorized purpose</ListItem>
              <ListItem>Harass, abuse, threaten, or harm other users</ListItem>
              <ListItem>Post false, misleading, or fraudulent content</ListItem>
              <ListItem>Upload photos that are not of yourself</ListItem>
              <ListItem>Impersonate any person or entity</ListItem>
              <ListItem>Solicit money or other items of value from other users</ListItem>
              <ListItem>Use the App to promote commercial activities or sales</ListItem>
              <ListItem>Post content that is obscene, pornographic, or sexually explicit</ListItem>
              <ListItem>Use automated systems or bots to access the App</ListItem>
              <ListItem>Manipulate or game the rating system</ListItem>
              <ListItem>Create multiple accounts to artificially inflate ratings</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="5. Content Guidelines">
            <p><strong>Photos and Profile Content:</strong></p>
            <ul className="space-y-1 mt-2">
              <ListItem>All photos must be of yourself and recent (within the last 2 years)</ListItem>
              <ListItem>No nudity, sexually suggestive, or explicit content</ListItem>
              <ListItem>No violent, graphic, or disturbing imagery</ListItem>
              <ListItem>No photos of minors without an adult present</ListItem>
              <ListItem>No images promoting illegal activities</ListItem>
              <ListItem>No watermarks, contact information, or promotional content</ListItem>
              <ListItem>Only upload photos you own or have rights to use</ListItem>
            </ul>
            <p className="mt-3">We reserve the right to remove any content that violates these guidelines without notice. Repeated violations may result in account termination.</p>
          </CollapsibleSection>

          <CollapsibleSection title="6. The Comparison System & ELO Ratings">
            <p>MeetMatch uses a unique profile comparison system:</p>
            <ul className="space-y-1 mt-2">
              <ListItem><strong>How It Works:</strong> Two profiles are shown side-by-side, and users choose which they prefer</ListItem>
              <ListItem><strong>ELO Rating:</strong> Comparison results are used to calculate your ELO rating (0-10,000 scale)</ListItem>
              <ListItem><strong>Rating Impact:</strong> Your rating affects which profiles you&apos;re shown and matched with</ListItem>
              <ListItem><strong>Server-Side Calculation:</strong> All rating calculations happen server-side to ensure fairness</ListItem>
              <ListItem><strong>No Manipulation:</strong> Individual comparison votes are not revealed</ListItem>
              <ListItem><strong>Seasonal Resets:</strong> Ratings reset quarterly with archived history</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="7. Subscriptions and In-App Purchases">
            <p>MeetMatch offers optional paid subscriptions with additional features:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl">
              <p className="font-medium text-bumble-black mb-2">Subscription Tiers:</p>
              <ul className="space-y-1">
                <ListItem><strong>Ratch+ (Plus):</strong> $12/month</ListItem>
                <ListItem><strong>Ratch Pro:</strong> $18/month</ListItem>
                <ListItem><strong>Ratch Ultra:</strong> $30/month</ListItem>
              </ul>
            </div>
            <p className="mt-3"><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.</p>
            <p><strong>Payment:</strong> Payment will be charged to your Apple ID account at confirmation of purchase.</p>
            <p><strong>Cancellation:</strong> You may cancel your subscription at any time through App Store settings.</p>
          </CollapsibleSection>

          <CollapsibleSection title="8. Messaging & Matches">
            <p><strong>Dual Matches:</strong> When two users choose each other in comparisons, a &quot;Dual Match&quot; is created, allowing direct messaging.</p>
            <ul className="space-y-1 mt-2">
              <ListItem>Mutual interest is required before full messaging unlocks</ListItem>
              <ListItem>Initial messages create message requests until mutual interest is established</ListItem>
              <ListItem>Daily message limits vary by subscription tier</ListItem>
            </ul>
            <p className="mt-3"><strong>Direct Messages:</strong> All messages are subject to our content guidelines. Users can unmatch at any time, which removes the conversation.</p>
          </CollapsibleSection>

          <CollapsibleSection title="9. Safety and Reporting">
            <p>Your safety is important to us. You can:</p>
            <ul className="space-y-1 mt-2">
              <ListItem><strong>Report Users:</strong> Report users who violate our terms</ListItem>
              <ListItem><strong>Block Users:</strong> Block users to prevent further contact</ListItem>
              <ListItem><strong>Unmatch:</strong> Unmatch to end conversations</ListItem>
              <ListItem><strong>Safety Tips:</strong> Meet in public places and inform someone of your plans</ListItem>
            </ul>
            <p className="mt-3 p-3 bg-amber-50 rounded-lg text-amber-800"><strong>Important:</strong> MeetMatch is not responsible for the conduct of users on or off the platform. Use your best judgment when interacting with other users.</p>
          </CollapsibleSection>

          <CollapsibleSection title="10. Intellectual Property">
            <ul className="space-y-1">
              <ListItem><strong>Our Content:</strong> MeetMatch and its original content are protected by international copyright, trademark, and other intellectual property laws</ListItem>
              <ListItem><strong>Your Content:</strong> You retain ownership but grant us a non-exclusive, royalty-free license to use your content within the App</ListItem>
              <ListItem><strong>Trademarks:</strong> &quot;MeetMatch&quot;, &quot;Ratch&quot;, and related marks are trademarks of MeetMatch</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="11. Disclaimers">
            <p className="uppercase text-xs">THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE:</p>
            <ul className="space-y-1 mt-2">
              <ListItem>That you will find a match or romantic partner</ListItem>
              <ListItem>The accuracy of information provided by other users</ListItem>
              <ListItem>Uninterrupted or error-free operation of the App</ListItem>
              <ListItem>The conduct or identity of any user</ListItem>
              <ListItem>The security of information transmitted through the App</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="12. Limitation of Liability">
            <p>To the maximum extent permitted by law, MeetMatch shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of the App.</p>
          </CollapsibleSection>

          <CollapsibleSection title="13. Termination">
            <p>We may terminate or suspend your account immediately, without prior notice, for any reason, including breach of these Terms. Upon termination:</p>
            <ul className="space-y-1 mt-2">
              <ListItem>Your right to use the App ceases immediately</ListItem>
              <ListItem>We may delete your account and all associated data</ListItem>
              <ListItem>Any unused subscription time will not be refunded</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="14. Changes to Terms">
            <p>We reserve the right to modify these Terms at any time. We will notify you of significant changes through the App or via email. Your continued use of the App after changes constitutes acceptance of the new Terms.</p>
          </CollapsibleSection>

          <CollapsibleSection title="15. Governing Law">
            <p>These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of New South Wales, Australia.</p>
          </CollapsibleSection>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
        <SectionHeader 
          id="privacy-policy"
          icon="🔒"
          title="Privacy Policy"
          description="How we collect, use, and protect your information."
        />
        
        <div className="space-y-0">
          <CollapsibleSection title="Introduction" defaultOpen>
            <p>MeetMatch (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>
            <p>Please read this policy carefully. By using MeetMatch, you consent to the practices described in this Privacy Policy.</p>
          </CollapsibleSection>

          <CollapsibleSection title="Information We Collect">
            <p><strong>Personal Information You Provide:</strong></p>
            <ul className="space-y-1 mt-2">
              <ListItem><strong>Account Information:</strong> Name, email address, date of birth, gender, sexual orientation</ListItem>
              <ListItem><strong>Profile Details:</strong> Photos, bio, prompts, height, hometown, education, job title, religion, ethnicity</ListItem>
              <ListItem><strong>Preferences:</strong> Dating intentions, interests, lifestyle choices, location preferences</ListItem>
              <ListItem><strong>Communications:</strong> Messages sent to other users, reports, support requests</ListItem>
              <ListItem><strong>Payment Information:</strong> Subscription tier and purchase history (processed by Apple)</ListItem>
            </ul>
            <p className="mt-3"><strong>Information Collected Automatically:</strong></p>
            <ul className="space-y-1 mt-2">
              <ListItem><strong>Device Information:</strong> Device type, operating system, unique device identifiers</ListItem>
              <ListItem><strong>Usage Data:</strong> App interactions, features used, time spent in app</ListItem>
              <ListItem><strong>Location:</strong> Approximate location based on IP address</ListItem>
              <ListItem><strong>Log Data:</strong> Access times, pages viewed, app crashes and errors</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="space-y-1 mt-2">
              <ListItem>Provide, maintain, and improve our services</ListItem>
              <ListItem>Create and manage your account</ListItem>
              <ListItem>Show your profile to other users for comparisons</ListItem>
              <ListItem>Calculate and display your ELO rating</ListItem>
              <ListItem>Facilitate matches and enable messaging</ListItem>
              <ListItem>Send notifications about matches, messages, and app updates</ListItem>
              <ListItem>Personalize your experience and content</ListItem>
              <ListItem>Monitor and analyze usage patterns to improve the app</ListItem>
              <ListItem>Detect, prevent, and address technical issues and fraud</ListItem>
              <ListItem>Enforce our Terms of Service and community guidelines</ListItem>
              <ListItem>Display advertisements (for free tier users only)</ListItem>
              <ListItem>Comply with legal obligations</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Information Sharing">
            <p><strong>With Other Users:</strong></p>
            <ul className="space-y-1 mt-2">
              <ListItem>Your profile (photos, name, age, bio, prompts) is visible to other users</ListItem>
              <ListItem>Matched users can see your messages and profile</ListItem>
              <ListItem>If you opt-in, your ELO rating may be displayed on leaderboards</ListItem>
            </ul>
            <p className="mt-3"><strong>With Service Providers:</strong> We share information with third-party service providers who help us operate the App (see Third-Party Services section).</p>
            <p className="mt-3"><strong>For Legal Reasons:</strong> We may disclose your information to comply with legal obligations, protect our rights, or respond to lawful requests from public authorities.</p>
          </CollapsibleSection>

          <CollapsibleSection title="Data Storage & Security">
            <p>Your data is stored securely using industry-standard practices:</p>
            <ul className="space-y-1 mt-2">
              <ListItem><strong>Encryption:</strong> Data is stored with encryption at rest</ListItem>
              <ListItem><strong>Transmission Security:</strong> All data transmission uses HTTPS encryption</ListItem>
              <ListItem><strong>Photo Storage:</strong> Photos are stored in secure cloud storage with signed URLs</ListItem>
              <ListItem><strong>Row Level Security:</strong> We implement RLS to protect your data</ListItem>
              <ListItem><strong>Security Audits:</strong> Regular security audits and updates are performed</ListItem>
            </ul>
            <p className="mt-3 p-3 bg-amber-50 rounded-lg text-amber-800"><strong>Important:</strong> While we strive to protect your information, no method of transmission over the internet is 100% secure.</p>
          </CollapsibleSection>

          <CollapsibleSection title="Data Retention">
            <ul className="space-y-1">
              <ListItem><strong>Active Accounts:</strong> Data is retained as long as your account is active</ListItem>
              <ListItem><strong>Deleted Accounts:</strong> Data is deleted within 30 days of account deletion</ListItem>
              <ListItem><strong>Messages:</strong> Deleted when you unmatch or delete your account</ListItem>
              <ListItem><strong>Rating History:</strong> Retained for analytics unless account is deleted</ListItem>
              <ListItem><strong>Logs:</strong> Usage logs are retained for up to 90 days</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Children's Privacy">
            <p>MeetMatch is not intended for anyone under 18 years of age. We do not knowingly collect personal information from children. If we discover that a child under 18 has provided us with personal information, we will delete it immediately.</p>
          </CollapsibleSection>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
        <SectionHeader 
          id="third-party"
          icon="🔗"
          title="Third-Party Services"
          description="External services we use to provide functionality."
        />
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              name: "Supabase",
              purpose: "Database hosting, authentication, cloud storage, and backend services",
              data: "User accounts, profiles, photos, messages, ratings",
              link: "https://supabase.com/privacy",
              color: "#3ECF8E",
            },
            {
              name: "Google AdMob",
              purpose: "Advertisement delivery for free tier users",
              data: "Device identifiers, app usage, approximate location",
              link: "https://policies.google.com/privacy",
              color: "#4285F4",
            },
            {
              name: "Google Sign-In",
              purpose: "Authentication service",
              data: "Google account email, basic profile info",
              link: "https://policies.google.com/privacy",
              color: "#EA4335",
            },
            {
              name: "Apple StoreKit",
              purpose: "In-app purchase processing",
              data: "Purchase transactions, subscription status",
              link: "https://www.apple.com/privacy/",
              color: "#000000",
            },
            {
              name: "Sign in with Apple",
              purpose: "Privacy-focused authentication",
              data: "Apple ID (if shared), basic profile info",
              link: "https://www.apple.com/privacy/",
              color: "#555555",
            },
            {
              name: "AWS Rekognition",
              purpose: "Content moderation for photo uploads",
              data: "Uploaded photos (temporarily, for moderation)",
              link: "https://aws.amazon.com/privacy/",
              color: "#FF9900",
            },
          ].map((service) => (
            <div 
              key={service.name}
              className="p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: service.color }}
                >
                  {service.name[0]}
                </div>
                <h4 className="font-bold text-bumble-black">{service.name}</h4>
              </div>
              <p className="text-sm text-bumble-gray mb-2"><strong>Purpose:</strong> {service.purpose}</p>
              <p className="text-sm text-bumble-gray mb-3"><strong>Data:</strong> {service.data}</p>
              <a 
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View Privacy Policy →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-bumble-gray">
            <strong>Compliance:</strong> All third-party services are contractually obligated to protect your information, use it only for specified purposes, and implement appropriate security measures.
          </p>
        </div>
      </section>

      {/* Subscriptions */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
        <SectionHeader 
          id="subscriptions"
          icon="💳"
          title="In-App Purchases & Subscriptions"
          description="Pricing, billing, and subscription management."
        />
        
        {/* Pricing Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-bumble-black">Tier</th>
                <th className="text-left py-3 px-4 font-bold text-bumble-black">Price</th>
                <th className="text-left py-3 px-4 font-bold text-bumble-black">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Ratch+ (Plus)</td>
                <td className="py-3 px-4">$12/month</td>
                <td className="py-3 px-4 text-bumble-gray">15 daily DMs, Limited Dual Matches, Limited Super Likes, Always see rating</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Ratch Pro</td>
                <td className="py-3 px-4">$18/month</td>
                <td className="py-3 px-4 text-bumble-gray">Unlimited DMs, Unlimited Dual Matches, More Super Likes, Premium filters, Full stats</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Ratch Ultra</td>
                <td className="py-3 px-4">$30/month</td>
                <td className="py-3 px-4 text-bumble-gray">All Pro features + Unlimited Super Likes, Photo analytics, Full rating logs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-0">
          <CollapsibleSection title="Auto-Renewal & Payment" defaultOpen>
            <ul className="space-y-1">
              <ListItem>Subscriptions automatically renew unless cancelled at least <strong>24 hours</strong> before the renewal date</ListItem>
              <ListItem>Renewal charges occur automatically to your Apple ID account</ListItem>
              <ListItem>All payments are processed through Apple&apos;s App Store</ListItem>
              <ListItem>Prices are displayed in your local currency (converted by Apple)</ListItem>
              <ListItem>Applicable taxes may be added to subscription prices</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="How to Cancel">
            <p>To cancel your subscription:</p>
            <ol className="space-y-1 mt-2 list-decimal list-inside">
              <li>Open Settings on your iOS device</li>
              <li>Tap your Apple ID at the top</li>
              <li>Tap &quot;Subscriptions&quot;</li>
              <li>Select &quot;MeetMatch&quot;</li>
              <li>Tap &quot;Cancel Subscription&quot;</li>
            </ol>
            <p className="mt-3">Cancellation takes effect at the end of the current billing period. You retain access to premium features until then.</p>
          </CollapsibleSection>

          <CollapsibleSection title="Refunds">
            <ul className="space-y-1">
              <ListItem><strong>Refund Requests:</strong> All refund requests must be made through Apple Support</ListItem>
              <ListItem><strong>Apple&apos;s Policy:</strong> Refunds are subject to Apple&apos;s refund policy and terms</ListItem>
              <ListItem><strong>Our Policy:</strong> We do not provide direct refunds; all refunds are processed by Apple</ListItem>
              <ListItem><strong>Contact:</strong> <a href="https://support.apple.com" className="text-blue-600 hover:underline">https://support.apple.com</a></ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Free Trials">
            <ul className="space-y-1">
              <ListItem>If a free trial is offered, it will be clearly stated</ListItem>
              <ListItem>Free trials automatically convert to paid subscriptions unless cancelled before the trial ends</ListItem>
              <ListItem>You can cancel during the trial period without being charged</ListItem>
            </ul>
          </CollapsibleSection>
        </div>
      </section>

      {/* User Rights */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
        <SectionHeader 
          id="user-rights"
          icon="⚖️"
          title="User Rights & Data Protection"
          description="Your rights under GDPR, CCPA, and Australian Privacy Act."
        />
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            {
              right: "Right to Access",
              description: "Request a copy of your personal data via Export My Data in Settings",
              icon: "📋",
            },
            {
              right: "Right to Rectification",
              description: "Update your information at any time through your profile",
              icon: "✏️",
            },
            {
              right: "Right to Erasure",
              description: "Delete your account and all data via Settings → Account → Delete Account",
              icon: "🗑️",
            },
            {
              right: "Right to Data Portability",
              description: "Export your data in JSON format via Settings → Export My Data",
              icon: "📦",
            },
            {
              right: "Right to Object",
              description: "Opt-out of marketing, analytics, or leaderboard participation",
              icon: "🚫",
            },
            {
              right: "Right to Restrict Processing",
              description: "Request limits on how we process your data by contacting support",
              icon: "⏸️",
            },
          ].map((item) => (
            <div key={item.right} className="p-4 rounded-2xl bg-gray-50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h4 className="font-bold text-bumble-black">{item.right}</h4>
              </div>
              <p className="text-sm text-bumble-gray">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-800">
            <strong>How to Exercise Your Rights:</strong> Use the app&apos;s settings or contact us at <a href="mailto:support@ratematch.app" className="underline">support@ratematch.app</a>. We will respond within 30 days.
          </p>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
        <SectionHeader 
          id="support-contact"
          icon="📧"
          title="Support & Contact"
          description="How to get help and report issues."
        />
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              <span>📧</span> Email Support
            </h4>
            <a href="mailto:support@ratematch.app" className="text-blue-600 font-medium text-lg hover:underline">
              support@ratematch.app
            </a>
            <p className="text-sm text-blue-700 mt-2">We aim to respond within 48 hours</p>
          </div>
          
          <div className="p-5 rounded-2xl bg-gray-50">
            <h4 className="font-bold text-bumble-black mb-3">What We Can Help With</h4>
            <ul className="space-y-1 text-sm text-bumble-gray">
              <ListItem>Account issues and password resets</ListItem>
              <ListItem>Subscription and billing questions</ListItem>
              <ListItem>Technical problems and bugs</ListItem>
              <ListItem>Privacy and data requests</ListItem>
              <ListItem>Reporting inappropriate behavior</ListItem>
            </ul>
          </div>
        </div>

        <div className="space-y-0">
          <CollapsibleSection title="Report a User">
            <ul className="space-y-1">
              <ListItem><strong>In-App:</strong> Tap the user&apos;s profile → Report</ListItem>
              <ListItem><strong>Via Email:</strong> Email support@ratematch.app with details</ListItem>
              <ListItem><strong>Response:</strong> We review all reports and take appropriate action</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Report a Bug">
            <p><strong>In-App:</strong> Settings → Report a Problem</p>
            <p className="mt-2"><strong>Via Email:</strong> Email support@ratematch.app with:</p>
            <ul className="space-y-1 mt-2">
              <ListItem>Description of the issue</ListItem>
              <ListItem>Steps to reproduce</ListItem>
              <ListItem>Device and iOS version</ListItem>
              <ListItem>Screenshots (if applicable)</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Account Recovery">
            <p>If you&apos;ve lost access to your account:</p>
            <ul className="space-y-1 mt-2">
              <ListItem><strong>Password Reset:</strong> Use &quot;Forgot Password&quot; on the login screen</ListItem>
              <ListItem><strong>Email Support:</strong> Contact support@ratematch.app with your email address, display name, and approximate account creation date</ListItem>
            </ul>
          </CollapsibleSection>
        </div>
      </section>

      {/* App Store Compliance */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
        <SectionHeader 
          id="compliance"
          icon="✅"
          title="App Store Compliance"
          description="Age rating, disclosures, and content guidelines."
        />
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-red-50 border border-red-100">
            <h4 className="font-bold text-red-800 mb-2">Age Rating</h4>
            <p className="text-2xl font-bold text-red-600 mb-1">17+</p>
            <p className="text-sm text-red-700">Mature Content</p>
            <p className="text-xs text-red-600 mt-2">Users must be 18+ to create an account</p>
          </div>
          
          <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
            <h4 className="font-bold text-green-800 mb-2">Content Moderation</h4>
            <p className="text-sm text-green-700">All photos are moderated using AWS Rekognition before approval</p>
          </div>
          
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2">Safety Features</h4>
            <p className="text-sm text-blue-700">Report, Block, and Unmatch tools available to all users</p>
          </div>
        </div>

        <div className="space-y-0">
          <CollapsibleSection title="Required Permissions">
            <ul className="space-y-1">
              <ListItem><strong>Location Services (Optional):</strong> &quot;We use your location to show you profiles in your area&quot;</ListItem>
              <ListItem><strong>Photo Library Access:</strong> &quot;We need access to your photos to let you upload profile pictures&quot;</ListItem>
              <ListItem><strong>Camera Access (Optional):</strong> &quot;We need camera access if you want to take new profile photos&quot;</ListItem>
              <ListItem><strong>Notifications:</strong> For matches, messages, and app updates</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Content Guidelines Compliance">
            <ul className="space-y-1">
              <ListItem><strong>No Objectionable Content:</strong> We prohibit and remove objectionable content</ListItem>
              <ListItem><strong>No Illegal Content:</strong> Illegal content is prohibited and reported</ListItem>
              <ListItem><strong>No Spam:</strong> Spam and fraudulent accounts are removed</ListItem>
              <ListItem><strong>No Harassment:</strong> Harassment and abusive behavior are not tolerated</ListItem>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Subscription Compliance">
            <ul className="space-y-1">
              <ListItem>Auto-renewal clearly disclosed</ListItem>
              <ListItem>Cancellation instructions provided</ListItem>
              <ListItem>Refund policy clearly stated (handled by Apple)</ListItem>
              <ListItem>All prices displayed before purchase</ListItem>
              <ListItem>Free trials clearly disclosed if offered</ListItem>
            </ul>
          </CollapsibleSection>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="bg-bumble-black rounded-3xl p-6 md:p-8 text-white">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Acknowledgment</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            By using MeetMatch, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy, all applicable laws and regulations, and App Store terms and conditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">Version 1.0</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Last Updated: January 2, 2026</span>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="text-center py-8">
        <h3 className="font-bold text-bumble-black mb-4">Contact Information</h3>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-bumble-gray">
          <a href="mailto:support@ratematch.app" className="hover:text-bumble-black transition-colors">
            📧 support@ratematch.app
          </a>
          <a href="https://ratematch.app" className="hover:text-bumble-black transition-colors">
            🌐 ratematch.app
          </a>
        </div>
        <p className="mt-4 text-xs text-bumble-gray">
          MeetMatch • Australia
        </p>
      </section>
    </div>
  );
}
