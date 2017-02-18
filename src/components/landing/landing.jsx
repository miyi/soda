import React from "react";
import Map from "./map.js"
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";
// import courses from '../db/courseCatalogueSchema.js';

const brandName = "Soda Session";
const brand = <span>{brandName}</span>;
// console.log(courses.getCourses());

const onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
  name : name,
  email: email,
  password: password
});

const businessAddress = (
  <address>
    <strong>Soda Machine</strong><br/>
    5692 Kings rd, Suite 207<br/>
    Vancouver, BC, V6T 1K8<br/>
    Canada<br/>
    +1 (604) 728-2801
  </address>
);

const pricingPlan1 = {
  name: "Students",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false
  },
  onClick: onSignup
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  name: "Tutors",
  features: Object.assign({}, pricingPlan1.features, {
    "Extra Feature 1": true
  }),
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  name: "Parents",
  features: Object.assign({}, pricingPlan2.features, {
    "Extra Feature 2": true
  }),
});

// const sampleCode = `<Page>
//   <Hero><h1>{ /* Content */ }</h1></Hero>
//   <Section heading="Hello!">
//     <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
//   </Section>
//   <Section>
//     <Team>
//       <TeamMember name="Link" title="Co-founder" imageUrl="img/link.jpg"> { /* Description */ } </TeamMember>
//       <TeamMember name="Yoshi" title="Co-founder" imageUrl="img/yoshi.jpg"> { /* Description */ } </TeamMember>
//     </Team>
//   </Section>
//   <Section>
//     <PricingTable>
//       <PricingPlan {... pricingPlan1} />
//       <PricingPlan {... pricingPlan2} />
//       <PricingPlan {... pricingPlan3} />
//     </PricingTable>
//     <SignupInline onSubmit={onSignupCallback}/>
//   </Section>
// </Page>
// `;

//========in export default (props) => return ()
// <Section className="nopad-bottom">
//   <Code lang="jsx" block>{sampleCode}</Code>
// </Section>


export default (props) => {
  return (
    <Page>

      <Navbar brand={brand}>
        <NavItem><DropdownToggle data-toggle="modal" data-target="#signup-modal">Show Signup modal</DropdownToggle></NavItem>

        <NavItem dropdown={true}>
          <DropdownToggle>about us</DropdownToggle>
          <DropdownMenu>
            <a href="https://github.com/dennybritz/neal-react" className="dropdown-item" target="_blank">
              Our story
            </a>
            <a href="https://github.com/dennybritz/neal-sample" className="dropdown-item" target="_blank">
              Contact us
            </a>
          </DropdownMenu>
        </NavItem>
      </Navbar>


      <Section className="subhero">
        <ImageList centered>
          <ImageListItem src="assets/img/press/cnn-logo.png" url="http://www.cnn.com"/>
          <ImageListItem src="assets/img/press/forbes-logo.png" url="http://forbes.com/"/>
          <ImageListItem src="assets/img/press/theverge-logo.png" url="http://www.theverge.com/"/>
          <ImageListItem src="assets/img/press/techcrunch-logo.jpg" url="http://techcrunch.com/"/>
        </ImageList>
      </Section>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <p className="lead">Tutors OnDemand</p>
            <p>Hundreds of tutors nearby teaching everything imaginable. Struggling with materials from class or stuck on an assignment. You can waste hours more struggling on something that someone can explain in a matter of minutes. Schools suck sometimes, but we can make it a little better.</p>
          </div>
          <div>
            <p className="lead">The right person for you</p>
            <p>Our tutors are screened and selected for the most transparent screening process possible. From fellow students to Ph.d graduates, qualifications are screened and transparent so you can find the perfect person for you.</p>
          </div>
          <div>
            <p className="lead">Teach on your own terms</p>
            <p>There is a teacher in all of us. Help a fellow students make their break, or just help pay for your student loans. Teach on your own schedule is now easy as pie. Just tell us which classes and when you are free, and we will fill out the rest.</p>
          </div>
        </HorizontalSplit>
      </Section>
      <Map/>
      <Section heading="Inline and Modal Signup components" className="gray">
        <p>Use these components to capture user data, display a payment dialog and/or send them to your own backend for handling. Of course, you could also just use a Typeform to collect user emails. </p>
        <SignupInline onSubmit={onSignup}/>
        <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
        <p>
          <a className="btn btn-primary btn-ghost" data-toggle="modal" data-target="#signup-modal">Show Signup modal</a>
        </p>
      </Section>

      <Section>
        <PricingTable>
          <PricingPlan {... pricingPlan1} />
          <PricingPlan {... pricingPlan2} />
          <PricingPlan {... pricingPlan3} />
        </PricingTable>
      </Section>

      <Section>
        <CustomerQuotes>
          <CustomerQuote name="Paul Graham" title="YC" imageUrl="/assets/img/people/paulgraham.jpg">
            <p>What I tell founders is not to sweat the business model too much at first. The most important task at first is to build something people want. If you don't do that, it won't matter how clever your business model is.</p>
          </CustomerQuote>
          <CustomerQuote name="Elon Musk" imageUrl="assets/img/people/elonmusk.jpg">
            <p>I came to the conclusion that we should aspire to increase the scope and scale of human consciousness in order to better understand what questions to ask. Really, the only thing that makes sense is to strive for greater collective enlightenment.</p>
          </CustomerQuote>
          <CustomerQuote name="Reid Hoffman" title="Linkedin" imageUrl="assets/img/people/reidhoffman.jpg">
            <p>If you are not embarrassed by the first version of your product, you've launched too late.</p>
          </CustomerQuote>
        </CustomerQuotes>
      </Section>

      <Section>
        <Team>
          <TeamMember name="Ming Yin" title="Co-founder" imageUrl="assets/img/people/grumpycat.jpg">
            This is the best thing since magnets. Public education institutions today lack the flexibility to handle the ever evolving skill sets demanded by the labor market. As the result students must learn more demanding materials on their own for future success. Don't feel alone, let us help take you there.
          </TeamMember>
          <TeamMember name="Member 2" title="Co-founder" imageUrl="assets/img/people/boo.jpg">
            When Ming first told me about it I thought it was shady. I still think its shady, but less shady than before.
          </TeamMember>
          <TeamMember name="Member 3" title="Co-founder" imageUrl="assets/img/people/panda.jpg">
            Not a co-founder, I just wanna say hi to mom and dad, and I really appreciate the guitar Casey gave me for christmas so a shoutout to muhbro Casey Todds!
          </TeamMember>
        </Team>
      </Section>

      <Footer
          brandName={brandName}
        facebookUrl="http://www.facebook.com"
        twitterUrl="http://www.twitter.com/dennybritz"
        githubUrl="https://github.com/dennybritz/neal-react"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
