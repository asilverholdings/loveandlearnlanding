import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useApplicantId = () => {
  const [applicantId, setApplicantId] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedId = sessionStorage.getItem("applicantId");
      if (savedId) {
        setApplicantId(savedId);
      } else {
        const newId = uuidv4();
        sessionStorage.setItem("applicantId", newId);
        setApplicantId(newId);
      }
    }
  }, []);

  return applicantId;
};

export default useApplicantId;
