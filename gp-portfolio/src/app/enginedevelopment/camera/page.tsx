'use client'

import Image from 'next/image';

export default function Camera() {
    const textStyle = "text-black text-sm mx-12";
    const textStyleItalic = textStyle + " italics";
    const bgStyle = "bg-white mx-32 pb-16";
  return (
    <main>
      <div className="content mt-16">
        <div className={bgStyle}>
        <h2 className="text-black text-3xl flex justify-center mt-12 mb-3">Camera Development</h2>
        <center className="my-3">
            <Image
                src="/static/images/720.jpeg"
                width="360"
                height="360"
                alt="camera view picture"
            />
        </center>
        <p className={textStyle}>
            In order to fully realize my idea for the Individual Game Project,
            I had to develop a game camera which would move around the world with the player,
            this is a concept that isn&#39;t exactly new to gaming, however I found it a unique challenge to implement
            my very own implementation.
            To sum the process up in simple terms: I had to offset every sprite in the game by my given camera&#39;s position vector. 
        <br></br>
        <br></br>
            In order to really understand the process, I had to conceptualise two different spaces that I&#39;d be working with- the screen space, and the world space.
            The screen space is the regular space we'd be working with, it's space that's entirely defined by your screen, a vector2 of (0,0) will always be in the top right,
            and the bottom right corner ends at a vector2 of (screenwidth, screenheight), with anything outside of those parameters displaying outside of the screen.
        <br></br>
            The world space works entirely relatively to itself, it allows objects to keep track of their own positions. So if an object were to be at world space vector2(0,0), and the screen space were
            to change entirely, the object, in world space, would still be sitting at (0,0).
        <br></br>
            The challenge and job of the (2D) Camera is to translate between these two spaces.
        <br></br>
        <br></br>
            It sounds simple, and compared to other topics which I&#39;ve tackled it should have been- and at first it really was. The initial calculations are quite simple:
        <br></br>
        <br></br>
        </p>
        <center><p className={textStyle}>
            From World to Screen:
        </p></center>
        <center><p className={textStyleItalic}>((worldPosition - cameraPosition) - offset)</p></center>
        <center><p className={textStyle}>From Screen to World:</p></center>
        <center><p className={textStyleItalic}>((screenPosition + cameraPosition) + offset)</p></center>
        <center><p className={textStyleItalic}>*with offset being the middle of the screen in my case</p></center>
        <br></br>
        <p className={textStyle}>
            I had an issue where this actually interacted quite weirdly with my Box2D, the sprites would scale correctly, however, now the collision boxes wouldn't. I got stuck for hours on this,
            and the solution was that I hadn't actually scaled my camera properly to match the Box2D objects.
            I just had to apply my conversion function between pixel and box2d units, a literal one line job. That is all.
        <br></br>
            Lessons Learned? Really make sure you know the frameworks you're working with.
        </p>
        </div>
      </div>
    </main>
  );
}
