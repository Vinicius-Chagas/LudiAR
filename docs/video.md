TODO:
  * Broken link doc:virovideo-2-compare
  * Broken link doc:viro360video-1)
[__Suggest Edits](https://viro-community.readme.io/edit/video)
Viro supports various components for displaying video. Video can be displayed
in 360 degrees, surrounding the user, or on a flat plane, simulating a
physical video screen.
##
Video ScreenThe `` component can be used to display video on a 2D screen. Like
all UI elements, you specify the position in world space. You can also set the
width and height of the screen, and set the video via the `source` attribute,
as shown in the example below.
JavaScript
Supported video formats are .mov, .mp4, .mpv, and .3gp. The video source may
be a remote URL or a local file resource. To invoke with a remote URL, set the
source to a URI. For example, `{uri:"http://example.org/myvideo.mp4"}`. To
invoke with a local file resource, use require: `require('./myvideo.mp4');`.
For a full list of properties, refer to the [ViroVideo](https://viro-
community.readme.io/docs/virovideo-2-compare) reference.
##
360 VideoSpherical videos that surround the user can be displayed via the
`` component. These videos are displayed as a [scene
background](scenes.html#scene-backgrounds) , behind all other UI elements.
JavaScript
As with 2D videos, 360 video sources may be remote URLs or local file
resources. For a full list of properties, refer to the
[Viro360Video](https://viro-community.readme.io/docs/viro360video-1)
reference.
##
Alpha Video (Chroma Key Filtering)Viro supports rendering partially transparent video over any VR, AR, or 3D
scene. For AR scenes in particular, this enables "hologram" type experiences
like [Will.I.Am on CNN](https://www.youtube.com/watch?v=68-bjoF1Vdk) or
[Princess Leia in Star Wars](https://www.youtube.com/watch?v=tf-1xeE3zzE).
Alpha video works via "chroma key filtering". Chroma key filtering removes
(makes transparent) all colors from a video that are within an epsilon range
of a target color. This technique is useful when rendering "green screen" or
"blue screen" videos, as is commonly seen in newscasting and motion pictures.
The videos in their raw form look something like the image below.
![1546](https://files.readme.io/3d94a0e-alpha.png)
The code below shows how to enable chroma-key filtering, by setting the
`chromaKeyFilteringColor` property on the `` being used by the
``.
JavaScript
    return (
    );
    ...
    ViroMaterials.createMaterials({
      chromaKeyFilteredVideo : {
        chromaKeyFilteringColor: "#00FF00"
      },
    });
##
Manipulating VideoBoth the `` and `` components enable you to:
  * Adjust volume via the `volume` property
  * Mute the video via the `muted` property
  * Pause the video by setting the `paused` property
  * Seek the video to a specific time in seconds by invoking the `seekToTime(time)` method
You can also respond to various callbacks:
  * `onFinish` is invoked when a video finishes playing (if looping, this is invoked at the end of each loop)
  * `onUpdateTime` is invoked every second with the current time transpired in the video, and
  * `onError` is called when we encounter an error loading or playing the video.
The following example illustrates these features.
JavaScript
    var VIDEO_REF = "videoref";
    const VideoTest = () => {
      const [muted, setMuted] = useState(true);
      const [volume, setVolume] = useState(1);
      const ref = useRef(null);
      const handleVideoFinished = () => {
        console.log("Video finished!");
      };
      const handleUpdateTime = (current, total) => {
        console.log("Video time update, current: " + current + ", total: " + total);
      };
      const handleVideoError = (event) => {
        console.log("Video loading failed with error: " + event.nativeEvent.error);
      };
      const handleClickRestartVideo = () => {
        if (ref.current) ref.current.seekToTime(0);
      };
      return (
      );
    };
In particular, the example above shows how to respond to the various video
callbacks, and provides an example of how to use the `seekToTime` function.
When the `` component is tapped, `handleClickRestartVideo` is
invoked, which sets the time back to zero.
__Updated over 3 years ago