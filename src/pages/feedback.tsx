import React from 'react';
import Layout from '@theme/Layout';

export default function Feedback(): JSX.Element {
  return (
    <Layout
      title="Send Feedback"
      description="Share your thoughts, report issues, or request features for Faithflow">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Send Feedback</h1>
            <p className="margin-bottom--lg">
              We'd love to hear from you! Your feedback helps us improve Faithflow and create a better experience for everyone.
            </p>

            <div className="card margin-bottom--lg">
              <div className="card__header">
                <h3>What can you share?</h3>
              </div>
              <div className="card__body">
                <ul>
                  <li><strong>Bug Reports</strong>: Found something that's not working? Let us know.</li>
                  <li><strong>Feature Requests</strong>: Have an idea for a new feature? We want to hear it.</li>
                  <li><strong>General Feedback</strong>: Share your thoughts on what you love or what could be better.</li>
                  <li><strong>Content Suggestions</strong>: Ideas for lessons or spiritual content.</li>
                </ul>
              </div>
            </div>

            <div className="card margin-bottom--lg">
              <div className="card__header">
                <h3>How to Send Feedback</h3>
              </div>
              <div className="card__body">
                <h4>Option 1: In-App Feedback (Recommended)</h4>
                <ol>
                  <li>Open the Faithflow app</li>
                  <li>Go to <strong>Settings</strong> → <strong>Support & Feedback</strong></li>
                  <li>Tap <strong>Send Feedback</strong></li>
                  <li>Fill out the form and submit</li>
                </ol>

                <h4 className="margin-top--lg">Option 2: Email</h4>
                <p>
                  Send us an email at: <a href="mailto:feedback@faithflow.app">feedback@faithflow.app</a>
                  <br />
                  <em>(Email address is a placeholder - update with actual support email)</em>
                </p>

                <h4 className="margin-top--lg">Option 3: External Form</h4>
                <p>
                  <em>External feedback form integration (Tally, Typeform, Google Forms, etc.) will be added here.</em>
                </p>
                {/* 
                  Uncomment and configure when ready:
                  <iframe 
                    src="https://tally.so/embed/YOUR-FORM-ID" 
                    width="100%" 
                    height="600" 
                    frameBorder="0"
                    title="Feedback Form"
                  />
                */}
              </div>
            </div>

            <div className="card">
              <div className="card__header">
                <h3>What Happens Next?</h3>
              </div>
              <div className="card__body">
                <ul>
                  <li><strong>Review</strong>: We review all feedback submitted</li>
                  <li><strong>Response</strong>: For bug reports and technical issues, we typically respond within 24-48 hours</li>
                  <li><strong>Implementation</strong>: Great ideas and feature requests are added to our roadmap</li>
                  <li><strong>Updates</strong>: Follow app updates to see your suggestions come to life</li>
                </ul>
              </div>
            </div>

            <div className="margin-top--lg">
              <p><strong>Privacy Note</strong>: All feedback is treated confidentially. We use your input to improve Faithflow but will not share your personal information. See our <a href="/privacy">Privacy Policy</a> for details.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
