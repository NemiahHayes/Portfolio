---
title: "Bullet Direction"
category: "Misc"
date: "27-09-2024"
---
![header](/images/zombiesurvivors_pU0gX0oLxV.png)

# Shooting Stuff in My Game

Figuring out bullet direction was a simple vector calculation. But first we had to find the intended direction that the player would shoot from, which wasn't as straightforward as it could have been thanks to the difficulties that came from translating between box2d, pixels, and world space and screen space.

First it would have to get the mouse screen space, and the player screen space position, then calculate the direction vector based on that. The program will then send the player's world space position as the bullet's spawn point, along with the direction vector that was calculated as the point position, to a new Bullet's initialisation method. Velocity will then be set there based on the input methods.

**Example Bullet Initialisation Method**

    //Typical Init Stuff
    //entity speed
    s_EntitySpeed = 15.0f;

    //Set Velocity
    pointPosition.Normalize();
    //Move towards Point Position * entity speed
    SetVelocity(b2Vec2(pointPosition.x * s_EntitySpeed, pointPosition.y * s_EntitySpeed));