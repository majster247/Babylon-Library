import React, { useState, useEffect } from 'react';
import './Matematyka.css';
import sections from './MapSite';
const puppeteer = require('puppeteer');

const Strona = ({ section }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (section.site) {
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto(section.site);
          
          // Poczekaj na załadowanie treści, można dostosować czas oczekiwania w zależności od potrzeb
          await page.waitForTimeout(3000);
          
          const extractedContent = await page.evaluate(() => document.querySelector('.middle').innerHTML);
          
          setContent(extractedContent);
          
          await browser.close();
        }
      } catch (error) {
        console.error('Błąd podczas pobierania strony:', error);
      }
    };

    if (section.site) {
      fetchData();
    }
  }, [section.site]);

  return (
    <div className="content">
      <h2>{section.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

const Matematyka = () => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showMenu, setShowMenu] = useState(true);

  const toggleSection = (sectionId) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter((id) => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

  const toggleSubsection = (subsectionId) => {
    if (expandedSections.includes(subsectionId)) {
      setExpandedSections(expandedSections.filter((id) => id !== subsectionId));
    } else {
      setExpandedSections([...expandedSections, subsectionId]);
    }
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    autoExpandResults(event.target.value);
  };

  const autoExpandResults = (searchText) => {
    const matchingSections = filterSections(sections, searchText);
    const matchingSubsections = filterSubsections(getAllSubsections(sections), searchText);

    const allMatchingIds = [...matchingSections.map((section) => section.id), ...matchingSubsections.map((subsection) => subsection.id)];
    setExpandedSections(allMatchingIds);
  };

  const filterSections = (sections, searchText) => {
    return sections.filter((section) => {
      const match = section.name.toLowerCase().includes(searchText.toLowerCase());
      const hasMatchingSubsections = section.subsubsections
        ? filterSubsections(section.subsubsections, searchText).length > 0
        : false;
      return match || hasMatchingSubsections;
    });
  };

  const filterSubsections = (subsections, searchText) => {
    return subsections.filter((subsection) =>
      subsection.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const getAllSubsections = (sections) => {
    let allSubsections = [];

    sections.forEach((section) => {
      if (section.subsubsections) {
        allSubsections = [...allSubsections, ...section.subsubsections];
      }
    });

    return allSubsections;
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderSubsections = (subsections) => {
    return (
      <ul className="subsubsection-list">
        {subsections.map((subsection) => (
          <li key={subsection.id}>
            <button onClick={() => toggleSubsection(subsection.id)}>
              {subsection.subsubsections ? (
                <span>{subsection.name}</span>
              ) : (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a href="#"
                   onClick={(e) => {
                     e.preventDefault();
                     toggleMenu();
                     toggleSection(subsection.id);
                   }}>
                  {subsection.name}
                </a>
              )}
              {subsection.subsubsections && (expandedSections.includes(subsection.id) ? ' ▼' : ' ►')}
            </button>
            {expandedSections.includes(subsection.id) && subsection.subsubsections && (
              renderSubsections(subsection.subsubsections)
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderSections = (sections) => {
    const filteredSections = filterSections(sections, searchText);

    return (
      <div>
        <ul className="section-list" style={{ display: showMenu ? 'block' : 'none' }}>
          {filteredSections.map((section) => (
            <li key={section.id}>
              {section.subsubsections ? (
                <button onClick={() => toggleSection(section.id)}>
                  {section.name}
                  {expandedSections.includes(section.id) ? ' ▼' : ' ►'}
                </button>
              ) : (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a href="#"
                   onClick={(e) => {
                     e.preventDefault();
                     toggleMenu();
                     console.log(section.data);
                   }}>
                  {section.name}
                </a>
              )}
              {expandedSections.includes(section.id) && section.subsubsections && (
                <ul className="subsection-list">
                  {filterSubsections(section.subsubsections, searchText).map((subsection) => (
                    <li key={subsection.id}>
                      <button onClick={() => toggleSubsection(subsection.id)}>
                        {subsection.subsubsections ? (
                          <span>{subsection.name}</span>
                        ) : (
                          // eslint-disable-next-line jsx-a11y/anchor-is-valid
                          <a href="#"
                             onClick={(e) => {
                               e.preventDefault();
                               toggleMenu();
                               toggleSection(subsection.id);
                             }}>
                            {subsection.name}
                          </a>
                        )}
                        {subsection.subsubsections && (expandedSections.includes(subsection.id) ? ' ▼' : ' ►')}
                      </button>
                      {expandedSections.includes(subsection.id) && subsection.subsubsections && (
                        renderSubsections(subsection.subsubsections)
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div className='MainPage'>
        <h1>Matematyka</h1>
        <h4>
          <p>Pragnę gorąco podziękować Matemaks Michał Budzyński oraz jego dziełu w postaci strony <a href='https://www.matemaks.pl/'>Matemaks.pl</a></p>
        </h4>
        <p>Gdyby nie rozwój tej strony nie powstałaby idea tego projektu. A tym bardziej nie tak szybko...</p>
      </div>
      <div className="matematyka">
        <input
          type="text"
          placeholder="Wyszukaj..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <button onClick={toggleMenu}>Toggle Menu</button>
        {renderSections(sections)}
      </div>
      
    </div>
  );
};

export default Matematyka;
