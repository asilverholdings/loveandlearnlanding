import React from "react";

const Screening = () => {
  return (
    <div className="fancy-feature-thirtyOne pt-120 pb-160 md-pt-80 md-pb-100">
      <div className="container">
        {/* Screening and Matchmaking Tabs */}
        <div className="screening-and-matchmaking row justify-content-center">
          <div className="col-md-5">
            <div className="feature-box">
              <h3>Screening</h3>
              <ul className="screening-list">
                <li>Educational Background</li>
                <li>Work History</li>
                <li>Childcare Experience</li>
                <li>Work and Personal References</li>
                <li>
                  Criminal background checks in each state where the nanny has lived or worked over the past seven years
                </li>
                <li>Social security verification</li>
                <li>National Sex Offender Registry check</li>
                <li>Nationwide driving record check, if your position requires driving</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="feature-box">
              <h3>Matchmaking</h3>
              <p>
                We start by connecting with the family through a virtual meeting. Using a detailed and thorough questionnaire, we explore every aspect of the potential family-candidate relationship to ensure a perfect match that covers all possibilities.
              </p>
              <p>
                The family and candidates will take a specialized personality assessment to ensure a higher chance of finding the perfect fit for the family, enhancing compatibility and long-term success. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screening;
