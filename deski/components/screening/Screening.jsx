import React from "react";

const Screening = () => {
  return (
    <div className="fancy-feature-thirtyOne pt-120 pb-160 md-pt-80 md-pb-100">
      <div className="container">
        <div className="screening-and-matchmaking">
          {/* Screening Section */}
          <div className="">
            <div className="feature-box card-style mb-5">
              <h3>Screening</h3>
              <ul className="screening-list">
                <li>Educational Background</li>
                <li>Work History</li>
                <li>Childcare Experience</li>
                <li>Work and Personal References</li>
                <li>Criminal background checks in each state where the nanny has lived or worked over the past seven years</li>
                <li>Social security verification</li>
                <li>National Sex Offender Registry check</li>
                <li>Nationwide driving record check, if your position requires driving</li>
              </ul>
            </div>
          </div>

          {/* Matchmaking Section */}
          <div className="">
            <div className="feature-box card-style">
              <h3>Matchmaking</h3>
              <ul className="screening-list">
                <li>
                  <p>
                    We start by connecting with the family through a virtual meeting. Using a detailed and thorough questionnaire, we explore every aspect of the potential family-candidate relationship to ensure a perfect match that covers all possibilities.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screening;
