import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const BenefitsList = (props) => {
  const { benefitList } = props;
  return (
    <div className="flex gap-2 flex-col">
      {benefitList.map((benefit) => (
        <div className="flex items-center gap-x-1 text-xs ssm:text-sm xlg:text-base font-medium">
          <FaRegCheckCircle size={14} />
          <p>{benefit}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
