import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return ( 
        <div className="space-y-10">
          <Helmet>
            <title>About Us | Gadget Heaven</title>
          </Helmet>
            <div className="bg-purple-600 p-10 text-center text-white">
               <h1 className="text-4xl font-semibold">About Us</h1>
            </div>
            <div className="text-center w-4/5 mx-auto space-y-6">
                <p>Welcome to <span className="text-lg font-semibold">Gadget Heaven</span> where quality meets convenience! We are passionate about bringing you an exclusive selection of products that are carefully curated to add value and enjoyment to your everyday life.Founded with the goal of creating an easy and satisfying shopping experience, we believe that everyone deserves access to high-quality products that make life simpler, better, and more enjoyable. Whether you're looking for the latest gadgets, home essentials, fashion accessories, or health and wellness products, our team works hard to bring you a wide variety of items that meet high standards of quality and style.</p>
                <div className="py-4">
                    <h2 className="text-2xl font-semibold pb-2">Our Mission</h2>
                    <p className="text-left pb-2">Our mission is to provide our customers with high-quality products that enhance their daily lives, all while delivering an effortless and enjoyable shopping experience. We are committed to sourcing innovative, reliable, and affordable items, ensuring that every product meets our standards for quality and value.</p>
                    <p className="text-left">We believe that shopping should be simple, trustworthy, and enjoyable, and we strive to make our website a one-stop destination for finding products that meet your needs and exceed your expectations. With a focus on exceptional customer service, we’re here to help you make the best choices for yourself, your home, and your lifestyle.</p>
                </div>
            </div>
            <div className=" w-4/5 mx-auto">
               <h2 className="text-2xl font-semibold pb-2 text-center">Q&A</h2>
               <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" defaultChecked />
                      <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
                      <div className="collapse-content">
                        <p>We accept all major credit and debit cards, including Visa, MasterCard, American Express, and Discover. We also accept payments through PayPal and Apple Pay for added convenience.</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">How long does shipping take?</div>
                      <div className="collapse-content">
                        <p>Shipping times vary based on your location and the shipping method you choose at checkout. Typically, orders are delivered within 3-7 business days within the U.S. and 7-15 business days for international orders.</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">Can I return or exchange an item?</div>
                      <div className="collapse-content">
                        <p>Yes, we offer a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days of delivery. Please ensure that items are in their original condition with all tags attached.</p>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">Do you offer discounts for first-time customers?</div>
                      <div className="collapse-content">
                        <p>Yes, we provide a 10% discount for first-time customers. Sign up for our newsletter, and we’ll send you a discount code to use on your first order.</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">How do I track my order?</div>
                      <div className="collapse-content">
                        <p>Once your order has shipped, you'll receive a tracking number via email. You can use this number to track your order on our website or the courier’s tracking page.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;