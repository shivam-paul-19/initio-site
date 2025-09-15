import "./contact.css";
import { TextAnimate } from "@/components/magicui/text-animate";

function Contactus() {
  return (
    <>
      <div style={{ height: "60px", backgroundColor: "#2f0353" }}>
        {/* for spacing only */}
      </div>
      <div className="contact-page">
        <h1 className="text-6xl contact-heading">
          <TextAnimate animation="blurInUp" by="character" duration="0.5">
            Contact us
          </TextAnimate>
        </h1>
        <div className="contact-content">
          <div className="w-full px-4 py-8">
            {/* Email */}
            <div className="text-center mb-8">
              <p className="text-lg font-semibold">
                <TextAnimate animation="slideUp" by="word" duration="0.3">
                  partnerships.initio@gmail.com
                </TextAnimate>
              </p>
            </div>

            {/* Dean & Convener */}
            <div className="text-center space-y-6 mb-10">
              <div>
                <h3 className="text-xl font-bold contact-desig">DEAN</h3>
                <p className="text-lg">
                  <TextAnimate animation="slideUp" by="word" duration="0.3">
                    PROF (DR.) RAMANPREET SINGH
                  </TextAnimate>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold contact-desig">CONVENER</h3>
                <p className="text-lg">
                  <TextAnimate animation="slideUp" by="word" duration="0.3">
                    PROF (DR.) RUCHI SHUKLA
                  </TextAnimate>
                </p>
              </div>
            </div>

            {/* Core Team */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold contact-desig">CORE TEAM</h3>
            </div>

            {/* Core Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="font-semibold">Diya Kukreja</p>
                <p className="text-sm">PRESIDENT, INITIO’25</p>
                <p className="font-bold">
                  <TextAnimate animation="slideUp" by="word" duration="0.3">
                    9999585803
                  </TextAnimate>
                </p>
              </div>

              <div className="text-center">
                <p className="font-semibold">Anuj Garg</p>
                <p className="text-sm">PRESIDENT, INITIO’25</p>
                <p className="font-bold">
                  <TextAnimate animation="slideUp" by="word" duration="0.3">
                    7982591867
                  </TextAnimate>
                </p>
              </div>

              <div className="text-center">
                <p className="font-semibold">Dhriti Chandiok</p>
                <p className="text-sm">VICE-PRESIDENT, INITIO’25</p>
                <p className="font-bold">
                  <TextAnimate animation="slideUp" by="word" duration="0.3">
                    8076800486
                  </TextAnimate>
                </p>
              </div>

              <div className="text-center">
                <p className="font-semibold">Atishay Jain</p>
                <p className="text-sm">VICE-PRESIDENT, INITIO’25</p>
                <p className="font-bold">
                  <TextAnimate animation="slideUp" by="word" duration="0.3">
                    9818152377
                  </TextAnimate>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;