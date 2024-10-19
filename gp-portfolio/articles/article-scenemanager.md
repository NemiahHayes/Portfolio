---
title: "Scene Management"
category: "Engine Dev"
date: "28-08-2024"
---
![header](/images/1280720.jpeg)
*image unrelated*

# Managing Scenes in the GP Framework

## **Individual Project**

Scene management in my individual project was quite primitive, I'd instantiate all Scenes when intiating my main loop and switch between them as needed.

**Example Code**

Instantiating Each Scene:

	// --SCENES-- //
	//0
	Scene* splashScene = 0;
	splashScene = new SceneSplash();
	m_scenes.push_back(splashScene);

	//1
	Scene* menuScene = 0;
	menuScene = new SceneMainMenu();
	m_scenes.push_back(menuScene);

	//etc, each Scene would be stored in a vector array ``m_scenes``

An enum ``GameState`` would be used to change between Game Scenes:

    void
    Game::LoadScene(GameState scene)
    {
	    switch (scene)
	    {
	    case SPLASH_SCREEN:
    		m_iCurrentScene = 0;
	    	m_scenes[m_iCurrentScene]->Initialise(*m_pRenderer, *m_pAudioSystem);
		    break;
    	case MAIN_MENU:
	    	m_iCurrentScene = 1;
		    m_scenes[m_iCurrentScene]->Initialise(*m_pRenderer, *m_pAudioSystem);
		    break;
	    case END_WIN:
		    m_iCurrentScene = 2;
		    m_scenes[m_iCurrentScene]->Initialise(*m_pRenderer, *m_pAudioSystem);
		    break;
	    case END_LOSE:
		    m_iCurrentScene = 3;
		    m_scenes[m_iCurrentScene]->Initialise(*m_pRenderer, *m_pAudioSystem);
		    break;
	    case GAMEPLAY:
		    m_iCurrentScene = 4;
		    m_scenes[m_iCurrentScene]->Initialise(*m_pRenderer, *m_pAudioSystem);
		    break;
    	}
    }

The main game loop would then draw and process whichever secene = m_iCurrentScene, ie:

    void
    Game::Process(float deltaTime)
    {
	    ProcessFrameCounting(deltaTime);
	    if (m_bPauseSimulation)
	    {
	    	deltaTime = 0.0f;
	    }

	    //Process Scenes
	    m_scenes[m_iCurrentScene]->Process(deltaTime, *m_pInputSystem, *m_pAudioSystem);
    }

## **Team Project**

The previous iteration of scene management worked because I utilized very few scenes. However later I would utilize a [Level Parser](/article-levelparser) and would require a lot more dynamic options when switching between scenes. 

Essentially this would manage all levels with itself as a single loaded scene. Levels, a new class based upon the ``Scene`` class, would be loaded and unloaded dynamically.

    void
    LevelManager::LoadLevel(const string& level)
    {
	    //Delete Level
	    UnloadLevel();

	    //Load new Level
	    m_pActiveLevel = new Level();
    	vector<Entity*> entityList = LevelParser::GetInstance().LoadLevel(level, *m_pRenderer);
    	m_pActiveLevel->Initialise(*m_pRenderer, entityList);
    }

    void LevelManager::UnloadLevel()
    {
    	if (m_pActiveLevel != nullptr)
    	{
    		delete m_pActiveLevel;
    		m_pActiveLevel = 0;
    	}
    }