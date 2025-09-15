import "./contact.css";
import { TextAnimate } from "@/components/magicui/text-animate";

function Contactus() {
  return (
    <>
        <div style={{height: "60px", backgroundColor: "#2f0353"}}>{/* for spacing only */}</div>
        <div className="contact-page">
            <h1 className="text-3xl contact-heading">
                <TextAnimate animation="blurInUp" by="character" duration="0.5">
                    Contact us
                </TextAnimate>
            </h1>
            <div className="contact-content">
                <p>
                    <TextAnimate animation="slideUp" by="word" duration="0.2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum laudantium optio officia incidunt laboriosam voluptate quia fuga quibusdam quaerat? Illum dolore vitae, eum harum dicta nihil facilis quis culpa?
                Omnis perspiciatis modi blanditiis distinctio facere quas possimus rerum ex est impedit laudantium sint, velit cum et. Illo facere, voluptas debitis sapiente non qui obcaecati vel ratione, quam adipisci praesentium.
                </TextAnimate></p>
            </div>
        </div>
    </>
  );
}

export default Contactus;