import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import LiteratureReview from './components/LiteratureReview';

const EMPTY_FILTERS = {
  tool_types: [],
  research_stages: [],
  creative_thinking_types: [],
  wallas_stages: [],
  bodens_types: [],
};

const TABS = [
  { id: 'grid',   label: '📊 Paper Grid' },
  { id: 'review', label: '📖 Literature Review' },
];

function App() {
  const [activeTab, setActiveTab] = useState('grid');
  const [activeFilters, setActiveFilters] = useState(EMPTY_FILTERS);

  // Called from LiteratureReview "View in Grid →" buttons
  function filterAndSwitch(preset) {
    setActiveFilters({ ...EMPTY_FILTERS, ...preset });
    setActiveTab('grid');
  }

  return (
    <div className="app-container">
      {/* Tab bar — sticky so it stays visible while scrolling */}
      <nav id="app-nav-bar" style={{
        display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '1.75rem',
        borderBottom: '2px solid #e2e8f0', paddingBottom: '0',
        position: 'sticky',
        top: 0,
        zIndex: 600,
        background: '#f8fafc',
        /* pull it flush to container edges so the bg covers full width */
        marginLeft: 'calc(-1 * var(--app-px, 2rem))',
        marginRight: 'calc(-1 * var(--app-px, 2rem))',
        paddingLeft: 'var(--app-px, 2rem)',
        paddingRight: 'var(--app-px, 2rem)',
        marginTop: 'calc(-1 * var(--app-py, 2rem))',
        paddingTop: 'var(--app-py, 2rem)',
      }}>
        {TABS.map(tab => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none', border: 'none',
                padding: 'clamp(0.4rem, 1.5vw, 0.55rem) clamp(0.6rem, 2.5vw, 1.2rem)',
                fontSize: 'clamp(0.8rem, 2.2vw, 0.92rem)',
                fontWeight: active ? 700 : 500,
                color: active ? '#0f172a' : '#64748b',
                cursor: 'pointer',
                borderBottom: `2px solid ${active ? '#2563eb' : 'transparent'}`,
                marginBottom: '-2px',
                transition: 'color 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {activeTab === 'grid' ? (
        <Dashboard
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      ) : (
        <LiteratureReview onFilterAndSwitch={filterAndSwitch} />
      )}
    </div>
  );
}

export default App;
