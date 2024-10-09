---
title: "AI Creation"
category: "Misc"
date: "27-09-2024"
---
![header](/images/aistatemachine.png)
# Simple Artificial Intelligence

## AI States

The AI of Zombie Survivors is managed by States, a simple enum variations that dictates the entity's current behaviours. The states consist of:

``
	SPAWNING,
	CHASING,
	ATTACKING,
	DEATH,
	MINIONS
``

Each process cycle, a method would check certain conditions, and upon meeting these conditions would change the state, after the state has been changed the AI would call that states given method.

## AI Movement

The AI movement for my Game Project was a simple case of finding the player's position and applying velocity in that direction.

**Pseudo Code**

    INPUT: TargetPosition, CurrentPosition, Range
    RotateBody
    IF (TargetPosition - CurrentPosition) > 0
    THEN MoveBody Towards TargetPosition
    
**Applied Code**

    //Get Positions
	b2Vec2 targetPosition = m_pPlayer->GetPosition();
	b2Vec2 currentPositon = GetPosition();
	float velX = targetPosition.x - GetPosition().x;
	float velY = targetPosition.y - GetPosition().y;

	//Rotate Body
	float enemyDir = atan2(targetPosition.y - currentPositon.y, -(targetPosition.x - currentPositon.x));
	Rotate(enemyDir * 180.0f / static_cast<float>(M_PI));

	//Move Body
	float length = static_cast<float>(sqrt(velX * velX + velY * velY));
	if (length > 0) {
		velX = velX / length;
		velY = velY / length;

		float finalVelX = (velX);
		float finalVelY = (velY);

		SetVelocity(b2Vec2(finalVelX, finalVelY));
	}

