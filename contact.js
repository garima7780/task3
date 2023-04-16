class contact extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  `<div class="container">
         <!-- Contact Section Start -->
<section class="contact" id="contact">
    <div class="heading">
        <h2>Contact</h2>
        <span>Connect With Us</span>
    </div>
    <div class="contact-form">
        <form action="">
            <input type="text" placeholder="Your Name">
            <input type="email" name="" id="" placeholder="Your Email">
            <textare name="" id="" cols="30" rows="10" placeholder="Write Message Here..."></textare>
                                <input type="button" value="Send" class="contact-button">
                                </form>
                            </div>
                            </section>
                            <!-- Contact Section End -->
   
        </div>`
    }
};


customElements.define('app-contact', contact);


