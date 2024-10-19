---
title: "Entity Class"
category: "General C++"
date: "23-09-2024"
---
![header](/images/entitydiagram.jpg)

# Inheritance and Entities

In order to streamline the process of my entity creation I had to build entities from a main class. In the header an example can be seen of the planned output of these classes. The Player, Enemy, and Bullet classes all inherit from the same parent class. 

This allowed me to hold a vector of all entities and loop through them all at once. For an example if I wanted to delete every entity- player, bullets and enemies included- I could do so with a single loop:

    for (auto it = entityList.begin(); it != entityList.end(); )
    {
        //Delete Entity at Iterator Point
        delete (*it);
        (*it) = 0;

        //Proceed with Iterator
        ++it;
    }

All I had to make sure was that when creating these classes that they inherited from the Entity superclass, and they would all share similar properties such as initialising, typing, direction, bodies, phyiscs- however they could also have their own characteristics such as AI, appearance, and data.

    class RageZombie : public Enemy
    {
        //Member Methods and Data
    }