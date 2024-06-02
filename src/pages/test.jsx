import React, { useState } from 'react';

function Solution({ menuConfig }) {
  const [expandedButton, setExpandedButton] = useState(null);

  return (
    <div className="menu-wrapper">
      <div>
        {menuConfig.map((item, index) => (
          <div data-test-id={`first-level-${menuConfig[index].title.toLowerCase()}`}>
            <h2>{item.title}</h2>
            {item.subItems && (
              <ul>
                <button data-test-id={`button-${menuConfig[index].title.toLowerCase()}`} onClick={() => setExpandedButton(item.title)}>
                  {expandedButton === item.title ? 'Hide' : 'Expand'}
                </button>
                {expandedButton === item.title && (
                  <ul data-test-id={`ul-${menuConfig[index].title.toLowerCase()}`}>
                    {item.subItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
