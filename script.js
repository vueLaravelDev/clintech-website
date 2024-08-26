
document.getElementById('menu-toggle').addEventListener('click', function () {
 const mobileMenu = document.getElementById('mobile-menu');
 if (mobileMenu) {
   mobileMenu.classList.toggle('hidden');
 } else {
   console.error("Mobile menu element not found");
 }
});

function closeMenu() {
 const mobileMenu = document.getElementById('mobile-menu');
 if (mobileMenu) {
   mobileMenu.classList.add('hidden');
 }
}

function toggleDropdown(dropdownId, iconId) {
 const dropdown = document.getElementById(dropdownId);
 const icon = document.getElementById(iconId);

 if (dropdown && icon) {
   const isHidden = dropdown.classList.toggle('hidden');
   icon.textContent = isHidden ? '+' : '-';
 } else {
   console.error(`Element with id ${dropdownId} or ${iconId} not found`);
 }
}

    
 
   const buttons = document.querySelectorAll('button');
   const contentDiv = document.getElementById('content');
   
   function setActiveButton(buttonId) {
       buttons.forEach(button => {
           button.classList.toggle('bg-[#013088]', button.id === buttonId);
           button.classList.toggle('bg-[#001d3d]', button.id !== buttonId);
       });
   }
   
   function loadContent(buttonId) {
       contentDiv.innerHTML = '';
       
       if (buttonId === 'banksButton') {
           contentDiv.innerHTML = `
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                       <h2 class="text-2xl font-bold text-left mt-4">Banks and Financial Services</h2>
                       <p class="text-gray-400 text-left">
                           In the fast-paced world of finance, our cybersecurity solutions ensure the integrity and confidentiality of sensitive financial data. From safeguarding transactions to protecting customer information, we provide robust defences against cyber threats, guaranteeing a secure and resilient financial ecosystem.
                       </p>
                   </div>
                   <div class="flex justify-center items-center">
                       <img src="download.png" alt="Banks and Financial Services" class="w-full max-w-xs mt-4 rounded-lg">
                   </div>
               </div>`;
       } else if (buttonId === 'technologyButton') {
           contentDiv.innerHTML = `
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                       <h2 class="text-2xl font-bold mb-4">Technology and Media</h2>
                       <p class="text-gray-400">
                           The technology and media industry is constantly evolving, and we help our clients navigate this dynamic landscape. From developing innovative solutions to managing data effectively, we empower businesses to stay ahead of the curve.
                       </p>
                   </div>
                   <div class="flex justify-center items-center">
                       <img src="download.jfif" alt="Technology and Media" class="w-full max-w-xs mt-4 rounded-lg">
                   </div>
               </div>
           `;
       } else if (buttonId === 'oilButton') {
           contentDiv.innerHTML = `
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                       <h2 class="text-2xl font-bold mb-4">Oil and Power</h2>
                       <p class="text-gray-400">
                           The oil and power sector faces unique challenges, and we provide tailored solutions to meet those needs. From optimizing energy production to mitigating environmental impact, we are committed to sustainability and innovation.
                       </p>
                   </div>
                   <div class="flex justify-center items-center">
                       <img src="download (1).jfif" alt="Oil and Power" class="w-full max-w-xl mt-4 rounded-lg">
                   </div>
               </div>
           `;
       } else if (buttonId === 'airlinesButton') {
           contentDiv.innerHTML = `
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                       <h2 class="text-2xl font-bold mb-4">Airlines</h2>
                       <p class="text-gray-400">
                           The airline industry is highly competitive and requires a deep understanding of passenger needs. We help airlines optimize operations, enhance customer experiences, and navigate regulatory complexities.
                       </p>
                   </div>
                   <div class="flex justify-center items-center">
                       <img src="download (2).jfif" alt="Airlines" class="w-full max-w-lg mt-4 rounded-lg">
                   </div>
               </div>
           `;
       } else if (buttonId === 'ecommerceButton') {
           contentDiv.innerHTML = `
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                       <h2 class="text-2xl font-bold mb-4">E-commerce</h2>
                       <p class="text-gray-400">
                           The world of e-commerce is constantly evolving, and we help businesses thrive in this dynamic space. From building secure online platforms to optimizing customer journeys, we provide comprehensive solutions.
                       </p>
                   </div>
                   <div class="flex justify-center items-center">
                       <img src="download (1).png" alt="E-commerce" class="w-full max-w-lg mt-4 rounded-lg">
                   </div>
               </div>
           `;
       } else if (buttonId === 'retailButton') {
           contentDiv.innerHTML = `
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                       <h2 class="text-2xl font-bold mb-4">Retail</h2>
                       <p class="text-gray-400">
                           The retail landscape is facing unprecedented change, and we help businesses adapt and thrive. From improving in-store experiences to enhancing online presence, we provide strategies for success.
                       </p>
                   </div>
                   <div class="flex justify-center items-center">
                       <img src="download (3).jfif" alt="Retail" class="w-full max-w-lg mt-4 rounded-lg">
                   </div>
               </div>
           `;
       } else if (buttonId === 'healthcareButton') {
           contentDiv.innerHTML = `
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                       <h2 class="text-2xl font-bold mb-4">Healthcare</h2>
                       <p class="text-gray-400">
                           The healthcare industry is complex and rapidly evolving, and we provide solutions to meet the unique needs of healthcare providers. From improving patient outcomes to streamlining administrative processes, we are dedicated to improving healthcare delivery.
                       </p>
                   </div>
                   <div class="flex justify-center items-center">
                       <img src="download (4).jfif" alt="Healthcare" class="w-full max-w-lg mt-4 rounded-lg">
                   </div>
               </div>
           `;
       }
   }

   window.addEventListener('DOMContentLoaded', () => {
       const defaultButtonId = 'banksButton'; 
       setActiveButton(defaultButtonId);
       loadContent(defaultButtonId);
   });

   buttons.forEach(button => {
       button.addEventListener('click', () => {
           const buttonId = button.id;
           setActiveButton(buttonId);
           loadContent(buttonId);
       });
   });


     
       tailwind.config = {
 theme: {
   extend: {
     animation: {
       'infinite-scroll': 'infinite-scroll 25s linear infinite',
     },
     keyframes: {
       'infinite-scroll': {
         from: { transform: 'translateX(0)' },
         to: { transform: 'translateX(-100%)' },
       }
     }                    
   },
 },
}
    
       
      