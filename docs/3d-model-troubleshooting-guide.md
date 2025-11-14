Optimizing 3D Models for AR/VR  Animating 3D Characters for AR/VR Exporting PBR Textured 3D Models for AR/VR My model isn&#x27;t showing up in my
scene It&#x27;s a good idea to verify the model appears
correctly in FBX Review before using the export tool. Is the
scale of your model very large? You might be in the middle of the model, but
due to backface culling, it may seem like it never loaded. Did you add
lighting to your scene? Please reference this Lighting and Materials guide. Character does
not animate It&#x27;s a good idea to bake keys before exporting to .FBX in your 3D
application.  Make sure there only 4 Max
influences per vertex when binding your skin to your skeletal rig. Model looks flat Did you set up scene lights? Check out
our Lighting and Materials guide.
Model is white/no
textures Models appearing white is an indication that textures
may not be assigned properly. Double check the textures are properly assigned
to the model. Import the model into FBX
Review or your 3D modeling app to verify the model is displaying correctly
with all its textures linked and assigned properly before using the Viro
export tool.  If using an .OBJ w/ non-PBR materials, a .MTL should be
used. Do
you support this 3D model format? Currently Viro&#x27;s
exporter tool supports .FBX and .OBJ. Please export your model into either of
the supported formats before using the exporter tool. What&#x27;s the polycount limit? There
isn&#x27;t a set poly-limit for Viro, as a number of other factors in the same
scene may effect framerate performance. But, we recommend being as efficient
as possible. We&#x27;ve tested a million-poly model with acceptable
framerates, but it quickly dropped after adding additional objects. How do I properly export my 3D model to
.FBX using... Maya 2015
and above Use the Game Exporter utility found under File &gt; Game
Exporter. Please use our guide here for proper settings.
3D Studio Max 2016 Ext 1 and above Use the Game Exporter utility found under Application menu &gt;
Export &gt; Game Exporter. The options are similar to Maya, so you can follow
our guide here. Blender We recommend using
another 3D modeling package such as Maya or 3D Studio Max to export your model
as it does not export textures along with the mesh.  If you still
prefer to use Blender for exporting to FBX, you can manually assign texture
information using the Autodesk FBX Converter utility. But, the tool has not
been supported since 2013 so you may run into compatibility issues. 
You can also export to OBJ (for non-animated objects) and assign the
textures through code." style="margin-left:31px" class="rm-Markdown
markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
**Please follow the following 3D Asset Pipeline guides:**
[Optimizing 3D Models for AR/VR](https://blog.viromedia.com/https-blog-
viromedia-com-asset-pipeline-optimizing-3d-models-ar-vr-arkit-
arcore-d0fb61627aaf)
[Animating 3D Characters for AR/VR](https://blog.viromedia.com/https-blog-
viromedia-com-asset-pipeline-animating-3d-characters-for-ar-vr-arkit-
arcore-c7aff566bcf8)
[Exporting PBR Textured 3D Models for AR/VR](https://blog.viromedia.com/asset-
pipeline-exporting-pbr-textured-3d-models-for-ar-vr-arkit-arcore-c570423c68aa)
##
My model isn't showing up in my sceneIt's a good idea to verify the model appears correctly in [FBX
Review](https://www.autodesk.com/products/fbx/fbx-review) before using the
export tool.
Is the scale of your model very large? You might be in the middle of the
model, but due to backface culling, it may seem like it never loaded.
Did you add lighting to your scene? Please reference this Lighting and
Materials [guide](https://docs.viromedia.com/docs/3d-scene-lighting).
##
Character does not animateIt's a good idea to [bake
keys](https://knowledge.autodesk.com/support/maya/learn-
explore/caas/CloudHelp/cloudhelp/2016/ENU/Maya/files/GUID-32C08972-C125-46EE-B82B-5352E00E520B-htm.html)
before exporting to .FBX in your 3D application.
![546](https://files.readme.io/6da8d0a-Screen_Shot_2018-02-28_at_4.39.26_PM.png)
Make sure there only 4 Max influences per vertex when binding your skin to
your skeletal rig.
##
Model looks flatDid you set up scene lights? Check out our [Lighting and Materials
guide](lighting-and-materials.html).
##
Model is white/no texturesModels appearing white is an indication that textures may not be assigned
properly. Double check the textures are properly assigned to the model. Import
the model into [FBX Review](https://www.autodesk.com/products/fbx/fbx-review)
or your 3D modeling app to verify the model is displaying correctly with all
its textures linked and assigned properly before using the Viro export tool.
If using an .OBJ w/ non-PBR materials, a .MTL should be used.
##
Do you support this 3D model format?Currently Viro's exporter tool supports .FBX and .OBJ. Please export your
model into either of the supported formats before using the exporter tool.
##
What's the polycount limit?There isn't a set poly-limit for Viro, as a number of other factors in the
same scene may effect framerate performance. But, we recommend being as
efficient as possible. We've tested a million-poly model with acceptable
framerates, but it quickly dropped after adding additional objects.
##
How do I properly export my 3D model to .FBX using...
[](3d-model-troubleshooting-guide.html#how-do-i-properly-export-my-3d-model-
to-fbx-using)
**Maya 2015 and above**  
Use the [Game Exporter](https://knowledge.autodesk.com/support/maya/learn-
explore/caas/CloudHelp/cloudhelp/2016/ENU/Maya/files/GUID-2DB6E7B0-04B8-4585-91E9-7D64B02D0338-htm.html)
utility found under File > Game Exporter. Please use our guide
[here](https://blog.viromedia.com/https-blog-viromedia-com-asset-pipeline-
optimizing-3d-models-ar-vr-arkit-arcore-d0fb61627aaf) for proper settings.
**3D Studio Max 2016 Ext 1 and above**  
Use the [Game Exporter ](https://knowledge.autodesk.com/support/3ds-max/learn-
explore/caas/CloudHelp/cloudhelp/2017/ENU/3DSMax/files/GUID-B0258B21-83AE-4DF6-B7AB-3FA7F63F371A-htm.html)utility
found under Application menu > Export > Game Exporter. The options are similar
to Maya, so you can follow our guide [here](https://blog.viromedia.com/https-
blog-viromedia-com-asset-pipeline-optimizing-3d-models-ar-vr-arkit-
arcore-d0fb61627aaf).
**Blender**  
We recommend using another 3D modeling package such as Maya or 3D Studio Max
to export your model as it does not export textures along with the mesh.
If you still prefer to use Blender for exporting to FBX, you can manually
assign texture information using the [Autodesk FBX
Converter](http://usa.autodesk.com/adsk/servlet/pc/item?siteID=123112&id=22694909)
utility. But, the tool has not been supported since 2013 so you may run into
compatibility issues.
You can also export to OBJ (for non-animated objects) and assign the textures
through code.
  * [__Table of Contents](3d-model-troubleshooting-guide.html#)
  *     * [My model isn't showing up in my scene](3d-model-troubleshooting-guide.html#my-model-isnt-showing-up-in-my-scene)
    * [Character does not animate](3d-model-troubleshooting-guide.html#character-does-not-animate)
    * [Model looks flat](3d-model-troubleshooting-guide.html#model-looks-flat)
    * [Model is white/no textures](3d-model-troubleshooting-guide.html#model-is-whiteno-textures)
    * [Do you support this 3D model format?](3d-model-troubleshooting-guide.html#do-you-support-this-3d-model-format)
    * [What's the polycount limit?](3d-model-troubleshooting-guide.html#whats-the-polycount-limit)
    * [How do I properly export my 3D model to .FBX using...](3d-model-troubleshooting-guide.html#how-do-i-properly-export-my-3d-model-to-fbx-using)