<template>
    <section id="contact" class="py-20 bg-stone-900 relative">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/95 to-stone-900/80"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-3xl font-bold mb-4 text-amber-500">Ready for a Distinguished Look?</h3>
          <p class="text-xl mb-8 text-amber-200/80">
            Join the ranks of well-groomed gentlemen. Book your appointment today and experience the Guy's Barbershop difference.
          </p>
          <div class="bg-stone-800/80 p-8 rounded-lg border border-amber-900/50 backdrop-blur-sm">
            <form class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-amber-400 mb-2">Full Name</label>
                  <input type="text" id="name" class="w-full px-4 py-2 bg-stone-700 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-100" />
                </div>
                <div>
                  <label for="email" class="block text-amber-400 mb-2">Email Address</label>
                  <input type="email" id="email" class="w-full px-4 py-2 bg-stone-700 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-100" />
                </div>
              </div>
              <div>
                <label for="phone" class="block text-amber-400 mb-2">Phone Number</label>
                <input type="tel" id="phone" class="w-full px-4 py-2 bg-stone-700 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-100" />
              </div>
              <div>
                <label for="service" class="block text-amber-400 mb-2">Preferred Service</label>
                <select id="service" class="w-full px-4 py-2 bg-stone-700 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-100">
                  <option value="">Select a service</option>
                  <option value="haircut">Classic Haircut</option>
                  <option value="beard">Beard Trim & Shaping</option>
                  <option value="shave">Hot Towel Shave</option>
                  <option value="father-son">Father & Son Package</option>
                  <option value="facial">Gentleman's Facial</option>
                  <option value="full">The Full Experience</option>
                </select>
              </div>
              <button type="submit" class="w-full px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-100 rounded-md border border-amber-500 transition-colors shadow-md text-lg font-medium">
                Book Your Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

</template>
