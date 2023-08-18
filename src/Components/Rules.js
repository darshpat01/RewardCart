import React from "react";

function Rules() {
  return (
    <>
      <div className="bg-white shadow-lg p-4 w-[55em]">
        <div>
          <p className="font-bold text-lg text-center mb-4">
            Blockchain-based Loyalty and Rewards Program Rules
          </p>
          <p>
            Welcome to our Blockchain-based Loyalty and Rewards Program! This
            page outlines the rules and guidelines for participating in our
            innovative loyalty program, which leverages blockchain technology to
            enhance security, transparency, and user engagement.
          </p>
          <p className="font-bold text-lg my-4">
            Earning Fungible Tokens (Loyalty Points) :
          </p>
          <ol className="list-decimal list-inside">
            <li>
              <span className="font-bold">Purchase Rewards: </span> Earn
              fungible tokens by making purchases on our E-commerce platform.
              For every X amount spent, you will earn Y tokens, subject to
              change based on ongoing promotions.
            </li>
            <li>
              <span className="font-bold">Referral Bonuses:</span> Invite
              friends to join our platform using your unique referral code. Earn
              Z tokens for each successful referral who completes their first
              purchase.
            </li>
            <li>
              <span className="font-bold">Social Media Interactions:</span>{" "}
              Engage with our brand on social media platforms. Share, like, and
              comment on our posts to earn tokens periodically.
            </li>
          </ol>
          <p className="font-bold text-lg my-4">Tokenomics and Governance :</p>
          <ol className="list-decimal list-inside">
            <li>
              <span className="font-bold">Token Value: </span> The value of
              fungible tokens (loyalty points) will be determined by the
              platform and may vary based on market conditions.
            </li>
            <li>
              <span className="font-bold">Issuance of Tokens:</span> The number
              of tokens issued will depend on the transaction value, referral
              success, and social media engagement. Brands and sellers can also
              issue tokens to customers based on their discretion.
            </li>
            <li>
              <span className="font-bold">Governance of Treasury:</span>
              The platform will manage the day-to-day governance of the token
              treasury. Decisions regarding token issuance, value adjustments,
              and overall management will be made transparently and in
              accordance with predefined rules.
            </li>
          </ol>
          <p className="font-bold text-lg my-4">
            Account Settlement and Reconciliation :
          </p>
          <ol className="list-decimal list-inside">
            <li>
              <span className="font-bold">Instant Settlement: </span> Fungible
              tokens' settlement between brands, sellers, and E-commerce
              platforms will occur instantly on the blockchain. This ensures
              quick and accurate transactions.
            </li>
            <li>
              <span className="font-bold">On-Chain Recording:</span> All token
              settlements will be recorded on the blockchain, ensuring
              transparency and preventing disputes.
            </li>
          </ol>
          <p className="font-bold text-lg my-4">
            Redemption and Use of Tokens :
          </p>
          <ol className="list-decimal list-inside">
            <li>
              <span className="font-bold">Reward Redemption: </span> Users can
              redeem their fungible tokens for rewards offered by brands and
              partners. Each redemption will be recorded on the blockchain to
              prevent double-spending.
            </li>
            <li>
              <span className="font-bold">Tracking and Management: </span> Users
              can access a user-friendly interface to track their earned tokens,
              view their transaction history, and explore available redemption
              options.
            </li>
          </ol>
          <p className="font-bold py-4">Important Note: </p> Participation in
          our blockchain-based loyalty and rewards program signifies your
          acceptance of these rules and guidelines. The platform reserves the
          right to modify the rules as needed, with any changes communicated
          transparently to all participants. For any queries or concerns related
          to the rules and guidelines, please contact our customer support.
        </div>
      </div>
    </>
  );
}

export default Rules;
