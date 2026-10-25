EASIEST WAY: THE PHOTO MANAGER
------------------------------
Open  http://localhost:3000/admin.html  in Chrome or Edge, click
"Choose my site folder", select your "site" folder, then click
"+ Add photos" under any product. It copies the photos and updates the
list for you. Then refresh the website with Ctrl + F5.

(Delete admin.html before uploading the site to hosting if you do not
want it on the live website. It cannot change anything without your
folder permission, but visitors do not need it.)

EASIEST WAY TO ADD PHOTOS
------------------------
1. Copy your photos into the folder images/products/ (keep their own names).
2. Open images/images.js, find the product, type the photo names in the [ ].
3. Save, then press Ctrl + F5 in the browser.
Full instructions are written at the top of images/images.js.

(Older notes below still work as a fallback.)

HOW TO ADD YOUR OWN PHOTOS
===========================

The site already works without any photos — it shows a simple icon
in place of each product until you add a real image. Just drop files
into the right folder below using the EXACT filename listed, and the
photo will appear automatically (on both index.html and shop.html,
in all 3 languages) the next time the page is opened. No code edits
needed.

1) LOGO
   Folder:   images/logo/
   Filename: logo.png
   Used as the small logo mark in the top-left of the header.
   Recommended: square image, at least 100x100px, transparent
   background PNG works best.

2) PRODUCT PHOTOS
   Folder:   images/products/
   Format:   .jpg  (must be lowercase ".jpg")
   Recommended size: square, at least 600x600px.

   Save each photo with EXACTLY this filename:

     iphone-15-pro-max.jpg
     iphone-15.jpg
     iphone-14-pro-max.jpg
     iphone-13-pro.jpg
     iphone-13-pro-max.jpg
     iphone-12.jpg
     iphone-se.jpg
     iphone-11-pro.jpg
     airpods-pro-2.jpg
     magsafe-charger.jpg
     silicone-case.jpg
     usb-c-charger.jpg

   These correspond, in order, to the 12 products currently listed
   on the site. If you rename, add, or remove a product later, just
   let Claude know the new list and matching filenames can be updated
   in the code to match.

3) EXTRA PHOTOS (for the product page gallery — optional)
   Folder:   images/products/
   Format:   .jpg

   The product detail page (product.html) shows a row of thumbnail
   photos under the main image, like a real product gallery. This is
   optional — with only the one photo from step 2, the product page
   just shows a single image and no thumbnail row.

   To add more angles, save extra photos of the SAME product using
   the same filename plus "-2", "-3", "-4", for example:

     iphone-15-pro-max.jpg     (main photo, from step 2)
     iphone-15-pro-max-2.jpg   (back)
     iphone-15-pro-max-3.jpg   (side)
     iphone-15-pro-max-4.jpg   (in the box)

   Add as many or as few of these as you like (up to 4 total per
   product) — the gallery and thumbnail row appear automatically only
   for the products that have more than one photo.

TIPS
----
- If a photo is missing, the site silently falls back to the icon —
  nothing breaks, so you can add photos gradually.
- Keep file sizes reasonable (under ~500KB each) so the site loads
  quickly, especially on mobile data.
- Filenames are case-sensitive on most web hosts — keep them all
  lowercase exactly as shown above.

DEMO FILES ALREADY IN THIS FOLDER
----------------------------------
iphone-12.jpg and iphone-12-2.jpg are placeholder illustrations
(clearly labeled "FRONT VIEW" / "BACK VIEW" with a watermark) added
just so you can see the thumbnail gallery working on the iPhone 12
128GB product page before you have real photos. They are NOT real
product photos — delete them and replace with your own photos using
the same filenames whenever you're ready.


UPDATE - MORE FORGIVING PHOTO NAMES
-----------------------------------
- Photos can now be .jpg, .jpeg, .png or .webp (same name, any of these).
- Up to 6 photos per product: iphone-15.jpg, iphone-15-2.jpg ... iphone-15-6.jpg
- The main photo (no number) is no longer required. If it is missing,
  the first numbered photo is used on the shop card.
- The product name part must still match exactly (lowercase, dashes):
  iphone-15-pro-max, iphone-15, iphone-14-pro-max, iphone-13-pro,
  iphone-13-pro-max, iphone-12, iphone-se, iphone-11-pro,
  airpods-pro-2, magsafe-charger, silicone-case, usb-c-charger
- Camera names like photo-2026-09-18-14-26-13-5.jpg are NOT found by the
  site. Rename them first.
