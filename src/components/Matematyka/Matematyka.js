import React, { useState } from 'react';
import './Matematyka.css';
import sections from './MapSite';

const Matematyka = () => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [searchText, setSearchText] = useState('');

  const toggleSection = (sectionId) => {
    if (!expandedSections.includes(sectionId)) {
      setExpandedSections([...expandedSections, sectionId]);
    }

    setExpandedSections(expandedSections.filter((id) => id !== sectionId));
  };

  const toggleSubsection = (subsectionId) => {
    if (!expandedSections.includes((subsectionId))) {
      setExpandedSections([...expandedSections, subsectionId]);
    }

    setExpandedSections(expandedSections.filter((id) => id !== subsectionId));
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

  const renderSubsections = (subsections) => {
    return (
      <ul className="subsubsection-list">
        {subsections.map((subsection) => (
          <li key={subsection.id}>
            <button onClick={() => toggleSubsection(subsection.id)}>
              {subsection.name}
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
      <ul className="section-list">
        {filteredSections.map((section) => (
          <li key={section.id}>
            {section.subsubsections ? (
              <button onClick={() => toggleSection(section.id)}>
                {section.name}
                {expandedSections.includes(section.id) ? ' ▼' : ' ►'}
              </button>
            ) : (
              <button onClick={() => console.log(section.data)}>
                {section.name}
              </button>
            )}
            {expandedSections.includes(section.id) && section.subsubsections && (
              <ul className="subsection-list">
                {filterSubsections(section.subsubsections, searchText).map((subsection) => (
                  <li key={subsection.id}>
                    <button onClick={() => toggleSubsection(subsection.id)}>
                      {subsection.name}
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
      <h4><p>Pragne gorąco podziękować Matemaks Michał Budzyński oraz jego dziełu w postaci strony <a href='https://www.matemaks.pl/'>Matemaks.pl</a></p></h4>
      <p>Gdyby nie rozwój tej strony nie powstałaby idea tego projektu. A tym bardziej nie tak szybko...</p>
    </div>
    <div className="matematyka">
      <input
        type="text"
        placeholder="Wyszukaj..."
        value={searchText}
        onChange={handleSearchChange}
      />
      {renderSections(sections)}
    </div>
    </div>
  );
};

export default Matematyka;
