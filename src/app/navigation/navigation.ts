export const navigation = [
    {
        'id'      : 'menu',
        'title'   : 'Menu',
        'translate': 'NAV.MENU',
        'type'    : 'group',
        'children': [
            {
                'id'   : 'home',
                'title': 'Home',
                'translate': 'NAV.HOME',
                'type' : 'item',
                'icon' : 'home',
                'url'  : '/home',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'      : 'dashboards',
                'title'   : 'Portfolio',
                'translate': 'NAV.PORTFOLIO',
                'type'    : 'collapse',
                'icon'    : 'work',
                'children': [
                    {
                        'id'   : 'project',
                        'title': 'Project',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/project'
                    }
                ]
            },
            {
                'id'   : 'scrumboard',
                'title': 'Scrumboard',
                'translate': 'NAV.SCRUMBOARD',
                'type' : 'item',
                'icon' : 'assessment',
                'url'  : '/scrumboard'
            },
            {
                'id'   : 'calendar',
                'title': 'Calendar',
                'translate': 'NAV.CALENDAR',
                'type' : 'item',
                'icon' : 'today',
                'url'  : '/calendar',
                'badge': {
                    'title': '!',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'      : 'tools',
                'title'   : 'Tools',
                'translate': 'NAV.TOOLS',
                'type'    : 'collapse',
                'icon'    : 'settings',
                'children': [
                    {
                        'id'   : 'newIndicator',
                        'title': 'New indicator',
                        'translate': 'NAV.NEW_INDICATOR',
                        'type' : 'item',
                        'url'  : '/apps/indicators/new'
                    },
                    {
                        'id'   : 'editIndicator',
                        'title': 'Edit indicator',
                        'translate': 'NAV.EDIT_INDICATOR',
                        'type' : 'item',
                        'url'  : '/apps/indicators/edit'
                    },
                    {
                        'id'   : 'newProject',
                        'title': 'New Project',
                        'translate': 'NAV.NEW_PROJECT',
                        'type' : 'item',
                        'url'  : '/apps/projects/new'
                    },
                    {
                        'id'   : 'importProject',
                        'title': 'Import Project',
                        'translate': 'NAV.IMPORT_PROJECT',
                        'type' : 'item',
                        'url'  : '/apps/projects/import'
                    }
                ]
            }
        ]
    }
];
