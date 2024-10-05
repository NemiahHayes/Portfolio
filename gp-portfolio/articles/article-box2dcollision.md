---
title: "Collision Callbacks"
category: "Engine Dev"
date: "22-09-2024"
---
![header](/images/collisionmanager.png)

# Collision Events

Collision in my Game Project utilized Box2D's collision callbacks set up in my own Collision Manager. This Collision Manager required two methods- `BeginContact` and `EndContact`. Any entity with collision, ie. anything which was a subclass of `Entity` required their own two respective methods- `DoCollision` and `EndCollision`, both of which would take in an argument of a pointer to the Object they were colliding with. 

**Collision Manager Sample Code**
	
**BeginContact**

    //Check Collision Objects
	b2Fixture* fixtureA = contact->GetFixtureA();
	b2Fixture* fixtureB = contact->GetFixtureB();

	//Cast User Data to Objects
	Entity* bodyUserDataA = reinterpret_cast<Entity*>(fixtureA->GetUserData().pointer);
	Entity* bodyUserDataB = reinterpret_cast<Entity*>(fixtureB->GetUserData().pointer);

	if (bodyUserDataA && bodyUserDataB)
	{
		//Call Collision Methods
		bodyUserDataA->DoCollision(bodyUserDataB);
		bodyUserDataB->DoCollision(bodyUserDataA);
	}

**EndContact**

	//Check Collision Objects
	b2Fixture* fixtureA = contact->GetFixtureA();
	b2Fixture* fixtureB = contact->GetFixtureB();

	//Cast User Data to Objects
	Entity* bodyUserDataA = reinterpret_cast<Entity*>(fixtureA->GetUserData().pointer);
	Entity* bodyUserDataB = reinterpret_cast<Entity*>(fixtureB->GetUserData().pointer);

	if (bodyUserDataA && bodyUserDataB)
	{
		//Call Collision Methods
		bodyUserDataA->EndCollision(bodyUserDataB);
		bodyUserDataB->EndCollision(bodyUserDataA);
	}
    
To make sure that certain objects didn't collide with eachother I also had to set up layer masks as well, these are defined in an inline header to allow for convenience when setting up entities. Each layer is an enum that refers itself to an index bit.

**Entity Category Index Bits**

    GROUP_PLAYER = 0x0001,
    GROUP_BULLET = 0x0002,
    GROUP_ENEMY = 0x0004,
	GROUP_WALL = 0x0008

This allowed me to have certain instances where objects wouldn't collide with eachother, eg. bullets won't collide with players but will collide with every other entity. In my method for setting an entity's physics body I simply have it take in parameters that take in the current category bits, as well as the layer mask bits.

**Example from Bullet**

    DefineCircle(b2Vec2(spawnPosition.x, spawnPosition.y), 
                m_pSize, world, GROUP_BULLET, GROUP_ENEMY | GROUP_WALL, renderer);

**Referenced Method**

    void
    Entity::DefinePolygon(b2Vec2 position, b2Vec2 size, b2World& world, uint16 categoryBits, uint16 maskBits)
    {
	    //Define Body
	    b2BodyDef bodyDef;
	    bodyDef.type = b2_staticBody;
	    bodyDef.position.Set(position.x / 2, position.y / 2);

	    //Create Body
	    b2Body* body = world.CreateBody(&bodyDef);

	    //Create Shape
	    b2PolygonShape edgeShape;
	    edgeShape.SetAsBox(size.x / 2, size.y / 2);

	    //Create Fixture Definition
	    b2FixtureDef fixtureDef;
	    fixtureDef.isSensor = false;
	    fixtureDef.shape = &edgeShape;
	    fixtureDef.density = 1.0f;
	    fixtureDef.friction = 1.0f;
	    fixtureDef.restitution = 0.0f;
	    fixtureDef.filter.categoryBits = GROUP_WALL;
	    fixtureDef.filter.maskBits = GROUP_BULLET | GROUP_BULLET | GROUP_PLAYER;
	    fixtureDef.userData.pointer = reinterpret_cast<uintptr_t>(this);
	    b2Fixture* fixture = body->CreateFixture(&fixtureDef);
    }

