import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>CourseBuilder</h6>
              <p class="text-justify">  <i>KEEP LEARNING KEEP GROWING ...</i> is an initiative  to help the learners to build their custom courses.
               CourseBuilder focuses on breaking down the education system by enabling student to select any course and learn it from any education institute .
              </p>

            </div>



            <div class="col-xs-6 col-md-6">


              <p><h6> Our mission is to provide a world-class education to anyone, anywhere...</h6></p>
              <p><b>CourseBuilder</b> is helping individuals reach their goals and pursue their dreams</p>
              <br></br>

              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li><a href="/AboutUs">About Us</a></li>
                <li><a href="/ContactUs">Contact Us</a></li>

              </ul>
            </div>
          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer;