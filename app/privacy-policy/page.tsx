import AsideWithAd from "@components/asideContainer/aside-with-ad"
import NewsBody from "@components/news/news-body"

const page = () => {
  return (
    <div>
      <AsideWithAd position="left">
        <article className="flex-shrink w-full max-w-full overflow-hidden lg:w-2/3">
          <dl className="list-decimal">
            {privacyContent.map(p => (
              <>
                <dt className="mt-10 mb-3 text-2xl font-bold">{p.dt} </dt>
                {typeof p.dd === "string" ? (
                  <dd className="mb-8 text-lg">{p.dd} </dd>
                ) : (
                  p.dd?.map((d, i) => (
                    <>
                      <dt className="text-lg font-bold ">{d.dt} </dt>
                      <dd className="mb-3 text-lg">{d.dd} </dd>
                    </>
                  ))
                )}
              </>
            ))}
          </dl>
        </article>
      </AsideWithAd>
    </div>
  )
}

export default page

const privacyContent = [
  {
    dt: "Introduction",
    dd: "Welcome to Naija Metro News This Privacy Policy outlines how we collect, use, disclose, and protect personal data in accordance with the General Data Protection Regulation (GDPR). We are committed to safeguarding your privacy and ensuring the security of your personal information.",
  },
  {
    dt: "Information We Collect",
    dd: [
      {
        dt: "Information You Provide",
        dd: "When you register, subscribe, or interact with our website, you may be asked to provide personal information such as your name, email address, and other contact details.",
      },
      {
        dt: "Automatically Collected Information",
        dd: "We may collect certain information automatically when you visit our website, including your IP address, browser type, device information, and usage data.",
      },
    ],
  },
  {
    dt: "Use of Information",
    dd: [
      {
        dt: "Providing News Content",
        dd: "To deliver the latest news articles and updates to your preferences.",
      },
      {
        dt: "User Account Management",
        dd: "To manage your user account, including registration, login, and account recovery.",
      },
      {
        dt: "Communication",
        dd: "To communicate with you, respond to inquiries, and send news alerts or newsletters if you have subscribed.",
      },
      {
        dt: "Analytics",
        dd: "To analyze website usage, trends, and user behavior to improve our services and content.",
      },
    ],
  },
  {
    dt: "Data Sharing",
    dd: [
      {
        dt: "Third-Party Service Providers",
        dd: "Service providers that help us with website hosting, payment processing, analytics, and other essential functions.",
      },
      {
        dt: "Legal and Regulatory Authorities",
        dd: "When required to comply with legal obligations or to protect our rights or those of third parties.",
      },
    ],
  },
  {
    dt: "Your Rights",
    dd: [
      {
        dt: "Access and Rectification",
        dd: "The right to access your personal data and request corrections if it is inaccurate.",
      },
      {
        dt: "Erasure (Right to Be Forgotten)",
        dd: "The right to request the deletion of your personal data under certain circumstances.",
      },
      {
        dt: "Data Portability",
        dd: "The right to receive your data in a structured, commonly used, and machine-readable format.",
      },
      {
        dt: "Withdraw Consent",
        dd: "If processing is based on consent, the right to withdraw your consent at any time.",
      },
      {
        dt: "Objection",
        dd: "The right to object to the processing of your data for certain purposes.",
      },
      {
        dt: "Complaints",
        dd: "The right to lodge a complaint with a data protection authority.",
      },
    ],
  },
  {
    dt: "Security",
    dd: "We take appropriate measures to protect your data from unauthorized access, disclosure, alteration, and destruction.",
  },
  {
    dt: "Data Retention",
    dd: "We will retain your personal data only for as long as necessary for the purposes outlined in this Privacy Policy or as required by law.",
  },
  {
    dt: "Cookies",
    dd: "We use cookies to improve your browsing experience. You can manage cookie preferences through your browser settings.",
  },
  {
    dt: "Changes to this Privacy Policy",
    dd: "We may update this Privacy Policy to reflect changes in our practices or for legal reasons. Any updates will be posted on our website.",
  },
  {
    dt: "Contact Us",
    dd: "If you have questions or concerns regarding this Privacy Policy or our data practices, please contact us.",
  },
  {
    dt: "Acceptance of Terms",
    dd: "By using our website, you agree to the terms of this Privacy Policy.",
  },
  {
    dt: "Jurisdiction-Specific Provisions",
    dd: "If you operate in a jurisdiction with specific data protection requirements, please refer to our jurisdiction-specific provisions.",
  },
  //   {
  //     dt: "Thank you for using 'The News.' We are committed to protecting your privacy and ensuring a safe and informative experience.",
  //     dd: "", // Leave dd empty for this entry as it's a closing statement.
  //   },
]
