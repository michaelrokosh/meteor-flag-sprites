##Country flags in single CSS sprite
CSS Sprites - a method to optimize page loads by combining a large number of small images into one. The method of extremely relevant with the active use of country flags - with all the flags on one page, then load it, the browser will need to make only two server requests instead of 247.

This service allows you to easily create CSS Sprites for any desired set of flags. Select the flags from the list and get the image in PNG format and the corresponding CSS code, ready to use on your website.

##Usage
Insert a transparent 1x1 pixel image and assign a class flag and flag-<country code>. The country code is in the format ISO 3166-1 alpha-2. For example, the flag of the Czech Republic:

	<img src="blank.gif" class="flag flag-cz" alt="Czech Republic" />