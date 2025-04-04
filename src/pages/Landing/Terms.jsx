import { CompanyImageStacks } from "../../components/LayoutComponents/UserStack";
import { HeroSection } from "../../components/PageComponents/Landing/HeroSection";
import LandingPageHeader from "../../Layouts/Landing/Header";
import { Containment } from "./Containment";

export default function Terms() {
  return (
    <>
      <div className="v-layer-wrapper !bg-[var(--common-faint-bg)]">
        <section className="v-each-section relative has-bg" id="v-hero">
          <LandingPageHeader />
          <div className="v-hero-inner w-full lg:w-11/12 xl:w-9/12 mx-auto relative pb-8 lg:pb-14">
            <HeroSection pageTitle="Terms: Make payment to China from Nigeria Easily." />
          </div>
        </section>
        <section className="px-4 xl:w-10/12 mx-auto w-full flex flex-col gap-y-8 mt-14">
          <CompanyImageStacks />
          <div className="terms-container rounded-lg py-8 lg:w-9/12 mx-auto w-full">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to Naira4Yuan.com, a service provided by Naira4Yuan Limited (“Naira4Yuan,” “we,” or “us”). Our platform focuses exclusively on
              currency exchange services from Nigerian Naira (NGN) to Chinese Yuan (RMB). We do not provide escrow services or shipping/logistics
              solutions.
            </p>
            <p className="mb-4">
              These Terms of Use (“the Terms”) govern your use of our website, products, services, and applications (collectively, “the Services”). By
              using or accessing the Services in any way, you agree to all of the Terms below, which will remain in effect while you use the Services.
              These Terms also include our Privacy Policy, located at Naira4Yuan.com/privacy, and any additional policies, rules, or conditions
              (collectively, “Additional Terms”) that may apply to specific features of the Services. If you have any questions, comments, or
              concerns, please contact us at:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Email: support@Naira4Yuan.com</li>
              <li>Address: [Insert Address]</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Who We Are and Our Company Information</h2>
            <p className="mb-4">
              Naira4Yuan Limited is a company registered under the laws of the Federal Republic of Nigeria. Our registered office is at [Insert
              Address]. By continuing to use our Services, you acknowledge that you have read, understood, and agreed to be bound by these Terms in
              their entirety.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Governing Language</h2>
            <p className="mb-4">All communications, including these Terms, will be in the English Language.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Who May Use Our Services</h2>
            <ol className="pl-8 list-decimal mb-4">
              <li className="mb-2">You are at least 18 years old, and</li>
              <li className="mb-2">
                You are legally capable of forming a binding contract and are not barred from receiving services under the laws of your applicable
                jurisdiction.
              </li>
            </ol>
            <p className="mb-4">
              If you use the Services on behalf of a company or organization, you represent and warrant that you are authorized to bind that entity to
              these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Registration</h2>
            <p className="mb-4">
              Certain features of our site require registration. During registration, you may be asked to provide an email address, username, and
              password. This information must be accurate, and you may not impersonate another person. We reserve the right to reject or remove any
              username deemed offensive.
            </p>
            <p className="mb-4">
              If you choose to conduct any currency exchange transactions (Naira to Yuan), you will be asked to provide additional information, such
              as your name, address, and billing or debit card details. You must ensure that all information you provide is accurate and complete.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Age Restriction</h2>
            <p className="mb-4">
              Our Services are intended for individuals 18 years of age and older. We do not knowingly collect personal information from anyone under
              18. If we discover that a person under 18 has provided personal information, we will use our best efforts to delete it from our records.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Scope of Services</h2>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">
                <strong>Currency Exchange:</strong> Naira4Yuan provides currency exchange services solely for converting Nigerian Naira (NGN) to
                Chinese Yuan (RMB).
              </li>
              <li className="mb-2">
                <strong>No Escrow, No Shipping:</strong> We do not offer escrow services or shipping/logistics solutions. Any such arrangements are
                solely between you and any third parties (e.g., suppliers).
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              Unless otherwise stated, Naira4Yuan Limited and its licensors own the intellectual property rights to all materials on the website. Our
              content—including text, graphics, data, articles, photos, images, and illustrations (“Content”)—is protected by copyright and other
              intellectual property laws.
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">
                You agree not to copy, reproduce, modify, translate, publish, broadcast, distribute, perform, display, license, sell, or commercialize
                any Content without prior written consent from the owner of that Content.
              </li>
              <li className="mb-2">
                You may not use the Services or any Content in any manner that infringes upon the rights of Naira4Yuan or any third parties.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">License to Use Our Services</h2>
            <p className="mb-4">
              We grant each user a worldwide, non-exclusive, non-sublicensable, non-transferable, and revocable license to use the Services. This
              license is solely for the purpose of accessing and using the Services as intended. Any other uses, including reproduction, modification,
              distribution, or storage of any Content for purposes beyond the Services, is prohibited unless you have our prior written permission.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4"> Information Security and Warranty Disclaimer</h2>
            <p className="mb-4">
              I am going to keep our Services available and time from bugs, but your use of the Services is at your own risk. We provide the Services
              “as is,” without warranties of any kind (express or implied), including but not limited to merchantability, fitness for a particular
              purpose or non-infringence.
            </p>
            <p className="mb-4">Naina’s/Yuan makes no guarantees regarding:</p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">The uninsurringed or entry-free operation of the Services;</li>
              <li className="mb-2">The accuracy or reliability of any results obtained through the Services;</li>
              <li className="mb-2">Any products or services purchased or obtained through Naina’s/Yuan.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Information Security and Warranty Disclaimer</h2>
            <p className="mb-4">
              We strive to keep our Services available and free from bugs, but your use of the Services is at your own risk. We provide the Services
              “as is,” without warranties of any kind (express or implied), including but not limited to merchantability, fitness for a particular
              purpose, or non-infringement.
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">The uninterrupted or error-free operation of the Services.</li>
              <li className="mb-2">The accuracy or reliability of any results obtained through the Services.</li>
              <li className="mb-2">Any products or services purchased or obtained through Naira4Yuan.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, under no circumstances shall Naira4Yuan Limited be liable for any indirect, special, incidental,
              punitive, or consequential damages—including but not limited to lost profits, loss of data, business interruption, or computer
              failure—arising from your use of the Services, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Indemnity</h2>
            <p className="mb-4">
              You agree to indemnify and hold Naira4Yuan harmless from any claims, liabilities, damages, losses, or expenses (including attorneys’
              fees) arising from:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Your use of the Services (including any actions taken by a third party using your account).</li>
              <li className="mb-2">Your breach of these Terms.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Breach of These Terms</h2>
            <p className="mb-4">If you violate these Terms, Naira4Yuan may take measures including but not limited to:</p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Suspending your access to the Services.</li>
              <li className="mb-2">Prohibiting you from accessing the website.</li>
              <li className="mb-2">Blocking the IP addresses associated with your account.</li>
              <li className="mb-2">Pursuing legal action against you.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Cookies</h2>
            <p className="mb-4">
              We use cookies to personalize and enhance your experience. A cookie is a small data file transferred to your computer or device to help
              us remember your login information, track web traffic, and record the number and timing of your visits. If you disable cookies, some
              features of our Services may not function properly. For more details, refer to our Cookies Notice.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">International Use</h2>
            <p className="mb-4">
              We do not guarantee that the Services are available or appropriate for use outside Nigeria. If you access this site from outside
              Nigeria, you do so on your own initiative and are responsible for compliance with local laws.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Advertisers</h2>
            <p className="mb-4">Our Site may include links to third-party websites or services. We are not responsible or liable for:</p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">The content or materials on such third-party sites.</li>
              <li className="mb-2">Any products or services they offer.</li>
              <li className="mb-2">Any dealings you may have with such third parties.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Data Privacy and Protection</h2>
            <p className="mb-4">
              We respect your privacy and protect personal information in accordance with applicable data protection laws, including the Nigeria Data
              Protection Act 2023. By using our Services, you agree to the practices described in our Privacy Notice and consent to our collection and
              use of your personal information, provided it is accurate and up to date.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the Federal Republic of Nigeria. You submit to the non-exclusive jurisdiction of the courts in
              Nigeria for any disputes arising under or related to these Terms or the Services.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Termination</h2>
            <p className="mb-4">
              You may terminate your agreement with Naira4Yuan at any time by ceasing to use our Services. We reserve the right to suspend or
              terminate your access to the Services for any reason, including violation of these Terms. Upon termination, your right to use
              Naira4Yuan’s Services ceases immediately.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to the Terms of Use</h2>
            <p className="mb-4">
              We may revise or modify these Terms from time to time by updating this page. We will not apply changes retroactively. We will also
              endeavor to notify you of any material changes, which may be done via email or service notifications. By continuing to use the Services
              after such changes become effective, you agree to be bound by the revised Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Binding Arbitration (Mediation)</h2>
            <p className="mb-4">
              You agree that any disputes or claims arising out of or related to these Terms or the Services shall be resolved by mediation, in
              accordance with the Arbitration and Mediation Act 2023. Each party shall bear its own costs of mediation. You and Naira4Yuan may seek
              judicial intervention to compel mediation, stay proceedings, or confirm or modify a mediation resolution.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Complaints and Contact Information</h2>
            <p className="mb-4">If you have any complaints, questions, or concerns, please reach out to us at:</p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">
                <strong>Naira4Yuan Limited</strong>
              </li>
              <li className="mb-2">
                <strong>Email:</strong> support@Naira4Yuan.com
              </li>
              <li className="mb-2">
                <strong>Address:</strong> Lagos, Nigeria
              </li>
              <li className="mb-2">
                <strong>Hours of Operation:</strong> 9 AM – 5 PM
              </li>
            </ul>

            <p className="mb-4 text-gray-700">
              By using Naira4Yuan.com, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>
        </section>
        <Containment />
      </div>
    </>
  );
}
