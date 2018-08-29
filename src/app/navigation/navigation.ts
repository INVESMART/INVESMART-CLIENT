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
                    'bg'   : '#FFFFFF',
                    'fg'   : '#0A0000'
                }
            },
            {
                'id'      : 'clients',
                'title'   : 'Clients',
                'translate': 'NAV.CLIENTS',
                'type'    : 'item',
                'icon'    : 'group',
                'url'  : '/clients',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'courses',
                'title': 'Courses',
                'translate': 'NAV.COURSES',
                'type' : 'item',
                'icon' : 'school',
                'url'  : '/courses'
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
                'id'   : 'us',
                'title': 'Us',
                'translate': 'NAV.US',
                'type' : 'item',
                'icon' : 'work',
                'url'  : '/us',
                'badge': {
                    'title': '!',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'messaging',
                'title': 'Messaging',
                'translate': 'NAV.MESSAGING',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/messaging',
                'badge': {
                    'title': '!',
                    'bg'   : '#FFFFFF',
                    'fg'   : '#0A0000'
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
