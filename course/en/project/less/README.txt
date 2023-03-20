These rules must be followed when creating custom course/en/project/less/ styles.
They require at least an intermediate knowledge of LESSCSS and the DD Adapt framework.
--------------------------------------------------------------------------------------

- Prefix all custom classes you create with "c-" (to prevent you accidentally overriding core themes).

- These styles are made using LESSCSS, so please follow appropriate LESSCSS conventions.

- Our Adapt theme has already got colour + spacing + font + etc. variables defined.
  Reference those instead of using "magic number" values (if possible)! They can be found here:

  src/theme/adapt-didasko/less/_defaults

  DO NOT EDIT THE CONTENTS OF THIS DIRECTORY!

- If the value you require doesn't exist as a variable, please try to use an equation using an existing variable first before
  using a "magic number" or defining a new variable. For example, if you require padding for a <div>, use @item-padding if possible.

- If you do need to define custom variables, avoid using "px" and "em" units. Use "rem"!

- If you require nested classes, follow the Adapt naming conventions. Example:

 .c-customclass {

	 &__inner {

	 }
 }

 (Creates the classes .c-customclass and .c-customclass__inner. Look into LESSCSS if you're unsure of why this happens).