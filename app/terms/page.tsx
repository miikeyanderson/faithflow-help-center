import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:underline">Home</Link>
          </div>
          <h1 className="text-3xl font-bold text-black">Faithflow</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">Terms and Conditions of Service</h2>
          <p className="text-gray-600 mt-4">Last revised on December 7th, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">

          {/* General */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">General</h2>
            <p className="text-gray-700 mb-4">
              Faithflow websites (&quot;Websites&quot;), mobile applications (&quot;Apps&quot;), and related services (collectively, the &quot;Service&quot;) are operated by <strong>Asymmetric Labs, LLC</strong> (&quot;Faithflow,&quot; &quot;we,&quot; or &quot;us&quot;). By accessing or using the Service, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;), including any future updates.
            </p>
            <p className="text-gray-700 mb-4">
              Faithflow may modify these Terms at any time. When updates are made, we will post a notice on the Websites for at least 7 days and update the &quot;Last Revised&quot; date above. Continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
            </p>
            <p className="text-gray-700 mb-4">
              If you do not agree to these Terms, you are not authorized to use or access the Service.
            </p>
            <p className="text-gray-700 mb-4 p-4 bg-gray-100 border-l-4 border-yellow-500">
              <strong>PLEASE NOTE:</strong> These Terms include a <strong>mandatory arbitration provision</strong>, requiring individual arbitration for certain disputes. SEE THE SECTION TITLED <strong>&quot;Dispute Resolution &amp; Arbitration.&quot;</strong>
            </p>
          </section>

          {/* Description of Website and Service */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Description of Website and Service</h2>
            <p className="text-gray-700 mb-4">
              Faithflow provides educational and spiritual development tools, including structured lessons, interactive learning paths, gamified challenges, community features, and related content.
            </p>
            <p className="text-gray-700 mb-4">
              We may change, update, improve, suspend, or discontinue any portion of the Service at any time, temporarily or permanently.
            </p>
          </section>

          {/* Acceptable Use of the Service */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Acceptable Use of the Service</h2>
            <p className="text-gray-700 mb-4">
              You are responsible for all activity under your account.
            </p>
            <p className="text-gray-700 mb-4">
              To maintain a positive, safe environment, you may not use the Service in any way that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violates laws or regulations</li>
              <li>Harasses, harms, or exploits others</li>
              <li>Interferes with the operation of the Service</li>
              <li>Violates our Community Guidelines (when available)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If you misuse the Service, your access may be restricted or terminated.
            </p>
          </section>

          {/* Additional Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Additional Terms</h2>
            <p className="text-gray-700 mb-4">
              Certain features of Faithflow (e.g., subscription plans, virtual items, community features) may have separate or additional terms. Using those features indicates your agreement to applicable Additional Terms.
            </p>
          </section>

          {/* Registration */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Registration</h2>
            <p className="text-gray-700 mb-4">
              When creating an account, you agree to:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide accurate and current information</li>
              <li>Keep your password confidential</li>
              <li>Promptly update any information that changes</li>
              <li>Take responsibility for all activity under your account</li>
            </ol>
            <p className="text-gray-700 mb-4">
              We reserve the right to suspend or terminate accounts that provide false or misleading information.
            </p>
          </section>

          {/* Your Representations and Warranties */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Your Representations and Warranties</h2>
            <p className="text-gray-700 mb-4">
              By using Faithflow, you represent that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>You will use the Service in accordance with these Terms and all applicable laws</li>
              <li>You own or control the rights to any material you submit</li>
              <li>You may legally use the Service under U.S. law and are not subject to sanctions restrictions</li>
            </ul>
          </section>

          {/* Submission of Content */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Submission of Content</h2>
            <p className="text-gray-700 mb-4">
              If you submit content—including text, audio, images, notes, comments, translations, or other materials (&quot;Content&quot;)—you grant Faithflow a <strong>worldwide, perpetual, royalty-free, irrevocable, transferable, sublicensable license</strong> to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Use, reproduce, modify, adapt, distribute, display, and create derivative works</li>
              <li>Combine your Content with other works</li>
              <li>Make your Content available to other users</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You represent that you own all necessary rights to the Content you submit. Once submitted, this license cannot be revoked.
            </p>
            <p className="text-gray-700 mb-4">
              You may not submit Content that is:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Illegal, harmful, abusive, defamatory, hateful, harassing, or otherwise inappropriate</li>
              <li>Infringing on any third-party rights</li>
              <li>In violation of Faithflow&apos;s Community Guidelines</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Faithflow may remove any Content at its discretion.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to defend, indemnify, and hold harmless Faithflow, its employees, contractors, directors, officers, suppliers, and agents from any claims or damages arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your use of the Service</li>
              <li>Your submitted Content</li>
              <li>Your violation of these Terms</li>
              <li>Any inaccurate representations you make</li>
            </ul>
          </section>

          {/* License to Apps */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">License to Apps</h2>
            <p className="text-gray-700 mb-4">
              Faithflow grants you a <strong>non-exclusive, non-transferable</strong> license to download and use one copy of the App on a device you own or control.
            </p>
            <p className="text-gray-700 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Reverse engineer, decompile, or extract source code</li>
              <li>Copy or modify the App</li>
              <li>Permit others to access the App unlawfully</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Apple App Store users acknowledge that Apple:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Is not responsible for the App</li>
              <li>Has no obligation to provide support</li>
              <li>Is a third-party beneficiary of these Terms</li>
            </ul>
          </section>

          {/* In-App Purchases */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">In-App Purchases</h2>

            <h3 className="text-xl font-semibold text-black mb-3 mt-6">Automatic Renewal</h3>
            <p className="text-gray-700 mb-4">
              If you purchase a subscription, it will automatically renew unless you cancel at least 24 hours before the renewal date. Cancellation must be done through your device or platform account settings (Apple App Store or Google Play).
            </p>

            <h3 className="text-xl font-semibold text-black mb-3 mt-6">Virtual Items</h3>
            <p className="text-gray-700 mb-4">
              You may purchase virtual items (such as Crowns or other learning-related features) for use solely within Faithflow. These items:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Have no real-world monetary value</li>
              <li>Are non-transferable</li>
              <li>May be changed, updated, or removed at any time</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Faithflow may adjust pricing or availability of virtual items at its discretion.
            </p>

            <h3 className="text-xl font-semibold text-black mb-3 mt-6">Fees and Taxes</h3>
            <p className="text-gray-700 mb-4">
              You agree to pay all fees and taxes associated with purchases made through the Service.
            </p>

            <h3 className="text-xl font-semibold text-black mb-3 mt-6">Payment Processors</h3>
            <p className="text-gray-700 mb-4">
              Transactions are handled by third-party payment processors. Faithflow is not responsible for their actions, availability, or errors.
            </p>

            <h3 className="text-xl font-semibold text-black mb-3 mt-6">Refund Policy</h3>
            <p className="text-gray-700 mb-4">
              All payments, including virtual item purchases, are <strong>non-refundable</strong>, except where required by law. App Store purchases must be refunded through Apple or Google directly.
            </p>
          </section>

          {/* Third-Party Links and Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Third-Party Links and Services</h2>
            <p className="text-gray-700 mb-4">
              Faithflow may contain links to third-party sites or services. We do not endorse or assume responsibility for third-party content.
            </p>
            <p className="text-gray-700 mb-4">
              Your use of third-party sites is subject to their respective terms and privacy policies.
            </p>
          </section>

          {/* No Representations or Warranties */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">No Representations or Warranties</h2>
            <p className="text-gray-700 mb-4">
              The Service is provided <strong>&quot;as is&quot;</strong> without warranties of any kind, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Accuracy</li>
              <li>Availability</li>
              <li>Error-free operation</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Some jurisdictions do not allow certain warranty exclusions; in those cases, these limitations may not apply.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Faithflow is not liable for any indirect, incidental, special, or consequential damages, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Loss of profits</li>
              <li>Loss of data</li>
              <li>Service interruptions</li>
              <li>Inaccurate results</li>
              <li>Costs of substitute services</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Liability is limited to the total amount paid by you to Faithflow in the 12 months before the event giving rise to the claim.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              Faithflow may suspend or terminate your access at any time for any reason. You may close your account at any time through the Service.
            </p>
            <p className="text-gray-700 mb-4">
              Certain sections of these Terms survive termination, including Intellectual Property, Disclaimers, Limitation of Liability, and Arbitration.
            </p>
          </section>

          {/* Proprietary Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Proprietary Rights</h2>
            <p className="text-gray-700 mb-4">
              All Service content—including text, images, graphics, audio, software, lesson materials, and designs—is owned by Faithflow or its licensors.
            </p>
            <p className="text-gray-700 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Copy</li>
              <li>Redistribute</li>
              <li>Modify</li>
              <li>Scrape</li>
              <li>Sell</li>
              <li>Reproduce</li>
            </ul>
            <p className="text-gray-700 mb-4">
              any Service content unless expressly permitted.
            </p>
            <p className="text-gray-700 mb-4">
              Any learning content or activity data generated through use of Faithflow (&quot;Activity Materials&quot;) is owned exclusively by Faithflow.
            </p>
          </section>

          {/* Trademarks */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Trademarks</h2>
            <p className="text-gray-700 mb-4">
              &quot;Faithflow,&quot; associated logos, and design elements are trademarks of Asymmetric Labs, LLC. You may not use them without permission.
            </p>
          </section>

          {/* Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Privacy</h2>
            <p className="text-gray-700 mb-4">
              Use of the Service is governed by our Privacy Policy at <Link href="/privacy" className="text-blue-600 hover:underline">faithflowapp.com/privacy</Link>.
            </p>
          </section>

          {/* Promotion Codes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Promotion Codes</h2>
            <p className="text-gray-700 mb-4">
              Faithflow may offer promotional codes for virtual items, discounts, free trials, or subscription access. Promotion Codes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Have no cash value</li>
              <li>May not be resold</li>
              <li>May have expiration dates</li>
              <li>May be modified or revoked at any time</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Unauthorized use may result in account termination.
            </p>
          </section>

          {/* Copyright Complaints (DMCA) */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Copyright Complaints (DMCA)</h2>
            <p className="text-gray-700 mb-4">
              If you believe your copyrighted work has been infringed, you may submit a notice to:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="text-gray-700 font-semibold">Asymmetric Labs – DMCA Agent</p>
              <p className="text-gray-700">Email: <a href="mailto:legal@faithflowapp.com" className="text-blue-600 hover:underline">legal@faithflowapp.com</a></p>
            </div>
            <p className="text-gray-700 mb-4">
              Include all information required under <strong>17 U.S.C. §512(c)(3)</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              Counter-notifications may also be submitted following DMCA guidelines.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of the State of Texas, USA.
            </p>
          </section>

          {/* Choice of Forum */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Choice of Forum</h2>
            <p className="text-gray-700 mb-4">
              Subject to arbitration, all disputes shall be resolved in state or federal courts located in <strong>Travis County, Texas</strong>. Both parties consent to this venue.
            </p>
          </section>

          {/* Dispute Resolution & Arbitration */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Dispute Resolution &amp; Arbitration</h2>
            <p className="text-gray-700 mb-4">
              Any dispute seeking monetary relief must be resolved by <strong>binding, individual arbitration</strong> unless you opt out within 30 days of first using the Service.
            </p>
            <p className="text-gray-700 mb-4">
              Key requirements:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>You must send a written Notice of Claim</li>
              <li>Both parties must attempt a good-faith settlement discussion</li>
              <li>If unresolved, arbitration proceeds under the rules of the <strong>American Arbitration Association (AAA)</strong></li>
              <li>No class actions or consolidated claims permitted</li>
            </ol>
            <p className="text-gray-700 mb-4">
              You may opt out by emailing <a href="mailto:legal@faithflowapp.com" className="text-blue-600 hover:underline">legal@faithflowapp.com</a> within 30 days of account creation.
            </p>
            <p className="text-gray-700 mb-4">
              Either party may seek non-monetary injunctive relief in court.
            </p>
          </section>

          {/* Language */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Language</h2>
            <p className="text-gray-700 mb-4">
              These Terms were originally written in English (US). If there is any conflict between translated versions and the English version, the English version governs.
            </p>
          </section>

          {/* California Residents */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">California Residents</h2>
            <p className="text-gray-700 mb-4">
              California users may contact the California Department of Consumer Affairs with unresolved complaints.
            </p>
          </section>

          {/* Miscellaneous */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Miscellaneous</h2>
            <p className="text-gray-700 mb-4">
              These Terms constitute the entire agreement between you and Faithflow. If any provision is held invalid, the remaining provisions remain enforceable. Faithflow may assign its rights and obligations without restriction.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
