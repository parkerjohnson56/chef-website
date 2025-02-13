"use client"

import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");
  
    try {
      const url = "https://script.google.com/macros/s/AKfycbyJcq-DOi6RWcWU4EvQdSNc3GG8P_fg5qdZkVdn01O0LTG7xCe8V7Dz4fCSmvacFyM/exec";
  
      await fetch(url, {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setMessage("Thanks for subscribing! ✅");
      setEmail("");
      
    } catch (error) {
      console.error("Detailed error:", error);
      setMessage("Something went wrong. Please try again. 🚨");
    }
  };
  
  

  return (
    <section id="newsletter" className="py-12 md:py-20 bg-[#71883a] scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-white text-center mb-8">
            Subscribe to Our Newsletter
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-lg font-medium text-white text-center" htmlFor="email">
              We Promise Not to Spam You!
            </label>
            <input 
              id="email"
              className="w-full mt-2 px-4 py-2 rounded-md border border-white focus:outline-none focus:border-white bg-transparent text-white placeholder-white/70" 
              type="email" 
              placeholder="example@email.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              className="w-full md:w-auto mx-auto mt-3 px-8 py-2 bg-[#faf3ef] text-[#71883a] rounded-md font-bold hover:bg-white transition-colors duration-300" 
              type="submit"
            >
              Subscribe
            </button>
            {message && (
              <p className="text-center text-white mt-4 font-medium">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
