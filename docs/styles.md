Layout styles used within ViroFlexView components.
Please refer to https://facebook.github.io/react-native/docs/layout-
props for more information.  🚧Border related layout props are currently not
supported. Text Styles The styles below only apply to ViroText. Please see that component for more info on
how to define these. color TypeDescriptionColorPropTypeThe color of the
text. The default text color is white.Valid color formats
are:&#x27;#f0f&#x27; (#rgb)  &#x27;#f0fc&#x27;
(#rgba)&#x27;#ff00ff&#x27; (#rrggbb)  &#x27;#ff00ff00&#x27;
(#rrggbbaa)&#x27;rgb(255, 255, 255)&#x27;  &#x27;rgba(255,
255, 255, 1.0)&#x27;&#x27;hsl(360, 100%, 100%)&#x27; 
&#x27;hsla(360, 100%, 100%, 1.0)&#x27;&#x27;transparent&#x27;
 &#x27;red&#x27; * 0xff00ff00
(0xrrggbbaa) fontFamily TypeDescriptionstringSupported Fonts fontSize
TypeDescriptionnumberThe size of the font.
Default is 18. Recommended font size is
&gt;=18. textAlign TypeDescription&#x27;left&#x27;, &#x27;right&#x27;, &#x27;center&#x27;The horizontal alignment of the text. Default is
&#x27;left&#x27;. textAlignVertical TypeDescription&#x27;top&#x27;, &#x27;bottom&#x27;, &#x27;center&#x27;The vertical alignment of the text. Default is
top. textClipMode TypeDescription&#x27;none&#x27;, &#x27;clipToBounds&#x27;Set to clipToBounds to clip this text to its bounding box defined
by width and height. If set to none, the text will overrun its
bounds if&#x27;s larger than them. textLineBreakMode PropKeyPropType&#x27;wordwrap&#x27;, &#x27;charwrap&#x27;, &#x27;justify&#x27;,
&#x27;none&#x27;The line break mode to use
for text wrapping. We process line breaks against the width of the text.
Set to wordwrap to introduce line breaks only at word boundaries,
whenever the next word overruns the width. Set to charwrap to
introduce line breaks whenever the next character overruns the width.
This mode may break words in half across lines. Set to justify to
introduce breaks at word boundaries, and add variable internal spacing between
words, at the optimal points in the text to reduce the &#x27;raggedness&#x27;
of the text edges." style="margin-
left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-
bindable" data-testid="RDMD">
##
Layout StylesLayout styles used within [ViroFlexView](viroflexview.html) components. Please
refer to  for more
information.
> ## 🚧
>
> Border related layout props are currently not supported.
##
Text StylesThe styles below only apply to [ViroText](virotext.html). Please see that
component for more info on how to define these.
###
colorType| Description  
---|---  
[ColorPropType](https://reactnative.dev/docs/colors)| The color of the text.
The default text color is white.Valid color formats are:  
_' #f0f' (#rgb)  
_ '#f0fc' (#rgba)  
_' #ff00ff' (#rrggbb)  
_ '#ff00ff00' (#rrggbbaa)  
_' rgb(255, 255, 255)'  
_ 'rgba(255, 255, 255, 1.0)'  
_' hsl(360, 100%, 100%)'  
_ 'hsla(360, 100%, 100%, 1.0)'  
_' transparent'  
_ 'red'  
* 0xff00ff00 (0xrrggbbaa)  
###
fontFamilyType| Description  
---|---  
string| [Supported Fonts](https://github.com/dabit3/react-native-fonts)  
###
fontSizeType| Description  
---|---  
number| The size of the font. Default is 18. Recommended font size is >=18.  
###
textAlignType| Description  
---|---  
'left', 'right', 'center'| The horizontal alignment of the text. Default is
'left'.  
###
textAlignVerticalType| Description  
---|---  
'top', 'bottom', 'center'| The vertical alignment of the text. Default is top.  
###
textClipModeType| Description  
---|---  
'none', 'clipToBounds'| Set to `clipToBounds` to clip this text to its
bounding box defined by `width` and `height`. If set to `none`, the text will
overrun its bounds if's larger than them.  
###
textLineBreakModePropKey| PropType  
---|---  
'wordwrap', 'charwrap', 'justify', 'none'| The line break mode to use for text
wrapping. We process line breaks against the `width` of the text.  
Set to `wordwrap` to introduce line breaks only at word boundaries, whenever
the next word overruns the width.  
Set to `charwrap` to introduce line breaks whenever the next _character_
overruns the width. This mode may break words in half across lines.  
Set to `justify` to introduce breaks at word boundaries, and add variable
internal spacing between words, at the optimal points in the text to reduce
the 'raggedness' of the text edges.  
  * [__Table of Contents](styles.html#)
  *     * [Layout Styles](styles.html#layout-styles)
    * [Text Styles](styles.html#text-styles)
      * [color](styles.html#color)
      * [fontFamily](styles.html#fontfamily)
      * [fontSize](styles.html#fontsize)
      * [textAlign](styles.html#textalign)
      * [textAlignVertical](styles.html#textalignvertical)
      * [textClipMode](styles.html#textclipmode)
      * [textLineBreakMode](styles.html#textlinebreakmode)