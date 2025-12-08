import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Privacy Policy</h1>
          <p className="text-gray-700 dark:text-white mb-4 p-4 bg-gray-100 dark:bg-[#121F25] border-l-4 border-yellow-500 mt-4">
            <strong>PLEASE NOTE:</strong> The Privacy Policy was last revised on December 8, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">

          {/* General */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">General</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              At Faithflow, we care about your personal information, so we have prepared this Privacy Policy to explain how we collect, use, and share it. This Privacy Policy applies to Faithflow websites, mobile apps, and related services (&quot;Service&quot;). By using the Service, you agree with Faithflow&apos;s collection, use, and sharing of your personal information in accordance with the terms of this Privacy Policy.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              Please note that Faithflow is constantly testing and improving our product features. Any features discussed in this Privacy Policy may not be available to all users or in all jurisdictions.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Information We Collect</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              When you use the Service, Faithflow may collect the following personal information about you.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">a. Account Registration</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              To register for a Faithflow account, you may provide us with your age and email address. In some countries, you may also provide us with your phone number.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              You may also register for a Faithflow account using certain social logins, such as Google and Facebook. If you register for Faithflow using a social login, Faithflow may receive information about you from your social login provider, including your email address and contacts.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              You can manage your Faithflow account and social logins from your Settings.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">b. Profile Page & User-Generated Content</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              After you register for your Faithflow account, a profile page will be created for you (&quot;Profile&quot;). Your Profile will be populated by information you submit, such as your name, username, bio, and profile picture (&quot;User-Generated Content&quot;). Your age, phone number, and email address are not included in your public Profile and are not considered User-Generated Content under this Privacy Policy. Other Faithflow users may be able to search for your Profile using your name, username, email address, or phone number.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              Your Profile will also include information about your learning progress, such as the content you are engaging with, your learning statistics, and your achievements. Moreover, your Profile will show a list of your followers and other users you follow.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              By default, your Profile is public, and visible to other Faithflow users and anyone else on the Internet. In addition, your User-Generated Content may be publicly visible. If your Profile is public, third-party websites or web scrapers may be able to read, collect, and use your public information for their own purposes. However, you can set your Profile to private in your Settings.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              You may be able to submit comments that will supplement other users&apos; Profiles and other users may be able to submit comments that will supplement your Profile. Any comments you submit are considered User-Generated Content under this Privacy Policy. You can delete comments you submit or comments that other users submit to your Profile.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow may scan or review any User-Generated Content, or share your User-Generated Content with a third-party content moderation service provider, to ensure compliance with our Community Guidelines. Faithflow may restrict or delete User-Generated Content if it violates our Community Guidelines or for any other reason.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">c. AI Features</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow may offer AI-powered features that allow you to send text or audio messages to AI companions in an open-ended conversational format.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              When you interact with AI features, the text and audio you submit may be shared with AI vendors such as OpenAI. Additionally, Faithflow may generate, record, and store audio recordings or transcripts of the text and audio you submit, and use these recordings or transcripts for product improvement and personalization purposes, including training and running artificial intelligence models. Please do not submit any personal, sensitive, or confidential information when using AI features.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">d. Speaking Activities</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Some activities involve you speaking into the Faithflow app. To recognize speech, your audio may be sent to a third-party provider such as Google, Apple, or Amazon Web Services. Additionally, Faithflow may collect and analyze your speech to help us understand the effectiveness of our content and to improve or personalize the product. You may skip speaking activities. You may also choose not to share your audio with us for product improvement purposes in your app privacy settings.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">e. Contact Sync Feature</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow has a Contact Sync feature, which allows you to find your contacts who also use Faithflow. If you use Contact Sync, you will give the Faithflow app permission to access the contacts stored on your phone for the purpose of identifying your contacts who also use Faithflow. If Faithflow identifies a user with the same phone number as someone in your contacts, we will recommend that user as someone you may wish to follow.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              If you use the Contact Sync feature, Faithflow will not store your contacts&apos; phone numbers, but only an encrypted &quot;hash&quot; of them. This hash is an alternative code to the actual phone number and can be used only to uniquely identify the number. The hashing process securely strips away the real phone number, so Faithflow cannot use the hashes to identify your contacts&apos; real phone number, contact your contacts, or share their information with anyone else. This hashing process applies only to your contacts&apos; phone numbers and not yours.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              If you have submitted your phone number to Faithflow, whether through Contact Sync or some other way (such as adding the phone number to your profile, using it to register, or using it to activate other product features), other Faithflow users who have your phone number in their contacts may be able to locate your Profile using Contact Sync.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">f. Activity Data & IP Addresses</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              When you use the Service, we may generate data about your use of the Service, which may include your browser and device data, log data, and IP address. We will also generate data regarding your engagement in educational activities on the Service.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              We may recommend other Faithflow users for you to follow, and for other users to follow you, based on a shared IP address, such as other users on the same WiFi network. We may also use your IP address to display a location on your profile, which you may disable at any time. We will retain your IP address for no more than thirty (30) days, unless exceptional circumstances require longer retention.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">g. Cookies</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              When you access the Faithflow website, we store certain data from your browser using cookies. A cookie is a piece of data stored on the user&apos;s computer tied to data about the user. We use session ID cookies to confirm that users are logged in. If you do not want your data to be collected by cookies, there is a simple procedure in most browsers that allows you to deny or accept the cookie feature. However, cookies may be necessary to provide you with certain features available on the website (e.g., customized information).
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">h. Google Analytics</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              We use Google Analytics, which is a web analytics tool that helps us understand how users engage with our website. Like many services, Google Analytics uses first-party cookies to track user interactions, as in our case, where they are used to collect information about how users use our site. This information is used to compile reports and to help us improve our site. These reports disclose website trends without identifying individual visitors.
            </p>
          </section>

          {/* How We Process Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">How We Process Your Information</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow may process your personal information according to the following legal bases: to provide products or services you request, to promote Faithflow&apos;s legitimate interests, to comply with legal obligations, and with your consent. In particular, Faithflow may process and share your personal information in the following ways:
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">a. Providing and improving the Service</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow will process your personal information to provide and improve the Service. For example, we will use the information you provide to maintain your Profile and learning progress, display your Profile to other users (unless you make it private), personalize learning content, detect and fix bugs, perform research, and provide customer service to you.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow may share personal information with third parties that help us provide or improve the Service, including hosting providers such as Amazon Web Services, search engine providers such as Google, analytics providers such as Crashlytics, support providers such as ZenDesk, and payment processors such as Stripe. Faithflow may also share your information with third-party vendors that support product features such as AI, speech recognition, and content moderation.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">b. Communicating with you</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow will use the email address or phone number you provide to send you the following types of messages:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-white space-y-2 mb-4">
              <li>Essential messages to support the operation of the Service.</li>
              <li>Messages to support the Faithflow teaching methodology and reinforce your learning, such as learning tips, reminders to practice, and progress reports.</li>
              <li>Notifications about friend requests and your friends&apos; progress on Faithflow.</li>
              <li>Announcements regarding changes to the Service or products.</li>
              <li>Announcements of new Faithflow products, services, offers, or research opportunities.</li>
            </ul>
            <p className="text-gray-700 dark:text-white mb-4">
              You may opt-out of receiving non-essential messages in your Settings.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">c. Complying with law and preventing harmful activities</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow may process and share personal information if necessary to comply with legal requests, such as subpoenas or court orders. Faithflow may share personal information when we believe it is necessary to comply with law, to protect our interests or property, to prevent fraud or other illegal activity, to assist law enforcement, or to prevent imminent harm. This may include sharing information with other companies, lawyers, agents, or government agencies.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">d. Personalized advertising</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow may process and share your personal information for the purpose of providing you with personalized advertising. To provide personalized advertising, we work with a variety of third-party advertising networks, marketing analytics service providers, and website analysis firms, such as Google, Facebook, and Unity. These third-party advertising service providers collect and use personal information about your visits to and use of the Service, as well as other websites, in order to serve you with advertisements and content tailored to meet your preferences and likely interests, and better understand ad effectiveness.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              You can opt out of receiving personalized advertising in your Settings. Please note that opting out of personalized advertising does not prevent the display of all advertisements to you. Certain Faithflow subscriptions may offer an ad-free experience.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">e. Anonymous information</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow may process aggregated, de-identified, or otherwise anonymous or anonymized information for any purpose. Such information is not considered personal information.
            </p>
          </section>

          {/* Your Data Subject Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Your Data Subject Rights</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              You also have the following rights in relation to the personal information we hold about you, in addition to any other rights required by applicable law:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-white space-y-2 mb-4">
              <li>Know what personal information we have collected about you.</li>
              <li>Access a copy of the personal information that we hold about you.</li>
              <li>Know what personal information about you we have shared with third parties.</li>
              <li>Opt out of the sharing of your personal information with third parties.</li>
              <li>Object to our processing of your personal information.</li>
              <li>Request that we limit our use of your sensitive personal information to what is necessary to perform the services you requested.</li>
              <li>Not be discriminated against for exercising your data subject rights.</li>
              <li>Request that we delete any personal information we have collected from you.</li>
              <li>Request that we correct any inaccurate personal information about you.</li>
              <li>Export the personal information you have provided to Faithflow in a format that can be transferred electronically to a third party.</li>
              <li>Withdraw any consent you previously gave us to process your personal information.</li>
              <li>Delete your Faithflow account by following the instructions in the Service.</li>
            </ul>
            <p className="text-gray-700 dark:text-white mb-4">
              You may update or correct your information, and exercise certain opt-out rights, in your Settings page. To make a privacy-related request, please send an email to <a href="mailto:privacy@faithflowapp.com" className="text-blue-600 hover:underline">privacy@faithflowapp.com</a>.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              Please note that these rights are not absolute and Faithflow may refuse requests to exercise data subject rights if there is a legitimate reason, such as if we cannot authenticate your identity, if the request could violate the rights of a third party or applicable law, or if the request could interfere with a Faithflow service or prevent us from delivering a service you requested.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Data Retention</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow will generally retain your personal information until your account is deleted. However, Faithflow may retain certain information longer if necessary to provide our Service, defend our legitimate interests or those of third parties, comply with legal requirements, resolve or defend ourselves in disputes, investigate misuse or disruption of the Service, or perform agreements. We may also retain anonymous data indefinitely.
            </p>
          </section>

          {/* Child Users */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Child Users</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              We know that children deserve extra privacy protection. That&apos;s why we treat Child Users (meaning users under the age of 13 in the United States or another age of digital consent in their country) differently to ensure their parents are in control and we only collect the bare minimum information we need to make Faithflow work.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              Child Users are permitted to create a Faithflow account, but we ask them to provide their parent&apos;s email address instead of their own, and to register using a username that is not tied to their real name.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              After a Child User registers, we will send an email to the parent&apos;s email address about Faithflow&apos;s privacy practices regarding Child Users, including what personal information we collect and how we use, share, and protect that personal information. The email also explains how parents can request to access, change, or delete information about their child.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              With regards to the Children&apos;s Online Privacy Protection Act, Faithflow collects personal information from children under the age of 13 for the sole purpose of performing internal operations of the Service. If we discover that we have unknowingly collected additional personal information from these children, we will delete it. If you believe this to be the case, please contact us at <a href="mailto:privacy@faithflowapp.com" className="text-blue-600 hover:underline">privacy@faithflowapp.com</a>.
            </p>
          </section>

          {/* Do Not Track */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Do Not Track</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              The Service is not designed to respond to &quot;do not track&quot; signals sent by some browsers.
            </p>
          </section>

          {/* Links to Third-Party Websites */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Links to Third-Party Websites</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              The Service may contain links to other websites. Faithflow is not responsible for the content or privacy practices of other websites, including any personal or financial information collected by third-party payment processors. We encourage users to be aware of the privacy policies of other websites they visit. This Privacy Policy applies only to information collected by Faithflow. Any time you click on a link (including advertising banners) or submit your personal information to a third-party website, you will be subject to that third party&apos;s privacy policies.
            </p>
          </section>

          {/* Privacy Policy Updates */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Privacy Policy Updates</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              We may update our Privacy Policy to reflect changes to our information practices. If we do this and the changes are material, we will post a notice that we have made changes to this Privacy Policy on the Website for at least seven (7) days before the changes are made, and we will indicate the date these terms were last revised at the top of the Privacy Policy. Any revisions to this Privacy Policy will become effective at the end of that seven (7) day period.
            </p>
          </section>

          {/* Data Transfer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Data Transfer</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow is based in the United States and processes data in the United States, which may not provide equivalent levels of data protection as your home jurisdiction. Faithflow may transfer the data of users outside the United States to the United States.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              Faithflow is operated by <strong>Asymmetric Labs, LLC</strong>. Faithflow&apos;s headquarters are located within the United States.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              For all data privacy inquiries and any questions or concerns you have about this Privacy Policy, please contact us at <a href="mailto:privacy@faithflowapp.com" className="text-blue-600 hover:underline">privacy@faithflowapp.com</a>.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              For all support inquiries, please visit our <Link href="/help" className="text-blue-600 hover:underline">Help Center</Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
