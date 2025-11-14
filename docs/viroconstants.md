Example use: Constants: Video Recording/Screenshot Errors
JavaScriptimport { ViroRecordingErrorConstants }
from &#x27;@reactvision/react-viro&#x27;; if (returnValue ==
ViroRecordingErrorConstants.RECORD_ERROR_NONE) {
console.log(&quot;Success!&quot;); }  NameValueNotesRECORD_ERROR_NONE-1Indicates that
there is no error.RECORD_ERROR_UNKNOWN0Indicates that
the platform encountered an unknown error.RECORD_ERROR_NO_PERMISSION1The user has
denied permission required for recording/saving
videos/screenshots.RECORD_ERROR_INITIALIZATION2Indicates there
was an error during initialization.RECORD_ERROR_WRITE_TO_FILE3Indicates that
there was an error writing to file.RECORD_ERROR_ALREADY_RUNNING4Indicates that
the system is already recording.RECORD_ERROR_ALREADY_STOPPED5Indicates that
the system is not currently recording.
AR Tracking States for
ARScene TypeScriptimport {
ViroTrackingStateConstants, ViroARTrackingReasonConstants } from
&#x27;@reactvision/react-viro&#x27;; if (returnValue ==
ViroTrackingStateConstants.TRACKING_LIMITED) { if (reason ==
ViroARTrackingReasonConstants.TRACKING_REASON_EXCESSIVE_MOTION) {
console.log(&quot;Stop shaking the camera so hard!&quot;); } }
 NameValueNotesTRACKING_UNAVAILABLE1AR Camera position is not available.TRACKING_LIMITED2Tracking is available but
quality of results can be may be wildly inaccurate and should generally not be
usedTRACKING_NORMAL3Camera position
tracking is providing optimal results.TRACKING_REASON_NONE1The current tracking state is not
limited.TRACKING_REASON_EXCESSIVE_MOTION2The device is moving too fast
for accurate image-based position tracking.TRACKING_REASON_INSUFFICIENT_FEATURES3The scene visible to the camera
does not contain enough distinguishable features for image-based position
tracking." style="margin-left:31px"
class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable"
data-testid="RDMD">
A collection of constants used in the Viro Platform.
######
Example use:##
Constants:###
Video Recording/Screenshot ErrorsJavaScript
    import { ViroRecordingErrorConstants } from '@reactvision/react-viro';
    if (returnValue == ViroRecordingErrorConstants.RECORD_ERROR_NONE) {
      console.log("Success!");
    }
Name| Value| Notes  
---|---|---  
RECORD_ERROR_NONE| **-1**|  Indicates that there is no error.  
RECORD_ERROR_UNKNOWN| **0**|  Indicates that the platform encountered an
unknown error.  
RECORD_ERROR_NO_PERMISSION| **1**|  The user has denied permission required
for recording/saving videos/screenshots.  
RECORD_ERROR_INITIALIZATION| **2**|  Indicates there was an error during
initialization.  
RECORD_ERROR_WRITE_TO_FILE| **3**|  Indicates that there was an error writing
to file.  
RECORD_ERROR_ALREADY_RUNNING| **4**|  Indicates that the system is already
recording.  
RECORD_ERROR_ALREADY_STOPPED| **5**|  Indicates that the system is not
currently recording.  
###
AR Tracking States for ARSceneTypeScript
    import { 
      ViroTrackingStateConstants,
      ViroARTrackingReasonConstants
    } from '@reactvision/react-viro';
    if (returnValue == ViroTrackingStateConstants.TRACKING_LIMITED) {
      if (reason == ViroARTrackingReasonConstants.TRACKING_REASON_EXCESSIVE_MOTION) {
        console.log("Stop shaking the camera so hard!");
      }
    }
Name| Value| Notes  
---|---|---  
TRACKING_UNAVAILABLE| 1| AR Camera position is not available.  
TRACKING_LIMITED| 2| Tracking is available but quality of results can be may
be wildly inaccurate and should generally not be used  
TRACKING_NORMAL| 3| Camera position tracking is providing optimal results.  
TRACKING_REASON_NONE| 1| The current tracking state is not limited.  
TRACKING_REASON_EXCESSIVE_MOTION| 2| The device is moving too fast for
accurate image-based position tracking.  
TRACKING_REASON_INSUFFICIENT_FEATURES| 3| The scene visible to the camera does
not contain enough distinguishable features for image-based position tracking.  
__Updated over 1 year ago