# Design Token Formatting

This README will provide clear guidelines on how tokens are named in this file. This will provide clarity for designers, developers, and AI agents on how to properly name things through Nyck's design system 'Aqueous'.

# AI Context Layer
In this design system, we utilize are two layer tokening system. The first layer is known as our 'Primitives'. Primitives are to never be touched at all unless received approval from the designers. These primitives are the foundations of what compose Aqueous and Nyck's entire branding. These compose of colors, typography, spacing, and etc.

The next layer is the 'Semantics'. Semantics are the actual applications of the primitives for specific use cases. For example, if we were to break down the semantics for colors, we may divide colors by background colors, text colors, icon colors, and etc.

## Color Tokens
# Primitive Token Naming Convention
DO NOT in any capacity change or reformat the way the naming convention is done for primitives without the consent of the designers. 

"type-###"

This folows a more traditional naming convention of colors. The first text provides context into what kind of color we are using (brand, neutral, red, purple, etc.) and the second text that follows the dash is the numerical value assigned to it. The numerical value determines the shade of the color. The numerical value will traditionally follow a 100 point scale, but can also deviate by following 50 point scales as well. The only exception to these rules are white and black. White and black will just have the text 'White' or 'Black' as their primitives.

Here are some examples:
brand-100
neutral-500


# Semantic Token Naming Convention
DO NOT in any capacity change or reformat the way the naming convention is done for semantics without the consent of the designers. Do not change any connections either without the consent from the designer.

Semantics are where it can become a bit more complicated.

foundation-type-color/attribute-state

Foundation: Out of all the differen foundations, what kind of thing are we looking at? Are we looking at color? type? spacing? In this case for color it'll always be 'color'

Type: What kind of use case it is for. Is it for a background? Icon? Text? Border? What is the use case?

Color/Attribute: This will either be literally the actual color or a specific attribute of something. If it is just the color, that means there is no specific meaning tied to the color such as a colored tag. However, if there is a specific meaning attached to the color, then we call that an attribute. For example, a simple pill back ground color on a table would use the following token:

color-background-accentgray (uses the primitive gray-300)

'accentgray' is used in this case because there is no inherent meaning attached to using gray here for a pill. However, in the case we need to use gray for let's say a button background color or an entire modal background color, we will use the following naming convention:

color-background-neutral

'neutral' has a higher importance in its meaning because neutral is what is used across the ENTIRE platform for everything.

In the case we have a danger modal, this would NOT be the proper naming:

color-background-accentred

This would be incorrect because we want to show that something is a danger modal. Using 'color-background-accentred' would mean this particular color has no meaning attached. Essentially think of the color usage as more like a throwaway color. You can use this naming convention for anything that doesn't necessarily have an important meaning. The proper naming convention for the above example would actually be:

color-background-danger

Some elements may also have certain things called 'states'. Some example of states could be hovering states, pressed states, disabled states, and etc. Here is an example on how we would create a background color for a disabled warning button (orange button):

color-background-warning-disabled



