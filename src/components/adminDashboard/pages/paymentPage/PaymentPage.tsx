import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import PaymentCards from "./PaymentCards";
import PaymentList from "./PaymentList";

const PaymentPage = () => {
  return (
    <div>
      <SectionTitle title="Payment list" />
      <div className="space-y-8">
        <PaymentCards />
        <PaymentList />
      </div>
    </div>
  );
};

export default PaymentPage;
