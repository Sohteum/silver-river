import React, { useState } from 'react';
import ReactDom from "react-dom";

import "./style.css";

const [] = useState

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
]

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex]
  }
}

const App = () => {

  const tabs = useTabs(0, content);

  return (
    <div className='App'>
      {content.map(section => (
        <button>{section.tab}</button>
      ))}
    </div>
  );
};

export default App;
