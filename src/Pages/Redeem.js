import React from "react";
import RedeemItem from "./RedeemItem";

const ruleStyle =
  "bg-gray-100 rounded-lg h-40 w-40 p-4 m-4 hover:bg-gray-300  font-semibold transition duration-500 ease-in-out transform  hover:scale-110 hover:cursor-pointer";
const numberStyle =
  "font-bold text-blue-500 rounded-full border-2 border-blue-500 h-6 w-6 flex items-center justify-center mb-2";

function Redeem() {
  return (
    <>
      <div className="bg-white shadow-lg p-4 w-[55em]">
        <div className="flex">
          <div className="font-bold text-lg">Redeem your SuperTokens:</div>
          <div className="ml-auto font-bold text-lg">Balance: 100</div>
        </div>
        <div className="pt-2 flex flex-wrap justify-evenly ">
          {/* image of product */}
          <RedeemItem
            img="https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png"
            name="Flipkart Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1611817594553.jpg"
            name="Zomato Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png"
            name="Swiggy Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://www.goindigo.in/content/dam/indigov2/6e-website/campaigns/sale/Landing-page-banner-mobile.jpg"
            name="Indigo Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png"
            name="Flipkart Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1611817594553.jpg"
            name="Zomato Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png"
            name="Swiggy Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://www.goindigo.in/content/dam/indigov2/6e-website/campaigns/sale/Landing-page-banner-mobile.jpg"
            name="Indigo Coupon"
            cost="50"
          />
        </div>
        <div className="text-gray-500 text-semibold text-sm pt-4">
          Earn more SuperTokens to redeem these rewards:
        </div>
        <div className="pt-2 flex flex-wrap justify-evenly ">
          <RedeemItem
            img="https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png"
            name="Flipkart Coupon"
            cost="120"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1611817594553.jpg"
            name="Zomato Coupon"
            cost="120"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png"
            name="Swiggy Coupon"
            cost="120"
          />
          <RedeemItem
            img="https://www.goindigo.in/content/dam/indigov2/6e-website/campaigns/sale/Landing-page-banner-mobile.jpg"
            name="Indigo Coupon"
            cost="120"
          />
        </div>
      </div>
    </>
  );
}

export default Redeem;
