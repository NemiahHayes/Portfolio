---
title: "General Concepts"
category: "General C++"
date: "26-08-2024"
---
![header](/images/zombiesurvivors_pU0gX0oLxV.png)

# General C++ Concepts I've Learned

## **Memory Management**

Figuring out basic memory management helped a lot in my time with C++. Dynamic memory allocation is used all over my project.

To aid this process a flag is set at the start of the program in order to catch any potential memory leaks- ``_CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);``. 

Creating new data in memory at runtime involved using a combination of pointers and the ``new`` keyword. For example to create sets of new classes I'd do this: ``Entity* e = new Entity();``.

However, I'd also have to make sure to delete memory when it was no longer used which was quite simple- 

``delete {variable};``
``{variable} = 0;``

## **Vector Iteration**

A fun trick I found for looping through a Vector array:

    for (auto it = vector.begin(); it != vector.end();)
    {
        ++it;
    }

``(*it)`` can be used for referencing to pointers in an array. This was used extensively for memory management in my code:

    for (auto it = vector.begin(); it != vector.end();)
    {
        delete (*it);
        (*it) = 0;
        ++it;
    }

## Inheritance

Learning about parent classes were also very useful, I touch on this a lot in [Entity Class](/article-entityclass). It's very similar, or almost exactly the same concept, as other Object-Oriented Programming languages.