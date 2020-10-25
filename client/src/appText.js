/* eslint-disable quote-props,quotes */

import alternativeIntro from './text/alternative-intro.txt'

export const appText = {
  'appTitle': 'npuser',
  'topLinks': [
    {
      'hash': '#npuser-how',
      'text': 'How does npuser work?',
    },
    {
      'hash': '#alternatives',
      'text': 'Why npuser',
    },
    {
      'hash': '#start',
      'text': 'Get Started',
    },
  ],
  'hero': {
    'title': 'n p user ',
    'subTitle': 'No password user authentication',
    'body': 'An application service for user authentication.\n' +
      '- quick and painless registration\n' +
      '- quick and painless authentication\n' +
      '- no passwords\n' +
      '- no tracking of user on the authentication server\n' +
      '- user privacy protected across applications\n' +
      '- more users will try your application\n' +
      '- open source'
  },
  'npKeyValues': [
    {
      title: 'Easy registration',
      body: 'Your users cam quickly get into your service and skip the usual up-front challenge of registration. '
    },
    {
      title: 'Easy login',
      body: 'Your users can return to your application easily. If they come back via the same browser on the same computer then your users can immediately access your service. Yet if they come from another machine or browser the log in process is as easy as the registration process.  Your application can (should?) use a hash of the user\'s email address as their user id. With this hash you can grant your user access to their resources. '
    },
    {
      title: 'No password',
      body: 'Users no longer need to create yet another strong and unique password! No need to implement "Forgot your password".  No password strength checkers and complex validation code. No need for password policies.  Etc. '
    },
    {
      title: 'No tracking',
      body: 'npuser has no need for a database and it doesn\'t track users in any way.  It\'s open source so check out the code!'
    },
    {
      title: 'No social media tracking',
      body: 'Some users are concerned about privacy leakage between applications that share authentication services. Because npuser has no database it can\'t cross reference your users between other applications that may also use npuser.'
    },
    {
      title: 'Improve access',
      body: 'Users are often turned away from applications when they need to create yet another secure password that is different from all the other sites they use. '
    },
    {
      title: 'Open Source',
      body: 'npuser is open source, including how the OS is configured so technical users can verify the security and the claim the system is not tracking users.\n' +
        'Your application can use the nupser.org service or install and run the npuser system on your servers.'
    },
  ],
  'npuserHow': [
    {
      title: 'Simple Account Creation and Login',
      imgSrc: 'AppLocked.png',
      imgAlt: 'Application locked',
      body: 'Your user wants to try out and access your application. With npuser it is simple. You web client asks your potential user to enter their email address. That\'s it.  Your user benefits: <ul> <li>No need to create an account.</li><li>No security questions.</li><li>No need to enter a password twice.</li><li>No need to respond to a Capthca.</li><li>No password strength checking</li> <li>No need for \'Forgot your password?\'</li><li>Etc. It\'s easy for new users!</li></ul> \n (Have you ever considered how often potential customers don\'t get past this first step because of password fatigue?) \n For your application there is <ul><li>No need to check passwords match or are strong enough. Etc.</li><li>No need to hash the user passwords to contend with future hackers.</li><li>Etc.  It\' easy to setup and use.</li></ul>'
    },
    {
      title: 'Next step',
      imgSrc: 'AppAsksNpuser.png',
      imgAlt: 'Ask npuser',
      body: 'You application sends an encrypted web message to npuser.  Note that unlike other authorization systems like Single Sign On or OAuth your user\'s experience stays on your web application.  npuser decrypts your message using a shared secret that was set up before.  npuser now generates a code and sends an email to your user. It also returns an encrypted message that your application will return back to npuser in the next stage.'
    },
    {
      title: 'Verification',
      imgSrc: 'AppUnlocked.png',
      imgAlt: 'Verification',
      body: 'Your user opens their email application, finds the email with the verification code and enters it into your web client.  Once your web application has the verification code it sends back the encrypted message plus the verification code the user entered. npuser will verify the code and, if valid, tell your application how long ago the user was sent the message.  Your application can then allow your user to enter your web application, or not.\n' +
        'The verification codes are easy to remember 6 digit numbers (a future implementation will offer passphrases comprised of 4 random 5 character words).\n' +
        ''
    },
    {
      title: 'Authorization',
      body: 'After your user is verified your application can store a JWT token that npuser provides in your user\'s browser localstorage. Whenever your user invokes an API call on your server just have your application foward that JWT to npuser to be sure the bearer of that token has been authenticated.  You can use this to authorize the user to access your services.\n' +
        'Alternatively your application can generate and manage its own JWT.'
    },
  ],
  'alternatives': {
    title: 'Alternatives to npuser',
    intro: alternativeIntro,
    options: [
      {
        title: 'Build your own',
        body: ''
      },
    ],
  },
  sso: {
    title: 'SSO',
    subTitle: 'Single Sign On services',
    ssoWeakness: [
      'If a hacker breaks into your SSO identity provider, all your linked systems could be open to attack. The risk of this is small because high-quality identity providers have top-notch security but there are no guarantees and some users prefer to not trust a single point of failure. <br/> With <strong>npuser</strong> there is nothing to hack on the <strong>npuser</strong>  service so, your users are protected.',
      'Setting up an application with SSO can take longer than expected. <br/> With <strong>npuser</strong> your application simply installs the <strong>npuser</strong> library and makes two web service calls with your application\'s private clientID',
      'During SSO the user is redirected to another company\'s website and will be redirected back to your application when done.  With <strong>npuser</strong> the user never leaves your site.',
      'SSO using social networking services may be restricted with workplaces that block social media sites and government connections where censorship is involved. <br/> With <strong>npuser</strong> your application is always available.',
      'Some SSO-linked sites may give their user data to third-party entities. <br/> With <strong>npuser</strong> your user\'s information is never stored on <strong>npuser</strong> so there is nothing that can be shared.',
    ],
  },
}

