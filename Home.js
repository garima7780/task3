class Home extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML= ` <div class="container">
            <!-- Home Section Start -->
<section class="home" id="home">
    <div class="social">
        <a href="https://github.com/garima7780"><i class='bx bxl-github'></i></a>
        <a href="https://instagram.com/garimajain_29"><i class='bx bxl-instagram'></i></a>
        <a href="https://snapchat.com/kashish7780"><i class='bx bxl-snapchat'></i></a>
    </div>
    <div class="home-img">
        <img src="D:\garima\images\garima.jpg" alt="">
    </div>
    <div class="home-text">
        <span>Hello, I'm</span>
        <h1>GARIMA JAIN</h1>
        <h2>Frontend Developer</h2>

    </div>
</section>
<!-- Home Section End -->

        </div>`
        
    }
};


customElements.define('app-Home', Home);