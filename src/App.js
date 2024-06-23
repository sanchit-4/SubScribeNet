import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #3b8d99 0%, #6b6b83 100%);
    color: #f0f2f5;
  }
`;

// Header Component
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Logo = styled.img`
  height: 40px;
`;

const CompanyName = styled.h1`
  font-size: 1.5rem;
`;

const Header = ({ companyName, logo }) => (
  <HeaderContainer>
    <Logo src={logo} alt="Company Logo" />
    <CompanyName>{companyName}</CompanyName>
  </HeaderContainer>
);

// Footer Component
const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const SocialLinks = styled.div`
  margin: 10px 0;

  a {
    color: #61dafb;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #21a1f1;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <SocialLinks>
      <Link to="/about-us">About Us</Link>
      <Link to="/contact-us">Contact Us</Link>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    </SocialLinks>
    &copy; {new Date().getFullYear()} SubScribeNet. All rights reserved.
  </FooterContainer>
);

// LandingPage Component
const LandingContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
`;

const LoginButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #61dafb;
  color: #282c34;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

const LandingPage = ({ companyName, logo }) => (
  <LandingContainer>
    <img src={logo} alt="Company Logo" height="100" />
    <h1>{companyName}</h1>
    <Description>
      Welcome to {companyName}, your one-stop solution for managing and trading subscriptions on the StarkNet blockchain.
    </Description>
    <LoginButton to="/login">Login</LoginButton>
  </LandingContainer>
);

// LoginPage Component
const LoginContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const LoginForm = styled.form`
  display: inline-block;
  text-align: left;
`;

const Input = styled.input`
  display: block;
  margin: 10px 0;
  padding: 10px;
  width: 200px;
`;

const LoginButtonForm = styled.button`
  padding: 10px 20px;
  background-color: #61dafb;
  color: #282c34;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" required />
        <Input type="password" placeholder="Password" required />
        <LoginButtonForm type="submit">Login</LoginButtonForm>
      </LoginForm>
    </LoginContainer>
  );
};

// Dashboard Component
const DashboardContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const OptionButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #61dafb;
  color: #282c34;
  text-decoration: none;
  border-radius: 5px;
  margin: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Dashboard = () => (
  <DashboardContainer>
    <h1>Dashboard</h1>
    <OptionButton to="/subscriptions">Manage Subscriptions</OptionButton>
    <OptionButton to="/trade">Trade Subscriptions</OptionButton>
  </DashboardContainer>
);

// SubscriptionList Component
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Card = styled(Link)`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SubscriptionTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
`;

const SubscriptionDetails = styled.p`
  color: #666;
`;

const subscriptions = [
  { id: 1, title: 'Chainlink', details: 'Monthly Oracle Service', expires: '2024-12-31', otherDetails: 'Reliable data feed services.' },
  { id: 2, title: 'Alchemy', details: 'Annual API Access', expires: '2025-01-15', otherDetails: 'Blockchain infrastructure services.' },
  { id: 3, title: 'Infura', details: 'Monthly Ethereum API', expires: '2024-11-20', otherDetails: 'Ethereum network access.' },
  { id: 4, title: 'The Graph', details: 'Monthly Data Indexing', expires: '2024-10-05', otherDetails: 'Blockchain data indexing services.' },
  // Add more subscriptions as needed
];

const SubscriptionList = () => (
  <ListContainer>
    {subscriptions.map((subscription) => (
      <Card to={`/subscriptions/${subscription.id}`} key={subscription.id}>
        <SubscriptionTitle>{subscription.title}</SubscriptionTitle>
        <SubscriptionDetails>{subscription.details}</SubscriptionDetails>
      </Card>
    ))}
  </ListContainer>
);

// TradeSubscriptions Component
const TradeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const UserCard = styled(Link)`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const UserName = styled.h2`
  font-size: 1.2rem;
  color: #333;
`;

const UserDetails = styled.p`
  color: #666;
`;

const BuyButton = styled.button`
  padding: 10px 20px;
  background-color: #61dafb;
  color: #282c34;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #21a1f1;
  }
`;

const users = [
  { id: 1, name: 'Alice', subscription: 'Chainlink - Monthly Oracle Service', expires: '2024-12-31', otherDetails: 'Reliable data feed services.' },
  { id: 2, name: 'Bob', subscription: 'Alchemy - Annual API Access', expires: '2025-01-15', otherDetails: 'Blockchain infrastructure services.' },
  { id: 3, name: 'Charlie', subscription: 'Infura - Monthly Ethereum API', expires: '2024-11-20', otherDetails: 'Ethereum network access.' },
  { id: 4, name: 'Dave', subscription: 'The Graph - Monthly Data Indexing', expires: '2024-10-05', otherDetails: 'Blockchain data indexing services.' },
  // Add more users as needed
];

const TradeSubscriptions = () => (
  <TradeContainer>
    <h1>Trade Subscriptions</h1>
    <UserList>
      {users.map((user) => (
        <UserCard to={`/trade/${user.id}`} key={user.id}>
          <UserName>{user.name}</UserName>
          <UserDetails>Trading: {user.subscription}</UserDetails>
        </UserCard>
      ))}
    </UserList>
  </TradeContainer>
);

// SubscriptionDetail Component
const DetailContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const SubscriptionDetail = ({ subscriptions }) => {
  const { id } = useParams();
  const subscription = subscriptions.find(sub => sub.id === parseInt(id));

  if (!subscription) {
    return <h1>Subscription Not Found</h1>;
  }

  return (
    <DetailContainer>
      <h1>{subscription.title}</h1>
      <p>Details: {subscription.details}</p>
      <p>Expires: {subscription.expires}</p>
      <p>Other Details: {subscription.otherDetails}</p>
      <Link to="/subscriptions">Back to Subscriptions</Link>
    </DetailContainer>
  );
};

// TradeDetail Component
const TradeDetail = ({ users }) => {
  const { id } = useParams();
  const user = users.find(usr => usr.id === parseInt(id));

  if (!user) {
    return <h1>Trade Not Found</h1>;
  }

  return (
    <DetailContainer>
      <h1>{user.name}</h1>
      <p>Subscription: {user.subscription}</p>
      <p>Expires: {user.expires}</p>
      <p>Other Details: {user.otherDetails}</p>
      <BuyButton>Buy</BuyButton>
      <Link to="/trade">Back to Trade</Link>
    </DetailContainer>
  );
};

// AboutUs Component
const AboutUsContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const AboutUs = () => (
  <AboutUsContainer>
    <h1>About Us</h1>
    <p>We are a company dedicated to providing the best subscription management and trading services on the StarkNet blockchain.</p>
  </AboutUsContainer>
);

// ContactUs Component
const ContactUsContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const ContactUs = () => (
  <ContactUsContainer>
    <h1>Contact Us</h1>
    <p>For any inquiries, please email us at sanchitgoyal2803@gmail.com</p>
  </ContactUsContainer>
);

// App Component
const App = () => {
  const companyName = 'SubScribeNet';
  const logo = '/logo.png';

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header companyName={companyName} logo={logo} />
        <Routes>
          <Route path="/" element={<LandingPage companyName={companyName} logo={logo} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscriptions" element={<SubscriptionList />} />
          <Route path="/subscriptions/:id" element={<SubscriptionDetail subscriptions={subscriptions} />} />
          <Route path="/trade" element={<TradeSubscriptions />} />
          <Route path="/trade/:id" element={<TradeDetail users={users} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
