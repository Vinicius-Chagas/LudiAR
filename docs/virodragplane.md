JavaScript&lt;ViroBox position={[0, 0, -2]}
dragPlane={{ planeNormal: [0, 0, 0], planePoint: [0, 0, -2], maxDistance: 10,
}} onDrag={(event) =&gt; console.log(&quot;Drag Event:&quot;, event)} /&gt;
 PropertyTypeDescriptionplanePointnumber[]a point on the planeplaneNormalnumber[]the point on the plane&#x27;s normal
vectormaxDistancenumberthe maximum
distance the dragged object is allowed to travel away from the
camera/controller" style="margin-
left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-
bindable" data-testid="RDMD">
A drag plane allows you to specify the plane which the object is dragged. When
a drag type of "FixedToPlane" is given, dragging is limited to a user defined
plane. The dragging behavior is then configured by this property (specified by
a point on the plane and its normal vector). You can also limit the maximum
distance the dragged object is allowed to travel away from the
camera/controller (useful for situations where the user can drag an object
towards infinity). Make sure the object is positioned on the drag plane, or it
may not appear to drag correctly.
JavaScript
     console.log("Drag Event:", event)}
    />