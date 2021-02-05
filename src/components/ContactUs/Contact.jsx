import React from "react";
import "./contact.css";


function Contact() {
  return (
    <div>
      <br></br>
      <br></br>
    <div class="contact3 py-5" style={{ backgroundColor: "#F5EDEB" }}>
      <div class="row no-gutters">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="card-shadow">
              {/* https://cdn.pixabay.com/photo/2015/11/06/11/46/call-center-1026460_960_720.jpg */}
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" alt={'1image1'} class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-box ml-3">
                <img src="https://cdn.pixabay.com/photo/2016/10/25/16/26/contact-us-1769323_960_720.png" alt={'1image1'} class="img-fluid" />
                <form class="mt-4">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input class="form-control" type="text" placeholder="name" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input class="form-control" type="email" placeholder="email address" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input class="form-control" type="text" placeholder="phone" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <textarea class="form-control" rows="3" placeholder="message"></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card mt-4 border-0 mb-4">
                <div class="row">
                  <div class="col-lg-4 col-md-4">
                    <div class="card-body d-flex align-items-center c-detail pl-0">
                      <div class="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt={'1image1'} />
                      </div>
                      <div class="">
                        <h6 class="font-weight-medium">Address</h6>
                        <p class="">RTO Road, Suresh Nagar,
                      <br></br>Andheri West, Mumbai, Maharashtra </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4">
                    <div class="card-body d-flex align-items-center c-detail">
                      <div class="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt={'1image1'} />
                      </div>
                      <div class="">
                        <h6 class="font-weight-medium">Phone</h6>
                        <p class="">251 546 9442
                      <br></br> 630 446 8851</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4">
                    <div class="card-body d-flex align-items-center c-detail">
                      <div class="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt={'1image1'} />
                      </div>
                      <div class="">
                        <h6 class="font-weight-medium">Email</h6>
                        <p class="">
                          Hitesh@CourseBuilder1.com
                      <br></br> Suraj@CourseBuilder1.com
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div></div>
  )
}



export default Contact;