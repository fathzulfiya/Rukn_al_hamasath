/* =====================================================================
   PRODUCT PHOTOS  -  the only file you need to edit to add photos
   =====================================================================

   HOW TO ADD PHOTOS (3 steps)
   1. Copy your photos into the folder:  images/products/
      (keep their own names, no renaming needed)
   2. Find the product below and type the photo file names inside the [ ]
      - each name in "quotes", separated by commas
      - the FIRST photo is the one shown on the shop card
      - the others appear as small thumbnails on the product page
   3. Save this file and press Ctrl + F5 in the browser.

   EXAMPLE
     "iphone-14-pro-max": ["front.jpg", "back.png", "IMG_2041.jpeg"],

   NOTES
   - File names must be typed exactly as they are (capital letters, dashes
     and the .jpg / .png / .webp ending all count).
   - Use up to 6 photos per product.
   - If a product's list is empty [ ], the site falls back to files named
     like  iphone-14-pro-max.jpg, iphone-14-pro-max-2.jpg ...
   - Do not remove the commas at the end of each line.
   ===================================================================== */

const PRODUCT_IMAGES = {
  "iphone-15-pro-max": ["iphone-15-pro-max.jpg", "iphone-15-pro-max-2.jpg", "iphone-15-pro-max-3.jpg", "iphone-15-pro-max-4.jpg"],  // iPhone 15 Pro Max 256GB
  "iphone-15":         ["iphone-15-2.jpg"],                                                                                          // iPhone 15 128GB
  "iphone-14-pro-max": ["iphone-12.jpg","iphone-12-2.jpg  "],                                                                                                           // iPhone 14 Pro Max 256GB
  "iphone-13-pro":     ["iphone-12-2.jpg"],                                                                                                           // iPhone 13 Pro 256GB
  "iphone-13-pro-max": ["iphone-12-3.jpg"],                                                                                                           // iPhone 13 Pro Max 256GB
  "iphone-12":         ["iphone-12.jpg", "iphone-12-2.jpg", "iphone-12-3.jpg", "iphone-12-4.jpg"],                                   // iPhone 12 128GB
  "iphone-se":         ["iphone-15-pro-max-2.jpg"],                                                                                                           // iPhone SE 64GB
  "iphone-11-pro":     ["iphone-15-pro-max-4.jpg"],                                                                                                           // iPhone 11 Pro 256GB
  "airpods-pro-2":     [ "iphone-12-2.jpg"],                                                                                                           // AirPods Pro 2
  "magsafe-charger":   ["iphone-15-pro-max-3.jpg"],                                                                                                           // MagSafe Charger
  "silicone-case":     ["iphone-15-pro-max-2.jpg"],                                                                                                           // Silicone Case
  "usb-c-charger":     ["iphone-15-pro-max.jpg"]                                                                                                            // USB-C Fast Charger
};
