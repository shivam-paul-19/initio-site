import "./about.css";
import { TextAnimate } from "@/components/magicui/text-animate";

function AboutUs() {
  return (
    <>
        <div style={{height: "60px", backgroundColor: "#2f0353"}}>{/* for spacing only */}</div>
        <div className="about-page">
            <h1 className="text-3xl about-heading">
                <TextAnimate animation="blurInUp" by="character" duration="0.5">
                    About us
                </TextAnimate>
            </h1>
            <div className="about-content">
                <p><TextAnimate animation="slideUp" by="word" duration="0.2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eos fuga voluptatem sed adipisci et dolor, aspernatur earum ipsa saepe, officiis, vel quos quisquam obcaecati dicta porro at ut laboriosam?
                Eveniet temporibus vero dolorum in molestiae dicta, ratione perspiciatis, fuga, dolorem sunt repellat quis facere itaque necessitatibus hic dolores ducimus aspernatur quasi iure culpa aut. Amet tenetur est cupiditate iste.
                Similique atque fugit cum iste ipsam praesentium dignissimos aliquam, deleniti, animi laudantium tempora maiores quae vel ab iusto culpa facilis doloremque autem dicta mollitia provident repudiandae neque molestiae reprehenderit? Sequi.
                Nam distinctio vel animi asperiores voluptatum praesentium, nihil nostrum illum quas ut ratione nemo eaque necessitatibus mollitia itaque exercitationem tempora beatae harum dolor impedit? Quam officiis repellendus dolor facere quibusdam!
                Facere fugiat, quis nulla totam ratione vitae esse voluptatum perspiciatis beatae, aut dolore a eos, eveniet alias animi eius expedita architecto natus ullam odio optio. Ex nihil quam corporis repellat.</TextAnimate></p>
            </div>
        </div>
    </>
  );
}

export default AboutUs;