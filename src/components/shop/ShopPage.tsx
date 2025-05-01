import SharedBanner from "../shared/sharedBanner/SharedBanner";

const ShopPage = () => {
  return (
    <div>
      <SharedBanner title="Shop" breadcrumb="Buy a digital pack">
        {/* Main Content - Absolute for lg and xl */}

        <p className="xl:px-20 w-full text-center text-gray-600 mt-4">
          At Chance Collective, we partner with impactful charities to help
          those in need. And you can help to bring hope and support to
          communities across Australia. Your participation helps to provide
          essential services, support education, and uplift the disadvantaged.
          Together, we’re creating chances for a better tomorrow. Thank you for
          being part of our journey!
          <br />
          The Humpty Dumpty Foundation Provides life-saving medical equipment to
          hospitals and healthcare services for children in need.
          <br />
          This is your chance to support children&apos;s health through
          equipment donations, benefiting families in communities that need it
          most.
          <br />
          With every purchase of a digital pack, a portion of proceeds is
          donated to charity.
        </p>
      </SharedBanner>
    </div>
  );
};

export default ShopPage;
