---
title: "Scene Class"
category: "General C++"
date: "28-08-2024"
---
![header](/images/1280720.jpeg)
*image unrelated*

# Scene Class

My main Scene class is a simple Abstract class with simple Initialisation, Process, and Draw methods. These are used throughout the program to manage each Scene, as noted in [Scene Management](/article-scenemanager). With every Scene in the game being a subclass of the parent Scene class, arrays can be created of all scenes, despite them all having different behaviours when run.

**Example of Scene methods:**

	Scene();
	virtual ~Scene();

	virtual bool Initialise(Renderer& renderer) = 0;
	virtual void Process(float deltaTime, InputSystem& inputSystem, Game& game) = 0;
	virtual void Draw(Renderer& renderer) = 0;
	virtual void DebugDraw() = 0;

And all these methods would need to be created for each scene that inherits this class.