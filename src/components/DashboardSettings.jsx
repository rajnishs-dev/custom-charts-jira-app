import React, { useState } from 'react';
import SettingsTabBar from './SettingsTabBar'; // Import the reusable header
import { 
    SettingContent, 
    DescriptionsContent, 
    ImportExportContent, 
    PlaceholderContent 
} from './ContentComponents'; // Import the content components

// --- Title Mapping Function ---
const getTabTitle = (tabId) => {
    switch (tabId) {
        case 'settings':
            return 'Setting';
        case 'descriptions':
            return 'Descriptions';
        case 'import_export':
            return 'Import/Export';
        case 'monitor':
            return 'Monitor View';
        case 'chat':
            return 'Chat Settings';
        case 'help':
            return 'Help';
        case 'date':
            return 'Date Range';
        default:
            return 'Default dashboard'; // Fallback title
    }
};
// ------------------------------

const DashboardSettings = () => {
    // State to track the active tab, defaulting to 'settings'
    const [activeTab, setActiveTab] = useState('settings');
    
    // DERIVE the title dynamically based on the activeTab state
    const currentTitle = getTabTitle(activeTab);

    const renderContent = () => {
        switch (activeTab) {
            case 'settings':
                return <SettingContent />;
            case 'descriptions':
                return <DescriptionsContent />;
            case 'import_export':
                return <ImportExportContent />;
            // Use placeholders for the other icons in the tab bar
            case 'monitor':
            case 'chat':
            case 'help':
            case 'date':
            default:
                return <PlaceholderContent tabName={activeTab} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 my-4 lg:my-6">
            
            {/* Pass the dynamically derived title */}
            <SettingsTabBar 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
                title={currentTitle} 
            />
            
            {/* 2. Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {renderContent()}
            </div>
        </div>
    );
};

export default DashboardSettings;