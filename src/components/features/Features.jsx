import React from "react";
import { images } from "../../constants";
import { data } from "../../constants";
import "./features.css";

const FeatureCard = ({feature: { imgUrl, title }}) => (
    <div className="webdefend__features-infocard webdefend__features-container-padding">
      <div className="webdefend__features-infocard-graphic">
        <div className="webdefend__features-infocard-icon">
          <img src={imgUrl} alt="cybersecurity statistics" />
        </div>
      </div>
      <div className="webdefend__features-infocard-title">
          <p>{title}</p>
      </div>
    </div>
  );

const Features = () => {
  return (
    <div className="webdefend__features features__padding" id="#features">
        <div className="webdefend__features-title">
            <p>Statistics</p>
        </div>
        <div className="webdefend__features-container">
            <div className="webdefend__features-text-container">
                <div className="webdefend__features-text-title">
                    <p>Here is what you <span className="webdefend__features-title-description-highlight">should</span> know:
                    </p>
                </div>
                <div className="webdefend__features-title-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac lacinia sem. Sed id blandit mauris. Nulla sollicitudin malesuada lacus, vitae gravida nisi maximus vitae. Ut at elit ut sem vehicula semper vel non felis. Vestibulum id quam nec elit tincidunt lacinia. Etiam consectetur vestibulum felis, quis maximus leo sagittis dapibus. Cras dictum quis lacus in sodales. Sed id arcu cursus mauris dapibus vulputate. Aliquam imperdiet nibh tristique nisi convallis viverra. </p>
                </div>
            </div>  
            <div className="webdefend__features-graphic">
                <img src={images.animatedGraphic2} alt="webdefend gif" />
            </div>
           
        </div>
        <div className="webdefend__features-flexcard">
          {data.features.map((feature) => <FeatureCard feature={feature}/>)}
        </div>
          
    </div>
  );
};

export default Features;
