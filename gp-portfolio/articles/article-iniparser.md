---
title: "Ini Parser"
category: "Engine Dev"
date: "26-08-2024"
---

![header](images\notepad_RrbO2wOWBv.png)

# Parsing for Data

Parsing Data into my project was a simple matter of reading an ini file and looking for patterns. 

Using fstream the parser opens the ini file, and then loops through each line, if a line is surrounded by square brackets it counts as a new header, or piece of data, and otherwise it takes ``variable`` = ``value`` into a map.

**Code Example**

	ifstream fileData;
	std::map<string, std::map<string, string>> iniMap;

	fileData.open(filename);
	if (!fileData.is_open())
	{
		return false;
	}

	string line;
	string currentSection;
	while (std::getline(fileData, line))
	{
		line = Trim(line);

		//Ignore Empty Lines
		if (line.empty() || line[0] == ';' || line[0] == '#')
		{
			continue;
		}

		//Section Handler
		if (line.front() == '[' && line.back() == ']')
		{
			currentSection = line.substr(1, line.size() - 2);
		}
		else
		{
			size_t pos = line.find('=');
			if (pos != string::npos)
			{
				string key = Trim(line.substr(0, pos));
				string value = Trim(line.substr(pos + 1));
				(*m_pIniData)[currentSection][key] = value;
			}
		}
	}

	fileData.close();

Data can then be called by calling a section and key via. a string value.

**Code Example** 

    string
    IniParser::GetValueAsString(const string& iniSection, const string& key)
    {
	    auto iteratorSection = m_pIniData->find(iniSection);
	    if (iteratorSection != m_pIniData->end())
	    {
		    auto iteratorKey = iteratorSection->second.find(key);
		    if (iteratorKey != iteratorSection->second.end())
		    {
		    	return iteratorKey->second;
		    }
	    }
    	return "";
    }