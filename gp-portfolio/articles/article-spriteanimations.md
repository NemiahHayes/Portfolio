---
title: "Sprite Animation"
category: "Misc"
date: "28-08-2024"
---
![header](/images/player-walk.png)

# Sprite Animations

My game involved some basic animated sprite support- based upon different enums based on what the player was doing. If the player moved, a simple animation would play to give the illusion that he's not just floating. The player would also flash red if he got damaged by an enemy entity.

This would be helped with enums of Player states:

    enum PlayerState
    {
        IDLE,
        WALKING,
        PLAYER_DEATH
    }

And the check for if a player was moving would occur each time the Process method looped:

	if (GetB2Body().GetLinearVelocity() == b2Vec2(0.0f, 0.0f))
	{
		m_pPlayerState = IDLE;
	}
	else
	{
		m_pPlayerState = WALKING;
	}

Player Death:

    if (s_health <= 0)
	{
		m_pPlayerState = PLAYER_DEATH;
	}

Then a switch state:

    switch (m_pPlayerState)
	{
	case IDLE:
		//Process Actions and Sprite Positions
	break;

	case WALKING:
		//Process Actions and Sprite Positions
	break;
	}

A seperate method, ``DealDamage(float damage)`` would be called each time an Enemy damaged the player.

    void
    Player::DealDamage(float damage)
    {
    	s_health -= damage;
    	m_damaged = true;
    	m_damagedElapsedTime = 0;
    }

Then in the process method:

    //Deal Damage
	if (m_damaged)
	{
		m_damagedElapsedTime += deltaTime;

		m_pSprite->SetRedTint(255);
		m_pSprite->SetBlueTint(0);
		m_pSprite->SetGreenTint(0);
		m_pWalkSprite->SetRedTint(255);
		m_pWalkSprite->SetBlueTint(0);
		m_pWalkSprite->SetGreenTint(0);

		if (m_damagedElapsedTime >= m_damagedTimer)
		{
			m_damaged = false;
			m_pSprite->SetRedTint(255);
			m_pSprite->SetBlueTint(255);
			m_pSprite->SetGreenTint(255);
			m_pWalkSprite->SetRedTint(255);
			m_pWalkSprite->SetBlueTint(255);
			m_pWalkSprite->SetGreenTint(255);
		}
	}

As you can see a ``m_damagedElapsedTime`` value is set, so that the player is only red for a certain amount of time.