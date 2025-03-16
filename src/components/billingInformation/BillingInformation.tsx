import SharedBanner from "../shared/sharedBanner/SharedBanner";
import BillingInfo from "./BillingInfo";
import YourPurchase from "./YourPurchase";

const BillingInformationBanner = () => {
  const breadcrumb = ["My Cart", "Check Out"];

  return (
    <div>
      <SharedBanner
        title="Secure Your Entries & Checkout!"
        breadcrumb={breadcrumb}
      >
        {/* Main Content */}
        <div className="py-16 space-y-10 w-full">
          <h2 className="text-center font-museomoderno font-semibold text-4xl md:text-4xl lg:text-5xl xl:text-[56px] text-black mb-10">
            Billing information
          </h2>
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-5/12">
              <YourPurchase />
            </div>{" "}
            {/* Billing Information Form */}
            <div className="w-full lg:w-7/12">
              <BillingInfo />
            </div>{" "}
          </div>
        </div>
      </SharedBanner>
    </div>
  );
};

export default BillingInformationBanner;
