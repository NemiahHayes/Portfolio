---
title: "AI Creation"
category: "Misc"
date: "27-09-2024"
---
![header](/images/1280720.jpeg)
# Simple Artificial Intelligence

The AI for my Game Project was a real simple case of literally finding the player's position and applying velocity in that direction.

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

> "complex problems require simple solutions" - idk