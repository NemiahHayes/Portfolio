---
title: "Font and UI"
category: "Engine Dev"
date: "28-08-2024"
---

![header](/images/zombiesurvivors_fEw7JRfsYp.png)

Above you can see the intial state of the font in my hud, and below you can see how it changes to match the wave and HP.

![header](/images/zombiesurvivors_iPDHuPUbTU.png)


Due to my SDL_TTF not working, I had to work around my font as it wouldn't work. So what I had to do instead was set up a monofont system and adjust the animated sprite to freeze on different frames of a sprite sheet depending on which number we wanted to display. 

For this I head 2 vectors set up, one for each counter:

`std::vector<AnimatedSprite*> m_iHealthCounter;`
`std::vector<AnimatedSprite*> m_iWaveCounter;`

**Example of Player Health UI**

    void
    GameHud::PlayerUI()
    {
	    m_pHealth = static_cast<int>(m_pPlayer->GetHealth());
	    int drawDigits = GetDigits(m_pWave);

	    int num = m_pHealth;
	    int index = 1;
	    for (auto it = m_iHealthCounter.begin(); it != m_iHealthCounter.end(); )
	    {
		    int currentDigit = num % 10;
	    	(*it)->SetCurrentFrame(currentDigit);
    		(*it)->SetX(static_cast<int>(healthCounterPos.x - (index * 42)));
		    (*it)->SetY(static_cast<int>(healthCounterPos.y));
	    	num /= 10;

    		++index;
		    ++it;
	    }
    }

As you can see it iterates through the digits of the number, and generates new frames based on each digit.

To start it gets the player health from the given player object: 

`m_pHealth = static_cast<int>(m_pPlayer->GetHealth());`

It then sets the an index and a new variable that holds the player health.

    int num = m_pHealth;
    int index = 1;

Then we iterate through the Vector we set at the start

`for (auto it = m_iHealthCounter.begin(); it != m_iHealthCounter.end(); )`

During each iteration we get the current digit by getting the remainder when modding by 10

    int currentDigit = num % 10;

We then take the Vector of animated sprites and set it to freeze on the current digit and set it in position

    (*it)->SetCurrentFrame(currentDigit);
    (*it)->SetX(static_cast<int>(healthCounterPos.x - (index * 42)));
	(*it)->SetY(static_cast<int>(healthCounterPos.y));

To prepare for the next iteration we divide num, the temporary hp variable, by 10 for the next digit, and then increase the index variables.

	num /= 10;
    ++index;
	++it;