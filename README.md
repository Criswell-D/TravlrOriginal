# Travlr Original
Original version of Travlr artifact before enhancements 

Architecture

The Travlr Getaways web application utilizes the MEAN stack, incorporating MongoDB, Express.js, Angular, and Node.js. This architecture supports robust, scalable, and maintainable development. The frontend was developed to use a Single Page Application (SPA). This was done using Angular to ensure a responsive and dynamic user experience. The server rendered HTML template with Express offers a simpler request-response static rendering. The Angular framework allows for modularity for components, services, and routing. This works to facilitate a separation of concerns and reusable UI elements. For the backend MongoDB was used because it supports a schema-less design. This makes it adaptable for storing data like itineraries, reservations, and user profiles dynamically. The flexibility it provides combined with Mongoose ODM ensures efficient data handling and retrieval. This is essential for scaling during peak travel seasons.

Functionality

JSON works to bring the frontend and backend together by providing a lightweight format for exchanging data. Angular uses HTTP requests to retrieve JSON data from Express APIs, enabling dynamic updates to the UI. During development code was refactored so components could be modular. With trip listings and user management this allowed for better maintenance and scalability. These reusable components reduced redundancies and simplified updates, enhancing overall efficiency.

Testing

Testing involved verifying API endpoints and ensuring secure data transmission via HTTPS. The GET and POST requests were validated to retrieve and store data effectively. Layered security measures, such as user authentication for administrative features, posed challenges but were critical for protecting sensitive user data.
