# Toys Share

Toys Share is a Singe Page Application aimed at facilitating the sharing of unused toys between owners and individuals who prefer borrowing over buying. The platform allows users to log in, register, and share details about their toys. Additionally, users can browse the catalog, book available toys, and manage their shared items.

## Features

- **User Authentication:**
  - Login: Existing users can log in to access additional features.
  - Register: New users can create accounts to join the Toys Share community.
  - Logout: Users can securely log out when done using the platform.

- **Toys Catalog:**
  - Browse: Users, whether logged in or not, can explore the catalog of available toys.
  - Toy Details: Only logged-in users can view detailed information about a toy, including its map location.

- **Booking System:**
  - Book Toy: Logged-in users can book available toys they are interested in.
  - Unbook Toy: Users who have booked a toy can cancel their reservation.

- **Author Actions:**
  - Edit: Toy owners can edit the details of the toys they have shared.
  - Delete: Owners can remove toys they no longer wish to share.

- **Google Maps Integration:**
  - Map Location: The platform utilizes the Google Maps API to display the geographical location of each shared toy.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/DonikaMarcheva/Toys-Share.git
   cd toy-share
2. Open the server folder in the terminal and type "node server.js". Don't close the terminal just minimize it and leave the server working.
3. Open the client folder in another terminal and type "npm install" to install all dependencies.
4. In the terminal with the client folder type "npm run dev".
5. Open the app at the address pointed out - most likely that would be "Local: http://127.0.0.1:5173/".

## Pre-seed data (it is possible to add other data while browse in the SPA but after closing the server this data will be lost:
1.Users:
- peter@abv.bg : 123456
- george@abv.bg : 123456
- admin@abv.bg : admin

2.Toys: four toys are added with all needed data.

3.Booked- toys can be booked and unbooked after users make their choice.

## Technical stack:
- HTML
- CSS
- ReactJS
- ReactRouter
- GoogleMapsReact
- Vite

## Warnings:
- Best to be used on desktop with resolution 1366x768
- Developed on Chrome.
