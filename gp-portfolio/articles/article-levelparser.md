---
title: "Level Parser"
category: "Engine Dev"
date: "07-10-2024"
---
![header](/images/BlockBloke_debug_6dQ5p6PuML.png)

# Creating a system for Dynamic Level Creation

For my group project, Mage Runner, we required that the creation of levels be a little more dynamic and easier to create than the hardcoded levels of my individual project. The idea for it however still had to be kept simple, with time constraints being quite harsh. 

I decided to simply adapt what I made in the engine's ini parser and adjust it. Headers would represent a single level, and below each level would be a set of characters, with new characters representing a single tile.

**Key for Characters**

    # = Regular Tile
    1 = 1 Block
    2 = 2 Block
    3 = 3 Block
    p = Player Spawn
    x = Exit Tile

The ``LevelParser`` works by reading a mapdata ini file using the C++ ``fstream`` library. Through this it loops each line, checking to make sure lines aren't empty spaces, as well as checking for enclosed square brackets to detect new headers. Lines are added to a map, with a corresponding line number to help with tracking the y level of each line of tiles. These values are tied to another key which is the header. Upon reading a new header the intline resets to 0. 

**Example Code of Ini Reading**

	while (std::getline(fileData, line))
	{
		line = Trim(line);

		//Ignore Empty Lines
		if (line.empty() || line[0] == ';')
		{
			continue;
		}

        //Check if Header
		if (line.front() == '[' && line.back() == ']')
		{
			level = Trim(line);
			intLine = 0;
		}
		else
		{
			(*m_pLevelData)[level][intLine] = line;
		}

		intLine++;
	}

Levels would then be loaded in by requesting an entity list via. the header string.

The tilemap would then be generated like this:

	for (const auto& iValue : levelSection->second)
	{
		float y = static_cast<float>(iValue.first) * m_tileSize;
		float x = 0;

		//Generate Tilemap
		for (int i = 0; i < iValue.second.length(); i++)
		{
			Entity* tile;
			if (iValue.second[i] == '#')
			{
				tile = new FletchsTestBlock(x, y);
				tileMap.push_back(tile);
			}

			if (iValue.second[i] == 'p')
			{
				tile = new FletchersPlayer(x, y);
				tileMap.push_back(tile);
			}
			x += m_tileSize;
		}
	}

A new Level class would then be created- a child class of the regular Scene class. This one would be more general, and allow for a parent Level Manager to load and unload new levels. This Level Manager would read levels in via. data generated from the Level Parser.

**Psuedo Code**

    GET LEVELDATA
    GET LEVELDATA.FIRSTHEADER
    IF LEVELDATA != NULL
        DELETE LEVELDATA
    ELSE
        LOAD LEVELDATA
            GET ENTITYLIST FROM LEVELHEADER
            LEVELDATA = INIT NEW LEVEL
    WHILE GAMELOOP
        PROCESS LEVELDATA
        DRAWLEVELDATA

A debug menu was also added to list buttons of all levels in the ini file, to allow for easy navigation between levels.

Here we can see an example of the ini file, and then the dynamically generated levels:

    [level2]
    ##############################
    #           
    #p                            x
    ############  #####  #####  ##
    [level3]
    #############################
    #
    #
    #p
    ###### #### ### ### ##

![imgarticle](images/BlockBloke_debug_E312KJJZpO.png)
*level 2 in ini example*

![imgarticle](images/BlockBloke_debug_V0jvGIXOze.png)
*level 3 in ini example*