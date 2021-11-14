"use strict"
export const Footer = {
   html : `
			<div id="socialMediaIconsWrapper">
				<a href="#" class="fa fa-facebook"></a>
				<a href="#" class="fa fa-twitter"></a>
				<a href="#" class="fa fa-google"></a>
				<a href="#" class="fa fa-youtube"></a>
				<a href="#" class="fa fa-instagram"></a>
				<a href="#" class="fa fa-reddit"></a>
			</div>

			<div id="footerInfoWrapper">
				<div>
            <figure>
					<q cite="https://elonmusknews.org/blog/elon-musk-quotes-about-tesla"
						>We will not stop until every <br />car on the road is electric</q
					>
				<figcaption>Elon Musk</figcaption>
            </figure>
            </div>
				<div>
					<h4 id="contactUs">Contact us</h4>
					<address aria-labelledby="contactUs">
						<a href="mailto:info@EV.com">info@EV.com</a> <br />
						<a href="tel:+4733378901">+47 333 78 901</a><br />
						<a
							target="_blank"
							href="https://www.google.com/maps/search/EV+Experts,+A3,+Southbound,+Guildford+GU2+7RZ/@51.2308404,-0.6131563,17z"
						>
							A3, Southbound, Guildford GU2 7RZ
						</a>
					</address>
				</div>
			</div>
			<hr />
			<div id="last"><i>Copyright 2021 EVexp</i></div>`,
   node : document.createElement('footer'),
   init: function () {
      this.node.innerHTML = this.html;
      document.body.append(this.node)
   }
}